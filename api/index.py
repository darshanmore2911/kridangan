import sys
import os
from pathlib import Path

# Add the backend directory to Python path
backend_dir = Path(__file__).parent.parent / "backend"
sys.path.insert(0, str(backend_dir))

# Set environment variables for production if not already set
if not os.environ.get("CORS_ORIGINS"):
    os.environ.setdefault("CORS_ORIGINS", "*")

# Set Vercel environment indicator
os.environ["VERCEL"] = "1"

# Import the FastAPI app from backend
from server import app

# Export the app for Vercel
app = app