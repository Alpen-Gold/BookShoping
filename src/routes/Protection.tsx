import type { ReactNode } from "react";
import { Navigate } from "react-router-dom";

type RouteProps = {
  children: ReactNode;
};

const getToken = () => {
  const token = localStorage.getItem("token");
  if (!token || token === "null" || token === "undefined") return null;
  return token;
};

export const ProtectedRoute = ({ children }: RouteProps) => {
  const token = getToken();

  console.log("token", token);

  if (!token) {
    return <Navigate to="/register" replace />;
  }

  return children;
};

export const PublicRoute = ({ children }: RouteProps) => {
  const token = getToken();

  if (token) {
    return <Navigate to="/" replace />;
  }

  return children;
};
