import React from "react";
import Students from "../mock/students.json";

import { Pencil, Trash2, Mars, Venus, ToggleRight } from "lucide-react";

const StudentTable = () => {
  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <div>
          <h2 className="text-2xl font-bold text-gray-900">
            Students Management
          </h2>
          <p className="mt-2 text-gray-600">
            Monitor and organize your students database
          </p>
        </div>
        <div className="">
          <button className="text-white px-4 py-2 rounded-md bg-blue-600 transition-colors">
            + Add New Student
          </button>
        </div>
      </div>
      <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="text-gray-400 text-xs uppercase tracking-wider border-b border-gray-50">
              <th className="py-4 px-2">ID</th>
              <th className="py-4 px-2">Name</th>
              <th className="py-4 px-2">Enrollment Date</th>
              <th className="py-4 px-2">Gender</th>
              <th className="py-4 px-2">Status</th>
              <th className="py-4 px-2 text-right">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-50">
            {Students.map((Student) => (
              <tr
                key={Student.id}
                className="hover:bg-gray-50 transition-colors"
              >
                {/* ID Column */}
                <td className="py-4 px-2 text-sm text-gray-600 font-medium">
                  {Student.id}
                </td>

                {/* Name & Email Column */}
                <td className="py-4 px-2">
                  <div className="flex flex-col">
                    <span className="text-sm font-semibold text-gray-900">
                      {Student.last_name} {Student.first_name}
                    </span>
                    <span className="text-xs text-gray-400">
                      {Student.email}
                    </span>
                  </div>
                </td>

                {/* Grade Column */}
                <td className="py-4 px-2 text-sm text-gray-600">
                  {Student.enrollment_date}
                </td>

                {/* Gender Column */}
                <td className="py-4 px-2">
                  {Student.gender === "Male" ? (
                    <Mars className="w-4 h-4 text-blue-500" />
                  ) : (
                    <Venus className="w-4 h-4 text-pink-500" />
                  )}
                </td>

                {/* Status Column */}
                <td className="px-6 py-4">
                  {/* Logic render Badge dựa trên is_active (boolean) */}
                  <span
                    className={`px-3 py-1 rounded-full text-[10px] font-bold ${
                      Student.is_active
                        ? "bg-emerald-50 text-emerald-600"
                        : "bg-gray-100 text-gray-400"
                    }`}
                  >
                    {Student.is_active ? "Active" : "Inactive"}
                  </span>
                </td>

                {/* Actions Column */}
                <td className="py-4 px-2 text-right">
                  <div className="flex justify-end items-center gap-3">
                    <button className="text-blue-500 hover:text-blue-700">
                      <ToggleRight className="w-5 h-5" />
                    </button>
                    <button className="text-gray-400 hover:text-gray-600">
                      <Pencil className="w-4 h-4" />
                    </button>
                    <button className="text-gray-400 hover:text-red-500">
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
};

export default StudentTable;
