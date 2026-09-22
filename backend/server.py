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


# Startup runs before the yield, shutdown after it. Add your own setup/teardown here.
@asynccontextmanager
async def lifespan(app: FastAPI) -> AsyncIterator[None]:
    # Simple startup - no database needed
    yield


# Create the main app without a prefix
app = FastAPI(
    title="Farm-TS API",
    description="FastAPI + MongoDB backend for farm-ts application",
    version="1.0.0",
    lifespan=lifespan
)

api_router = APIRouter(prefix="/api")

# Add your routes to the router instead of directly to app
@api_router.get("/")
async def root() -> Dict[str, str]:
    return {"message": "Hello World", "status": "ok"}

# Health check endpoint
@api_router.get("/health")
async def health_check() -> Dict[str, str]:
    return {"status": "healthy", "service": "farm-ts-backend"}

# Simple info endpoint
@api_router.get("/info")
async def get_info() -> Dict[str, str]:
    return {
        "app": "Farm-TS API",
        "version": "1.0.0", 
        "description": "FastAPI backend for farm-ts application"
    }

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
logger.info("Farm-TS API ready - no database required")
