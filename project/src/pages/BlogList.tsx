import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { Search, Filter, Calendar, User } from 'lucide-react';
import BlogCard from '../components/BlogCard';
import AdBanner from '../components/Layout/AdBanner';
import MetaTags from '../components/SEO/MetaTags';
import { loadAllBlogs } from '../utils/loadBlogs';

const mockPosts = loadAllBlogs(); // now dynamic
const categories = Array.from(new Set(mockPosts.map(p => p.category))).map((cat, i) => ({
  id: i + 1,
  slug: cat.toLowerCase().replace(/\s+/g, '-'),
  name: cat,
  description: `${cat} skincare tips and expert guides`
}));



const BlogList: React.FC = () => {
  const { category } = useParams();
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState(category || 'all');

  const filteredPosts = mockPosts.filter((post) => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || 
                           post.category.toLowerCase() === selectedCategory.toLowerCase();
    return matchesSearch && matchesCategory;
  });

  const currentCategory = categories.find(cat => cat.slug === selectedCategory);
  const pageTitle = selectedCategory === 'all' 
    ? 'All Blog Posts' 
    : `${currentCategory?.name || 'Category'} Articles`;

  // JSON-LD Schema for Blog List Page
  const jsonLdSchema = {
    "@context": "https://schema.org",
    "@type": "Blog",
    "name": "NuraSkin.shop Blog",
    "description": "Expert skincare advice, beauty tips, and luxury skincare insights",
    "url": "https://nuraskin.shop/blogs",
    "publisher": {
      "@type": "Organization",
      "name": "NuraSkin.shop"
    },
    "blogPost": filteredPosts.map(post => ({
      "@type": "BlogPosting",
      "headline": post.title,
      "description": post.excerpt,
      "image": post.image,
      "datePublished": post.publishedAt,
      "author": {
        "@type": "Person",
        "name": post.author
      },
      "url": `https://nuraskin.shop/blog/${post.slug}`
    }))
  };
  return (
    <>
      <MetaTags
        title={pageTitle}
        description={`Explore our ${pageTitle.toLowerCase()} filled with expert skincare advice, beauty tips, and luxury skincare insights.`}
        keywords="skincare blog, beauty articles, skincare tips, beauty advice"
        url={`https://nuraskin.shop/blogs${selectedCategory !== 'all' ? '/' + selectedCategory : ''}`}
      />

      {/* JSON-LD Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdSchema) }}
      />

      <div className="min-h-screen bg-gradient-to-b from-pink-50 to-white">
        {/* Top Ad Banner */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
          <AdBanner size="medium" position="top" />
        </div>

        {/* Header */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center mb-8">
            <h1 className="text-4xl font-serif text-gray-800 mb-4">{pageTitle}</h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              {selectedCategory === 'all' 
                ? 'Discover all our expert skincare advice, beauty tips, and luxury skincare insights'
                : currentCategory?.description || 'Expert articles and advice'
              }
            </p>
          </div>

          {/* Search and Filter */}
          <div className="flex flex-col md:flex-row gap-4 mb-8">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search articles..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-pink-200 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent"
              />
            </div>
            
            <div className="relative">
              <Filter className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="pl-10 pr-8 py-3 border border-pink-200 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent bg-white"
              >
                <option value="all">All Categories</option>
                {categories.map((cat) => (
                  <option key={cat.id} value={cat.slug}>
                    {cat.name}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Category Pills */}
          <div className="flex flex-wrap gap-2 mb-8">
            <button
              onClick={() => setSelectedCategory('all')}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors duration-200 ${
                selectedCategory === 'all'
                  ? 'bg-pink-600 text-white'
                  : 'bg-white text-gray-600 hover:bg-pink-50 border border-pink-200'
              }`}
            >
              All Articles
            </button>
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.slug)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors duration-200 ${
                  selectedCategory === cat.slug
                    ? 'bg-pink-600 text-white'
                    : 'bg-white text-gray-600 hover:bg-pink-50 border border-pink-200'
                }`}
              >
                {cat.name}
              </button>
            ))}
          </div>
        </section>

        {/* Blog Posts */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            <div className="lg:col-span-3">
              {filteredPosts.length > 0 ? (
                <div className="space-y-8">
                  {filteredPosts.map((post, index) => (
                    <article key={post.id} className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300 overflow-hidden">
                      <div className="md:flex">
                        <div className="md:w-1/3">
                          <img
                            src={post.image}
                            alt={post.title}
                            className="w-full h-48 md:h-full object-cover"
                          />
                        </div>
                        <div className="md:w-2/3 p-6">
                          <div className="flex items-center text-sm text-gray-500 mb-3">
                            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-pink-100 text-pink-600 mr-3">
                              {post.category}
                            </span>
                            <Calendar className="w-4 h-4 mr-1" />
                            <span className="mr-4">{new Date(post.publishedAt).toLocaleDateString('en-US', {
                              year: 'numeric',
                              month: 'long',
                              day: 'numeric'
                            })}</span>
                            <User className="w-4 h-4 mr-1" />
                            <span>{post.author}</span>
                          </div>
                          
                          <h2 className="text-2xl font-serif text-gray-800 mb-3 hover:text-pink-600 transition-colors duration-200">
                            <a href={`/blog/${post.slug}`}>
                              {post.title}
                            </a>
                          </h2>
                          
                          <p className="text-gray-600 mb-4 line-clamp-3">
                            {post.excerpt}
                          </p>
                          
                          <div className="flex items-center justify-between">
                            <div className="flex flex-wrap gap-1">
                              {post.tags.slice(0, 3).map((tag, tagIndex) => (
                                <span
                                  key={tagIndex}
                                  className="text-xs text-pink-600 bg-pink-50 px-2 py-1 rounded"
                                >
                                  #{tag}
                                </span>
                              ))}
                            </div>
                            <a
                              href={`/blog/${post.slug}`}
                              className="text-pink-600 text-sm font-medium hover:text-pink-700 transition-colors duration-200"
                            >
                              Read More →
                            </a>
                          </div>
                        </div>
                      </div>
                    </article>
                  ))}
                </div>
              ) : (
                <div className="text-center py-12">
                  <p className="text-gray-600 text-lg">No articles found matching your criteria.</p>
                  <button
                    onClick={() => {
                      setSearchTerm('');
                      setSelectedCategory('all');
                    }}
                    className="mt-4 text-pink-600 hover:text-pink-700 font-medium"
                  >
                    Clear filters
                  </button>
                </div>
              )}
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              <AdBanner size="large" position="sidebar" />
              
              {/* Popular Categories */}
              <div className="bg-white rounded-xl p-6 shadow-sm">
                <h3 className="font-semibold text-gray-800 mb-4">Popular Categories</h3>
                <div className="space-y-2">
                  {categories.map((cat) => (
                    <button
                      key={cat.id}
                      onClick={() => setSelectedCategory(cat.slug)}
                      className="w-full text-left px-3 py-2 text-sm text-gray-600 hover:bg-pink-50 hover:text-pink-600 rounded transition-colors duration-200"
                    >
                      {cat.name}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Bottom Ad Banner */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-8">
          <AdBanner size="large" position="middle" />
        </div>
      </div>
    </>
  );
};

export default BlogList;