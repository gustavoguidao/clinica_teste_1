import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { PremiumHeader } from '../components/PremiumHeader';
import { PremiumFooter } from '../components/PremiumFooter';
import axios from 'axios';

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;

export const BlogPageLive = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await axios.get(`${BACKEND_URL}/api/blog/posts`);
        if (response.data.success) {
          setPosts(response.data.data);
        }
      } catch (err) {
        console.error('Error fetching posts:', err);
        setError('Não foi possível carregar os posts');
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen">
        <PremiumHeader />
        <div className="pt-32 pb-20 px-4">
          <div className="max-w-7xl mx-auto text-center">
            <p className="text-xl text-gray-600">Carregando posts...</p>
          </div>
        </div>
        <PremiumFooter />
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen">
        <PremiumHeader />
        <div className="pt-32 pb-20 px-4">
          <div className="max-w-7xl mx-auto text-center">
            <p className="text-xl text-red-600">{error}</p>
          </div>
        </div>
        <PremiumFooter />
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <PremiumHeader />
      <div className="pt-32 pb-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h1 className="font-serif text-5xl font-bold text-gray-800 mb-8 text-center">Blog</h1>
          <p className="text-xl text-gray-600 text-center mb-16">
            Articles about mental health and wellness
          </p>

          {posts.length === 0 ? (
            <div className="text-center">
              <p className="text-gray-600">No posts published yet.</p>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {posts.map((post) => (
                <Link
                  key={post.id}
                  to={`/blog/${post.slug}`}
                  className="block bg-white rounded-3xl overflow-hidden shadow-soft hover:shadow-soft-lg transition-all group"
                >
                  {post.image && (
                    <img 
                      src={post.image} 
                      alt={post.title} 
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  )}
                  <div className="p-6">
                    <span className="text-sm text-rose-500 font-medium">{post.category}</span>
                    <h3 className="font-serif text-2xl font-bold text-gray-800 mt-2 mb-3 group-hover:text-rose-500 transition-colors">
                      {post.title}
                    </h3>
                    <p className="text-gray-600 mb-4 line-clamp-2">{post.excerpt}</p>
                    <div className="flex items-center justify-between text-sm text-gray-500">
                      <span>{new Date(post.date).toLocaleDateString('en-US')}</span>
                      <span>{post.readTime} read</span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>
      </div>
      <PremiumFooter />
    </div>
  );
};
