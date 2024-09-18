// src/Submissions.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Submissions = () => {
  const [submissions, setSubmissions] = useState([]);

  useEffect(() => {
    const fetchSubmissions = async () => {
      const response = await axios.get( 'http://127.0.0.1:8000/api/formdata/');
      setSubmissions(response.data);
    };
    fetchSubmissions();
  }, []);

  return (
    <div>
      <h2>Submissions</h2>
      <ul>
        {submissions.map((submission, index) => (
           <li key={index}>{submission.name}  {submission.email}  {submission.message}  </li>
        ))}
      </ul>

    </div>
  );
};

export default Submissions;
