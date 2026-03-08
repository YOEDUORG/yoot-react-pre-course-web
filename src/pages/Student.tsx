import { useCallback, useEffect, useState } from "react";
import { studentService } from "../services/studentService";
import type { Student } from "../model/student";
import { Edit2, Mars, Plus, Trash2, Venus } from "lucide-react";

export function Student() {
    const [students, setStudent] = useState<Student[]>(() => studentService.getAll())
    // Dùng cho các hàm CRUD để tránh re-render
    const refreshData = useCallback(() => {
        setStudent(studentService.getAll())
    }, [])

    return (
        <>
            <div className="min-h-screen">
                {/* Page header */}
                <div className="md:flex justify-between items-end mb-8">
                    <div>
                        <h1 className="text-2xl font-bold text-slate-900">Student Management</h1>
                        <p className="text-slate-500">Monitor and organize your student database</p>
                    </div>
                    <button onClick={() => alert("New student form")} className="mt-2 cursor-pointer flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2.5 rounded-xl font-medium transition-colors shadow-sm">
                        <div className="bg-white rounded-full p-px">
                            <Plus size={10} strokeWidth={3} className="text-blue-600 " />
                        </div>
                        Add New Student
                    </button>
                </div>
                {/* Page content */}
                <div className="bg-white rounded-2xl shadow-sm border border-slate-100 w-full ">
                    <div className="overflow-x-auto max-w-100 sm:max-w-xl md:max-w-2xl lg:max-w-none">
                        <table className="w-full text-left border-collapse">
                            <thead>
                                <tr className="border-b border-slate-100 bg-slate-50/50">
                                    <th className="px-6 py-4 text-xs font-semibold text-slate-500 uppercase tracking-wider">ID</th>
                                    <th className="px-6 py-4 text-xs font-semibold text-slate-500 uppercase tracking-wider">Name</th>
                                    <th className="px-6 py-4 text-xs font-semibold text-slate-500 uppercase tracking-wider">Email</th>
                                    <th className="px-6 py-4 text-xs font-semibold text-slate-500 uppercase tracking-wider text-center">Enrollment Date</th>
                                    <th className="px-6 py-4 text-xs font-semibold text-slate-500 uppercase tracking-wider text-center">Gender</th>
                                    <th className="px-6 py-4 text-xs font-semibold text-slate-500 uppercase tracking-wider text-center">Status</th>
                                    <th className="px-6 py-4 text-xs font-semibold text-slate-500 uppercase tracking-wider text-center">Actions</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-slate-50">
                                {students.map((student) => (
                                    <tr key={student.id} className="hover:bg-slate-50/80 transition-colors group">
                                        <td className="px-6 py-5 text-sm font-medium text-slate-600">{student.id}</td>
                                        <td className="px-6 py-5">
                                            <div className="flex flex-col">
                                                <span className="text-sm font-bold text-slate-900">{student.first_name + " " + student.last_name}</span>
                                            </div>
                                        </td>
                                        <td className="px-6 py-5">
                                            <span className="text-xs text-slate-400">{student.email}</span>
                                        </td>
                                        <td className="px-6 py-5">
                                            <div className="flex justify-center">
                                                <span className="text-xs text-slate-400">{student.enrollment_date}</span>
                                            </div>
                                        </td>
                                        <td className="px-6 py-5 select-none">
                                            <div className="flex justify-center">
                                                {student.gender === 'Male' ? (
                                                    <Mars size={18} className="text-blue-500" />
                                                ) : (
                                                    <Venus size={18} className="text-pink-500" />
                                                )}
                                            </div>
                                        </td>
                                        <td className="px-6 py-5 select-none">
                                            <div className="flex justify-center">
                                                <span className={`px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-tight ${student.is_active === true
                                                    ? 'bg-emerald-100 text-emerald-600'
                                                    : 'bg-slate-100 text-slate-400'
                                                    }`}>
                                                    {student.is_active ? "active" : "inactive"}
                                                </span>
                                            </div>
                                        </td>
                                        <td className="px-6 py-5 select-none">
                                            <div className="flex justify-end items-center gap-3">
                                                <label className="relative inline-flex items-center cursor-pointer">
                                                    <input type="checkbox" className="sr-only peer" defaultChecked={student.is_active === true} />
                                                    <div className="w-9 h-5 bg-slate-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-0.5 after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-blue-600"></div>
                                                </label>
                                                <button onClick={() => alert("Edit user: " + student.first_name + "-" + student.id)} className="cursor-pointer p-1.5 text-slate-400 hover:text-blue-600 transition-colors">
                                                    <Edit2 size={16} />
                                                </button>
                                                <button onClick={() => alert("Delete user: " + student.first_name + "-" + student.id)} className="cursor-pointer p-1.5 text-slate-400 hover:text-red-500 transition-colors">
                                                    <Trash2 size={16} />
                                                </button>
                                            </div>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </>
    );
}