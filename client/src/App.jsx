import React from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import {
  HomeLayout,
  Landing,
  Register,
  Login,
  DashboardLayout,
  Error,
  AddJob,
  Stats,
  AllJobs,
  Profile,
  Admin,
  EditJob,
  DeleteJob,
} from "../src/pages";

import { action as registerAction } from "./pages/Register";
import { action as loginAction } from "./pages/Login";
import { loader as dashboardLoader } from "./pages/DashboardLayout";
import { action as addJobAction } from "./pages/AddJob";
import { loader as allJobsLoader } from "./pages/AllJobs";
import { action as editJobAction } from "./pages/EditJob";
import { loader as editJobsLoader } from "./pages/EditJob";
import { action as deleteJobAction } from "./pages/DeleteJob";
import { loader as adminLoader } from "./pages/Admin";
import { action as profileAction } from "./pages/Profile";
import { loader as statsLoader } from "./pages/Stats";
import ErrorElement from "./components/ErrorElement";

export const checkDefaultTheme = () => {
  const isDarkTheme = localStorage.getItem("darkTheme") === "true";
  document.body.classList.toggle("dark-theme", isDarkTheme);
  return isDarkTheme;
};
checkDefaultTheme();
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60 * 5,
    },
  },
});
const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Landing />,
      },
      {
        path: "register",
        element: <Register />,
        action: registerAction,
      },
      {
        path: "login",
        element: <Login />,
        action: loginAction,
      },
      {
        path: "DashBoard",
        element: <DashboardLayout queryClient={queryClient} />,

        loader: dashboardLoader(queryClient),
        children: [
          {
            index: true,
            element: <AddJob />,
            action: addJobAction,
          },
          {
            path: "stats",
            element: <Stats />,
            loader: statsLoader(queryClient),
            errorElement: <ErrorElement />,
          },
          {
            path: "profile",
            element: <Profile />,
            action: profileAction,
          },
          {
            path: "admin",
            element: <Admin />,
            loader: adminLoader,
          },
          {
            path: "all-jobs",
            element: <AllJobs />,
            loader: allJobsLoader,
          },
          {
            path: "edit-job/:id",
            element: <EditJob />,
            action: editJobAction,
            loader: editJobsLoader,
          },
          {
            path: "delete-job/:id",
            element: <DeleteJob />,
            action: deleteJobAction,
          },
        ],
      },
    ],
  },
]);

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}
