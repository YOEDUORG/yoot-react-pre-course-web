import React from 'react';
import studentsData from '../mock/students.json';

// --- CÁC ICON SVG TỪ GIAO DIỆN GỐC ---
const MaleIcon = () => (
  <svg 
    className="w-[18px] h-[18px] text-blue-500" 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2.5" 
    strokeLinecap="round" 
    strokeLinejoin="round"
  >
    <circle cx="10" cy="14" r="5"></circle>
    <line x1="13.5" y1="10.5" x2="21" y2="3"></line>
    <polyline points="16 3 21 3 21 8"></polyline>
  </svg>
);

// --- ICON GIỚI TÍNH NỮ (FEMALE) ĐỒNG BỘ ---
const FemaleIcon = () => (
  <svg 
    className="w-[18px] h-[18px] text-pink-500" 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2.5" 
    strokeLinecap="round" 
    strokeLinejoin="round"
  >
    <circle cx="12" cy="10" r="5"></circle>
    <line x1="12" y1="15" x2="12" y2="22"></line>
    <line x1="9" y1="19" x2="15" y2="19"></line>
  </svg>
);

const EditIcon = () => (
  <svg className="w-4 h-4 text-gray-400 hover:text-gray-600 cursor-pointer transition" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
    <path strokeLinecap="round" strokeLinejoin="round" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
  </svg>
);

const TrashIcon = () => (
  <svg className="w-4 h-4 text-gray-400 hover:text-red-500 cursor-pointer transition" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
    <path strokeLinecap="round" strokeLinejoin="round" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
  </svg>
);

// --- COMPONENT CỦA BẠN ĐÃ ĐƯỢC NÂNG CẤP UI ---
export function ListStudent() {
  return (
    <div className="p-8 bg-gray-50 min-h-screen">
        <div className='flex justify-between'>
      <h2 className="text-2xl font-bold text-slate-800 mb-6">Student Management</h2>
      <button className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded-lg hover:bg-blue-700 transition-colors shadow-sm">
    Add Student
  </button>
      </div>
       <p className="text text-slate-800 mb-6">Monitor and organize your student database</p>
      {/* Container bọc bảng để xử lý responsive */}
      <div className="max-w-6xl bg-white rounded-xl shadow-sm border border-gray-100 overflow-x-auto">
        <table className="w-full text-left border-collapse whitespace-nowrap">
          
          {/* Header Bảng */}
          <thead>
            <tr className="text-xs font-bold tracking-wider text-slate-500 uppercase border-b border-gray-100 bg-white">
              <th className="px-6 py-5">ID</th>
              <th className="px-6 py-5">Name</th>
              <th className="px-6 py-5">Enrollment Date</th>
              <th className="px-6 py-5">Gender</th>
              <th className="px-6 py-5">Status</th>
              <th className="px-6 py-5 text-right pr-10">Actions</th>
            </tr>
          </thead>

          {/* Nội dung Bảng */}
          <tbody className="divide-y divide-gray-50">
            {studentsData.map((student) => (
              <tr key={student.id} className="hover:bg-slate-50/50 transition-colors">
                
                {/* ID */}
                <td className="px-6 py-4 text-sm font-medium text-slate-600">
                  #STU-00{student.id}
                </td>

                {/* Name */}
                <td className="px-6 py-4">
                  <div className="font-bold text-slate-800">
                    {student.first_name} {student.last_name}
                  </div>
                </td>

                {/* Enrollment Date */}
                <td className="px-6 py-4 text-sm font-medium text-slate-600">
                  {student.enrollment_date}
                </td>

                {/* Gender Icon (Tự động nhận diện chuỗi 'male' hoặc 'female') */}
                <td className="px-6 py-4">
                  {student.gender?.toLowerCase() === 'male' ? <MaleIcon /> : <FemaleIcon />}
                </td>

                {/* Status Badge (Dùng biến is_active) */}
                <td className="px-6 py-4">
                  <span
                    className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-bold ${
                      student.is_active
                        ? 'bg-green-100 text-green-600'
                        : 'bg-slate-100 text-slate-500'
                    }`}
                  >
                    {student.is_active ? 'Active' : 'Inactive'}
                  </span>
                </td>

                {/* Actions (Gắn toggle chạy theo is_active) */}
                <td className="px-6 py-4">
                  <div className="flex items-center justify-end gap-5 pr-4">
                    {/* Nút Toggle Switch */}
                    <button 
                      className={`w-10 h-6 rounded-full relative transition-colors ${
                        student.is_active ? 'bg-blue-500' : 'bg-gray-200'
                      }`}
                    >
                      <span 
                        className={`absolute top-1 w-4 h-4 bg-white rounded-full transition-all duration-300 ${
                          student.is_active ? 'right-1' : 'left-1'
                        }`}
                      ></span>
                    </button>
                    
                    <EditIcon />
                    <TrashIcon />
                  </div>
                </td>

              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}