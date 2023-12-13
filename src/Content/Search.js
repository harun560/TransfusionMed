// Search.js
import React, { useState } from "react";

export default function Search({ onSearch }) {
    const [fName, setName] = useState("");
    const [lName, setlName] = useState("");
    const [dob, setDOB] = useState("");

  const handleSearch = () => {
    // Pass the search term to the parent component
    onSearch(fName, lName, dob);
  };

  return (
    <div>
      <input
        type="text"
        placeholder=" First Name"
        value={fName}
        onChange={(e) => setName(e.target.value)}
      />
      <input
      type="text"
      placeholder="Last Name"
      value={lName}
      onChange={(e)=>setlName(e.target.value)}
      />
      <input 
      type = "text"
      placeholder="DOB"
      value = {dob}
      onChange={(e)=> setDOB(e.target.value)}
      />

      <button onClick={handleSearch}>Search</button>
    </div>
  );
}
