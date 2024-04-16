import { useState } from "react";
import SelectStudent from "./SelectStudent";
function StudentList() {
  const students = ["Josh", "Kyle", "Gianni", "Colleen"];
  const [selectedStudent, setSelectedStudent] = useState("");
  const handleSelectStudent = (e) => {
    console.log(e.target.value);
    setSelectedStudent(e.target.value);
  };
  return (
    <>
      <h2>Student List</h2>
      <h4>Selected Student {selectedStudent}</h4>
      <SelectStudent onSelect={handleSelectStudent} students={students} />
    </>
  );
}

export default StudentList;
