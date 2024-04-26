import { FormRow } from "../components";
import Wrapper from "../assets/wrappers/DashboardFormPage";
import { useOutletContext } from "react-router-dom";
import { useNavigation, Form } from "react-router-dom";
import customFetch from "../utils/customFetch";
import { toast } from "react-toastify";
export default function Profile() {
  const { user } = useOutletContext();
  const { name, lastName, email, location } = user;
  const navigation = useNavigation();
  const isSubmitting = navigation.state === "submitting";
  return (
    <div>
      <Wrapper>
        <Form method="post" className="form" encType="multipart/form-data">
          <h4 className="form-title">Profile</h4>
          <div className="form-center">
            <div className="form-row">
              <label htmlFor="avatar" className="form-label">
                Select Img(Max 500KB)
              </label>
              <input
                type="file"
                id="avatar"
                className="form-input"
                name="avatar"
              />
            </div>
            <FormRow type="text" name="name" defaultValue={name} />
            <FormRow
              type="text"
              name="lastName"
              labelText="last name"
              defaultValue={lastName}
            />
            <FormRow type="text" name="location" defaultValue={location} />
            <FormRow type="email" name="email" defaultValue={email} />

            <button
              type="submit"
              disabled={isSubmitting}
              className="btn form-btn btn-block"
            >
              {isSubmitting ? "Submitting.." : "Submit"}
            </button>
          </div>
        </Form>
      </Wrapper>
    </div>
  );
}
