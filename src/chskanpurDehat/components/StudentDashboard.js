import React, { useState, useEffect } from 'react';
import axios from 'axios';

const StudentDashboard = () => {
  const [studentData, setStudentData] = useState(null);
  const [students, setStudents] = useState([]);
  const [selectedStudent, setSelectedStudent] = useState(null);
  const [selectedClass, setSelectedClass] = useState(null);

  const [editMode, setEditMode] = useState(false);
  const [selectedSection, setSelectedSection] = useState('Dashboard');
  const [formData, setFormData] = useState({
    email: '',
    name: '',
    number: '',
    class: '',
    address: '',
    password: '',
  });

  // Define fetchStudentData
  const fetchStudentData = async () => {
    try {
      const token = localStorage.getItem('token');
      const response = await axios.get('http://localhost:5000/student-data', {
        headers: {
          Authorization: token,
        },
      });
      setStudentData(response.data);
      setFormData(response.data);
    } catch (error) {
      console.error('Error fetching student data:', error.response ? error.response.data : 'Unknown error');
    }
  };

  useEffect(() => {
    fetchStudentData();
  }, []);

  const fetchStudents = async (className) => {
    try {
      const token = localStorage.getItem('token');
      const response = await axios.get(`http://localhost:5000/students-of-class/${className}`, {
        headers: {
          Authorization: token,
        },
      });
      // Add isEditable property to each student object
      const studentsWithEditable = response.data.map((student) => ({ ...student, isEditable: false }));
      setStudents(studentsWithEditable);
    } catch (error) {
      console.error('Error fetching students:', error.response ? error.response.data : 'Unknown error');
    }
  };

  const handleUpdateStudent = async () => {
    try {
      const token = localStorage.getItem('token');
      await axios.put(`http://localhost:5000/update-student/${selectedStudent._id}`, formData, {
        headers: {
          Authorization: token,
        },
      });
      fetchStudents(selectedClass);
      setSelectedStudent(null);
      setFormData({
        email: '',
        name: '',
        number: '',
        class: '',
        address: '',
        password: '',

      });
      // Reset isEditable state after updating student
      setStudents((prevStudents) =>
        prevStudents.map((prevStudent) =>
          prevStudent._id === selectedStudent._id ? { ...prevStudent, isEditable: false } : prevStudent
        )
      );
    } catch (error) {
      console.error('Error updating student:', error.response ? error.response.data : 'Unknown error');
    }
  };
  

  const handleRemoveStudent = async () => {
    try {
      const token = localStorage.getItem('token');
      await axios.delete(`http://localhost:5000/remove-student/${studentData._id}`, {
        headers: {
          Authorization: token,
        },
      });
      // Handle logout or redirect to login page after removal
      console.log('Student removed successfully');
    } catch (error) {
      console.error('Error removing student:', error.response ? error.response.data : 'Unknown error');
    }
  };

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const renderSectionContent = () => {
    switch (selectedSection) {
      case 'Dashboard':
        return (
          <div className='flex flex-col gap-5'>
            {/* Display student data */}
            <p className="text-xl font-semibold">Name: {studentData && studentData.name}</p>
            <p>Email: {studentData && studentData.email}</p>
            <p>Class: {studentData && studentData.class}</p>
            <p>Gender: {studentData && studentData.gender}</p>
            <p>Address: {studentData && studentData.address}</p>
            <p>FatherName: {studentData && studentData.fatherName}</p>
            <p>MotherName: {studentData && studentData.motherName}</p>
            <p>Age: {studentData && studentData.age}</p>
            <p>BirthDate: {studentData && studentData.birthdate}</p>
            <button
              onClick={() => setSelectedSection('Profile')}
              className="bg-blue-500 text-white w-20 py-2 px-4 rounded hover:bg-blue-600 transition duration-300"
            >
              Edit
            </button>
          </div>
        );
      case 'Profile':
        return (
          <div >
            {/* Editable profile form */}
            <label className="block font-semibold">Name:</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              className="border p-2 mb-2 rounded"
            />
            <label className="block font-semibold">Email:</label>
            <input
              type="text"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              className="border p-2 mb-2 rounded"
            />
            <label className="block font-semibold">Class:</label>
            <input
              type="text"
              name="class"
              value={formData.class}
              onChange={handleInputChange}
              className="border p-2 mb-2 rounded"
            />
            <label className="block font-semibold">Gender:</label>
            <input
              type="text"
              name="gender"
              value={formData.gender}
              onChange={handleInputChange}
              className="border p-2 mb-2 rounded"
            />
            <label className="block font-semibold">Address:</label>
            <input
              type="text"
              name="address"
              value={formData.address}
              onChange={handleInputChange}
              className="border p-2 mb-2 rounded"
            />
            <label className="block font-semibold">Father's Name:</label>
            <input
              type="text"
              name="fatherName"
              value={formData.fatherName}
              onChange={handleInputChange}
              className="border p-2 mb-2 rounded"
            />
            <label className="block font-semibold">Mother's Name:</label>
            <input
              type="text"
              name="motherName"
              value={formData.motherName}
              onChange={handleInputChange}
              className="border p-2 mb-2 rounded"
            />
            <label className="block font-semibold">Age:</label>
            <input
              type="text"
              name="age"
              value={formData.age}
              onChange={handleInputChange}
              className="border p-2 mb-2 rounded"
            />
            <label className="block font-semibold">Birthdate:</label>
            <input
              type="text"
              name="birthdate"
              value={formData.birthdate}
              onChange={handleInputChange}
              className="border p-2 mb-4 rounded"
            />

            {/* Add more fields as needed */}
            <button
              onClick={handleUpdateStudent}
              className="bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600 transition duration-300 mr-2"
            >
              Save Changes
            </button>
            <button
              onClick={handleRemoveStudent}
              className="bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600 transition duration-300"
            >
              Remove Account
            </button>
          </div>
        );
      case 'Syllabus':
        // Fetch and display syllabus for the selected class (modify as needed)
        return (
          <div>
            <p className="text-xl font-semibold mb-4">Syllabus content for {studentData && studentData.class}</p>
            {/* Add syllabus content here */}
          </div>
        );
      case 'Notification':
        // Fetch and display notifications (modify as needed)
        return (
          <div>
            <p className="text-xl font-semibold mb-4">Notification content</p>
            {/* Add notification content here */}
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="flex">
      <div className="w-1/4 bg-gray-200 p-4">
        {/* Navbar with student name and profile picture */}
        <h2 className="text-2xl font-bold mb-2">Welcome, {studentData && studentData.name}</h2>
        <img
          src={`http://localhost:5000/uploads/${studentData && studentData.passportImage}`}
          alt="Profile"
          className="w-full rounded"
        />

        {/* Sidebar with multiple sections */}
        <div className="mt-4">
          <h3 className="text-xl font-semibold mb-2">Dashboard Sections</h3>
          <ul>
            <li>
              <button
                onClick={() => setSelectedSection('Dashboard')}
                className="block w-full py-2 px-4 text-left hover:bg-gray-300 transition duration-300"
              >
                Dashboard
              </button>
            </li>
            <li>
              <button
                onClick={() => setSelectedSection('Profile')}
                className="block w-full py-2 px-4 text-left hover:bg-gray-300 transition duration-300"
              >
                Profile
              </button>
            </li>
            <li>
              <button
                onClick={() => setSelectedSection('Syllabus')}
                className="block w-full py-2 px-4 text-left hover:bg-gray-300 transition duration-300"
              >
                Syllabus
              </button>
            </li>
            <li>
              <button
                onClick={() => setSelectedSection('Notification')}
                className="block w-full py-2 px-4 text-left hover:bg-gray-300 transition duration-300"
              >
                Notification
              </button>
            </li>
            {/* Add more sections as needed */}
          </ul>
        </div>
      </div>

      {/* Main content based on selected section */}
      <div className="flex-1 p-8">{renderSectionContent()}</div>
    </div>
  );
};

export default StudentDashboard;

