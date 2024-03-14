import { Link, useRouteError } from "react-router-dom";

export default function Error() {
  const err = useRouteError();
  console.log(err);
  return (
    <div>
      <h1>Error Layout</h1>
      <Link to="/">Back Home</Link>
    </div>
  );
}
