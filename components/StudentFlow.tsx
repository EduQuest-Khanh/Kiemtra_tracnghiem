import React, { useState } from 'react';
import { CheckCircleIcon, XCircleIcon } from './Icons.tsx';

type StudentStep = 'login' | 'quiz' | 'results';

const StudentFlow: React.FC = () => {
  const [step, setStep] = useState<StudentStep>('login');

  const renderStep = () => {
    switch (step) {
      case 'quiz':
        return <QuizInterface onComplete={() => setStep('results')} />;
      case 'results':
        return <QuizResults onRestart={() => setStep('login')} />;
      case 'login':
      default:
        return <StudentLogin onStart={() => setStep('quiz')} />;
    }
  };

  return <div className="animate-fade-in">{renderStep()}</div>;
};

// Component for Student Login
const StudentLogin: React.FC<{ onStart: () => void }> = ({ onStart }) => {
  return (
    <div className="max-w-xl mx-auto bg-white p-8 rounded-xl shadow-lg text-center">
      <h2 className="text-3xl font-bold text-primary mb-2">Tham gia bài kiểm tra</h2>
      <p className="text-gray-600 mb-8">Vui lòng chọn lớp và tên của bạn để bắt đầu.</p>
      <div className="space-y-6">
        <div>
          <label htmlFor="class-select" className="block text-left text-sm font-medium text-gray-700 mb-2">Chọn Lớp</label>
          <select id="class-select" className="mt-1 block w-full pl-3 pr-10 py-3 text-base border-gray-300 focus:outline-none focus:ring-primary-focus focus:border-primary-focus sm:text-sm rounded-md">
            <option>10A1</option>
            <option>10A2</option>
            <option>11B3</option>
          </select>
        </div>
        <div>
          <label htmlFor="name-select" className="block text-left text-sm font-medium text-gray-700 mb-2">Chọn Họ và Tên</label>
          <select id="name-select" className="mt-1 block w-full pl-3 pr-10 py-3 text-base border-gray-300 focus:outline-none focus:ring-primary-focus focus:border-primary-focus sm:text-sm rounded-md">
            <option>Nguyễn Văn An</option>
            <option>Trần Thị Bình</option>
            <option>Lê Minh Cường</option>
          </select>
        </div>
      </div>
      <button
        onClick={onStart}
        className="mt-10 w-full bg-primary text-white font-bold py-4 px-10 rounded-lg shadow-lg hover:bg-primary-hover transform hover:-translate-y-1 transition-all duration-300 ease-in-out"
      >
        Bắt đầu làm bài
      </button>
    </div>
  );
};

// Component for Quiz Interface
const QuizInterface: React.FC<{ onComplete: () => void }> = ({ onComplete }) => {
  return (
    <div className="max-w-3xl mx-auto bg-white p-8 rounded-xl shadow-lg">
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-xl font-bold text-primary">Câu 1/40</h3>
        <div className="text-lg font-mono bg-gray-100 p-2 rounded-md">00:29:45</div>
      </div>
      <div className="mb-8">
        <p className="text-lg font-semibold text-gray-800">
          Thủ đô của Việt Nam là gì?
        </p>
        <img src="https://picsum.photos/600/200" alt="Question illustration" className="my-4 rounded-lg"/>
        <p className="text-lg font-semibold text-gray-800 my-4">
          Công thức tính diện tích hình tròn là gì? <span className="font-mono text-blue-700 bg-blue-50 p-1 rounded">S = πr²</span>
        </p>
      </div>
      <div className="space-y-4">
        {['Hà Nội', 'TP. Hồ Chí Minh', 'Đà Nẵng', 'Hải Phòng'].map((option, index) => (
          <button key={index} className="w-full text-left p-4 border rounded-lg hover:bg-blue-50 hover:border-primary-focus focus:outline-none focus:ring-2 focus:ring-primary-focus transition-colors duration-200">
            <span className="font-bold mr-3">{String.fromCharCode(65 + index)}.</span> {option}
          </button>
        ))}
      </div>
      <div className="mt-10 flex justify-end">
        <button
          onClick={onComplete}
          className="bg-accent text-white font-bold py-3 px-8 rounded-lg shadow-lg hover:bg-amber-600 transform hover:-translate-y-1 transition-all"
        >
          Nộp bài
        </button>
      </div>
    </div>
  );
};

// Component for Quiz Results
const QuizResults: React.FC<{ onRestart: () => void }> = ({ onRestart }) => {
  return (
    <div className="max-w-3xl mx-auto bg-white p-8 rounded-xl shadow-lg text-center animate-slide-in-up">
      <h2 className="text-4xl font-extrabold text-primary mb-4">Hoàn Thành!</h2>
      <p className="text-gray-600 mb-8">Đây là kết quả bài làm của bạn.</p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8 text-white">
        <div className="bg-green-500 p-6 rounded-lg">
            <p className="text-lg">Số câu đúng</p>
            <p className="text-4xl font-bold">38/40</p>
        </div>
        <div className="bg-red-500 p-6 rounded-lg">
            <p className="text-lg">Số câu sai</p>
            <p className="text-4xl font-bold">2/40</p>
        </div>
      </div>

      <h3 className="text-2xl font-bold text-gray-800 mb-4">Chi tiết câu trả lời</h3>
      <p className="text-gray-500 mb-6">(Lưu ý: Hệ thống không hiển thị đáp án chính xác)</p>
      
      <div className="max-h-60 overflow-y-auto border rounded-lg p-4 text-left space-y-2">
        <div className="flex items-center justify-between p-2 bg-green-50 rounded-md">
          <span className="font-medium">Câu 1: Thủ đô của Việt Nam là gì?</span>
          <span className="flex items-center text-green-600 font-bold"><CheckCircleIcon /> Đúng</span>
        </div>
        <div className="flex items-center justify-between p-2 bg-green-50 rounded-md">
          <span className="font-medium">Câu 2: Công thức tính diện tích hình tròn?</span>
          <span className="flex items-center text-green-600 font-bold"><CheckCircleIcon /> Đúng</span>
        </div>
        <div className="flex items-center justify-between p-2 bg-red-50 rounded-md">
          <span className="font-medium">Câu 3: Ai là tác giả của 'Truyện Kiều'?</span>
          <span className="flex items-center text-red-600 font-bold"><XCircleIcon /> Sai</span>
        </div>
      </div>

      <button
        onClick={onRestart}
        className="mt-10 bg-gray-600 text-white font-bold py-3 px-8 rounded-lg shadow-lg hover:bg-gray-700 transform hover:-translate-y-1 transition-all"
      >
        Quay về trang chủ
      </button>
    </div>
  );
};

export default StudentFlow;