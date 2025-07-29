import React from 'react';
import { Link } from 'react-router-dom';
import { Clock, User } from 'lucide-react';
import { BlogPost } from '../types/blog';

interface BlogCardProps {
  post: BlogPost;
  featured?: boolean;
}

const BlogCard: React.FC<BlogCardProps> = ({ post, featured = false }) => {
  return (
    <article className={`bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300 overflow-hidden ${
      featured ? 'md:flex' : ''
    }`}>
      <div className={`relative ${featured ? 'md:w-1/2' : ''}`}>
        <img
          src={post.image}
          alt={post.title}
          className={`w-full object-cover ${featured ? 'h-64 md:h-full' : 'h-48'}`}
        />
        <div className="absolute top-4 left-4">
          <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-white/90 text-pink-600">
            {post.category}
          </span>
        </div>
      </div>
      
      <div className={`p-6 ${featured ? 'md:w-1/2 md:flex md:flex-col md:justify-center' : ''}`}>
        <div className="flex items-center text-sm text-gray-500 mb-3">
          <User className="w-4 h-4 mr-1" />
          <span className="mr-4">{post.author}</span>
          <Clock className="w-4 h-4 mr-1" />
          <span>{post.readTime} min read</span>
        </div>
        
        <h2 className={`font-serif text-gray-800 mb-3 hover:text-pink-600 transition-colors duration-200 ${
          featured ? 'text-2xl' : 'text-xl'
        }`}>
          <Link to={`/blog/${post.slug}`}>
            {post.title}
          </Link>
        </h2>
        
        <p className="text-gray-600 mb-4 line-clamp-3">
          {post.excerpt}
        </p>
        
        <div className="flex items-center justify-between">
          <div className="flex flex-wrap gap-1">
            {post.tags.slice(0, 2).map((tag, index) => (
              <span
                key={index}
                className="text-xs text-pink-600 bg-pink-50 px-2 py-1 rounded"
              >
                #{tag}
              </span>
            ))}
          </div>
          <Link
            to={`/blog/${post.slug}`}
            className="text-pink-600 text-sm font-medium hover:text-pink-700 transition-colors duration-200"
          >
            Read More →
          </Link>
        </div>
      </div>
    </article>
  );
};

export default BlogCard;