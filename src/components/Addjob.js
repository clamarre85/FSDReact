import React, { useState, useEffect } from 'react';

const AddJob = () => {
  const [jobs, setJobs] = useState([]);
  const [jobTitle, setJobTitle] = useState("");
  const [jobLocation, setJobLocation] = useState("");
  const [jobDescription, setJobDescription] = useState("");
  const [jobWebsite, setJobWebsite] = useState("");
  const [responseMes, setResponseMes] = useState("");

  useEffect(() => {
    const savedJobs = localStorage.getItem("jobs");
    if (savedJobs) {
      setJobs(JSON.parse(savedJobs));
    }
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!jobTitle.trim() || !jobLocation.trim() || !jobDescription.trim() || !jobWebsite.trim()) {
      setResponseMes("Please fill all fields");
      return;
    }

    const jobData = {
      title: jobTitle,
      location: jobLocation,
      description: jobDescription,
      website: jobWebsite,
    };

    const updatedJobs = [...jobs, jobData];
    setJobs(updatedJobs);
    localStorage.setItem("jobs", JSON.stringify(updatedJobs));
    setResponseMes("Job Post Successful");

    setJobTitle("");
    setJobLocation("");
    setJobDescription("");
    setJobWebsite("");
  };

  const handleDelete = (jobId) => {
    const updatedJobs = jobs.filter((job, index) => index !== jobId);
    setJobs(updatedJobs);
    localStorage.setItem("jobs", JSON.stringify(updatedJobs));
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Job Title</label>
          <input
            type="text"
            value={jobTitle}
            onChange={(e) => setJobTitle(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label>Job Location</label>
          <input
            type="text"
            value={jobLocation}
            onChange={(e) => setJobLocation(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label>Job Description</label>
          <textarea
            value={jobDescription}
            onChange={(e) => setJobDescription(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label>Job Website</label>
          <input
            type="text"
            value={jobWebsite}
            onChange={(e) => setJobWebsite(e.target.value)}
          />
        </div>
        <button type="submit">Submit Job</button>
      </form>
      <p>{responseMes}</p>
      <div>
        <h3>Job List</h3>
        <ul>
          {jobs.map((job, index) => (
            <li key={index}>
              <h4>{job.title}</h4>
              <p>{job.location}</p>
              <p>{job.description}</p>
              <p><a href={job.website} target="_blank" rel="noopener noreferrer">Website</a></p>
              <button onClick={() => handleDelete(index)}>Delete</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default AddJob;




