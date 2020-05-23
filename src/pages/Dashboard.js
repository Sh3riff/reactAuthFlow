import React from "react";
import { Button } from "../components/AuthForm";
import { useAuth } from "../context/auth";

function Dashboard(props) {
  const { setAuthTokens } = useAuth();
  function logOut() {
    localStorage.removeItem('tokens');
    setAuthTokens("");
  }
  return (
    <div>
      <div>User Dashboard</div>
      <Button onClick={logOut}>Log out</Button>
    </div>
  );
}

export default Dashboard;