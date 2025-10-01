
import React, { useState } from 'react';
import TeacherDashboard from './components/TeacherDashboard';
import StudentFlow from './components/StudentFlow';
import Header from './components/Header';
import Footer from './components/Footer';

type View = 'landing' | 'teacher' | 'student';

const App: React.FC = () => {
  const [view, setView] = useState<View>('landing');

  const renderContent = () => {
    switch (view) {
      case 'teacher':
        return <TeacherDashboard />;
      case 'student':
        return <StudentFlow />;
      case 'landing':
      default:
        return <LandingPage onSelectView={setView} />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-50 font-sans text-gray-800">
      <Header onHomeClick={() => setView('landing')} />
      <main className="flex-grow container mx-auto px-4 py-8">
        {renderContent()}
      </main>
      <Footer />
    </div>
  );
};

interface LandingPageProps {
  onSelectView: (view: View) => void;
}

const LandingPage: React.FC<LandingPageProps> = ({ onSelectView }) => {
  return (
    <div className="text-center flex flex-col items-center justify-center h-full animate-fade-in">
      <div className="max-w-4xl">
        <h1 className="text-5xl md:text-6xl font-extrabold text-primary tracking-tight mb-4">
          Chào mừng đến với EduQuest
        </h1>
        <p className="text-xl md:text-2xl text-gray-600 mb-10">
          Kiểm tra Vui vẻ, Đánh giá Nghiêm túc
        </p>
        <p className="max-w-2xl mx-auto text-lg text-gray-500 mb-12">
          EduQuest là nền tảng khảo thí thế hệ mới, giúp giáo viên tạo ra các bài kiểm tra hấp dẫn và quản lý kết quả hiệu quả, đồng thời mang đến cho học sinh trải nghiệm làm bài thú vị, giảm bớt căng thẳng.
        </p>
        <div className="space-y-4 md:space-y-0 md:space-x-6">
          <button
            onClick={() => onSelectView('teacher')}
            className="w-full md:w-auto bg-primary text-white font-bold py-4 px-10 rounded-lg shadow-lg hover:bg-primary-hover transform hover:-translate-y-1 transition-all duration-300 ease-in-out"
          >
            Dành cho Giáo viên
          </button>
          <button
            onClick={() => onSelectView('student')}
            className="w-full md:w-auto bg-secondary text-white font-bold py-4 px-10 rounded-lg shadow-lg hover:bg-purple-700 transform hover:-translate-y-1 transition-all duration-300 ease-in-out"
          >
            Dành cho Học sinh
          </button>
        </div>
      </div>
    </div>
  );
};

export default App;
