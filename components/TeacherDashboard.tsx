import React, { useState } from 'react';
import { FileUploadIcon, ExcelIcon, WordIcon, SettingsIcon, TrashIcon, DownloadIcon, UserGroupIcon, DocumentTextIcon, PresentationChartBarIcon, ShieldCheckIcon } from './Icons.tsx';

const TeacherDashboard: React.FC = () => {
  const [password, setPassword] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // This is a static UI, so any password will "work"
    if (password) {
      setIsLoggedIn(true);
    }
  };

  if (!isLoggedIn) {
    return (
      <div className="flex items-center justify-center p-4 animate-fade-in">
        <div className="w-full max-w-md">
          <form onSubmit={handleLogin} className="bg-white shadow-2xl rounded-2xl px-8 pt-6 pb-8 mb-4">
            <h2 className="text-3xl font-bold text-center text-primary mb-6">Trang Quản Trị Giáo Viên</h2>
            <div className="mb-6">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                Mật khẩu
              </label>
              <input
                className="shadow-sm appearance-none border rounded-lg w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-primary-focus"
                id="password"
                type="password"
                placeholder="******************"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className="flex items-center justify-center">
              <button
                className="bg-primary hover:bg-primary-hover text-white font-bold py-3 px-6 rounded-lg focus:outline-none focus:shadow-outline w-full transition-transform transform hover:scale-105"
                type="submit"
              >
                Đăng Nhập
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-12 animate-slide-in-up">
      <h1 className="text-4xl font-bold text-gray-800 border-b-4 border-primary pb-4">Bảng Điều Khiển Của Giáo Viên</h1>
      
      {/* Quản Lý Lớp Học & Học Sinh */}
      <section className="bg-white p-8 rounded-xl shadow-lg">
        <h2 className="text-2xl font-bold text-gray-700 mb-4 flex items-center"><UserGroupIcon /> Module Quản Lý Lớp Học & Học Sinh</h2>
        <p className="text-gray-600 mb-6">Tải lên danh sách học sinh từ file Excel (.xlsx). Cột A: STT, Cột B: Họ và tên, Cột C: Lớp.</p>
        <div className="flex items-center space-x-4 p-6 border-2 border-dashed rounded-lg">
            <ExcelIcon />
            <span className="text-gray-500">Chưa có file nào được chọn.</span>
            <button className="ml-auto bg-blue-100 text-blue-800 font-semibold py-2 px-4 rounded-lg hover:bg-blue-200 flex items-center space-x-2">
              <FileUploadIcon />
              <span>Tải Lên File Excel</span>
            </button>
        </div>
      </section>

      {/* Soạn Thảo Bài Kiểm Tra */}
      <section className="bg-white p-8 rounded-xl shadow-lg">
        <h2 className="text-2xl font-bold text-gray-700 mb-4 flex items-center"><DocumentTextIcon /> Module Soạn Thảo Bài Kiểm Tra</h2>
        <p className="text-gray-600 mb-6">Tạo bộ câu hỏi bằng cách tải lên file Word. Đảm bảo cấu trúc file đúng theo yêu cầu.</p>
        <div className="flex items-center space-x-4 p-6 border-2 border-dashed rounded-lg">
            <WordIcon />
            <span className="text-gray-500">Chưa có file nào được chọn.</span>
            <button className="ml-auto bg-green-100 text-green-800 font-semibold py-2 px-4 rounded-lg hover:bg-green-200 flex items-center space-x-2">
              <FileUploadIcon />
              <span>Tải Lên File Word</span>
            </button>
        </div>
      </section>
      
      {/* Tổ Chức & Cài Đặt Kiểm Tra */}
      <section className="bg-white p-8 rounded-xl shadow-lg">
        <h2 className="text-2xl font-bold text-gray-700 mb-4 flex items-center"><SettingsIcon /> Module Tổ Chức Kiểm Tra</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <label htmlFor="test-select" className="block text-sm font-medium text-gray-700 mb-2">Chọn bài kiểm tra</label>
            <select id="test-select" className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-primary-focus focus:border-primary-focus sm:text-sm rounded-md">
              <option>Đề kiểm tra 15 phút - Môn Toán</option>
              <option>Đề kiểm tra cuối kỳ - Môn Lịch Sử</option>
            </select>
          </div>
          <div>
            <label htmlFor="points" className="block text-sm font-medium text-gray-700 mb-2">Thang điểm (cho mỗi câu đúng)</label>
            <input type="number" name="points" id="points" defaultValue="0.25" className="mt-1 focus:ring-primary-focus focus:border-primary-focus block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"/>
          </div>
          <div className="md:col-span-2">
            <div className="relative flex items-start">
              <div className="flex items-center h-5">
                <input id="shuffle" name="shuffle" type="checkbox" defaultChecked className="focus:ring-primary-focus h-4 w-4 text-primary border-gray-300 rounded" />
              </div>
              <div className="ml-3 text-sm">
                <label htmlFor="shuffle" className="font-medium text-gray-700">Tự động xáo trộn câu hỏi và đáp án</label>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-8 text-center">
            <button className="bg-primary text-white font-bold py-3 px-8 rounded-lg shadow-md hover:bg-primary-hover transition-transform transform hover:scale-105">
                Tạo Phiên Kiểm Tra & Lấy Link
            </button>
        </div>
      </section>
      
      {/* Báo Cáo & Thống Kê */}
      <section className="bg-white p-8 rounded-xl shadow-lg">
        <h2 className="text-2xl font-bold text-gray-700 mb-4 flex items-center"><PresentationChartBarIcon /> Module Báo Cáo & Thống Kê</h2>
        <p className="text-gray-600 mb-6">Xem kết quả của học sinh theo thời gian thực. Xuất báo cáo ra file Excel hoặc xóa toàn bộ kết quả.</p>
        <div className="mb-6 flex justify-end space-x-4">
           <button className="bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-lg flex items-center space-x-2">
                <DownloadIcon />
                <span>Xuất file Excel</span>
           </button>
           <button className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-lg flex items-center space-x-2">
                <TrashIcon />
                <span>Xóa Toàn Bộ Kết Quả</span>
           </button>
        </div>
        <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                    <tr>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">STT</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Họ và Tên</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Lớp</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Số câu đúng</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Điểm số</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Thời gian nộp</th>
                    </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                    <tr>
                        <td className="px-6 py-4 whitespace-nowrap">1</td>
                        <td className="px-6 py-4 whitespace-nowrap">Nguyễn Văn An</td>
                        <td className="px-6 py-4 whitespace-nowrap">10A1</td>
                        <td className="px-6 py-4 whitespace-nowrap text-green-600 font-semibold">38/40</td>
                        <td className="px-6 py-4 whitespace-nowrap font-bold text-primary">9.5</td>
                        <td className="px-6 py-4 whitespace-nowrap">30/09/2025 09:15:23</td>
                    </tr>
                    <tr className="bg-gray-50">
                        <td className="px-6 py-4 whitespace-nowrap">2</td>
                        <td className="px-6 py-4 whitespace-nowrap">Trần Thị Bình</td>
                        <td className="px-6 py-4 whitespace-nowrap">10A1</td>
                        <td className="px-6 py-4 whitespace-nowrap text-red-600 font-semibold">25/40</td>
                        <td className="px-6 py-4 whitespace-nowrap font-bold text-primary">6.25</td>
                        <td className="px-6 py-4 whitespace-nowrap">30/09/2025 09:18:05</td>
                    </tr>
                </tbody>
            </table>
        </div>
      </section>

      {/* Quản Trị & Bảo Mật */}
       <section className="bg-white p-8 rounded-xl shadow-lg">
        <h2 className="text-2xl font-bold text-gray-700 mb-4 flex items-center"><ShieldCheckIcon /> Module Quản Trị & Bảo Mật</h2>
        <div>
            <label htmlFor="attempts" className="block text-sm font-medium text-gray-700 mb-2">Số lần làm bài tối đa cho mỗi học sinh</label>
            <select id="attempts" className="mt-1 block w-full max-w-xs pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-primary-focus focus:border-primary-focus sm:text-sm rounded-md">
              <option>1 lần</option>
              <option>2 lần</option>
              <option>3 lần</option>
            </select>
        </div>
      </section>
    </div>
  );
};

export default TeacherDashboard;