import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Clock, User, Share2, Facebook, Twitter, MessageCircle, ChevronRight } from 'lucide-react';
import AdBanner from '../components/Layout/AdBanner';
import MetaTags from '../components/SEO/MetaTags';
import BlogCard from '../components/BlogCard';
import { loadBlogBySlug, loadAllBlogs } from '../utils/loadBlogs';

const BlogPost: React.FC = () => {
  const { slug } = useParams();
    const post = loadBlogBySlug(slug || '');

  if (!post) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-serif text-gray-800 mb-4">Post not found</h1>
          <Link to="/blogs" className="text-pink-600 hover:text-pink-700">
            ← Back to blogs
          </Link>
        </div>
      </div>
    );
  }

  const shareUrl = `https://nuraskin.shop/blog/${post.slug}`;

  const shareLinks = {
    facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`,
    twitter: `https://twitter.com/intent/tweet?url=${encodeURIComponent(shareUrl)}&text=${encodeURIComponent(post.title)}`,
    pinterest: `https://pinterest.com/pin/create/button/?url=${encodeURIComponent(shareUrl)}&media=${encodeURIComponent(post.image)}&description=${encodeURIComponent(post.title + ' - ' + post.excerpt)}`,
  };

  // JSON-LD Schema for SEO
  const jsonLdSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": post.title,
    "description": post.metaDescription || post.excerpt,
    "image": post.image,
    "datePublished": post.publishedAt,
    "dateModified": post.publishedAt,
    "author": {
      "@type": "Person",
      "name": post.author
    },
    "publisher": {
      "@type": "Organization",
      "name": "NuraSkin.shop",
      "logo": {
        "@type": "ImageObject",
        "url": "https://nuraskin.shop/logo.png"
      }
    },
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": shareUrl
    }
  };

  return (
    <>
      <MetaTags
        title={post.title}
        description={post.metaDescription}
        image={post.image}
        url={shareUrl}
        type="article"
        keywords={post.tags.join(', ')}
      />

      {/* JSON-LD Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdSchema) }}
      />

      <div className="min-h-screen bg-white">
        {/* Top Ad Banner */}
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
          <AdBanner size="medium" position="top" />
        </div>

        <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {/* Back Button */}
          <Link
            to="/blogs"
            className="inline-flex items-center text-pink-600 hover:text-pink-700 mb-8"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to blogs
          </Link>

          {/* Header */}
          <header className="mb-8">
            <div className="mb-4">
              <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-pink-100 text-pink-800">
                {post.category}
              </span>
            </div>
            
            <h1 className="text-4xl md:text-5xl font-serif text-gray-800 mb-6">
              {post.title}
            </h1>
            
            <div className="flex items-center text-gray-600 mb-6">
              <User className="w-5 h-5 mr-2" />
              <span className="mr-6">{post.author}</span>
              <Clock className="w-5 h-5 mr-2" />
              <span className="mr-6">{post.readTime} min read</span>
              <span>{new Date(post.publishedAt).toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric'
              })}</span>
            </div>

            {/* Social Sharing */}
            <div className="flex items-center space-x-4 mb-8">
              <span className="text-gray-600 text-sm flex items-center">
                <Share2 className="w-4 h-4 mr-1" />
                Share:
              </span>
              <div className="flex space-x-2">
                <a
                  href={shareLinks.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors duration-200"
                  aria-label="Share on Facebook"
                >
                  <Facebook className="w-4 h-4" />
                </a>
                <a
                  href={shareLinks.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 bg-blue-400 text-white rounded-full flex items-center justify-center hover:bg-blue-500 transition-colors duration-200"
                  aria-label="Share on Twitter"
                >
                  <Twitter className="w-4 h-4" />
                </a>
                <a
                  href={shareLinks.pinterest}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 bg-red-600 text-white rounded-full flex items-center justify-center hover:bg-red-700 transition-colors duration-200"
                  aria-label="Share on Pinterest"
                >
                  <MessageCircle className="w-4 h-4" />
                </a>
              </div>
            </div>
          </header>

          {/* Featured Image */}
          <div className="mb-8">
            <img
              src={post.image}
              alt={post.title}
              className="w-full h-64 md:h-96 object-cover rounded-xl"
            />
          </div>

          {/* Content */}
          <div className="prose prose-lg max-w-none prose-headings:font-serif prose-headings:text-gray-800 prose-p:text-gray-700 prose-p:leading-relaxed prose-a:text-pink-600 prose-a:no-underline hover:prose-a:underline prose-strong:text-gray-800 prose-ul:text-gray-700 prose-ol:text-gray-700">
            <div
              dangerouslySetInnerHTML={{ __html: post.content }}
            />
          </div>

          {/* Middle Ad Banner */}
          <div className="my-12">
            <AdBanner size="large" position="middle" />
          </div>

          {/* Tags */}
          <div className="mt-12 pt-8 border-t border-pink-100">
            <div className="flex flex-wrap gap-2 mb-6">
              {post.tags.map((tag, index) => (
                <span
                  key={index}
                  className="text-sm text-pink-600 bg-pink-50 px-3 py-1 rounded-full"
                >
                  #{tag}
                </span>
              ))}
            </div>

            {/* Author Bio */}
            <div className="bg-pink-50 rounded-xl p-6">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-pink-200 rounded-full flex items-center justify-center mr-4">
                  <User className="w-6 h-6 text-pink-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800">{post.author}</h3>
                  <p className="text-gray-600 text-sm">Skincare Expert & Beauty Writer</p>
                </div>
              </div>
              <p className="text-gray-700">
                Passionate about helping others achieve their best skin through evidence-based 
                skincare advice and natural beauty solutions.
              </p>
            </div>
          </div>

          {/* Related Posts */}
          <div className="mt-16 pt-8 border-t border-pink-100">
            <div className="flex items-center justify-between mb-8">
              <h3 className="text-2xl font-serif text-gray-800">Read Next</h3>
              <Link
                to="/blogs"
                className="text-pink-600 hover:text-pink-700 font-medium flex items-center text-sm"
              >
                View All Posts
                <ChevronRight className="ml-1 w-4 h-4" />
              </Link>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {loadAllBlogs()
                .filter(p => p.id !== post.id && p.category === post.category)
                .slice(0, 3)
                .map(relatedPost => (
                  <BlogCard
                    key={relatedPost.id}
                    post={relatedPost}
                  />
                ))}
            </div>
            
            {/* If no related posts in same category, show latest posts */}
            {mockPosts.filter(p => p.id !== post.id && p.category === post.category).length === 0 && (
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {mockPosts
                  .filter(p => p.id !== post.id)
                  .slice(0, 3)
                  .map(relatedPost => (
                    <BlogCard
                      key={relatedPost.id}
                      post={relatedPost}
                    />
                  ))}
              </div>
            )}
          </div>
        </article>

        {/* Bottom Ad Banner */}
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-8">
          <AdBanner size="large" position="middle" />
        </div>
      </div>
    </>
  );
};

export default BlogPost;