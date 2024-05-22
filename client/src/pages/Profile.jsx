import { FormRow } from "../components";
import Wrapper from "../assets/wrappers/DashboardFormPage";
import { redirect, useOutletContext } from "react-router-dom";
import { Form } from "react-router-dom";
import customFetch from "../utils/customFetch";
import { toast } from "react-toastify";
import SubmitBtn from "../components/SubmitBtn";

export const action =
  (queryClient) =>
  async ({ request }) => {
    const formData = await request.formData();
    const file = formData.get("avatar");
    if (file && file.size > 500000) {
      toast.error("Image size is too large");
      return null;
    }
    try {
      await customFetch.patch("/users/update-user", formData);
      queryClient.invalidateQueries(["user"]);
      toast.success("Profile Updated Sucessfully!");
      return redirect("/dashboard");
    } catch (error) {
      toast.error(error?.response?.data?.msg);
      return null;
    }
  };

export default function Profile() {
  const { user } = useOutletContext();
  const { name, lastName, email, location } = user;

  return (
    <div>
      <Wrapper>
        <Form method="post" className="form" encType="multipart/form-data">
          {/* encType becuase we are not converting the formData into JSON, We are using it directly. */}
          <h4 className="form-title">Profile</h4>
          <div className="form-center">
            <div className="form-row">
              <label htmlFor="avatar" className="form-label">
                Select Img(Max 0.5MB)
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

            <SubmitBtn formBtn />
          </div>
        </Form>
      </Wrapper>
    </div>
  );
}
