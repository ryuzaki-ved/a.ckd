import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Linkedin, Instagram, Send } from 'lucide-react';

export function Footer() {
  const [email, setEmail] = useState('');
  const [subscribeStatus, setSubscribeStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setSubscribeStatus('loading');
    try {
      // Here you would typically make an API call to your backend
      await new Promise(resolve => setTimeout(resolve, 1000));
      setSubscribeStatus('success');
      setEmail('');
      setTimeout(() => setSubscribeStatus('idle'), 3000);
    } catch (error) {
      setSubscribeStatus('error');
      setTimeout(() => setSubscribeStatus('idle'), 3000);
    }
  };

  return (
    <footer className="bg-gray-900 text-white mt-auto">
      <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/dashboard" className="text-gray-300 hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-300 hover:text-white transition-colors">
                  About CKD Detection
                </Link>
              </li>
              <li>
                <Link to="/technology" className="text-gray-300 hover:text-white transition-colors">
                  Our Technology
                </Link>
              </li>
              <li>
                <Link to="/get-started" className="text-gray-300 hover:text-white transition-colors">
                  Get Started
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Resources</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/faq/basics" className="text-gray-300 hover:text-white transition-colors">
                  FAQ: CKD Basics
                </Link>
              </li>
              <li>
                <Link to="/faq/detection" className="text-gray-300 hover:text-white transition-colors">
                  FAQ: Detection Process
                </Link>
              </li>
              <li>
                <Link to="/faq/ml" className="text-gray-300 hover:text-white transition-colors">
                  FAQ: ML Predictions
                </Link>
              </li>
              <li>
                <Link to="/knowledge-base" className="text-gray-300 hover:text-white transition-colors">
                  Knowledge Base
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Legal & Support</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/contact" className="text-gray-300 hover:text-white transition-colors">
                  Contact & Support
                </Link>
              </li>
              <li>
                <Link to="/privacy" className="text-gray-300 hover:text-white transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/terms" className="text-gray-300 hover:text-white transition-colors">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link to="/accessibility" className="text-gray-300 hover:text-white transition-colors">
                  Accessibility Statement
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Connect</h3>
            <div className="flex space-x-4 mb-6">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white transition-colors">
                <Facebook className="h-6 w-6" />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white transition-colors">
                <Twitter className="h-6 w-6" />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white transition-colors">
                <Linkedin className="h-6 w-6" />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white transition-colors">
                <Instagram className="h-6 w-6" />
              </a>
            </div>
            <h4 className="text-lg font-semibold mb-2">Stay Updated</h4>
            <form onSubmit={handleSubscribe} className="space-y-2">
              <div className="flex">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-2 rounded-l-md text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <button
                  type="submit"
                  disabled={subscribeStatus === 'loading'}
                  className="px-4 py-2 bg-blue-600 rounded-r-md hover:bg-blue-700 transition-colors disabled:opacity-50"
                >
                  {subscribeStatus === 'loading' ? (
                    <div className="animate-spin h-5 w-5 border-2 border-white border-t-transparent rounded-full" />
                  ) : (
                    <Send className="h-5 w-5" />
                  )}
                </button>
              </div>
              {subscribeStatus === 'success' && (
                <p className="text-green-400 text-sm">Thank you for subscribing!</p>
              )}
              {subscribeStatus === 'error' && (
                <p className="text-red-400 text-sm">Failed to subscribe. Please try again.</p>
              )}
            </form>
          </div>
        </div>
      </div>
    </footer>
  );
}