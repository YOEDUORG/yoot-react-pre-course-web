import { useEffect, useState } from "react";
import type { Student } from "../model/student";
import { studentService } from "../services/studentService";
import { CirclePlus, Mars, Pencil, Plus, Trash2, Venus } from "lucide-react";

export function Student() {
  const [students, setStudents] = useState<Student[]>([]);

  useEffect(() => {
    const data = studentService.getAll();
    setStudents(data);
  }, []);
  const toggleStudent = (id: number) => {
  setStudents((prev) =>
    prev.map((s) =>
      s.id === id ? { ...s, is_active: !s.is_active } : s
    )
  );
};

  return (
    <div className="w-full min-h-screen bg-gray-50 px-6 py-8">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h2 className="text-2xl font-semibold text-gray-900">
            Student Management
          </h2>
          <p className="text-gray-500 text-sm">
            Monitor and organize your student database
          </p>
        </div>

        <button className="flex items-center gap-2 bg-blue-600 text-white px-5 py-2.5 rounded-lg hover:bg-blue-700 transition">
          <span className="text-lg font-bold"><Plus size={16} strokeWidth={3} className="text-white"/></span>
          Add New Student
        </button>
      </div>
    
      <div className="w-full bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden">
        <table className="w-full text-sm">
          <thead className="bg-gray-50 text-gray-500 text-xs uppercase">
            <tr>
              <th className="text-left px-6 py-4">ID</th>
              <th className="text-left px-6 py-4">Name</th>
              <th className="text-left px-6 py-4">Enrollment Date</th>
              <th className="text-left px-6 py-4">Gender</th>
              <th className="text-left px-6 py-4">Status</th>
              <th className="text-right px-6 py-4">Actions</th>
            </tr>
          </thead>

          <tbody className="divide-y">
            {students.map((student) => (
              <tr key={student.id} className="hover:bg-gray-50">
                
                <td className="px-6 py-4 text-gray-500">
                  {student.id}
                </td>

                
                <td className="px-6 py-4">
                  <div className="font-bold text-black">
                    {student.first_name} {student.last_name}
                  </div>
                  <div className="text-gray-500 text-xs">
                    {student.email}
                  </div>
                </td>

                
                <td className="px-6 py-4 text-gray-600">
                  {student.enrollment_date}
                </td>

                <td className="px-6 py-4 text-lg">
                  {student.gender === "Male" ? <Mars className="text-blue-500" /> : <Venus className="text-pink-500" />}
                </td>

                <td className="px-6 py-4">
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-medium ${
                      student.is_active
                        ? "bg-green-100 text-green-700"
                        : "bg-gray-200 text-gray-600"
                    }`}
                  >
                    {student.is_active ? "Active" : "Inactive"}
                  </span>
                </td>

                <td className="px-6 py-4">
                  <div className="flex items-center justify-end gap-4">
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input
                        type="checkbox"
                        className="sr-only peer"
                        checked={student.is_active}
                        onChange={() => toggleStudent(student.id)}
                      />
                      <div className="w-10 h-5 bg-gray-300 rounded-full peer peer-checked:bg-blue-500 transition"></div>
                      <div className="absolute left-0.5 top-0.5 bg-white w-4 h-4 rounded-full transition peer-checked:translate-x-5"></div>
                    </label>

                    <button className="text-gray-500 hover:text-blue-600">
                      <Pencil className="w-4 h-4" />
                    </button>

                    <button className="text-gray-500 hover:text-red-600">
                      <Trash2 className="w-4 h-4" />
                    </button>
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