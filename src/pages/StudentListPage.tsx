import { useEffect, useState } from "react";
import { studentService } from "../services/studentService";
import type { Student } from "../model/student";

import StatusToggle from "../components/shared/StatusToggle";
import StudentActions from "../components/shared/StudentActions";
import StudentForm from "../components/shared/StudentForm";

export default function StudentListPage() {
  const [students, setStudents] = useState<Student[]>([]);
  const [showForm, setShowForm] = useState(false);
  const [editingStudent, setEditingStudent] = useState<Student | null>(null);

  useEffect(() => {
    setStudents(studentService.getAll());
  }, []);

  // CREATE + UPDATE
  const saveStudent = (student: Student) => {
    if (editingStudent) {
      // UPDATE
      const updatedStudent = {
        ...student,
        id: editingStudent.id,
        is_active: editingStudent.is_active,
      };

      studentService.update(editingStudent.id, updatedStudent);

      setStudents((prev) =>
        prev.map((s) =>
          s.id === editingStudent.id ? updatedStudent : s
        )
      );

      setEditingStudent(null);
    } else {
      // CREATE
      const newStudent = {
        ...student,
        id: Date.now(),
        is_active: true,
      };

      studentService.create(newStudent);

      setStudents((prev) => [...prev, newStudent]);
    }

    setShowForm(false);
  };

  // TOGGLE STATUS
  const toggleStudent = (id: number) => {
    setStudents((prev) =>
      prev.map((s) => {
        if (s.id === id) {
          const updated = { ...s, is_active: !s.is_active };
          studentService.update(id, updated);
          return updated;
        }
        return s;
      })
    );
  };

  // DELETE
  const deleteStudent = (id: number) => {
    studentService.delete(id);
    setStudents((prev) => prev.filter((s) => s.id !== id));
  };

  // EDIT
  const editStudent = (id: number) => {
    const student = students.find((s) => s.id === id);

    if (student) {
      setEditingStudent(student);
      setShowForm(true);
    }
  };

  return (
    <div className="p-6">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <div>
          <h1 className="text-2xl font-bold">Student Management</h1>
          <p>Monitor and organize your student database</p>
        </div>

        <button
          onClick={() => {
            setEditingStudent(null);
            setShowForm(true);
          }}
          className="flex items-center gap-2 bg-blue-500 hover:bg-blue-600 text-white px-5 py-3 rounded-xl"
        >
          Add New Student
        </button>
      </div>

      {/* Form */}
      {showForm && (
        <div className="mb-6 p-4 border rounded-lg bg-gray-50">
          <StudentForm
            onSubmit={saveStudent}
            student={editingStudent}
          />
        </div>
      )}

      {/* Table */}
      <div className="overflow-x-auto">
       <div className="min-w-full bg-white shadow rounded-lg overflow-hidden">
  
  {/* Header */}
<div className="grid grid-cols-7 bg-gray-100 font-semibold">
  <div className="p-3">ID</div>
  <div className="p-3 col-span-2">Name</div>
  <div className="p-3">Enrollment</div>
  <div className="p-3">Gender</div>
  <div className="p-3">Status</div>
  <div className="p-3">Actions</div>
</div>

{/* Body */}
{students.map((s) => (
  <div key={s.id} className="grid grid-cols-7 border-t items-center">
    
    <div className="p-3">{s.id}</div>

    <div className="p-3 col-span-2">
      <b>{s.first_name} {s.last_name}</b>
      <br />
      {s.email}
    </div>

    <div className="p-3">{s.enrollment_date}</div>
    <div className="p-3">{s.gender}</div>

    <div className="p-3">
      <StatusToggle
        active={s.is_active}
        onToggle={() => toggleStudent(s.id)}
      />
    </div>

    <div className="p-3">
      <StudentActions
        onEdit={() => editStudent(s.id)}
        onDelete={() => deleteStudent(s.id)}
      />
    </div>

  </div>
))}
</div>
      </div>
    </div>
  );
}