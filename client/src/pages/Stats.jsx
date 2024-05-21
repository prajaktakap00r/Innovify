import { ChartsConatiner, StatsContainer } from "../components";
import customFetch from "../utils/customFetch";
import { useLoaderData } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";

const statsQuery = {
  queryKey: ["stats"],
  queryFn: async () => {
    const response = await customFetch.get("/jobs/stats");
    return response.data;
  },
};

export const loader = async () => {
  return null;
  //const response = await customFetch.get("/jobs/stats");
  //return response.data;
};

export default function Stats() {
  const { isLoading, isError, data } = useQuery(statsQuery);

  const { defaultStats, monthlyApplications } = data;

  return (
    <>
      <StatsContainer defaultStats={defaultStats} />
      {monthlyApplications?.length > 1 && (
        <ChartsConatiner data={monthlyApplications} />
      )}
    </>
  );
}
