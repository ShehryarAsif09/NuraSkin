import React from 'react';
import { Heart, Users, Award, Sparkles } from 'lucide-react';
import MetaTags from '../components/SEO/MetaTags';

const About: React.FC = () => {
  return (
    <>
      <MetaTags
        title="About NuraSkin.shop - Your Trusted Skincare Resource"
        description="Learn about our mission to provide expert skincare advice, beauty tips, and luxury skincare insights to help you achieve your best skin."
        keywords="about nuraskin, skincare blog, beauty experts, skincare mission"
      />

      <div className="min-h-screen bg-gradient-to-b from-pink-50 to-white">
        {/* Hero Section */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center">
            <div className="flex justify-center mb-6">
              <div className="w-16 h-16 bg-gradient-to-br from-pink-200 to-pink-300 rounded-full flex items-center justify-center">
                <Heart className="w-8 h-8 text-pink-600" />
              </div>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-serif text-gray-800 mb-6">
              About NuraSkin
            </h1>
            
            <p className="text-lg text-gray-600 mb-8 max-w-3xl mx-auto">
              We believe that beautiful, healthy skin is a journey of self-love and science. 
              Our mission is to provide you with expert skincare advice, evidence-based beauty tips, 
              and the latest insights in luxury skincare.
            </p>
          </div>
        </section>

        {/* Story Section */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-serif text-gray-800 mb-6">Our Story</h2>
              <p className="text-gray-600 mb-6">
                Founded by skincare enthusiasts and beauty experts, NuraSkin.shop was born from 
                a simple belief: everyone deserves to feel confident in their own skin. We started 
                this journey to bridge the gap between complex skincare science and practical, 
                everyday beauty routines.
              </p>
              <p className="text-gray-600 mb-6">
                What began as a passion project has grown into a trusted resource for thousands 
                of skincare lovers worldwide. We're committed to providing honest, research-backed 
                advice that helps you make informed decisions about your skincare journey.
              </p>
              <p className="text-gray-600">
                From DIY face masks to understanding the latest skincare ingredients, we're here 
                to guide you every step of the way towards healthier, more radiant skin.
              </p>
            </div>
            <div className="relative">
              <img
                src="https://images.pexels.com/photos/3762879/pexels-photo-3762879.jpeg"
                alt="Skincare products and natural ingredients"
                className="rounded-xl shadow-lg w-full h-96 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-pink-900/20 to-transparent rounded-xl"></div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <h2 className="text-3xl font-serif text-gray-800 text-center mb-12">What We Stand For</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-8 shadow-sm text-center">
              <div className="w-12 h-12 bg-pink-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-6 h-6 text-pink-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Expert Knowledge</h3>
              <p className="text-gray-600">
                Our content is researched and reviewed by skincare professionals and dermatology 
                experts to ensure accuracy and reliability.
              </p>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-sm text-center">
              <div className="w-12 h-12 bg-pink-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-6 h-6 text-pink-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Inclusive Beauty</h3>
              <p className="text-gray-600">
                We celebrate all skin types, ages, and concerns. Our advice is designed to be 
                accessible and beneficial for everyone on their skincare journey.
              </p>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-sm text-center">
              <div className="w-12 h-12 bg-pink-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Sparkles className="w-6 h-6 text-pink-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Honest Reviews</h3>
              <p className="text-gray-600">
                We provide unbiased, honest reviews and recommendations based on scientific 
                evidence and real-world testing, not paid partnerships.
              </p>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-gradient-to-r from-pink-100 to-pink-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
            <h2 className="text-3xl font-serif text-gray-800 mb-6">
              Join Our Skincare Community
            </h2>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              Ready to start your journey to healthier, more radiant skin? Explore our 
              expert-curated content and discover the skincare routine that's perfect for you.
            </p>
            <a
              href="/blogs"
              className="inline-flex items-center px-8 py-3 bg-pink-600 text-white rounded-full hover:bg-pink-700 transition-colors duration-200"
            >
              Start Reading
              <Heart className="ml-2 w-5 h-5" />
            </a>
          </div>
        </section>
      </div>
    </>
  );
};

export default About;