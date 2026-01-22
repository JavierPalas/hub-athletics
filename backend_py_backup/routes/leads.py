from fastapi import APIRouter, HTTPException, status
from models.lead import LeadCreate, Lead
from typing import List
import logging

logger = logging.getLogger(__name__)

router = APIRouter(prefix="/leads", tags=["leads"])


def get_db():
    """Dependency to get database connection"""
    from server import db
    return db


@router.post("", response_model=dict, status_code=status.HTTP_201_CREATED)
async def create_lead(lead_data: LeadCreate):
    """
    Create a new lead from the contact form
    """
    try:
        db = get_db()
        leads_collection = db.leads
        
        # Check if email already exists (optional - prevent duplicates)
        existing_lead = await leads_collection.find_one({"email": lead_data.email})
        if existing_lead:
            logger.warning(f"Duplicate lead attempt: {lead_data.email}")
            # Still return success to avoid revealing if email exists
            return {
                "success": True,
                "message": "Gracias por tu interés. Nos pondremos en contacto contigo pronto.",
                "data": None
            }

        # Create lead object
        lead = Lead(
            name=lead_data.name,
            email=lead_data.email
        )

        # Convert to dict for MongoDB
        lead_dict = lead.model_dump()
        
        # Insert into database
        result = await leads_collection.insert_one(lead_dict)
        
        if not result.inserted_id:
            raise HTTPException(
                status_code=status.HTTP_500_INTERNAL_SERVER_ERROR,
                detail="Error al guardar el lead"
            )

        logger.info(f"New lead created: {lead.email}")

        return {
            "success": True,
            "message": "¡Bienvenido al HUB! Nos pondremos en contacto contigo pronto.",
            "data": {
                "id": lead.id,
                "name": lead.name,
                "email": lead.email,
                "created_at": lead.created_at.isoformat()
            }
        }

    except ValueError as e:
        logger.error(f"Validation error: {str(e)}")
        raise HTTPException(
            status_code=status.HTTP_400_BAD_REQUEST,
            detail=str(e)
        )
    except Exception as e:
        logger.error(f"Error creating lead: {str(e)}")
        raise HTTPException(
            status_code=status.HTTP_500_INTERNAL_SERVER_ERROR,
            detail="Error al procesar tu solicitud. Por favor intenta nuevamente."
        )


@router.get("", response_model=List[dict])
async def get_leads():
    """
    Get all leads (admin endpoint)
    """
    try:
        db = get_db()
        leads_collection = db.leads
        
        # Optimized query with projection to fetch only required fields
        projection = {"_id": 0, "id": 1, "name": 1, "email": 1, "source": 1, "created_at": 1}
        leads = await leads_collection.find({}, projection).sort("created_at", -1).to_list(1000)
        
        # Format response
        formatted_leads = []
        for lead in leads:
            formatted_leads.append({
                "id": lead.get("id"),
                "name": lead.get("name"),
                "email": lead.get("email"),
                "source": lead.get("source", "web_form"),
                "created_at": lead.get("created_at")
            })
        
        return formatted_leads

    except Exception as e:
        logger.error(f"Error fetching leads: {str(e)}")
        raise HTTPException(
            status_code=status.HTTP_500_INTERNAL_SERVER_ERROR,
            detail="Error al obtener los leads"
        )
