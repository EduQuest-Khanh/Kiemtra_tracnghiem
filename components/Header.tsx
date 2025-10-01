
import React from 'react';

interface HeaderProps {
  onHomeClick: () => void;
}

const Header: React.FC<HeaderProps> = ({ onHomeClick }) => {
  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div 
          className="flex items-center space-x-3 cursor-pointer"
          onClick={onHomeClick}
        >
          <svg className="w-10 h-10 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v11.494m-9-5.747h18"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.75 6.75h4.5M9.75 17.25h4.5M5.25 6.75h1.5v10.5h-1.5zM17.25 6.75h1.5v10.5h-1.5z"></path></svg>
          <span className="text-2xl font-bold text-primary">EduQuest</span>
        </div>
        <p className="hidden md:block text-gray-500 italic">"Kiểm tra Vui vẻ, Đánh giá Nghiêm túc"</p>
      </div>
    </header>
  );
};

export default Header;
