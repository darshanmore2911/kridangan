import asyncio
from contextlib import asynccontextmanager
from fastapi import FastAPI, APIRouter
from dotenv import load_dotenv
from starlette.middleware.cors import CORSMiddleware
import os
import logging
from pathlib import Path
from pydantic import BaseModel, Field
from typing import AsyncIterator, Dict, List
import uuid
from datetime import datetime


ROOT_DIR = Path(__file__).parent
env_path = ROOT_DIR / '.env'

# Load environment variables if .env file exists
if env_path.exists():
    load_dotenv(env_path)

# MongoDB connection
from lib.db import client, db, ensure_indexes


# Startup runs before the yield, shutdown after it. Add your own setup/teardown here.
@asynccontextmanager
async def lifespan(app: FastAPI) -> AsyncIterator[None]:
    # Only create background task if not in serverless environment
    if not os.environ.get("VERCEL"):
        app.state.index_task = asyncio.create_task(ensure_indexes())
    else:
        # In serverless, run indexes synchronously
        await ensure_indexes()
    yield
    # Close client connections
    if hasattr(app.state, 'index_task'):
        app.state.index_task.cancel()
    client.close()


# Create the main app without a prefix
app = FastAPI(
    title="Farm-TS API",
    description="FastAPI + MongoDB backend for farm-ts application",
    version="1.0.0",
    lifespan=lifespan
)

# Create a router with the /api prefix
api_router = APIRouter(prefix="/api")


# Define Models
class StatusCheck(BaseModel):
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    client_name: str
    timestamp: datetime = Field(default_factory=datetime.utcnow)

class StatusCheckCreate(BaseModel):
    client_name: str

# Add your routes to the router instead of directly to app
@api_router.get("/")
async def root() -> Dict[str, str]:
    return {"message": "Hello World", "status": "ok"}

@api_router.post("/status", response_model=StatusCheck)
async def create_status_check(input: StatusCheckCreate) -> StatusCheck:
    status_dict = input.model_dump()
    status_obj = StatusCheck(**status_dict)
    _ = await db.status_checks.insert_one(status_obj.model_dump())
    return status_obj

@api_router.get("/status", response_model=List[StatusCheck])
async def get_status_checks() -> List[StatusCheck]:
    status_checks = await db.status_checks.find().to_list(1000)
    return [StatusCheck(**status_check) for status_check in status_checks]

# Health check endpoint
@api_router.get("/health")
async def health_check() -> Dict[str, str]:
    return {"status": "healthy", "service": "farm-ts-backend"}

# Include the router in the main app
app.include_router(api_router)

# Configure CORS with environment-based origins
cors_origins = os.environ.get('CORS_ORIGINS', '*')
if cors_origins != '*':
    cors_origins = cors_origins.split(',')
else:
    cors_origins = ["*"]

app.add_middleware(
    CORSMiddleware,
    allow_credentials=True,
    allow_origins=cors_origins,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Configure logging
log_level = os.environ.get('LOG_LEVEL', 'INFO').upper()
logging.basicConfig(
    level=getattr(logging, log_level),
    format='%(asctime)s - %(name)s - %(levelname)s - %(message)s'
)
logger = logging.getLogger(__name__)

# Log startup info
logger.info(f"Starting Farm-TS API with CORS origins: {cors_origins}")
logger.info(f"MongoDB connection: {os.environ.get('MONGO_URL', 'Not configured')}")
