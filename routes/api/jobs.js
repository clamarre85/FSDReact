// routes/api/jobs.js
const express = require('express');
const router = express.Router();

// Sample data for jobs
const jobs = [
  {
    jobid: 1,
    title: 'Software Developer',
    company: 'Tech Corp',
    location: 'New York, NY',
    description: 'We are looking for a skilled Software Developer...',
    applyLink: 'https://example.com/apply1'
  },
  {
    jobid: 2,
    title: 'Back-end Developer',
    company: 'XYZ Corporation',
    location: 'San Francisco, CA',
    description: 'We are looking for an experienced Back-end Developer to work on our...',
    applyLink: 'https://example.com/apply2'
  }
];

// GET jobs
router.get('/', (req, res) => {
  res.json(jobs);
});

module.exports = router;
