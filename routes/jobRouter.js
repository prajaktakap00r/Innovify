const { Router } = require("express");
const router = Router();

const {
  getAllJobs,
  createJob,
  getJob,
  editJob,
  deleteJob,
} = require("../controllers/JobController.js");

router.route("/").get(getAllJobs).post(createJob);
router.route("/:id").get(getJob).patch(editJob).delete(deleteJob);

module.exports = router;
