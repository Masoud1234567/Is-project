import React, { useState } from 'react';
import './Admin.css';

const AdminTable = () => {
  // Sample student data
  const [students, setStudents] = useState([
    { id: 1, name: 'John Doe', email: 'john.doe@example.com', phone: '555-1234' },
    { id: 2, name: 'Jane Smith', email: 'jane.smith@example.com', phone: '555-5678' },
    { id: 3, name: 'Bob Johnson', email: 'bob.johnson@example.com', phone: '555-9012' },
  ]);

  const [newStudent, setNewStudent] = useState({
    name: '',
    email: '',
    phone: '',
  });

  const handleAddStudent = () => {
    // Add the new student to the list
    const student = {
      id: students.length + 1,
      name: newStudent.name,
      email: newStudent.email,
      phone: newStudent.phone,
    };
    setStudents([...students, student]);

    // Reset the new student form
    setNewStudent({
      name: '',
      email: '',
      phone: '',
    });
  };

  const handleDeleteStudent = (id) => {
    // Add your logic to delete a student here
    const updatedStudents = students.filter((student) => student.id !== id);
    setStudents(updatedStudents);
  };

  const handleNewStudentChange = (e) => {
    setNewStudent({
      ...newStudent,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div>
      <h2>Admin Table</h2>
      <table>
        <thead>
          <tr>
            <th>Student Name</th>
            <th>Email</th>
            <th>Phone Number</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {students.map((student) => (
            <tr key={student.id}>
              <td>{student.name}</td>
              <td>{student.email}</td>
              <td>{student.phone}</td>
              <td>
                <button onClick={() => handleDeleteStudent(student.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div>
        <h3>Add New Student</h3>
        <label>
          Name:
          <input
            type="text"
            name="name"
            value={newStudent.name}
            onChange={handleNewStudentChange}
          />
        </label>
        <label>
          Email:
          <input
            type="email"
            name="email"
            value={newStudent.email}
            onChange={handleNewStudentChange}
          />
        </label>
        <label>
          Phone:
          <input
            type="tel"
            name="phone"
            value={newStudent.phone}
            onChange={handleNewStudentChange}
          />
        </label>
        <button onClick={handleAddStudent}>Add Student</button>
      </div>
    </div>
  );
};

export default AdminTable;