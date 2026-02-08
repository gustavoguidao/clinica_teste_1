from pydantic import BaseModel, Field
from typing import Optional, List
from datetime import datetime

class BlogPostCreate(BaseModel):
    title: str = Field(..., min_length=3, max_length=200)
    slug: str = Field(..., min_length=3, max_length=200)
    excerpt: str = Field(..., max_length=500)
    content: str = Field(..., min_length=10)
    category: str
    image: Optional[str] = None
    author: str = "Dra. Sofia Almeida"
    
class BlogPostUpdate(BaseModel):
    title: Optional[str] = None
    excerpt: Optional[str] = None
    content: Optional[str] = None
    category: Optional[str] = None
    image: Optional[str] = None
    published: Optional[bool] = None

class BlogPost(BaseModel):
    id: str
    title: str
    slug: str
    excerpt: str
    content: str
    category: str
    image: Optional[str] = None
    author: str
    date: str
    published: bool = True
    readTime: str = "5 min"
    created_at: datetime = Field(default_factory=datetime.utcnow)
    updated_at: datetime = Field(default_factory=datetime.utcnow)

class BlogPostResponse(BaseModel):
    success: bool
    data: Optional[BlogPost] = None
    message: str = ""

class BlogPostListResponse(BaseModel):
    success: bool
    data: List[BlogPost] = []
    total: int = 0
    message: str = ""

class ContactMessage(BaseModel):
    name: str = Field(..., min_length=2, max_length=100)
    email: str = Field(..., min_length=5, max_length=100)
    phone: Optional[str] = None
    message: str = Field(..., min_length=10, max_length=1000)
    created_at: datetime = Field(default_factory=datetime.utcnow)

class ContactResponse(BaseModel):
    success: bool
    message: str = ""
