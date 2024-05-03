import React, { useState, useEffect } from 'react';
import api from '../../axiosConfig'; 


const Jobs = () => {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const response = await api.get('/admin/jobs');
        setJobs(response.data);
        console.log(response);
      } catch (error) {
        console.error('Error fetching jobs:', error);
      }
    };

    fetchJobs();
  }, []);

  return (
    <div>
      <h2>Job Listings</h2>
      <ul>
        {jobs?.map(job => (
          <li key={job.id}>{job.description}</li>
        ))}
      </ul>
    </div>
  );
}

export default Jobs;
