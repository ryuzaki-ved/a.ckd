import React from 'react';
import { Footer } from '../components/Footer';
import { Microscope, Heart, Brain, BarChart } from 'lucide-react';

export function About() {
  return (
    <div className="min-h-screen flex flex-col">
      <div className="flex-grow">
        <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">About CKD Detection</h1>
            <p className="text-xl text-gray-600">Understanding Chronic Kidney Disease and Our Detection Approach</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="flex items-center mb-4">
                <Heart className="h-8 w-8 text-red-500 mr-3" />
                <h2 className="text-2xl font-semibold">What is CKD?</h2>
              </div>
              <p className="text-gray-600">
                Chronic Kidney Disease (CKD) is a gradual loss of kidney function over time. Your kidneys filter wastes and excess fluids from your blood, which are then excreted in your urine. When chronic kidney disease reaches an advanced stage, dangerous levels of fluid, electrolytes, and wastes can build up in your body.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="flex items-center mb-4">
                <Brain className="h-8 w-8 text-blue-500 mr-3" />
                <h2 className="text-2xl font-semibold">Our AI Approach</h2>
              </div>
              <p className="text-gray-600">
                We utilize advanced artificial intelligence and machine learning algorithms to analyze medical data and images. Our system can detect early signs of CKD by processing various biomarkers and identifying patterns that might be missed in traditional analysis.
              </p>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-8 mb-12">
            <h2 className="text-2xl font-semibold mb-6">Key Features of Our Detection System</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="bg-blue-100 rounded-full p-4 w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Microscope className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-lg font-semibold mb-2">Advanced Analysis</h3>
                <p className="text-gray-600">Comprehensive analysis of medical reports and tissue images</p>
              </div>
              <div className="text-center">
                <div className="bg-green-100 rounded-full p-4 w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <BarChart className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="text-lg font-semibold mb-2">Real-time Results</h3>
                <p className="text-gray-600">Instant processing and detailed reporting of findings</p>
              </div>
              <div className="text-center">
                <div className="bg-purple-100 rounded-full p-4 w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Brain className="h-8 w-8 text-purple-600" />
                </div>
                <h3 className="text-lg font-semibold mb-2">AI-Powered</h3>
                <p className="text-gray-600">Machine learning algorithms trained on vast medical datasets</p>
              </div>
            </div>
          </div>

          <div className="bg-blue-50 rounded-lg p-8">
            <h2 className="text-2xl font-semibold mb-4 text-center">Why Choose Our Technology?</h2>
            <ul className="space-y-4">
              <li className="flex items-start">
                <span className="bg-blue-500 rounded-full p-1 text-white mr-3 mt-1">✓</span>
                <span>Early detection capabilities through advanced AI analysis</span>
              </li>
              <li className="flex items-start">
                <span className="bg-blue-500 rounded-full p-1 text-white mr-3 mt-1">✓</span>
                <span>High accuracy rates backed by extensive medical research</span>
              </li>
              <li className="flex items-start">
                <span className="bg-blue-500 rounded-full p-1 text-white mr-3 mt-1">✓</span>
                <span>Comprehensive reports with actionable insights</span>
              </li>
              <li className="flex items-start">
                <span className="bg-blue-500 rounded-full p-1 text-white mr-3 mt-1">✓</span>
                <span>User-friendly interface for healthcare professionals</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}