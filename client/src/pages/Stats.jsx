import { ChartsConatiner, StatsContainer } from "../components";
import customFetch from "../utils/customFetch";
import { useLoaderData } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
export const loader = async () => {
  return null;
  //const response = await customFetch.get("/jobs/stats");
  //return response.data;
};

export default function Stats() {
  const { isLoading, isError, data } = useQuery({
    queryKey: ["stats"],
    queryFn: () => customFetch.get("/jobs/stats"),
  });
  if (isLoading) return <h4>Loading...</h4>;
  if (isError) return <h4>Error...</h4>;
  const { defaultStats, monthlyApplications } = data.data;

  return (
    <>
      <StatsContainer defaultStats={defaultStats} />
      {monthlyApplications?.length > 1 && (
        <ChartsConatiner data={monthlyApplications} />
      )}
    </>
  );
}
