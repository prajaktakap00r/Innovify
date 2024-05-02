import { ChartsConatiner, StatsContainer } from "../components";
import customFetch from "../utils/customFetch";
import { useLoaderData } from "react-router-dom";

export const loader = async () => {
  return null;
};
export default function Stats() {
  return (
    <div>
      <h1>Stats Layout</h1>
    </div>
  );
}
