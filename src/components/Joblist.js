import React, { useState } from 'react';

const jobData = [
  {
    "jobid": 1,
    "title": "Front-end Developer",
    "company": "ABC Company",
    "location": "New York, NY",
    "description": "We are seeking a talented Front-end Developer to join our team...",
    "applyLink": "https://example.com/apply"
  },
  {
    "jobid": 2,
    "title": "Back-end Developer",
    "company": "XYZ Corporation",
    "location": "San Francisco, CA",
    "description": "We are looking for an experienced Back-end Developer to work on our...",
    "applyLink": "https://example.com/apply"
  },
  {
    "jobid": 3,
    "title": "UI/UX Designer",
    "company": "DEF Design Studio",
    "location": "Chicago, IL",
    "description": "We are seeking a creative UI/UX Designer to join our design team...",
    "applyLink": "https://example.com/apply"
  },
  {
    "jobid": 4,
    "title": "Software Engineer",
    "company": "123 Tech Inc.",
    "location": "Seattle, WA",
    "description": "We are hiring a skilled Software Engineer to develop innovative software...",
    "applyLink": "https://example.com/apply"
  },
  {
    "jobid": 5,
    "title": "Data Scientist",
    "company": "Data Analytics Co.",
    "location": "Los Angeles, CA",
    "description": "We are looking for a data-driven Data Scientist to analyze and interpret data...",
    "applyLink": "https://example.com/apply"
  },
  {
    "jobid": 6,
    "title": "Marketing Specialist",
    "company": "Marketing Solutions Inc.",
    "location": "Boston, MA",
    "description": "We are seeking a dynamic Marketing Specialist to create and implement marketing...",
    "applyLink": "https://example.com/apply"
  }
];

const JobList = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const filteredJobs = jobData.filter((job) =>
    job.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    job.company.toLowerCase().includes(searchQuery.toLowerCase()) ||
    job.location.toLowerCase().includes(searchQuery.toLowerCase()) ||
    job.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <main>
      <section id="job-listings" className="container">
        <h2>Job Listings</h2>
        <input
          type="search"
          value={searchQuery}
          onChange={handleSearchChange}
          placeholder="Search jobs..."
          style={{ padding: '0.5em', marginBottom: '1em', width: '100%' }}
        />
        <div id="job-listings-container">
          {filteredJobs.map((job) => (
            <div key={job.jobid} className="job-listing">
              <h3>{job.title}</h3>
              <p>{job.company} - {job.location}</p>
              <p>{job.description}</p>
              <a href={job.applyLink} target="_blank" rel="noopener noreferrer">Apply Here</a>
            </div>
          ))}
          {filteredJobs.length === 0 && <p>No jobs found</p>}
        </div>
      </section>
    </main>
  );
};

export default JobList;
