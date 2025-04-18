import React from 'react';
import { Footer } from '../components/Footer';
import { FileUpload } from '../components/FileUpload';
import { Upload, FileText, CheckCircle, ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export function GetStarted() {
  const navigate = useNavigate();

  const handleFileUpload = (file: File) => {
    navigate('/analysis', { 
      state: { 
        file,
        showAnalysisPage: true 
      }
    });
  };

  return (
    <div className="min-h-screen flex flex-col">
      <div className="flex-grow">
        <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Get Started with KidneyAI</h1>
            <p className="text-xl text-gray-600">Begin your journey towards better kidney health monitoring</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-2xl font-semibold mb-6">Upload Medical Reports</h2>
              <FileUpload
                onFileUpload={handleFileUpload}
                acceptedTypes={['.csv', '.xlsx', '.pdf']}
                title="Upload Medical Report"
                description="Drop your medical report or click to browse"
              />
            </div>

            <div className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-2xl font-semibold mb-6">Upload Tissue Images</h2>
              <FileUpload
                onFileUpload={handleFileUpload}
                acceptedTypes={['image/*']}
                title="Upload Tissue Image"
                description="Drop a tissue image or click to browse"
              />
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-8 mb-12">
            <h2 className="text-2xl font-semibold mb-6">How It Works</h2>
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="bg-blue-100 rounded-full p-3 mr-4">
                  <Upload className="h-6 w-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">1. Upload Your Data</h3>
                  <p className="text-gray-600">Upload your medical reports or tissue images for analysis</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="bg-purple-100 rounded-full p-3 mr-4">
                  <FileText className="h-6 w-6 text-purple-600" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">2. AI Analysis</h3>
                  <p className="text-gray-600">Our AI system analyzes your data using advanced algorithms</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="bg-green-100 rounded-full p-3 mr-4">
                  <CheckCircle className="h-6 w-6 text-green-600" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">3. Get Results</h3>
                  <p className="text-gray-600">Receive detailed analysis and recommendations</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg p-8 text-white">
            <div className="text-center mb-6">
              <h2 className="text-2xl font-semibold">Ready to Start?</h2>
              <p className="mt-2">Begin your analysis now and take control of your kidney health</p>
            </div>
            <div className="flex justify-center">
              <button
                onClick={() => navigate('/analysis', { state: { showAnalysisPage: true } })}
                className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold flex items-center hover:bg-blue-50 transition-colors"
              >
                Start Analysis
                <ArrowRight className="ml-2 h-5 w-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}