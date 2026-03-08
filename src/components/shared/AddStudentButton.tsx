import { Plus } from "lucide-react";
import { useNavigate } from "react-router";

export default function AddStudentButton() {
  const navigate = useNavigate();

  return (
    <button
      onClick={() => navigate("/students/create")}
      className="flex items-center gap-2 bg-blue-500 hover:bg-blue-600 text-white px-5 py-3 rounded-xl"
    >
      <Plus className="w-5 h-5" />
      Add New Student
    </button>
  );
}