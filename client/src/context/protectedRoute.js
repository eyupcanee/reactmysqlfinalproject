import { useContext } from "react";
import { Navigate } from "react-router-dom";
import AuthContext from "./authContext";

const ProtectedRoute = ({ children, accessBy, authType }) => {
  const { currentUser } = useContext(AuthContext);

  if (accessBy === "non-authenticated") {
    if (!currentUser) {
      return children;
    } else {
      return (
        <Navigate
          to="/
      "
        ></Navigate>
      );
    }
  } else if (accessBy === "authenticated") {
    if (currentUser) {
      return children;
    } else {
      return <Navigate to="login"></Navigate>;
    }
  }
  return <Navigate to="/"></Navigate>;
};

export default ProtectedRoute;
