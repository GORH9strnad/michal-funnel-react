import { Fragment } from "react";
import { useParams } from "react-router-dom";

function TokenManager({ children }) {
  const { routeToken } = useParams();

  

  return <Fragment>{children}</Fragment>;
}
