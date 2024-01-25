// AdminDashboard.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Modal from 'react-modal';
import ClassesPage from './ClassPage';
import Navbar from "../pages/navbar"
import "./classoage.css"
import logo from "../assets/logo.png"
import adduserimg from "../assets/PRE- PRIMARY 4.jpeg"
import adduserimg2 from "../assets/PRE-PRIMARY ACT - 5 (1).jpg"
import adduserimg3 from "../assets/WhatsApp Image 2023-05-22 at 17.29.56 (2).jpeg"
// import ExcelDownloadButton from '../components/ExcelDownloadButton';
const AdminDashboard = () => {
    // const apiEndpoint = 'http://localhost:5000/all-data';
  const [allData, setAllData] = useState(null);
  const [formData, setFormData] = useState({
    email: '',
    name: '',
    number: '',
    class: '',
    address: '',
    password: '',
  });
  const [selectedStudentId, setSelectedStudentId] = useState(null);
  const [isAddUserModalOpen, setAddUserModalOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');

  const [allClasses, setAllClasses] = useState([]);
  const [selectedClass, setSelectedClass] = useState(null);
  const [isClassesModalOpen, setClassesModalOpen] = useState(false);

  const [searchResults, setSearchResults] = useState([]);
  const [selectedSearchResult, setSelectedSearchResult] = useState(null);
  const [isSearchModalOpen, setSearchModalOpen] = useState(false);

  // Fetch search results based on the search term
  const fetchSearchResults = async () => {
    try {
      const token = localStorage.getItem('token');
      const response = await axios.get(`http://localhost:5000/search?searchTerm=${searchTerm}`, {
        headers: {
          Authorization: token,
        },
      });
      setSearchResults(response.data);
    } catch (error) {
      console.error('Error fetching search results:', error.response ? error.response.data : 'Unknown error');
    }
  };

  // Handle search term change
  const handleSearchTermChange = (e) => {
    const term = e.target.value;
    setSearchTerm(term);

    // Fetch search results in real-time
    if (term.trim() !== '') {
      fetchSearchResults();
    } else {
      setSearchResults([]);
    }
  };

  // Handle click on a search result
  const handleSearchResultClick = (result) => {
    setSelectedSearchResult(result);
    setSearchModalOpen(true);
  };

  // Fetch detailed data based on the selected search result
  useEffect(() => {
    const fetchDetailedData = async () => {
      // Implement logic to fetch detailed data based on the selected search result
      // For example, you can make another API call to get detailed information
      // and then navigate to the relevant page.
    };

    if (selectedSearchResult) {
      fetchDetailedData();
      setSearchModalOpen(false); // Close the search modal after fetching detailed data
    }
  }, [selectedSearchResult]);


  const handleClassesClick = () => {
    setClassesModalOpen(true);
  };



  const token = localStorage.getItem('token');

  useEffect(() => {
    // Redirect to login if no token is found
    if (!token) {
      // You may use react-router-dom or other methods to redirect to the login page
      window.location.href = '/login';
    }
    fetchAllData();
    fetchAllClasses();
  }, [token]);



  const handleLogout = () => {
    // Clear the token from localStorage
    localStorage.removeItem('token');
    // Redirect to the login page
    window.location.href = '/login';
  };

  const fetchAllClasses = async () => {
    try {
      const token = localStorage.getItem('token');
      const response = await axios.get('http://localhost:5000/all-classes', {
        headers: {
          Authorization: token,
        },
      });
      setAllClasses(response.data);
    } catch (error) {
      console.error('Error fetching all classes:', error.response ? error.response.data : 'Unknown error');
    }
  };






  useEffect(() => {
    fetchAllData();
  }, []); // Empty dependency array ensures this effect runs once when the component mounts

  const handleAddStudent = async () => {
    try {
      const token = localStorage.getItem('token');
      await axios.post('http://localhost:5000/add-admin', formData, {
        headers: {
          Authorization: token,
        },
      });
      fetchAllData();
      setFormData({
        email: '',
        name: '',
        number: '',

        address: '',
        password: '',
      });
      closeAddUserModal();
    } catch (error) {
      console.error('Error adding student:', error.response ? error.response.data : 'Unknown error');
    }
  };

  const handleUpdateStudent = async () => {
    try {
      const token = localStorage.getItem('token');
      await axios.put(`http://localhost:5000/update-student/${selectedStudentId}`, formData, {
        headers: {
          Authorization: token,
        },
      });
      fetchAllData();
      setFormData({
        email: '',
        name: '',
        number: '',
        class: '',
        address: '',
        password: '',
      });
      setSelectedStudentId(null);
    } catch (error) {
      console.error('Error updating student:', error.response ? error.response.data : 'Unknown error');
    }
  };



  const fetchAllData = async (className) => {
    try {
      const token = localStorage.getItem('token');
      const response = await axios.get(`http://localhost:5000/students-of-class/${className}`,
        {
          headers: {
            Authorization: token,
          },
        });
      setAllData(response.data);
    } catch (error) {
      console.error('Error fetching all data:', error.response ? error.response.data : 'Unknown error');
    }
  };

  const openAddUserModal = () => {
    setAddUserModalOpen(true);
  };

  const closeAddUserModal = () => {
    setAddUserModalOpen(false);
  };







  // serach functionality


  return (
    <div className='flex h-full '>

      {/* Class Filter */}

      {/* =====================================Navbar======================================== */}

      <div className='flex relative '>

        <button data-drawer-target="sidebar-multi-level-sidebar" data-drawer-toggle="sidebar-multi-level-sidebar" aria-controls="sidebar-multi-level-sidebar" type="button" class="inline-flex items-center p-2 mt-2 ms-3 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-red-600 dark:focus:ring-gray-600">
          <span class="sr-only">Open sidebar</span>
          <svg class="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            <path clip-rule="evenodd" fill-rule="evenodd" d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"></path>
          </svg>
        </button>

        <aside id="sidebar-multi-level-sidebar" class="flex relative top-0  left-0 z-40 w-full h-screen transition-transform -translate-x-full sm:translate-x-0" aria-label="Sidebar">
          <div class="h-full px-4 py-5 overflow-y-auto text-gray-900    bg-gray-200">
            <ul class="space-y-2 font-medium">
              <li>
                <img src={logo} alt="chs school " className='mb-5'/>
                <a href="#" class="flex items-center p-2  rounded-lg hover:text-white  hover:bg-gray-100 dark:hover:bg-red-600 group">
                  <svg class="w-5 h-5  transition duration-75   " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 21">
                    <path d="M16.975 11H10V4.025a1 1 0 0 0-1.066-.998 8.5 8.5 0 1 0 9.039 9.039.999.999 0 0 0-1-1.066h.002Z" />
                    <path d="M12.5 0c-.157 0-.311.01-.565.027A1 1 0 0 0 11 1.02V10h8.975a1 1 0 0 0 1-.935c.013-.188.028-.374.028-.565A8.51 8.51 0 0 0 12.5 0Z" />
                  </svg>
                  <span class="ms-3 ">Dashboard</span>
                </a>
              </li>
              <li>
                {/* <button type="button" class="flex items-center w-full p-2 text-base text-gray-900 transition duration-75 rounded-lg group hover:bg-gray-100  dark:hover:bg-red-600" aria-controls="dropdown-example" data-collapse-toggle="dropdown-example">

                  <span class="flex-1 ms-3 text-left rtl:text-right whitespace-nowrap">Student</span>

                </button> */}
                <ul id="dropdown-example" class="hidden py-2 space-y-2">
                  <li>
                    <a href="#" class="flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100  dark:hover:bg-red-600">Products</a>
                  </li>
                  <li>
                    <a href="#" class="flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100  dark:hover:bg-red-600">Billing</a>
                  </li>
                  <li>
                    <a href="#" class="flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100  dark:hover:bg-red-600">Invoice</a>
                  </li>
                </ul>
              </li>
              <li>
                <a href="#" class="flex items-center p-2 text-gray-900 rounded-lg  hover:bg-gray-100 dark:hover:bg-red-600 group">
                  <svg class="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 18">
                    <path d="M6.143 0H1.857A1.857 1.857 0 0 0 0 1.857v4.286C0 7.169.831 8 1.857 8h4.286A1.857 1.857 0 0 0 8 6.143V1.857A1.857 1.857 0 0 0 6.143 0Zm10 0h-4.286A1.857 1.857 0 0 0 10 1.857v4.286C10 7.169 10.831 8 11.857 8h4.286A1.857 1.857 0 0 0 18 6.143V1.857A1.857 1.857 0 0 0 16.143 0Zm-10 10H1.857A1.857 1.857 0 0 0 0 11.857v4.286C0 17.169.831 18 1.857 18h4.286A1.857 1.857 0 0 0 8 16.143v-4.286A1.857 1.857 0 0 0 6.143 10Zm10 0h-4.286A1.857 1.857 0 0 0 10 11.857v4.286c0 1.026.831 1.857 1.857 1.857h4.286A1.857 1.857 0 0 0 18 16.143v-4.286A1.857 1.857 0 0 0 16.143 10Z" />
                  </svg>
                  <span class="flex-1 ms-3 whitespace-nowrap hover:text-white" onClick={handleClassesClick}>Classes</span>
                </a>
              </li>
              <li>
                <a href="#" class="flex items-center p-2 text-gray-900 rounded-lg hover:text-white hover:bg-gray-100 dark:hover:bg-red-600 group">
                  <svg class="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                    <path d="m17.418 3.623-.018-.008a6.713 6.713 0 0 0-2.4-.569V2h1a1 1 0 1 0 0-2h-2a1 1 0 0 0-1 1v2H9.89A6.977 6.977 0 0 1 12 8v5h-2V8A5 5 0 1 0 0 8v6a1 1 0 0 0 1 1h8v4a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-4h6a1 1 0 0 0 1-1V8a5 5 0 0 0-2.582-4.377ZM6 12H4a1 1 0 0 1 0-2h2a1 1 0 0 1 0 2Z" />
                  </svg>
                  <span class="flex-1 ms-3 whitespace-nowrap" onClick={openAddUserModal}>Add Admin</span>
                  <span class="inline-flex items-center justify-center w-3 h-3 p-3 ms-3 text-sm font-medium text-blue-800 bg-blue-100 rounded-full dark:bg-red-600 dark:text-white">3</span>
                </a>
              </li>
              <li>
                <a href="#" class="flex items-center p-2 text-gray-900 rounded-lg    group">
                  <svg class="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 18">
                    <path d="M14 2a3.963 3.963 0 0 0-1.4.267 6.439 6.439 0 0 1-1.331 6.638A4 4 0 1 0 14 2Zm1 9h-1.264A6.957 6.957 0 0 1 15 15v2a2.97 2.97 0 0 1-.184 1H19a1 1 0 0 0 1-1v-1a5.006 5.006 0 0 0-5-5ZM6.5 9a4.5 4.5 0 1 0 0-9 4.5 4.5 0 0 0 0 9ZM8 10H5a5.006 5.006 0 0 0-5 5v2a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1v-2a5.006 5.006 0 0 0-5-5Z" />
                  </svg>
                  <span class="flex-1 ms-3 whitespace-nowrap cursor-no-drop">Users</span>
                </a>
              </li>
              {/* <li>
                <a href="#" class="flex items-center p-2 text-gray-900 rounded-lg    group">
                  <svg class="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 20">
                    <path d="M17 5.923A1 1 0 0 0 16 5h-3V4a4 4 0 1 0-8 0v1H2a1 1 0 0 0-1 .923L.086 17.846A2 2 0 0 0 2.08 20h13.84a2 2 0 0 0 1.994-2.153L17 5.923ZM7 9a1 1 0 0 1-2 0V7h2v2Zm0-5a2 2 0 1 1 4 0v1H7V4Zm6 5a1 1 0 1 1-2 0V7h2v2Z" />
                  </svg>
                  <span class="flex-1 ms-3 whitespace-nowrap cursor-no-drop">Products</span>
                </a>
              </li> */}
              <li>
                <a href="#" class="flex items-center p-2 text-gray-900 rounded-lg hover:text-white hover:bg-gray-100 dark:hover:bg-red-600 group">
                  <svg class="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 16">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 8h11m0 0L8 4m4 4-4 4m4-11h3a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-3" />
                  </svg>
                  <span class="flex-1 ms-3 whitespace-nowrap">Sign In</span>
                </a>
              </li>
              <li>
                <a href="#" class="flex items-center p-2 text-gray-900 rounded-lg hover:text-white hover:bg-gray-100 dark:hover:bg-red-600 group">
                  <svg class="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M5 5V.13a2.96 2.96 0 0 0-1.293.749L.879 3.707A2.96 2.96 0 0 0 .13 5H5Z" />
                    <path d="M6.737 11.061a2.961 2.961 0 0 1 .81-1.515l6.117-6.116A4.839 4.839 0 0 1 16 2.141V2a1.97 1.97 0 0 0-1.933-2H7v5a2 2 0 0 1-2 2H0v11a1.969 1.969 0 0 0 1.933 2h12.134A1.97 1.97 0 0 0 16 18v-3.093l-1.546 1.546c-.413.413-.94.695-1.513.81l-3.4.679a2.947 2.947 0 0 1-1.85-.227 2.96 2.96 0 0 1-1.635-3.257l.681-3.397Z" />
                    <path d="M8.961 16a.93.93 0 0 0 .189-.019l3.4-.679a.961.961 0 0 0 .49-.263l6.118-6.117a2.884 2.884 0 0 0-4.079-4.078l-6.117 6.117a.96.96 0 0 0-.263.491l-.679 3.4A.961.961 0 0 0 8.961 16Zm7.477-9.8a.958.958 0 0 1 .68-.281.961.961 0 0 1 .682 1.644l-.315.315-1.36-1.36.313-.318Zm-5.911 5.911 4.236-4.236 1.359 1.359-4.236 4.237-1.7.339.341-1.699Z" />
                  </svg>
                  <span class="flex-1 ms-3 whitespace-nowrap" onClick={handleLogout}>Sign Up</span>
                </a>
              </li>
            </ul>
          </div>
        </aside>
      </div>


      <div className='w-screen pt-4 bg-gray-200 h-16'>
        {/* <label className='text-lg rounded-lg  ml-10  '>Search:</label> */}
        <input
          type="text"
          value={searchTerm}
          onChange={handleSearchTermChange}
          placeholder='Search...'
          className='text-lg h-8 border-2 hover:border-gray-900 hover:text-black p-2 rounded-lg    ml-10'
        />

        <ul className='my-5 mx-4 text-lg absolute bg-gray-200 rounded-xl max-h-40 overflow-y-scroll text-black pl-2 pr-5 cursor-pointer shadow-lg'>
          {searchResults.map((result) => (
            <li
              key={result.id}
              onClick={() => handleSearchResultClick(result)}
              className='py-2 px-4 mb-2 hover:bg-gray-400 hover:text-white rounded-md transition duration-300 ease-in-out cursor-pointer'
            >
              <span className='font-bold'>{result.name}</span> - {result.class}
            </li>
          ))}
        </ul>



        <div >
          <Modal
            isOpen={isSearchModalOpen}
            onRequestClose={() => setSearchModalOpen(false)}
            contentLabel="Search Result Modal"
            className="w-1/2 ml-64 bg-white drop-shadow-2xl ring-transparent border-transparent shadow-xl shadow-gray-300 rounded-lg p-2 flex mt-20"
          >
            {selectedSearchResult && (
              <div className="max-w-md mx-auto">
                <h2 className="text-2xl font-semibold text-red-500 mb-4">
                  Detailed Information of {selectedSearchResult.name}
                </h2>
                <div className="grid grid-cols-2 gap-2">
                  <p className="text-gray-800">Name:</p>
                  <p>{selectedSearchResult.name}</p>
                  <p className="text-gray-800">Email:</p>
                  <p>{selectedSearchResult.email}</p>
                  <p className="text-gray-800">Address:</p>
                  <p>{selectedSearchResult.address}</p>
                  <p className="text-gray-800">Class:</p>
                  <p>{selectedSearchResult.class}</p>
                  <p className="text-gray-800">fatherName:</p>
                  <p>{selectedSearchResult.fatherName}</p>
                  <p className="text-gray-800">motherName:</p>
                  <p>{selectedSearchResult.motherName}</p>
                  <p className="text-gray-800">Age:</p>
                  <p>{selectedSearchResult.age}</p>
                  <p className="text-gray-800">birthdate:</p>
                  <p>{selectedSearchResult.birthdate}</p>


                </div>
              </div>
            )}
          </Modal>

        </div>
      </div>

      {/* ============================================================================= */}
      <div className='flex relative '>
        {/* Add Logout Button */}


        {/* Display real-time search results */}
        {/* Adjust this based on your data structure */}



        {/* Search Result Modal */}
        {/* Display detailed information based on the selected search result */}
        {/* Add more details as needed */}

        {/* Add User button */}


        {/* Add User Modal */}



        <Modal
          isOpen={isAddUserModalOpen}
          onRequestClose={closeAddUserModal}
          contentLabel="Add User Modal"
          className="w-96 bg-white p-6 rounded-lg ml-72 mt-32 ring-1 ring-gray-300 shadow-xl drop-shadow-lg shadow-gray-200"
        >
          <div >
            <img src={adduserimg} alt="" className='absolute rounded-xl w-96 ml-96 -mt-6 shadow-xl drop-shadow-lg shadow-gray-100 cursor-pointer' />
            <img src={adduserimg3} alt="" className='absolute rounded-xl w-96 adduser shadow-xl drop-shadow-lg shadow-gray-100 cursor-pointer' />
            <img src={adduserimg2} alt="" className='absolute rounded-xl w-96 ml-96 mt-72 shadow-sm hover:shadow-xl drop-shadow-xl shadow-gray-100 cursor-pointer  ' />
          </div>
          <div className=''>
          <h2 className="text-2xl font-semibold mb-4">Add Admin</h2>
          <form className="grid grid-cols-2 gap-4">
            <div className="mb-3">
              <label htmlFor="email" className="block text-sm font-medium text-gray-600">
                Email:
              </label>
              <input
                type="text"
                id="email"
                className="mt-1 p-2 border rounded-md w-full focus:outline-none focus:ring focus:border-blue-300"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="name" className="block text-sm font-medium text-gray-600">
                Name:
              </label>
              <input
                type="text"
                id="name"
                className="mt-1 p-2 border rounded-md w-full focus:outline-none focus:ring focus:border-blue-300"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="number" className="block text-sm font-medium text-gray-600">
                Number:
              </label>
              <input
                type="text"
                id="number"
                className="mt-1 p-2 border rounded-md w-full focus:outline-none focus:ring focus:border-blue-300"
                value={formData.number}
                onChange={(e) => setFormData({ ...formData, number: e.target.value })}
              />
            </div>

            <div className="mb-3">
              <label htmlFor="address" className="block text-sm font-medium text-gray-600">
                Address:
              </label>
              <input
                type="text"
                id="address"
                className="mt-1 p-2 border rounded-md w-full focus:outline-none focus:ring focus:border-blue-300"
                value={formData.address}
                onChange={(e) => setFormData({ ...formData, address: e.target.value })}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="password" className="block text-sm font-medium text-gray-600">
                Password:
              </label>
              <input
                type="text"
                id="password"
                className="mt-1 p-2 border rounded-md w-full focus:outline-none focus:ring focus:border-blue-300"
                value={formData.password}
                onChange={(e) => setFormData({ ...formData, password: e.target.value })}
              />
            </div>

          </form>

          <div className="mt-6">
            <button
              type="button"
              className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300"
              onClick={handleAddStudent}
            >
              Add User
            </button>
            <button
              type="button"
              className="ml-2 px-4 py-2 text-gray-600 border border-gray-300 rounded-md hover:bg-gray-100 focus:outline-none focus:ring focus:border-blue-300"
              onClick={closeAddUserModal}
            >
              Close
            </button>
          </div>
          </div>


        </Modal>


        {/* =========================================================================== */}

        {/* <button type="button" onClick={handleClassesClick}>
        Classes Page
      </button> */}

        {/* Classes Page Modal */}
        <div className=''>
          {/* // Classes Page Modal */}
          <Modal
            isOpen={isClassesModalOpen}
            onRequestClose={() => setClassesModalOpen(false)}
            contentLabel="Classes Page Modal"
            className="w-1/2   ml-64 drop-shadow-2xl ring-transparent border-transparent shadow-xl shadow-gray-300 rounded-lg p-5 flex justify-center mt-20"
          >
            <ClassesPage selectedClass={selectedClass} onClose={() => setClassesModalOpen(false)} />
          </Modal>
        </div>


      </div>


    </div>
  );
};

export default AdminDashboard;
