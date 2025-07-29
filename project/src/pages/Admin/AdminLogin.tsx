import React, { useState } from 'react';
import { Lock, User } from 'lucide-react';
import MetaTags from '../../components/SEO/MetaTags';

interface AdminLoginProps {
  onLogin: (isAuthenticated: boolean) => void;
}

const AdminLogin: React.FC<AdminLoginProps> = ({ onLogin }) => {
  const [credentials, setCredentials] = useState({ username: '', password: '' });
  const [error, setError] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Simple authentication (in production, use proper authentication)
    if (credentials.username === 'admin' && credentials.password === 'nuraskin2024') {
      onLogin(true);
      setError('');
    } else {
      setError('Invalid credentials');
    }
  };

  return (
    <>
      <MetaTags
        title="Admin Login - NuraSkin.shop"
        description="Admin access for NuraSkin.shop blog management"
      />

      <div className="min-h-screen bg-gradient-to-b from-pink-50 to-white flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full space-y-8">
          <div className="text-center">
            <div className="w-16 h-16 bg-pink-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <Lock className="w-8 h-8 text-white" />
            </div>
            <h2 className="text-3xl font-serif text-gray-800">Admin Access</h2>
            <p className="mt-2 text-gray-600">Sign in to manage your blog</p>
          </div>

          <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
            <div>
              <label htmlFor="username" className="sr-only">Username</label>
              <div className="relative">
                <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  id="username"
                  name="username"
                  type="text"
                  required
                  className="pl-10 w-full px-3 py-3 border border-pink-200 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                  placeholder="Username"
                  value={credentials.username}
                  onChange={(e) => setCredentials(prev => ({ ...prev, username: e.target.value }))}
                />
              </div>
            </div>

            <div>
              <label htmlFor="password" className="sr-only">Password</label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  id="password"
                  name="password"
                  type="password"
                  required
                  className="pl-10 w-full px-3 py-3 border border-pink-200 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                  placeholder="Password"
                  value={credentials.password}
                  onChange={(e) => setCredentials(prev => ({ ...prev, password: e.target.value }))}
                />
              </div>
            </div>

            {error && (
              <div className="text-red-600 text-sm text-center bg-red-50 p-3 rounded-lg">
                {error}
              </div>
            )}

            <button
              type="submit"
              className="w-full bg-pink-600 text-white py-3 px-4 rounded-lg hover:bg-pink-700 transition-colors duration-200 font-medium"
            >
              Sign In
            </button>
          </form>

          <div className="text-center text-sm text-gray-600">
            <p>Demo credentials:</p>
            <p className="mt-2">
              <strong>Admin Access:</strong><br />
              Username: <code className="bg-gray-100 px-2 py-1 rounded text-xs">admin</code><br />
              Password: <code className="bg-gray-100 px-2 py-1 rounded text-xs">nuraskin2024</code>
            </p>
            <p className="mt-4 text-xs text-gray-500">
              This admin panel allows you to create, edit, and manage blog posts.<br />
              Access is restricted to authorized users only.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default AdminLogin;