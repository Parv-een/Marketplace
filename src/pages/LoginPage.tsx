import { Row } from "react-bootstrap";

export default function LoginPage() {
  return (
    <div>
      Login Page
      <a href="sign-up">Return to Sign Up Page</a>
      <Row>
        <a href="/">Return to Dashboard</a>
        <a href="landing-page">Landing Page</a>
      </Row>
    </div>
  );
}
