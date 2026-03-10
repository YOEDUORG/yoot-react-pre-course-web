import students from '../mock/students.json';
import { Pen, Trash, Mars, Venus } from 'lucide-react';
export function Student() {
  return (
    <>
    <div className='flex items-center justify-between mb-4'>
      <div>
      <h2 className='text-2xl font-semibold text-gray-900'>Student Management</h2>
      <p className='mt-2 text-gray-600'>Monitor and organize your students database</p>
      </div>
      <div>
        <button>
          <span className='px-3 py-1 text-sm text-white bg-blue-500 rounded hover:bg-blue-600'>+ Add New Student</span>
        </button>
      </div>
    </div>
    
      <table className='w-full mt-4 text-left border-collapse border border-gray-200 bg-white rounded-lg'>
        <thead className='bg-gray-400'>
          <tr> 
            <th className='px-4 py-2 border-b border-gray-200'>ID</th>
            <th className='px-4 py-2 border-b border-gray-200'>NAME</th>
            <th className='px-4 py-2 border-b border-gray-200'>ENROLLMENT DATE</th>
            <th className='px-4 py-2 border-b border-gray-200'>GENDER</th>
            <th className='px-4 py-2 border-b border-gray-200'>STATUS</th>
            <th className='px-4 py-2 border-b border-gray-200'>ACTIONS</th>
          </tr>
        </thead>
        <tbody>
          {students.map((student) => (
            <tr key={student.id}>
              <td className='px-4 py-2 border-b border-gray-200'>{student.id}</td>
              <td className='px-4 py-2 border-b border-gray-200'>
                <p className='font-bold'>{student.first_name} {student.last_name}</p>
                <p className='text-sm text-gray-500'>{student.email}</p>
              </td>
              <td className='px-4 py-2 border-b border-gray-200'>{student.enrollment_date}</td>
              <td className='px-4 py-2 border-b border-gray-200'>
                <p className={student.gender === 'Male' ? 'text-blue-500' : 'text-pink-500'}>
                  {student.gender === 'Male' ? <Mars /> : <Venus />}
                </p>
              </td>
              <td className='px-4 py-2 border-b border-gray-200'>
                <p className={`inline-block px-2 py-1 text-xs font-semibold rounded-full ${student.is_active ? 'bg-green-100 text-green-800' : 'bg-gray-200 text-gray-800'}`}>
                  {student.is_active ? 'Active' : 'Inactive'}
                </p>
              </td>
              <td className='px-4 py-2 border-b border-gray-200'>
                <label className="relative inline-flex h-7 w-12 items-center cursor-pointer">
                  <input type="checkbox" className="peer sr-only" />
                  
                  <div className="w-12 h-7 bg-gray-300 rounded-full peer-checked:bg-green-500 transition"></div>

                  <span className="absolute left-1 h-5 w-5 bg-white rounded-full transition peer-checked:translate-x-5"></span>
                </label>
                <button className='px-3 py-1 ml-2 text-sm text-black-500 hover:bg-gray-200'><Pen /></button>
                <button className='px-3 py-1 ml-2 text-sm text-black-500 hover:bg-gray-200'><Trash /></button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}
