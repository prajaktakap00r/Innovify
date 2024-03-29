const { v4: uuidv4 } = require("uuid");
let jobs = [
  { id: uuidv4(), company: "apple", position: "front-end" },
  { id: uuidv4(), company: "google", position: "back-end" },
];
const getAllJobs = async (req, res) => {
  res.status(200).json({ jobs });
};

const createJob = async (req, res) => {
  const { company, position } = req.body;
  if (!company || !position) {
    return res.status(400).json({ msg: "please provide company and position" });
  }
  const id = uuidv4(10);

  const job = { id, company, position };
  jobs.push(job);
  res.status(201).json({ job });
};

const getJob = async (req, res) => {
  const { id } = req.params;
  const job = jobs.find((job) => job.id === id);
  if (!job) {
    throw new Error("NO job with that id");
    return res.status(404).json({ msg: `NO Job with id ${id}` });
  }
  res.status(200).json({ job });
};

const editJob = async (req, res) => {
  const { company, position } = req.body;
  if (!company || !position) {
    return res.status(400).json({ msg: "Please enter company and position" });
  }
  const { id } = req.params;
  const job = jobs.find((job) => job.id === id);
  if (!job) {
    return res.status(404).json({ msg: `No job with id ${id}` });
  }
  job.company = company;
  job.position = position;
  res.status(200).json({ msg: "job modified", job });
};

const deleteJob = async (req, res) => {
  const { id } = req.params;
  const job = jobs.find((job) => job.id === id);
  if (!job) {
    return res.status(404).json({ msg: `no job with id ${id}` });
  }
  const newJobs = jobs.filter((job) => job.id !== id);
  jobs = newJobs;

  res.status(200).json({ msg: "job deleted" });
};
module.exports = { getAllJobs, createJob, getJob, editJob, deleteJob };
