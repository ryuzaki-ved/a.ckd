import React from 'react';
import { Footer } from '../components/Footer';
import { Brain, Database, Network, Code, BarChart } from 'lucide-react';

export function Technology() {
  return (
    <div className="min-h-screen flex flex-col">
      <div className="flex-grow">
        <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Our Technology</h1>
            <p className="text-xl text-gray-600">Advanced AI Solutions for Kidney Disease Detection</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="flex items-center mb-4">
                <Brain className="h-8 w-8 text-purple-500 mr-3" />
                <h2 className="text-2xl font-semibold">AI & Machine Learning</h2>
              </div>
              <p className="text-gray-600">
                Our system employs state-of-the-art deep learning models, including convolutional neural networks (CNNs) for image analysis and advanced regression models for numerical data processing. These models have been trained on extensive medical datasets to ensure high accuracy and reliability.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="flex items-center mb-4">
                <Database className="h-8 w-8 text-blue-500 mr-3" />
                <h2 className="text-2xl font-semibold">Data Processing</h2>
              </div>
              <p className="text-gray-600">
                We utilize sophisticated data processing pipelines that can handle various input formats, from medical images to laboratory reports. Our system preprocesses and normalizes data to ensure consistent and accurate analysis across different input types.
              </p>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-8 mb-12">
            <h2 className="text-2xl font-semibold mb-6">Technical Stack</h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="bg-purple-100 rounded-full p-4 w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Brain className="h-8 w-8 text-purple-600" />
                </div>
                <h3 className="text-lg font-semibold mb-2">Deep Learning</h3>
                <p className="text-gray-600">TensorFlow & PyTorch based models</p>
              </div>
              <div className="text-center">
                <div className="bg-blue-100 rounded-full p-4 w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Network className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-lg font-semibold mb-2">Neural Networks</h3>
                <p className="text-gray-600">Advanced CNN architectures</p>
              </div>
              <div className="text-center">
                <div className="bg-green-100 rounded-full p-4 w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Code className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="text-lg font-semibold mb-2">Backend</h3>
                <p className="text-gray-600">Scalable cloud infrastructure</p>
              </div>
              <div className="text-center">
                <div className="bg-red-100 rounded-full p-4 w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <BarChart className="h-8 w-8 text-red-600" />
                </div>
                <h3 className="text-lg font-semibold mb-2">Analytics</h3>
                <p className="text-gray-600">Real-time data processing</p>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg p-8 text-white">
            <h2 className="text-2xl font-semibold mb-6 text-center">Performance Metrics</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-4xl font-bold mb-2">97%</div>
                <div className="text-lg">Accuracy Rate</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold mb-2">&lt;2s</div>
                <div className="text-lg">Processing Time</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold mb-2">99.9%</div>
                <div className="text-lg">Uptime</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}