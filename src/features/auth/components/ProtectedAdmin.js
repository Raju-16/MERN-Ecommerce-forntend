import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

function ProtectedAdmin({ children }) {
  const user = useSelector((state) => state.auth.loggedInUserToken);
  const userInfo = useSelector((state) => state.user.userInfo);

  if (!user) {
    return <Navigate to="/login" replace={true} />;
  }
  if (user && userInfo.role !== "admin") {
    return <Navigate to="/" replace={true} />;
  }

  return children;
}

export default ProtectedAdmin;
