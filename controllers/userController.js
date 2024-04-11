import { StatusCodes } from "http-status-codes";
import User from "../models/UserModel";
import Job from "../models/JobModels";

export const getCurrentUser = async (req, res) => {
  res.status(StatusCodes.OK).json({ msg: "get Current User" });
};
export const getApplicationStats = async (req, res) => {
  res.status(StatusCodes.OK).json({ msg: "application stats" });
};
export const updateUser = async (req, res) => {
  res.status(StatusCodes.OK).json({ msg: "User updated" });
};
