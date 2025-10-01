import React, { useState } from 'react';
import TeacherDashboard from './components/TeacherDashboard';
import StudentFlow from './components/StudentFlow';
import Header from './components/Header';
import Footer from './components/Footer';
import { DocumentTextIcon, PresentationChartBarIcon, SparklesIcon } from './components/Icons';

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
  const features = [
    {
      icon: <DocumentTextIcon />,
      title: 'Soạn Thảo Dễ Dàng',
      description: 'Tạo bài kiểm tra nhanh chóng từ file Word và quản lý danh sách lớp từ Excel.'
    },
    {
      icon: <SparklesIcon />,
      title: 'Trải Nghiệm Hấp Dẫn',
      description: 'Giao diện làm bài "game hóa", xáo trộn câu hỏi tự động để giảm căng thẳng cho học sinh.'
    },
    {
      icon: <PresentationChartBarIcon />,
      title: 'Báo Cáo Trực Quan',
      description: 'Theo dõi kết quả theo thời gian thực và xuất báo cáo chi tiết ra Excel chỉ với một cú nhấp chuột.'
    }
  ];

  return (
    <div className="text-center flex flex-col items-center animate-fade-in">
      <div className="max-w-4xl w-full pt-12 pb-16 md:pt-16 md:pb-24">
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
      
      <div className="w-full max-w-6xl py-16 md:py-24 border-t border-gray-200">
        <h2 className="text-3xl font-bold text-gray-800 mb-2">Tính Năng Nổi Bật</h2>
        <p className="text-lg text-gray-500 mb-12">Khám phá những gì làm cho EduQuest trở nên khác biệt.</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
            {features.map((feature, index) => (
                <div key={index} className="bg-white p-8 rounded-xl shadow-lg border border-gray-100 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 ease-in-out">
                    <div className="flex items-center justify-center w-16 h-16 rounded-2xl bg-primary/10 text-primary mb-6 [&>svg]:mr-0">
                        {feature.icon}
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">{feature.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default App;