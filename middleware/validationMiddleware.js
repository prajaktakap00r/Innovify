import { body, param, validationResult } from "express-validator";
import { BadRequestError, NotFoundError } from "../errors/customError.js";
import { JOB_STATUS, JOB_TYPE } from "../utils/constants.js";
import mongoose from "mongoose";
import Job from "../models/JobModels.js";
import User from "../models/UserModel.js";

const withValidationErrors = (validateValues) => {
  return [
    validateValues,
    (req, res, next) => {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        const errorMessages = errors.array().map((error) => error.msg);
        if (errorMessages[0].startsWith("no job")) {
          throw new NotFoundError(errorMessages);
        }
        throw new BadRequestError(errorMessages);
      }
      next();
    },
  ];
};
//validation for everry input
export const validateJobInput = withValidationErrors([
  body("company").notEmpty().withMessage("company is required"),
  body("position").notEmpty().withMessage("position is required"),
  body("jobLocation").notEmpty().withMessage("job location is required"),
  body("jobStatus")
    .isIn(Object.values(JOB_STATUS))
    .withMessage("invalid status value"),
  body("jobType")
    .isIn(Object.values(JOB_TYPE))
    .withMessage("invalid type value"),
]);
export const validateIdParam = withValidationErrors([
  param("id").custom(async (value) => {
    const isValidId = mongoose.Types.ObjectId.isValid(value);
    if (!isValidId) throw new BadRequestError("invalid MONGODB id");
    const job = await Job.findById(value);
    if (!job) throw new NotFoundError(`no job with this id ${value}`);
  }),
]);

export const validateInputRegister = withValidationErrors([
  body("name").notEmpty().withMessage("name is required"),
  body("email")
    .notEmpty()
    .withMessage("email is required")
    .isEmail()
    .custom(async (email) => {
      const user = await User.findOne({ email });
      if (user) {
        throw new BadRequestError("email already exist");
      }
    }),
  body("location").notEmpty().withMessage("location is required"),
  body("password")
    .notEmpty()
    .withMessage("password is required")
    .isLength({ min: 8, max: 20 })
    .withMessage("password must be 8 characters long"),
  body("lastName").notEmpty().withMessage("last name is required"),
]);

export const validateInputLogin = withValidationErrors([
  body("email")
    .notEmpty()
    .withMessage("email is required")
    .isEmail()
    .withMessage("invalid email formats"),
  body("password").notEmpty().withMessage("password is required"),
]);
