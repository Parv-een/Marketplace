import { useState } from "react";
import Users from "../models/Users";
import { Navigate, useLocation } from "react-router-dom";

export default function LandingPage() {
  const { state } = useLocation();
  const [user] = useState<Users>(state?.user);

  return user ? (
    <div>Landing page is under Construction</div>
  ) : (
    <Navigate to="/sign-up" />
  );
}
