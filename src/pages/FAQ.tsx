import React from 'react';
import { Footer } from '../components/Footer';
import { ChevronDown, ChevronUp } from 'lucide-react';

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQSectionProps {
  title: string;
  items: FAQItem[];
}

function FAQSection({ title, items }: FAQSectionProps) {
  const [openIndex, setOpenIndex] = React.useState<number | null>(null);

  return (
    <div className="mb-8">
      <h2 className="text-2xl font-semibold mb-4">{title}</h2>
      <div className="space-y-4">
        {items.map((item, index) => (
          <div key={index} className="bg-white rounded-lg shadow">
            <button
              className="w-full text-left px-6 py-4 flex items-center justify-between"
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
            >
              <span className="font-medium">{item.question}</span>
              {openIndex === index ? (
                <ChevronUp className="h-5 w-5 text-gray-500" />
              ) : (
                <ChevronDown className="h-5 w-5 text-gray-500" />
              )}
            </button>
            {openIndex === index && (
              <div className="px-6 pb-4">
                <p className="text-gray-600">{item.answer}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

const ckdBasics: FAQItem[] = [
  {
    question: "What is Chronic Kidney Disease (CKD)?",
    answer: "Chronic Kidney Disease is a condition characterized by a gradual loss of kidney function over time. It affects how well your kidneys filter waste and excess fluid from your blood."
  },
  {
    question: "What are the early signs of CKD?",
    answer: "Early signs include fatigue, high blood pressure, changes in urination, swelling in ankles and feet, and poor appetite. However, many people may not notice symptoms until the disease is advanced."
  },
  {
    question: "Who is at risk for CKD?",
    answer: "Risk factors include diabetes, high blood pressure, heart disease, obesity, age over 60, and family history of kidney disease."
  },
  {
    question: "Can CKD be prevented?",
    answer: "While some causes cannot be prevented, maintaining a healthy lifestyle, controlling blood pressure and diabetes, and regular check-ups can help reduce risk."
  }
];

const detectionProcess: FAQItem[] = [
  {
    question: "How does KidneyAI detect CKD?",
    answer: "KidneyAI uses advanced machine learning algorithms to analyze medical reports and tissue images, identifying patterns and markers associated with kidney disease."
  },
  {
    question: "What types of files can I upload for analysis?",
    answer: "Our system accepts medical reports in PDF, CSV, or XLSX formats, as well as high-resolution tissue images in common formats like JPG and PNG."
  },
  {
    question: "How accurate is the detection system?",
    answer: "Our AI system has achieved a 97% accuracy rate in clinical trials, though results should always be confirmed by healthcare professionals."
  },
  {
    question: "How long does the analysis take?",
    answer: "Most analyses are completed within 2-3 minutes, depending on the type and size of the uploaded files."
  }
];

const mlPredictions: FAQItem[] = [
  {
    question: "How does machine learning improve CKD detection?",
    answer: "Machine learning can identify subtle patterns and correlations in medical data that might be missed in traditional analysis, potentially enabling earlier detection."
  },
  {
    question: "What data is used to train the AI?",
    answer: "Our AI is trained on a large, diverse dataset of anonymized medical records and tissue images from multiple healthcare institutions, ensuring robust and reliable predictions."
  },
  {
    question: "How reliable are the AI predictions?",
    answer: "While our AI system is highly accurate, it's designed to be a supportive tool for healthcare professionals, not a replacement for medical expertise."
  },
  {
    question: "How often is the AI model updated?",
    answer: "Our AI models are continuously trained on new data and updated monthly to ensure optimal performance and accuracy."
  }
];

export function FAQ() {
  return (
    <div className="min-h-screen flex flex-col">
      <div className="flex-grow">
        <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h1>
            <p className="text-xl text-gray-600">Find answers to common questions about KidneyAI and CKD detection</p>
          </div>

          <FAQSection title="CKD Basics" items={ckdBasics} />
          <FAQSection title="Detection Process" items={detectionProcess} />
          <FAQSection title="ML Predictions" items={mlPredictions} />
        </div>
      </div>
      <Footer />
    </div>
  );
}