import StudentTable from "../components/shared/StudentsTable";
import { Plus } from "lucide-react";

function Students() {
  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <div>
          <h1 className="text-2xl font-bold">Student Management</h1>

          <p className="text-gray-500 text-sm  mb-2">
            Monitor and organize your student database
          </p>
        </div>

        <button className="bg-blue-500 flex items-center gap-2 text-sm text-white font-semibold px-4 py-3 cursor-pointer rounded-xl hover:bg-blue-600 transition">
          <span className="bg-white text-blue-500 w-3 h-3  rounded-full flex items-center justify-center text-sm font-bold ">
            <Plus size={10}></Plus>
          </span>
          Add New Student
        </button>
      </div>

      <StudentTable />
    </div>
  );
}

export { Students };
