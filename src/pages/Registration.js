import React, { useState, useEffect } from 'react';
import './Home.css';

const StudentManagementSystem = () => {
  const [students, setStudents] = useState([]);
  const [newStudent, setNewStudent] = useState({
    name: '',
    email: '',
    age: '',
  });

  useEffect(() => {
    // Fetch student data from API or mock data
    const fetchStudents = async () => {
      try {
        const response = await fetch('/api/students');
        const data = await response.json();
        setStudents(data);
      } catch (error) {
        console.error('Error fetching students:', error);
      }
    };
    fetchStudents();
  }, []);

  const handleInputChange = (e) => {
    setNewStudent({ ...newStudent, [e.target.name]: e.target.value });
  };

  const handleAddStudent = () => {
    // Add new student to the list
    setStudents([...students, newStudent]);
    setNewStudent({ name: '', email: '', age: '' });
  };

  return (
    <div className="StudentManagementSystem">
      <h2>Student Management System</h2>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Age</th>
          </tr>
        </thead>
        <tbody>
          {students.map((student, index) => (
            <tr key={index}>
              <td>{student.name}</td>
              <td>{student.email}</td>
              <td>{student.age}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <h3>Add New Student</h3>
      <input
        type="text"
        name="name"
        placeholder="Name"
        value={newStudent.name}
        onChange={handleInputChange}
      />
      <input
        type="email"
        name="email"
        placeholder="Email"
        value={newStudent.email}
        onChange={handleInputChange}
      />
      <input
        type="number"
        name="age"
        placeholder="Age"
        value={newStudent.age}
        onChange={handleInputChange}
      />
      <button onClick={handleAddStudent}>Add Student</button>
    </div>
  );
};

export default StudentManagementSystem;