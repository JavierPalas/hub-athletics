from pydantic import BaseModel, Field, EmailStr, field_validator
from typing import Optional
from datetime import datetime
import uuid


class LeadCreate(BaseModel):
    """Schema for creating a new lead"""
    name: str = Field(..., min_length=2, max_length=100)
    email: EmailStr

    @field_validator('name')
    @classmethod
    def validate_name(cls, v):
        if not v or not v.strip():
            raise ValueError('Nombre no puede estar vacío')
        return v.strip()


class Lead(BaseModel):
    """Complete lead model"""
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    name: str
    email: str
    source: str = "web_form"
    created_at: datetime = Field(default_factory=datetime.utcnow)

    class Config:
        json_schema_extra = {
            "example": {
                "id": "123e4567-e89b-12d3-a456-426614174000",
                "name": "Carlos Méndez",
                "email": "carlos@example.com",
                "source": "web_form",
                "created_at": "2025-12-25T16:00:00Z"
            }
        }
