from fastapi import APIRouter, HTTPException, status
from models import BlogPostCreate, BlogPostUpdate, BlogPost, BlogPostResponse, BlogPostListResponse, ContactMessage, ContactResponse
from motor.motor_asyncio import AsyncIOMotorClient
import os
from datetime import datetime
import uuid

router = APIRouter(prefix="/api", tags=["psychology"])

# MongoDB connection
mongo_url = os.environ.get('MONGO_URL')
client = AsyncIOMotorClient(mongo_url)
db = client[os.environ.get('DB_NAME', 'psychology_db')]

# Blog Posts Collection
blog_posts_collection = db['blog_posts']
contact_messages_collection = db['contact_messages']

@router.get("/blog/posts", response_model=BlogPostListResponse)
async def get_all_blog_posts(published: bool = True, skip: int = 0, limit: int = 20):
    """Get all published blog posts"""
    try:
        query = {"published": published} if published else {}
        cursor = blog_posts_collection.find(query).sort("created_at", -1).skip(skip).limit(limit)
        posts = await cursor.to_list(length=limit)
        
        total = await blog_posts_collection.count_documents(query)
        
        return BlogPostListResponse(
            success=True,
            data=[BlogPost(**{**post, "id": str(post["_id"])}) for post in posts],
            total=total
        )
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

@router.get("/blog/posts/{slug}", response_model=BlogPostResponse)
async def get_blog_post_by_slug(slug: str):
    """Get a single blog post by slug"""
    try:
        post = await blog_posts_collection.find_one({"slug": slug})
        if not post:
            raise HTTPException(status_code=404, detail="Blog post not found")
        
        return BlogPostResponse(
            success=True,
            data=BlogPost(**{**post, "id": str(post["_id"])})
        )
    except HTTPException:
        raise
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

@router.post("/blog/posts", response_model=BlogPostResponse, status_code=status.HTTP_201_CREATED)
async def create_blog_post(post: BlogPostCreate):
    """Create a new blog post (Admin only - TODO: Add authentication)"""
    try:
        # Check if slug already exists
        existing = await blog_posts_collection.find_one({"slug": post.slug})
        if existing:
            raise HTTPException(status_code=400, detail="A post with this slug already exists")
        
        post_dict = post.dict()
        post_dict["id"] = str(uuid.uuid4())
        post_dict["date"] = datetime.utcnow().strftime("%Y-%m-%d")
        post_dict["published"] = True
        post_dict["created_at"] = datetime.utcnow()
        post_dict["updated_at"] = datetime.utcnow()
        
        # Calculate read time (simple: ~200 words per minute)
        word_count = len(post_dict["content"].split())
        read_minutes = max(1, round(word_count / 200))
        post_dict["readTime"] = f"{read_minutes} min"
        
        result = await blog_posts_collection.insert_one(post_dict)
        post_dict["id"] = str(result.inserted_id)
        
        return BlogPostResponse(
            success=True,
            data=BlogPost(**post_dict),
            message="Blog post created successfully"
        )
    except HTTPException:
        raise
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

@router.put("/blog/posts/{post_id}", response_model=BlogPostResponse)
async def update_blog_post(post_id: str, post_update: BlogPostUpdate):
    """Update a blog post (Admin only - TODO: Add authentication)"""
    try:
        update_data = {k: v for k, v in post_update.dict().items() if v is not None}
        if not update_data:
            raise HTTPException(status_code=400, detail="No fields to update")
        
        update_data["updated_at"] = datetime.utcnow()
        
        # Recalculate read time if content is updated
        if "content" in update_data:
            word_count = len(update_data["content"].split())
            read_minutes = max(1, round(word_count / 200))
            update_data["readTime"] = f"{read_minutes} min"
        
        result = await blog_posts_collection.find_one_and_update(
            {"id": post_id},
            {"$set": update_data},
            return_document=True
        )
        
        if not result:
            raise HTTPException(status_code=404, detail="Blog post not found")
        
        return BlogPostResponse(
            success=True,
            data=BlogPost(**{**result, "id": str(result["_id"])}),
            message="Blog post updated successfully"
        )
    except HTTPException:
        raise
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

@router.delete("/blog/posts/{post_id}", response_model=BlogPostResponse)
async def delete_blog_post(post_id: str):
    """Delete a blog post (Admin only - TODO: Add authentication)"""
    try:
        result = await blog_posts_collection.find_one_and_delete({"id": post_id})
        if not result:
            raise HTTPException(status_code=404, detail="Blog post not found")
        
        return BlogPostResponse(
            success=True,
            message="Blog post deleted successfully"
        )
    except HTTPException:
        raise
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

@router.post("/contact", response_model=ContactResponse, status_code=status.HTTP_201_CREATED)
async def submit_contact_message(message: ContactMessage):
    """Submit a contact message"""
    try:
        message_dict = message.dict()
        message_dict["id"] = str(uuid.uuid4())
        message_dict["created_at"] = datetime.utcnow()
        message_dict["read"] = False
        
        await contact_messages_collection.insert_one(message_dict)
        
        # TODO: Send email notification to psychologist
        
        return ContactResponse(
            success=True,
            message="Mensagem enviada com sucesso! Entraremos em contato em breve."
        )
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

@router.get("/contact/messages")
async def get_contact_messages(skip: int = 0, limit: int = 50):
    """Get all contact messages (Admin only - TODO: Add authentication)"""
    try:
        cursor = contact_messages_collection.find().sort("created_at", -1).skip(skip).limit(limit)
        messages = await cursor.to_list(length=limit)
        
        total = await contact_messages_collection.count_documents({})
        
        return {
            "success": True,
            "data": [{**msg, "id": str(msg["_id"])} for msg in messages],
            "total": total
        }
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))
