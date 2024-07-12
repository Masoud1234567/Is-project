import React from 'react';
import { Link } from 'react-router-dom';
import './Dashboard.css';

const Dashboard = () => {
  return (
    <div className="dashboard-container">
      <div className="sidebar">
        <h3>DASHBOARD</h3>
        <ul>
          <li><Link to="/dashboard/home">Home</Link></li>
          <li><Link to="/admin">Admin</Link></li>
          <li><Link to="/dashboard/about">About Us</Link></li>
        </ul>
      </div>
      <div className="main-content">
        <div className="header">
          <h3>WELCOME TO OUR WEBSITE</h3>
        </div>
        <div className="description-section">
          <h2>Student Management System</h2>
          <p>
            Our Student Management System allows you to easily manage student information, including their personal details, academic records, and more. With this system, you can:
          </p>
          <ul>
            <li>Add and update student information</li>
            <li>Track student attendance and performance</li>
            <li>Generate reports and analyze student data</li>
            <li>Communicate with students and parents</li>
          </ul>
          <p>
            Start using our Student Management System today to streamline your school's operations and improve student outcomes.
          </p>
        </div>
        <div className="cards-section">
          <div className="card">
            <h3>Student Information</h3>
            <p>View and manage student records, enrollment, and more.</p>
            <Link to="/students" className="card-link">Manage Students</Link>
          </div>
          <div className="card">
            <h3>Course Management</h3>
            <p>Create and manage courses, class schedules, and curriculum.</p>
            <Link to="/courses" className="card-link">Manage Courses</Link>
          </div>
          <div className="card">
            <h3>Attendance Tracking</h3>
            <p>Monitor student attendance and generate reports.</p>
            <Link to="/attendance" className="card-link">View Attendance</Link>
          </div>
          <div className="card">
            <h3>Grading and Reports</h3>
            <p>Record grades, generate progress reports, and more.</p>
            <Link to="/reports" className="card-link">View Reports</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;