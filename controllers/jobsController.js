const data = {
    jobs: require('../models/jobs.json'),
    setJobs: function(data) { this.jobs = data }
};

const getAllJobs = (req, res) => {
    res.json(data.jobs);
}

const createJob = (req, res) => {
    const newJob = {
        id: data.jobs?.length ? data.jobs[data.jobs.length - 1].id + 1 : 1,
        title: req.body.title,
        company: req.body.company,
        location: req.body.location,
        salary: req.body.salary
    }

    if (!newJob.title || !newJob.company || !newJob.location || !newJob.salary) {
        return res.status(400).json({ 'message': 'Title, company, location, and salary are required.' });
    }

    data.setJobs([...data.jobs, newJob]);
    res.status(201).json(data.jobs);
}

const updateJob = (req, res) => {
    const job = data.jobs.find(job => job.id === parseInt(req.body.id));
    if (!job) {
        return res.status(400).json({ "message": `Job ID ${req.body.id} not found` });
    }
    if (req.body.title) job.title = req.body.title;
    if (req.body.company) job.company = req.body.company;
    if (req.body.location) job.location = req.body.location;
    if (req.body.salary) job.salary = req.body.salary;
    
    const filteredArray = data.jobs.filter(job => job.id !== parseInt(req.body.id));
    const unsortedArray = [...filteredArray, job];
    data.setJobs(unsortedArray.sort((a, b) => a.id > b.id ? 1 : -1));
    res.json(data.jobs);
}

const deleteJob = (req, res) => {
    const job = data.jobs.find(job => job.id === parseInt(req.body.id));
    if (!job) {
        return res.status(400).json({ "message": `Job ID ${req.body.id} not found` });
    }
    const filteredArray = data.jobs.filter(job => job.id !== parseInt(req.body.id));
    data.setJobs([...filteredArray]);
    res.json(data.jobs);
}

const getJob = (req, res) => {
    const job = data.jobs.find(job => job.id === parseInt(req.params.id));
    if (!job) {
        return res.status(400).json({ "message": `Job ID ${req.params.id} not found` });
    }
    res.json(job);
}

module.exports = { getAllJobs, createJob, updateJob, deleteJob, getJob };
