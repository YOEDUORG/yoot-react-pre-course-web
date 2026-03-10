import { Pencil, Trash2, Mars, Venus, ToggleRight } from "lucide-react";
import students from "../../mock/students.json";

function StudentTable() {
  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-200">
      <table className="w-full text-sm">
        <thead className="text-left text-gray-500 border-b">
          <tr>
            <th className="p-3">ID</th>
            <th className="p-3">NAME</th>
            <th className="p-3">ENROLLMENT DATE</th>
            <th className="p-3">GENDER</th>
            <th className="p-3">STATUS</th>
            <th className="p-3"> </th>
            <th className="p-3 text-center">ACTIONS</th>
          </tr>
        </thead>

        <tbody className="text-left">
          {students.map((student) => (
            <tr key={student.id} className="border-b hover:bg-gray-50">
              {/* id */}
              <td className="p-3 text-gray-500">{student.id}</td>
              {/* Name and Amail */}
              <td className="p-3">
                <div className="font-medium text-gray-900">
                  {student.first_name} {student.last_name}
                </div>
                <div className="text-gray-500 text-xs">{student.email}</div>
              </td>
              {/* Enrollment_date */}
              <td className="p-3">{student.enrollment_date}</td>
              {/* Gender */}
              <td className="p-3">
                {student.gender == "Male" ? (
                  <Mars size={18} className="text-blue-500 "></Mars>
                ) : (
                  <Venus size={18} className="text-pink-500"></Venus>
                )}
              </td>
              <td className="p-3">
                <span
                  className={`px-3 py-1 text-xs rounded-full font-bold ${
                    student.is_active
                      ? "bg-green-100 text-green-700"
                      : "bg-gray-300 text-black-700 "
                  }`}
                >
                  {student.is_active ? "Active" : "Inactive"}
                </span>
              </td>

              <td className="p-4">
                <button className="text-blue-500 flex items-center justify-center font-bold">
                  <ToggleRight size={18} />
                </button>
              </td>

              <td className="p-4 py-6 flex items-center justify-center gap-4">
                <button className="text-gray-700 hover:text-blue-500   ">
                  <Pencil size={15} />
                </button>

                <button className="text-gray-700 hover:text-red-500">
                  <Trash2 size={15} />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default StudentTable;
