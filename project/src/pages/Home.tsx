import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Sparkles, Heart, Star } from 'lucide-react';
import BlogCard from '../components/BlogCard';
import AdBanner from '../components/Layout/AdBanner';
import MetaTags from '../components/SEO/MetaTags';
import { mockPosts, categories } from '../data/mockData';

const Home: React.FC = () => {
  const featuredPosts = mockPosts.filter(post => post.featured);
  const latestPosts = mockPosts.slice(0, 6);

  return (
    <>
      <MetaTags
        title="NuraSkin.shop - Luxury Skincare Blog & Beauty Tips"
        description="Discover expert skincare advice, DIY beauty recipes, and luxury skincare tips at NuraSkin.shop. Your journey to radiant skin starts here."
        keywords="skincare blog, beauty tips, skincare routine, DIY skincare, anti-aging, luxury beauty"
      />

      <div className="min-h-screen bg-gradient-to-b from-pink-50 to-white">
        {/* Top Ad Banner */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
          <AdBanner size="medium" position="top" />
        </div>

        {/* Hero Section */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center">
            <div className="flex justify-center mb-6">
              <div className="flex items-center space-x-2 bg-white px-4 py-2 rounded-full shadow-sm">
                <Sparkles className="w-5 h-5 text-pink-500" />
                <span className="text-sm font-medium text-gray-700">Luxury Skincare Blog</span>
              </div>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-serif text-gray-800 mb-6">
              Nurture Your Skin with
              <span className="text-pink-600 block">Love & Science</span>
            </h1>
            
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              Discover expert skincare advice, DIY beauty recipes, and the latest trends 
              in luxury skincare. Your journey to radiant, healthy skin starts here.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/blogs"
                className="inline-flex items-center px-8 py-3 bg-pink-600 text-white rounded-full hover:bg-pink-700 transition-colors duration-200"
              >
                Explore Blogs
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link
                to="/blogs/skincare"
                className="inline-flex items-center px-8 py-3 bg-white text-pink-600 border border-pink-600 rounded-full hover:bg-pink-50 transition-colors duration-200"
              >
                Skincare Tips
                <Heart className="ml-2 w-5 h-5" />
              </Link>
            </div>
          </div>
        </section>

        {/* Featured Posts */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl font-serif text-gray-800">Featured Articles</h2>
            <Link
              to="/blogs"
              className="text-pink-600 hover:text-pink-700 font-medium flex items-center"
            >
              View All <ArrowRight className="ml-1 w-4 h-4" />
            </Link>
          </div>
          
          <div className="space-y-8">
            {featuredPosts.map((post) => (
              <BlogCard key={post.id} post={post} featured={true} />
            ))}
          </div>
        </section>

        {/* Middle Ad Banner */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <AdBanner size="large" position="middle" />
        </div>

        {/* Categories */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <h2 className="text-3xl font-serif text-gray-800 text-center mb-12">
            Browse by Category
          </h2>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {categories.map((category) => (
              <Link
                key={category.id}
                to={`/blogs/${category.slug}`}
                className="bg-white rounded-xl p-6 text-center hover:shadow-md transition-shadow duration-300 group"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-pink-200 to-pink-300 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-200">
                  <Star className="w-6 h-6 text-pink-600" />
                </div>
                <h3 className="font-semibold text-gray-800 mb-2">{category.name}</h3>
                <p className="text-sm text-gray-600">{category.description}</p>
              </Link>
            ))}
          </div>
        </section>

        {/* Latest Posts Grid */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-serif text-gray-800 mb-4">Latest from Our Blog</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Discover the newest skincare insights, beauty tips, and expert advice to enhance your daily routine.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            <div className="lg:col-span-3">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {latestPosts.slice(0, 4).map((post) => (
                  <BlogCard key={post.id} post={post} />
                ))}
              </div>
              
              <div className="text-center mt-8">
                <Link
                  to="/blogs"
                  className="inline-flex items-center px-6 py-3 bg-pink-600 text-white rounded-full hover:bg-pink-700 transition-colors duration-200"
                >
                  View All Posts
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </div>
            </div>
            
            {/* Sidebar with Ads */}
            <div className="space-y-6">
              <AdBanner size="large" position="sidebar" />
              
              {/* Instagram-style Preview */}
              <div className="bg-white rounded-xl p-6 shadow-sm">
                <h3 className="font-semibold text-gray-800 mb-4 text-center">
                  Follow Our Journey
                </h3>
                <div className="grid grid-cols-2 gap-2">
                  {[1, 2, 3, 4].map((i) => (
                    <div key={i} className="aspect-square bg-gradient-to-br from-pink-100 to-pink-200 rounded-lg"></div>
                  ))}
                </div>
                <button className="w-full mt-4 bg-pink-600 text-white py-2 rounded-lg hover:bg-pink-700 transition-colors duration-200">
                  Follow @NuraSkin
                </button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Home;