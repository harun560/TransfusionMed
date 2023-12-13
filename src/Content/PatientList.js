// PatientList.js
<<<<<<< HEAD
import React, { useState } from "react";
import patientsData from "./patient.json";
import "./PatientList.css";
import Search from "./Search";

const PatientList = (props) => {
  const patientsPerPage = 10;
  const [currentPage, setCurrentPage] = useState(1);
  const [searchedPatients, setSearchedPatients] = useState(null);

  const indexOfLastPatient = currentPage * patientsPerPage;
  const indexOfFirstPatient = indexOfLastPatient - patientsPerPage;
  const currentPatients = searchedPatients
    ? searchedPatients.slice(indexOfFirstPatient, indexOfLastPatient)
    : patientsData.patients.slice(indexOfFirstPatient, indexOfLastPatient);

  const totalPages = Math.ceil(
    (searchedPatients ? searchedPatients.length : patientsData.patients.length) /
      patientsPerPage
  );

  const handleSearch = (fName, lName, dob) => {
    // Convert dob to lowercase for case-insensitive search
    const lowercaseDOB = dob.toLowerCase();

    // Filter patients based on the search terms
    const filteredPatients = patientsData.patients.filter(
      (patient) =>
        patient.firstName.toLowerCase().includes(fName.toLowerCase()) &&
        patient.lastName.toLowerCase().includes(lName.toLowerCase())  &&
        patient.dob.toLowerCase().includes(lowercaseDOB.toLowerCase())
    );
    

    // Update searched patients and reset current page to 1
    setSearchedPatients(filteredPatients.length > 0 ? filteredPatients : null);
    setCurrentPage(1);
  };

  const renderPagination = () => {
    const pageNumbers = [];

    for (let i = 1; i <= totalPages; i++) {
      pageNumbers.push(
        <li
          key={i}
          className={i === currentPage ? "active" : ""}
          onClick={() => setCurrentPage(i)}
        >
          {i}
        </li>
      );
    }

    return <ul className="pagination">{pageNumbers}</ul>;
  };

  return (
    <div className="patient-list-container">
      {/* Pass the handleSearch function to the Search component */}
      <Search onSearch={handleSearch} />
      <table className="patient-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Date of Birth</th>
            <th>Blood Type</th>
            <th>Transfused in the last three months</th>
          </tr>
        </thead>
        <tbody>
          {currentPatients.map((patient) => (
            <tr key={patient.id}>
              <td>{`${patient.firstName} ${patient.lastName}`}</td>
              <td>{patient.dob}</td>
              <td>{patient.bloodType}</td>
              <td>{patient.transfusedLastThreeMonths ? "Yes" : "No"}</td>
            </tr>
          ))}
        </tbody>
      </table>
     
      {renderPagination()}
=======

import patientsData from "./patient.json"


const PatientList = (props) => {
  return (
    <div>
       <thead></thead>
      <ul>
        {patientsData.patients.map(patient => (
          <li key={patient.id}>
            {`${patient.firstName} ${patient.lastName} - DOB: ${patient.dob}, Blood Type: ${patient.bloodType},
             Transfused in the last three months:
              ${patient.transfusedLastThreeMonths ? 'Yes' : 'No'}`}
          </li>
        ))}
      </ul>
    
>>>>>>> 475a7af135a085880b26e92503d820f4b7ae4212
    </div>
  );
};

export default PatientList;
