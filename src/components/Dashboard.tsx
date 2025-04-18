import React from 'react';
import { useAuth } from '../context/AuthContext';
import { FileUpload } from './FileUpload';
import { 
  Microscope, 
  FileText, 
  Activity, 
  Brain, 
  FlaskRound, 
  Quote, 
  User, 
  ChevronDown,
  CheckCircle,
  Clock,
  Shield,
  Award,
  Zap,
  Database
} from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';

const INSPIRATIONAL_QUOTES = [
  {
    text: "Your health is an investment, not an expense.",
    author: "Unknown"
  },
  {
    text: "The greatest wealth is health.",
    author: "Virgil"
  },
  {
    text: "Take care of your body. It's the only place you have to live.",
    author: "Jim Rohn"
  },
  {
    text: "Health is not valued until sickness comes.",
    author: "Thomas Fuller"
  },
  {
    text: "Prevention is better than cure.",
    author: "Desiderius Erasmus"
  }
];

export function Dashboard() {
  const { currentUser, logout } = useAuth();
  const [currentQuote, setCurrentQuote] = React.useState(0);
  const [showProfileMenu, setShowProfileMenu] = React.useState(false);
  const navigate = useNavigate();

  React.useEffect(() => {
    const quoteInterval = setInterval(() => {
      setCurrentQuote(prev => (prev + 1) % INSPIRATIONAL_QUOTES.length);
    }, 5000);

    return () => clearInterval(quoteInterval);
  }, []);

  React.useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      const target = event.target as HTMLElement;
      if (!target.closest('.profile-menu-container')) {
        setShowProfileMenu(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleLogout = async () => {
    try {
      await logout();
    } catch (error) {
      console.error('Failed to log out', error);
    }
  };

  const handleFileUpload = (file: File) => {
    navigate('/analysis', { 
      state: { 
        file,
        showAnalysisPage: true 
      }
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 animate-gradient-x">
      <header className="glass-effect sticky top-0 z-40 shadow-sm animate-glow">
        <div className="max-w-7xl mx-auto px-4 py-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Microscope className="h-8 w-8 text-blue-600 animate-float" />
              <h1 className="text-2xl font-bold text-gray-900">KidneyAI Analysis System</h1>
            </div>
            <div className="flex items-center space-x-4">
              <div className="flex space-x-4 mr-6">
                <Activity className="h-6 w-6 text-green-500 animate-pulse" />
                <Brain className="h-6 w-6 text-blue-500 animate-pulse" />
                <FlaskRound className="h-6 w-6 text-purple-500 animate-pulse" />
              </div>
              
              <div className="relative profile-menu-container">
                <button 
                  onClick={() => setShowProfileMenu(!showProfileMenu)}
                  className="flex items-center space-x-2 bg-white rounded-full px-3 py-2 shadow-sm hover:shadow-md transition-all"
                >
                  <div className="bg-blue-100 p-1 rounded-full">
                    <User className="h-5 w-5 text-blue-600" />
                  </div>
                  <span className="text-sm font-medium hidden sm:inline-block">
                    {currentUser?.displayName || 'User'}
                  </span>
                  <ChevronDown className="h-4 w-4 text-gray-500" />
                </button>
                
                {showProfileMenu && (
                  <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-50 animate-fade-in">
                    <Link 
                      to="/profile" 
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50"
                      onClick={() => setShowProfileMenu(false)}
                    >
                      View Profile
                    </Link>
                    <Link 
                      to="/profile/edit" 
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50"
                      onClick={() => setShowProfileMenu(false)}
                    >
                      Update Profile
                    </Link>
                    <button 
                      onClick={handleLogout}
                      className="block w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-red-50"
                    >
                      Logout
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <div className="mb-16 text-center">
          <h2 className="text-5xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600 animate-fade-in">
            Most Advanced Chronic Kidney Disease Detection
          </h2>
          <p className="text-2xl text-gray-600 mb-12 max-w-3xl mx-auto animate-fade-in delay-200">
            Powered by state-of-the-art artificial intelligence and machine learning algorithms
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="flex items-center justify-center mb-6">
                <div className="bg-blue-100 rounded-full p-4">
                  <Brain className="h-8 w-8 text-blue-600 animate-pulse" />
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-4">Multiple AI Algorithms</h3>
              <p className="text-gray-600">
                Utilizes ensemble of 5+ advanced ML models including CNN, Random Forest, and SVM for comprehensive analysis
              </p>
            </div>
            
            <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="flex items-center justify-center mb-6">
                <div className="bg-green-100 rounded-full p-4">
                  <CheckCircle className="h-8 w-8 text-green-600 animate-pulse" />
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-4">97% Accuracy Rate</h3>
              <p className="text-gray-600">
                Clinically validated with 97% accuracy in detecting early-stage kidney disease markers
              </p>
            </div>
            
            <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="flex items-center justify-center mb-6">
                <div className="bg-purple-100 rounded-full p-4">
                  <Clock className="h-8 w-8 text-purple-600 animate-pulse" />
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-4">Rapid Processing</h3>
              <p className="text-gray-600">
                Complete analysis within 5-10 minutes with detailed reports and recommendations
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-16">
            <div className="bg-white/80 rounded-xl p-6 flex items-center justify-center shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
              <Shield className="h-6 w-6 text-blue-500 mr-3 animate-pulse" />
              <span className="text-lg font-medium">HIPAA Compliant</span>
            </div>
            <div className="bg-white/80 rounded-xl p-6 flex items-center justify-center shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
              <Award className="h-6 w-6 text-yellow-500 mr-3 animate-pulse" />
              <span className="text-lg font-medium">FDA Approved</span>
            </div>
            <div className="bg-white/80 rounded-xl p-6 flex items-center justify-center shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
              <Zap className="h-6 w-6 text-purple-500 mr-3 animate-pulse" />
              <span className="text-lg font-medium">Real-time Analysis</span>
            </div>
            <div className="bg-white/80 rounded-xl p-6 flex items-center justify-center shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
              <Database className="h-6 w-6 text-green-500 mr-3 animate-pulse" />
              <span className="text-lg font-medium">Secure Storage</span>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-12">
          <div className="transform transition-all duration-300 hover:scale-105">
            <div className="glass-effect rounded-xl p-8 h-full animate-glow">
              <h2 className="text-2xl font-semibold mb-6 flex items-center">
                <Microscope className="h-8 w-8 text-blue-600 mr-3 animate-float" />
                Tissue Image Analysis
              </h2>
              <FileUpload
                onFileUpload={handleFileUpload}
                acceptedTypes={['image/*']}
                title="Upload Tissue Image"
                description="Drop a tissue image or click to browse"
              />
            </div>
          </div>

          <div className="transform transition-all duration-300 hover:scale-105">
            <div className="glass-effect rounded-xl p-8 h-full animate-glow">
              <h2 className="text-2xl font-semibold mb-6 flex items-center">
                <FileText className="h-8 w-8 text-blue-600 mr-3 animate-float" />
                Medical Report Analysis
              </h2>
              <FileUpload
                onFileUpload={handleFileUpload}
                acceptedTypes={['.csv', '.xlsx', '.pdf']}
                title="Upload Medical Report"
                description="Drop a report file (CSV, XLSX, or PDF) or click to browse"
              />
            </div>
          </div>
        </div>

        <div className="mt-16">
          <div className="glass-effect rounded-xl p-8 text-center max-w-3xl mx-auto">
            <Quote className="h-8 w-8 text-blue-500 mx-auto mb-6 animate-pulse" />
            <div key={currentQuote} className="quotes-transition">
              <p className="text-xl text-gray-700 italic mb-4">
                "{INSPIRATIONAL_QUOTES[currentQuote].text}"
              </p>
              <p className="text-lg text-gray-500">
                - {INSPIRATIONAL_QUOTES[currentQuote].author}
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}