import students from '../mock/students.json';
import { Pencil, Trash2, Venus, Mars } from 'lucide-react';
import { useState } from 'react';
export function Student(){
    return(
        <>  
            <h2 className='text-2xl font-semibold text-gray-900'>Student</h2>
            <p className='mt-2 text-gray-600'>Welcome to the Student Panel</p>
            <table className='w-full mt-4 text-left bg-white rounded-lg '>
                <thead className='bg-gray-50 text-gray-900 font-medium rounded-lg'>
                    <th className=' px-4 py-2'>Id</th>
                    <th className=' px-4 py-2'>Name</th>
                    <th className=' px-4 py-2'>Enrollment Date</th>
                    <th className=' px-4 py-2'>Gender</th>
                    <th className=' px-4 py-2'>Status</th>
                    <th className=' px-4 py-2 text-center'>Actions</th>
                </thead>
                <tbody>
                    {students.map((student) => (
                        <tr key={student.id} className='border border-gray-200 hover:bg-gray-50'>
                            <td className='text-left pl-5'>{student.id}</td>
                            <td>
                                <p className='font-bold pl-5'>{student.first_name} {student.last_name}</p>
                                <p className='pl-5'>{student.email}</p>
                            </td>
                            <td className='pl-5'>{student.enrollment_date}</td>
                            <td className='pl-5'>
                                <p className={student.gender === 'Female' ? 'text-pink-500' : 'text-blue-500'}>
                                    {student.gender === 'Female'? <Venus></Venus> : <Mars></Mars>}
                                </p>
                            </td>
                            <td className='pl-5'>
                                <p className={student.is_active === true ? 'text-center rounded-xl bg-green-100 text-green-500' : 'text-center rounded-xl bg-gray-100 text-gray-500'}>
                                    {student.is_active === true ? 'Active' : 'Inactive'}
                                </p>
                            </td>
                            <td className='pl-5 text-center'>
                                <tr>
                                    <td>
                                        <label className="relative inline-flex h-7 w-12 items-center cursor-pointer">
                                            <input type="checkbox" className="peer sr-only" />
                                            
                                            <div className="w-12 h-7 bg-gray-300 rounded-full peer-checked:bg-blue-500 transition"></div>

                                            <span className="absolute left-1 h-5 w-5 bg-white rounded-full transition peer-checked:translate-x-5"></span>
                                        </label>
                                    </td>
                                    <td className='pl-5'><a href="" className=''><Pencil></Pencil></a></td>
                                    <td className='pl-5'><a href="" className=''><Trash2></Trash2></a></td>
                                </tr>
                            </td>
                        </tr>
                    ))}
                    
                </tbody>
            </table>
        </>
    )
}