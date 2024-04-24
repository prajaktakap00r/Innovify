import { FormRow, FromRowSelect } from "../components";
import Wrapper from "../assets/wrappers/DashboardFormPage";
import { useLoaderData } from "react-router-dom";
import { JOB_STATUS, JOB_TYPE } from "../../../utils/constants";
import { Form, useNavigation, redirect } from "react-router-dom";
import { toast } from "react-toastify";
import customFetch from "../utils/customFetch";

export const loader = async () => {
  return null;
};
export const action = async () => {
  return null;
};
export default function EditJob() {
  return (
    <div>
      <h1>Edit Job Layout</h1>
    </div>
  );
}
