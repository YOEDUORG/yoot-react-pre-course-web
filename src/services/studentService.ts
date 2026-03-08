import type { Student } from "../model/student";
import { storage } from "./storages";

const KEY = "students";

export const studentService = {
  getAll(): Student[] {
    return storage.get<Student[]>(KEY) ?? [];
  },

create(student: Student): void {
  const students = this.getAll();

  const newStudent = {
    ...student,
    id: Math.floor(Math.random() * 9999) + 1
  };

  students.push(newStudent);
  storage.set(KEY, students);
},
  update(id: number, updatedStudent: Student): void {
    const students = this.getAll();
    const index = students.findIndex((s) => s.id === id);

    if (index !== -1) {
      students[index] = updatedStudent;
      storage.set(KEY, students);
    }
  },

  delete(id: number): void {
    const students = this.getAll().filter((s) => s.id !== id);
    storage.set(KEY, students);
  },
};