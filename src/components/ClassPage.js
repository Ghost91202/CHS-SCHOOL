// ClassesPage.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Modal from 'react-modal';
import "./classoage.css"
import ReactPaginate from 'react-paginate';
const ClassesPage = ({ onClose }) => {
  const [classes, setClasses] = useState([]);
  const [selectedClass, setSelectedClass] = useState(null);
  const [students, setStudents] = useState([]);
  const [isModalOpen, setModalOpen] = useState(false);
  const [selectedStudent, setSelectedStudent] = useState(null);
  const [formData, setFormData] = useState({
    email: '',
    name: '',
    number: '',
    class: '',
    address: '',
    password: '',
  });

  useEffect(() => {
    fetchAllClasses();
  }, []);

  const fetchAllClasses = async () => {
    try {
      const token = localStorage.getItem('token');
      const response = await axios.get('http://localhost:5000/all-classes', {
        headers: {
          Authorization: token,
        },
      });

      // Sort classes in numerical order
      const sortedClasses = response.data.sort((a, b) => {
        // Assuming class names are in the format "Class X" where X is a number
        const classA = parseInt(a.replace('Class ', ''), 10);
        const classB = parseInt(b.replace('Class ', ''), 10);

        return classA - classB;
      });

      setClasses(sortedClasses);
    } catch (error) {
      console.error('Error fetching classes:', error.response ? error.response.data : 'Unknown error');
    }
  };


  const handleSelectClass = async (className) => {
    try {
      const token = localStorage.getItem('token');
      const response = await axios.get(`http://localhost:5000/students-of-class/${className}`, {
        headers: {
          Authorization: token,
        },
      });
      setStudents(response.data);
      setSelectedClass(className);
      setModalOpen(true);
    } catch (error) {
      console.error('Error fetching students:', error.response ? error.response.data : 'Unknown error');
    }
  };

  // ... (previous code)


  const handleSelectStudent = (student) => {
    setSelectedStudent(student);
    setFormData({
      email: student.email,
      name: student.name,
      number: student.number,
      class: student.class,
      address: student.address,
      password: '',
      passportImage: student.passportImage, // Assuming you don't want to display the password for security reasons
    });
    // Reset isEditable state when selecting a new student
    setStudents((prevStudents) =>
      prevStudents.map((prevStudent) =>
        prevStudent._id === student._id ? { ...prevStudent, isEditable: true } : { ...prevStudent, isEditable: false }
      )
    );
  };

  // ... (remaining code)

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

  const handleRemoveStudent = async (studentId) => {
    try {
      const token = localStorage.getItem('token');
      await axios.delete(`http://localhost:5000/remove-student/${studentId}`, {
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
    } catch (error) {
      console.error('Error removing student:', error.response ? error.response.data : 'Unknown error');
    }
  };

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

  const handleBackButton = () => {
    setModalOpen(false);
    // Additional logic if needed
  };

  const [currentPage, setCurrentPage] = useState(0);
  const studentsPerPage = 10;

  // Calculate the number of pages
  const pageCount = Math.ceil(students.length / studentsPerPage);

  // Display students for the current page
  const offset = currentPage * studentsPerPage;
  const currentStudents = students.slice(offset, offset + studentsPerPage);

  // Handle page change
  const handlePageClick = ({ selected }) => {
    setCurrentPage(selected);
  };




  return (
    <div className='flex relative w-full'>
      <div className='ml-12'>
        <h3 className='mb-4 text-2xl font-bold text-gray-800'>All Classes</h3>
        <div className='grid grid-cols-6 gap-10'>
          {classes.map((className) => (
            <button
              key={className}
              onClick={() => handleSelectClass(className)}
              className='p-4 text-xl text-black ring-1 ring-gray-100 hover:text-white rounded-md hover:bg-red-600 focus:outline-none focus:ring focus:border-blue-300 transition duration-300 ease-in-out'
            >
              {className}
            </button>
          ))}
        </div>
      </div>


      {/* Student Modal */}
      <Modal
        isOpen={isModalOpen}
        onRequestClose={() => setModalOpen(false)}
        contentLabel="Student Modal"
        className="w-3/4 ml-64 pl-10 drop-shadow-2xl bg-white overflow-scroll ring-transparent border-transparent shadow-xl shadow-gray-300 rounded-lg p-5 flex justify-center mt-6"
        style={{
          maxHeight: '80vh', // Set the maximum height for the modal content
        }}
      >
        {currentStudents.length > 0 ? (
          <div>
            <table className="w-full table-auto">
              <thead>
                <tr>
                  <th className="px-4 py-1">Image</th>
                  <th className="px-4 py-1">Name</th>
                  <th className="px-4 py-1">Email</th>
                  <th className="px-4 py-1">Number</th>
                  <th className="px-4 py-1">Class</th>
                  <th className="px-4 py-1">Address</th>
                  <th className="px-4 py-1">Actions</th>
                </tr>
              </thead>
              <tbody>
                {currentStudents.map((student) => (
                  <tr key={student._id} onClick={() => handleSelectStudent(student)} className="hover:bg-gray-100 cursor-pointer">
                    <td className="px-4 py-1">
                      {student.passportImage ? (
                        <img src={`http://localhost:5000/uploads/${student.passportImage}`} alt="Passport" className="rounded-full w-20" />
                      ) : (
                        'No image'
                      )}
                    </td>
                    <td className="px-4 py-1">
                      {student.isEditable ? (
                        <input type="text" value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} className="input-field " />
                      ) : (
                        student.name
                      )}
                    </td>
                    <td className="px-4 py-1">
                      {student.isEditable ? (
                        <input type="text" value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} className="input-field " />
                      ) : (
                        student.email
                      )}
                    </td>
                    <td className="px-4 py-1">
                      {student.isEditable ? (
                        <input type="text" value={formData.number} onChange={(e) => setFormData({ ...formData, number: e.target.value })} className="input-field 
                        " />
                      ) : (
                        student.number
                      )}
                    </td>
                    <td className="px-4 py-1">
                      {student.isEditable ? (
                        <input type="text" value={formData.class} onChange={(e) => setFormData({ ...formData, class: e.target.value })} className="input-field w-5" />
                      ) : (
                        student.class
                      )}
                    </td>
                    <td className="px-4 py-1">
                      {student.isEditable ? (
                        <input type="text" value={formData.address} onChange={(e) => setFormData({ ...formData, address: e.target.value })} className="input-field " />
                      ) : (
                        student.address
                      )}
                    </td>
                    <td className="px-4 py-1">
                      {student.isEditable ? (
                        <div>
                          <button onClick={() => handleUpdateStudent(student)} className="action-button update-button">
                            OK
                          </button>
                        </div>
                      ) : (
                        <div>
                          <button
                            onClick={() =>
                              setStudents((prevStudents) =>
                                prevStudents.map((prevStudent) =>
                                  prevStudent._id === student._id
                                    ? { ...prevStudent, isEditable: !prevStudent.isEditable }
                                    : prevStudent
                                )
                              )
                            }
                            className="action-button edit-button"
                          >
                            Edit
                          </button>
                          <button onClick={() => handleRemoveStudent(student._id)} className="action-button remove-button">
                            Remove
                          </button>
                        </div>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>

            {/* Pagination */}
            <ReactPaginate
              previousLabel={'previous'}
              nextLabel={'next'}
              breakLabel={'...'}
              pageCount={pageCount}
              marginPagesDisplayed={2}
              pageRangeDisplayed={5}
              onPageChange={handlePageClick}
              containerClassName={'pagination'}
              activeClassName={'active'}
              previousClassName={'pagination__prev'}
              nextClassName={'pagination__next'}
              pageClassName={'pagination__page'}
              breakClassName={'pagination__break'}
              disabledClassName={'pagination__disabled'}
            />
          </div>
        ) : (
          <p>No students found for {selectedClass}.</p>
        )}
      </Modal>


    </div>
  );
};

export default ClassesPage;
