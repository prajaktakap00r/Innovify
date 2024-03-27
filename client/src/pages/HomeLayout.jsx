import React from "react";
import { Outlet } from "react-router-dom";

export default function HomeLayout() {
  return (
    <div>
      <Outlet />
    </div>
  );
}

//<Outlet />: Within the HomeLayout component's JSX, the Outlet component is used.
//This component acts as a placeholder where child routes will be rendered. When a
//route matches the path defined in the parent route (in this case, the home route),
//the components associated with that route will be rendered within the Outlet.
