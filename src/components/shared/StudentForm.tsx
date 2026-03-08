import { useEffect, useState } from "react";
import type { Student } from "../../model/student";
import { Save } from "lucide-react";

type Props = {
  onSubmit: (student: Student) => void;
  student?: Student | null;
};

export default function StudentForm({ onSubmit, student }: Props) {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");

  // Khi edit → đổ dữ liệu vào form
  useEffect(() => {
    if (student) {
      setFirstName(student.first_name);
      setLastName(student.last_name);
      setEmail(student.email);
    }
  }, [student]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const newStudent: Student = {
      id: student?.id ?? Date.now(),
      first_name: firstName,
      last_name: lastName,
      email: email,
      gender: student?.gender ?? "Male",
      is_active: student?.is_active ?? true,
      enrollment_date: student?.enrollment_date ?? new Date().toISOString().split("T")[0],
    };

    onSubmit(newStudent);

    // reset form khi create
    if (!student) {
      setFirstName("");
      setLastName("");
      setEmail("");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex gap-2">
      <input
        placeholder="First name"
        value={firstName}
        onChange={(e) => setFirstName(e.target.value)}
        className="border p-2 rounded"
      />

      <input
        placeholder="Last name"
        value={lastName}
        onChange={(e) => setLastName(e.target.value)}
        className="border p-2 rounded"
      />

      <input
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="border p-2 rounded"
      />

      <button
        type="submit"
        className="bg-green-500 text-white px-3 py-2 rounded"
      >
        <Save className="w-4 h-4" />
      </button>
    </form>
  );
}