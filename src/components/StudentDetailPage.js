import React, { useEffect, useState } from 'react';
import axios from 'axios';

const StudentDetailPage = ({ studentId }) => {
  const [studentData, setStudentData] = useState(null);

  useEffect(() => {
    const fetchStudentData = async () => {
      try {
        const token = localStorage.getItem('token');
        const response = await axios.get(`http://localhost:5000/student-data/${studentId}`, {
          headers: {
            Authorization: token,
          },
        });
        setStudentData(response.data);
      } catch (error) {
        console.error('Error fetching student data:', error.response ? error.response.data : 'Unknown error');
      }
    };

    fetchStudentData();
  }, [studentId]);

  if (!studentData) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2>Student Details</h2>
      <p>Name: {studentData.name}</p>
      <p>Class: {studentData.class}</p>
      {/* Add other details accordingly */}
    </div>
  );
};

export default StudentDetailPage;
