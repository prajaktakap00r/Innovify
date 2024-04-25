import { FaSuitcaseRolling, FaCalendarCheck } from "react-icons/fa";
import { CiUser } from "react-icons/ci";
import { PiBag } from "react-icons/pi";
import { useLoaderData, redirect } from "react-router-dom";
import customFetch from "../utils/customFetch";
import Wrapper from "../assets/wrappers/StatsContainer";
import { toast } from "react-toastify";
import { StatItem } from "../components";

export const loader = async () => {
  try {
    const response = await customFetch.get("/users/admin/app-stats");
    return response.data;
  } catch (error) {
    toast.error("You are not authorized to view this page");
    return redirect("/dashboard");
  }
};
export default function Admin() {
  const { users, jobs } = useLoaderData();
  return (
    <Wrapper>
      <StatItem
        title="current users"
        count={users}
        color="#e9b949"
        bcg="#fcefc7"
        icon={<CiUser />}
      />
      <StatItem
        title="current jobs"
        count={jobs}
        color="#647acb"
        bcg="#e0e8f9"
        icon={<PiBag />}
      />
    </Wrapper>
  );
}
