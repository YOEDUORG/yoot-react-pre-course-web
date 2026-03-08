import students from '../mock/students.json';
import { Pen,Trash ,Mars ,Venus  } from 'lucide-react';
export function Student() {
  return (
    <>
    <div className='flex items-center justify-between mb-6'>
        <div>
            <h2 className='text-2xl font-semibold text-gray-900'>Students Management</h2>
            <p className='mt-2 text-gray-600'>Monitor and organize your students here</p>
        </div>
        <div>
            <button>
                <span className='inline-flex items-center px-3 py-2 text-sm font-medium text-white bg-blue-600 rounded-md hover:bg-blue-700'>
                    + Add Student
                </span>
            </button>
        </div>
    </div>
      <table className='min-w-full border-collapse'   >
        <thead className='bg-gray-50'>
            <tr>
                <th className='px-6 py-3 text-left text-xs font-medium text-gray-500 '>ID</th>
                <th className='px-6 py-3 text-left text-xs font-medium text-gray-500  '>NAME</th>
                <th className='px-6 py-3 text-left text-xs font-medium text-gray-500  '>ENROLLMENT DATE</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500  ">GENDER</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500  ">STATUS</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500  ">ACTIONS</th>
            </tr>
        </thead>
        <tbody className='bg-white divide-y divide-gray-200'>
            {students.map((student) => (
                <tr key={student.id}>
                    <td className='px-6 py-4 whitespace-nowrap'>{student.id}</td>
                    <td className='px-6 py-4 whitespace-nowrap'>
                        <p className='font-bold'>
                            {student.first_name} {student.last_name}
                        </p>
                        <p>
                            {student.email}
                        </p>
                    </td>
                    <td className='px-6 py-4 whitespace-nowrap'>{student.enrollment_date}</td>
                    <td className='px-6 py-4 whitespace-nowrap'>
                        <p className={student.gender === 'Male' ? 'text-blue-500' : 'text-pink-500'}>
                            {student.gender === 'Male' ? <Mars /> : <Venus />}
                        </p> 
                            
                    </td>
                    <td className='px-6 py-4 whitespace-nowrap '> 
                        <p className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${student.is_active ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-black-800'}`}>
                            {student.is_active ? 'Active' : 'Inactive'} 
                        </p>
                    </td>
                    <td className='px-6 py-4 whitespace-nowrap flex items-center gap-4'>
                         <button
                            onClick={() =>{}}
                            className={`w-14 h-8 flex items-center rounded-full p-1 transition 
                            ${student.is_active ? "bg-green-500" : "bg-gray-300"}`}>
                            <div className={`bg-white w-6 h-6 rounded-full shadow-md transform transition ${student.is_active ? "translate-x-6" : "translate-x-0"}`}
                            >
                        </div>
                    </button>
                        <button className= 'hover:text-indigo-900 '><Pen /></button>
                        <button className=' hover:text-red-900'><Trash /></button>
                    </td>
                </tr>
            ))}
        </tbody>
      </table>
    </>
  );
}
