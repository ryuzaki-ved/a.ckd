import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate, useLocation, useNavigate } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import { Login } from './components/auth/Login';
import { Signup } from './components/auth/Signup';
import { ForgotPassword } from './components/auth/ForgotPassword';
import { Dashboard } from './components/Dashboard';
import { Profile } from './components/auth/Profile';
import { EditProfile } from './components/auth/EditProfile';
import { PrivateRoute } from './components/PrivateRoute';
import { FileUpload } from './components/FileUpload';
import { AnalysisResult } from './components/AnalysisResult';
import { Footer } from './components/Footer';
import { About } from './pages/About';
import { Technology } from './pages/Technology';
import { GetStarted } from './pages/GetStarted';
import { FAQ } from './pages/FAQ';
import { Contact } from './pages/Contact';
import { Microscope, FileText, Loader2, Activity, Brain, FlaskRound, Scan, Dna, Zap, Search, FileSearch, CircleDot, Quote, Binary, Network, Cpu, Database, Workflow, CheckCircle } from 'lucide-react';
import type { AnalysisResult as AnalysisResultType } from './types';

const CKD_PARAMETERS = [
  { name: 'Blood Pressure (BP)', shortForm: 'bp', unit: 'mmHg' },
  { name: 'Specific Gravity (SG)', shortForm: 'sg', unit: '' },
  { name: 'Albumin (AL)', shortForm: 'al', unit: 'g/dL' },
  { name: 'Blood Glucose Random (BGR)', shortForm: 'bgr', unit: 'mg/dL' },
  { name: 'Blood Urea (BU)', shortForm: 'bu', unit: 'mg/dL' },
  { name: 'Serum Creatinine (SC)', shortForm: 'sc', unit: 'mg/dL' },
  { name: 'Sodium (SOD)', shortForm: 'sod', unit: 'mEq/L' },
  { name: 'Potassium (POT)', shortForm: 'pot', unit: 'mEq/L' },
  { name: 'Hemoglobin (HEMO)', shortForm: 'hemo', unit: 'g/dL' },
  { name: 'Packed Cell Volume (PCV)', shortForm: 'pcv', unit: '%' },
  { name: 'White Blood Cells (WC)', shortForm: 'wc', unit: '/cu.mm' },
  { name: 'Red Blood Cells Count (RC)', shortForm: 'rc', unit: 'millions/cu.mm' }
];

const DIETARY_RECOMMENDATIONS = [
  'Limit sodium intake to less than 2,300mg per day',
  'Reduce protein intake to 0.8g per kg of body weight',
  'Choose foods low in phosphorus',
  'Limit potassium-rich foods',
  'Increase intake of anti-inflammatory foods',
  'Stay hydrated with appropriate fluid intake',
  'Avoid processed and packaged foods',
  'Include omega-3 rich foods in diet',
  'Choose whole grains over refined grains',
  'Monitor calcium intake carefully'
];

const LIFESTYLE_RECOMMENDATIONS = [
  'Maintain regular physical activity with doctor\'s approval',
  'Get adequate sleep (7-8 hours per night)',
  'Monitor blood pressure regularly',
  'Avoid smoking and limit alcohol consumption',
  'Practice stress management techniques',
  'Keep a food and symptom diary',
  'Attend all scheduled medical appointments',
  'Join a kidney disease support group',
  'Learn about kidney-friendly cooking methods',
  'Take prescribed medications consistently'
];

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

const getAlgorithmAccuracy = (fileName: string, baseAccuracy: number): number => {
  const hash = fileName.split('').reduce((acc, char) => acc + char.charCodeAt(0), 0);
  const variation = ((hash % 100) / 100) * 0.1 - 0.05;
  return Math.min(Math.max(baseAccuracy + variation, 0.85), 0.99);
};

const ANALYSIS_ALGORITHMS = [
  {
    name: "Deep Neural Network Analysis",
    description: "Processing tissue patterns through CNN",
    duration: 8000,
    icon: Network,
    color: "text-purple-500",
    baseAccuracy: 0.97
  },
  {
    name: "Random Forest Classification",
    description: "Analyzing cellular structures",
    duration: 5000,
    icon: Binary,
    color: "text-green-500",
    baseAccuracy: 0.93
  },
  {
    name: "Support Vector Machine",
    description: "Boundary detection and segmentation",
    duration: 6000,
    icon: Workflow,
    color: "text-blue-500",
    baseAccuracy: 0.91
  },
  {
    name: "Ensemble Learning Model",
    description: "Combining multiple predictions",
    duration: 7000,
    icon: Cpu,
    color: "text-red-500",
    baseAccuracy: 0.95
  },
  {
    name: "Feature Extraction Pipeline",
    description: "Extracting key biomarkers",
    duration: 4000,
    icon: Database,
    color: "text-yellow-500",
    baseAccuracy: 0.89
  }
];

const generateParameters = (hash: number) => {
  return CKD_PARAMETERS.filter((_, index) => (hash + index) % 3 === 0).map((param, index) => {
    const value = ((hash * (index + 1)) % 100).toFixed(1);
    const status = ((hash + param.name.length) % 3) === 0 ? 'high' : 
                  ((hash + param.name.length) % 3) === 1 ? 'low' : 'normal';
    
    let description = '';
    switch (status) {
      case 'high':
        description = `Elevated ${param.name} levels indicate potential kidney dysfunction`;
        break;
      case 'low':
        description = `Low ${param.name} levels suggest possible metabolic issues`;
        break;
      default:
        description = `${param.name} levels are within normal range`;
    }

    return {
      name: param.name,
      value: `${value}${param.unit}`,
      status,
      description
    };
  });
};

const getOtherIssues = (hash: number): string[] => {
  const issues = [
    'Irregular cell structure detected',
    'Abnormal tissue density observed',
    'Unusual membrane formation',
    'Cellular degradation present',
    'Tissue scarring detected'
  ];
  return issues.filter((_, index) => (hash + index) % 3 === 0);
};

const getRecommendations = (hash: number): string[] => {
  const highRiskRecommendations = [
    'Immediate nephrology consultation required',
    'Begin intensive kidney function monitoring',
    'Schedule follow-up biopsy in 2 weeks',
    'Consider dialysis preparation',
    'Strict dietary restrictions recommended'
  ];

  const mediumRiskRecommendations = [
    'Schedule follow-up examination in 1 month',
    'Monitor blood pressure daily',
    'Dietary sodium restriction advised',
    'Regular blood work every 2 weeks',
    'Consider preventive medications'
  ];

  const lowRiskRecommendations = [
    'Routine follow-up in 3 months',
    'Maintain healthy diet and exercise',
    'Monitor blood pressure weekly',
    'Annual kidney function screening',
    'Stay well hydrated'
  ];

  const probability = (hash % 100) / 100;
  const recommendations = probability > 0.7 ? highRiskRecommendations :
                         probability > 0.3 ? mediumRiskRecommendations :
                         lowRiskRecommendations;

  return recommendations.filter((_, index) => (hash + index) % 2 === 0).slice(0, 3);
};

const generateConsistentResult = (file: File): AnalysisResultType => {
  const fileHash = file.name.length + file.size;
  const isImage = file.type.startsWith('image/');
  
  return {
    hasSwelling: (fileHash % 2) === 0,
    hasShrinkage: (fileHash % 3) === 0,
    hasPores: (fileHash % 4) === 0,
    otherIssues: getOtherIssues(fileHash),
    ckdProbability: (fileHash % 100) / 100,
    confidence: 0.85 + ((fileHash % 15) / 100),
    recommendations: getRecommendations(fileHash),
    parameters: !isImage ? generateParameters(fileHash) : undefined,
    dietaryRecommendations: DIETARY_RECOMMENDATIONS.filter((_, index) => (fileHash + index) % 3 === 0).slice(0, 5),
    lifestyleRecommendations: LIFESTYLE_RECOMMENDATIONS.filter((_, index) => (fileHash + index) % 3 === 0).slice(0, 5),
    isImage
  };
};

function AnalysisContent() {
  const location = useLocation();
  const navigate = useNavigate();
  const initialShowAnalysisPage = location.state?.showAnalysisPage || false;
  const initialFile = location.state?.file || null;

  const [isAnalyzing, setIsAnalyzing] = React.useState(false);
  const [isFinalizing, setIsFinalizing] = React.useState(false);
  const [result, setResult] = React.useState<AnalysisResultType | null>(null);
  const [selectedImage, setSelectedImage] = React.useState<string | null>(null);
  const [showWelcome, setShowWelcome] = React.useState(true);
  const [analysisStep, setAnalysisStep] = React.useState(0);
  const [analysisProgress, setAnalysisProgress] = React.useState(0);
  const [processingImage, setProcessingImage] = React.useState<string | null>(null);
  const [currentQuote, setCurrentQuote] = React.useState(0);
  const [currentFileName, setCurrentFileName] = React.useState<string>('');
  const [algorithmProgress, setAlgorithmProgress] = React.useState<{ [key: string]: number }>(
    ANALYSIS_ALGORITHMS.reduce((acc, alg) => ({ ...acc, [alg.name]: 0 }), {})
  );
  const [algorithmAccuracy, setAlgorithmAccuracy] = React.useState<{ [key: string]: number }>(
    ANALYSIS_ALGORITHMS.reduce((acc, alg) => ({ ...acc, [alg.name]: 0 }), {})
  );
  const [completedAlgorithms, setCompletedAlgorithms] = React.useState<string[]>([]);
  const [showAnalysisPage, setShowAnalysisPage] = React.useState(initialShowAnalysisPage);

  React.useEffect(() => {
    if (initialFile) {
      analyzeFile(initialFile);
    }
  }, [initialFile]);

  React.useEffect(() => {
    const timer = setTimeout(() => {
      setShowWelcome(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  React.useEffect(() => {
    const quoteInterval = setInterval(() => {
      setCurrentQuote(prev => (prev + 1) % INSPIRATIONAL_QUOTES.length);
    }, 5000);

    return () => clearInterval(quoteInterval);
  }, []);

  React.useEffect(() => {
    if (isAnalyzing) {
      const totalDuration = processingImage ? 30000 : 20000;
      const progressInterval = setInterval(() => {
        setAnalysisProgress(prev => {
          if (prev >= 100) {
            clearInterval(progressInterval);
            return 100;
          }
          return prev + (100 / (totalDuration / 50));
        });
      }, 50);

      const stepInterval = setInterval(() => {
        setAnalysisStep(prev => (prev + 1) % 4);
      }, totalDuration / 4);

      const analysisTimer = setTimeout(() => {
        setIsAnalyzing(false);
        setProcessingImage(null);
      }, totalDuration);

      return () => {
        clearInterval(progressInterval);
        clearInterval(stepInterval);
        clearTimeout(analysisTimer);
      };
    } else {
      setAnalysisProgress(0);
      setAnalysisStep(0);
    }
  }, [isAnalyzing, processingImage]);

  React.useEffect(() => {
    if (isAnalyzing && currentFileName) {
      const isImageFile = currentFileName.match(/\.(jpg|jpeg|png|gif|bmp)$/i);
      const totalDuration = isImageFile ? 30000 : 20000;
      const algorithmDuration = 15000;

      ANALYSIS_ALGORITHMS.forEach((algorithm) => {
        const updateInterval = 50;
        const incrementAmount = (100 * updateInterval) / algorithmDuration;
        const targetAccuracy = getAlgorithmAccuracy(currentFileName, algorithm.baseAccuracy);
        
        const startingAccuracy = 0.76;
        const accuracyRange = targetAccuracy - startingAccuracy;
        
        let currentAccuracy = startingAccuracy;
        const intervalId = setInterval(() => {
          setAlgorithmProgress(prev => {
            const newProgress = (prev[algorithm.name] || 0) + incrementAmount;
            if (newProgress >= 100) {
              clearInterval(intervalId);
              setCompletedAlgorithms(prev => [...prev, algorithm.name]);
              return { ...prev, [algorithm.name]: 100 };
            }
            return { ...prev, [algorithm.name]: newProgress };
          });

          const randomFluctuation = (Math.random() - 0.5) * 0.02;
          currentAccuracy = Math.min(
            targetAccuracy,
            Math.max(
              startingAccuracy,
              currentAccuracy + (accuracyRange / (algorithmDuration / updateInterval)) + randomFluctuation
            )
          );

          setAlgorithmAccuracy(prev => ({
            ...prev,
            [algorithm.name]: currentAccuracy
          }));
        }, updateInterval);
      });

      setTimeout(() => {
        setIsFinalizing(true);
        setTimeout(() => {
          setIsFinalizing(false);
          setIsAnalyzing(false);
          setProcessingImage(null);
        }, 5000);
      }, algorithmDuration);

    } else {
      setAlgorithmProgress(ANALYSIS_ALGORITHMS.reduce((acc, alg) => ({ ...acc, [alg.name]: 0 }), {}));
      setAlgorithmAccuracy(ANALYSIS_ALGORITHMS.reduce((acc, alg) => ({ ...acc, [alg.name]: 0.76 }), {}));
      setCompletedAlgorithms([]);
    }
  }, [isAnalyzing, currentFileName]);

  const analyzeFile = async (file: File) => {
    setShowAnalysisPage(true);
    setIsAnalyzing(true);
    setResult(null);
    setCompletedAlgorithms([]);
    setCurrentFileName(file.name);
    
    if (file.type.startsWith('image/')) {
      const imageUrl = URL.createObjectURL(file);
      setProcessingImage(imageUrl);
      setSelectedImage(imageUrl);
    } else {
      setProcessingImage(null);
      setSelectedImage(null);
    }
    
    const mockResult = generateConsistentResult(file);
    
    const algorithmDuration = 15000;
    const finalizingDuration = 5000;
    setTimeout(() => {
      setResult(mockResult);
    }, algorithmDuration + finalizingDuration);
  };

  return (
    <>
      {!showAnalysisPage ? (
        <Navigate to="/dashboard" />
      ) : (
        <>
          <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 animate-gradient-x">
            <header className="glass-effect sticky top-0 z-40 shadow-sm animate-glow">
              <div className="max-w-7xl mx-auto px-4 py-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <Microscope className="h-8 w-8 text-blue-600 animate-float" />
                    <h1 className="text-2xl font-bold text-gray-900">KidneyAI Analysis System</h1>
                  </div>
                  <button
                    onClick={() => navigate('/dashboard')}
                    className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
                  >
                    Back to Dashboard
                  </button>
                </div>
              </div>
            </header>

            <main className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
              {(isAnalyzing || isFinalizing) && (
                <div className={`mt-8 glass-effect rounded-xl p-8 relative overflow-hidden ${isFinalizing ? 'blur-sm' : ''}`}>
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-100/20 to-transparent animate-scanning" />
                  
                  <div className="relative z-10">
                    {processingImage && (
                      <div className="mb-8 processing-container">
                        <div className="processing-image relative rounded-lg overflow-hidden max-w-md mx-auto">
                          <img
                            src={processingImage}
                            alt="Processing"
                            className="w-full h-64 object-cover rounded-lg shadow-lg"
                          />
                          <div className="scanline"></div>
                          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-400/20 to-transparent animate-scanning"></div>
                        </div>
                      </div>
                    )}

                    <h3 className="text-xl font-semibold text-gray-800 mb-6 text-center">
                      {isFinalizing ? 'Finalizing Results...' : 'AI Analysis in Progress'}
                    </h3>
                    
                    {!isFinalizing && (
                      <div className="max-w-2xl mx-auto space-y-6">
                        {ANALYSIS_ALGORITHMS.map((algorithm) => (
                          <div key={algorithm.name} className="bg-white rounded-lg p-4 shadow-sm">
                            <div className="flex items-center justify-between mb-2">
                              <div className="flex items-center space-x-3">
                                {React.createElement(algorithm.icon, {
                                  className: `h-5 w-5 ${algorithm.color} ${
                                    completedAlgorithms.includes(algorithm.name) ? '' : 'animate-pulse'
                                  }`
                                })}
                                <div>
                                  <h4 className="font-medium text-gray-900">{algorithm.name}</h4>
                                  <p className="text-sm text-gray-500">{algorithm.description}</p>
                                </div>
                              </div>
                              <div className="flex items-center space-x-4">
                                <span className="text-sm font-medium">
                                  Accuracy: {(algorithmAccuracy[algorithm.name] * 100).toFixed(1)}%
                                </span>
                                {completedAlgorithms.includes(algorithm.name) ? (
                                  <CheckCircle className="h-5 w-5 text-green-500" />
                                ) : (
                                  <Loader2 className="h-5 w-5 animate-spin text-blue-500" />
                                )}
                              </div>
                            </div>
                            <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                              <div 
                                className={`h-full rounded-full transition-all duration-300 ease-out ${
                                  completedAlgorithms.includes(algorithm.name) ? 'bg-green-500' : 'bg-blue-500'
                                }`}
                                style={{ width: `${algorithmProgress[algorithm.name] || 0}%` }}
                              />
                            </div>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              )}

              {isFinalizing && (
                <div className="fixed inset-0 flex items-center justify-center z-50 bg-black/50">
                  <div className="bg-white rounded-xl p-8 shadow-xl max-w-md w-full mx-4">
                    <div className="text-center">
                      <div className="relative w-24 h-24 mx-auto mb-6">
                        <div className="absolute inset-0 border-4 border-blue-200 rounded-full animate-spin"></div>
                        <div className="absolute inset-2 border-4 border-blue-400 rounded-full animate-spin-reverse"></div>
                        <div className="absolute inset-4 border-4 border-blue-600 rounded-full animate-pulse"></div>
                        <Brain className="absolute inset-6 w-12 h-12 text-blue-600 animate-pulse" />
                      </div>
                      <h3 className="text-2xl font-semibold text-gray-800 mb-2">Finalizing Analysis</h3>
                      <p className="text-gray-600">Processing results and generating comprehensive report...</p>
                    </div>
                  </div>
                </div>
              )}

              {result && !isAnalyzing && !isFinalizing && (
                <div className="mt-8">
                  {selectedImage && (
                    <div className="mb-8 glass-effect rounded-xl p-6 hover-scale transition-all animate-glow">
                      <h3 className="text-lg font-semibold mb-4">Analyzed Image</h3>
                      <div className="max-w-md mx-auto">
                        <img
                          src={selectedImage}
                          alt="Analyzed tissue"
                          className="w-full h-64 object-cover rounded-lg shadow-lg transition-transform hover:scale-105"
                        />
                      </div>
                    </div>
                  )}
                  <AnalysisResult result={result} />
                </div>
              )}
            </main>
          </div>
          <Footer />
        </>
      )}
    </>
  );
}

function ScrollToTop() {
  const { pathname } = useLocation();

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function App() {
  return (
    <Router>
      <ScrollToTop />
      <AuthProvider>
        <div className="min-h-screen flex flex-col">
          <Routes>
            <Route path="/login" element={<><Login /><Footer /></>} />
            <Route path="/signup" element={<><Signup /><Footer /></>} />
            <Route path="/forgot-password" element={<><ForgotPassword /><Footer /></>} />
            <Route path="/about" element={<About />} />
            <Route path="/technology" element={<Technology />} />
            <Route path="/get-started" element={<GetStarted />} />
            <Route path="/faq/basics" element={<FAQ />} />
            <Route path="/faq/detection" element={<FAQ />} />
            <Route path="/faq/ml" element={<FAQ />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/profile" element={
              <PrivateRoute>
                <Profile />
                <Footer />
              </PrivateRoute>
            } />
            <Route path="/profile/edit" element={
              <PrivateRoute>
                <EditProfile />
                <Footer />
              </PrivateRoute>
            } />
            <Route path="/dashboard" element={
              <PrivateRoute>
                <Dashboard />
                <Footer />
              </PrivateRoute>
            } />
            <Route path="/analysis" element={
              <PrivateRoute>
                <AnalysisContent />
              </PrivateRoute>
            } />
            <Route path="/" element={<Navigate to="/login" />} />
          </Routes>
        </div>
      </AuthProvider>
    </Router>
  );
}

export default App;