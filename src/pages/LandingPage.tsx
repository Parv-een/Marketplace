import { useState } from "react";
import Users from "../models/Users";
import { Navigate } from "react-router-dom";

export default function LandingPage() {
  const [user, setUser] = useState<Users>();

  return user ? (
    <div>Landing page is under Construction</div>
  ) : (
    <Navigate to="/sign-up" />
  );
}
