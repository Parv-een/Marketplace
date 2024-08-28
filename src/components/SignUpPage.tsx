import { Container, Form } from "react-bootstrap";
import { useState } from "react";
import Address from "../models/Address";

const SignUpPage = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [dateOfBirth, setDateOfBirth] = useState<Date | undefined>();
  const [address, setAddress] = useState<Address>({
    street: "",
    number: "",
    city: "",
    state: "",
    zip: "",
    country: "",
  });

  return (
    <Container>
      <h3>Sign Up</h3>
      <Form>
        <Form.Label htmlFor="firstName">First Name</Form.Label>
        <Form.Control
          type="text"
          id="firstName"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
        />

        <Form.Label htmlFor="lasttName">Last Name</Form.Label>
        <Form.Control
          type="text"
          id="lastName"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
        />

        <Form.Label htmlFor="email">Email</Form.Label>
        <Form.Control
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <Form.Label htmlFor="dateOfBirth">Date Of Birth</Form.Label>
        <Form.Control
          type="date"
          id="dateOfBirth"
          value={dateOfBirth?.toISOString().split("T")[0] ?? ""}
          onChange={(e) => setDateOfBirth(new Date(e.target.value))}
        />

        <Form.Label htmlFor="streetNumber">Street Number</Form.Label>
        <Form.Control
          type="text"
          id="streetNumber"
          value={address.number}
          onChange={(e) =>
            setAddress((prevState) => ({
              ...prevState,
              number: e.target.value,
            }))
          }
        />

        <Form.Label htmlFor="streetName">Street Name</Form.Label>
        <Form.Control
          type="text"
          id="streetName"
          value={address.street}
          onChange={(e) =>
            setAddress((prevState) => ({
              ...prevState,
              street: e.target.value,
            }))
          }
        />

        <Form.Label htmlFor="city">City </Form.Label>
        <Form.Control
          type="text"
          id="city"
          value={address.city}
          onChange={(e) =>
            setAddress((prevState) => ({ ...prevState, city: e.target.value }))
          }
        />

        <Form.Label htmlFor="state">State </Form.Label>
        <Form.Control
          type="text"
          id="state"
          value={address.state}
          onChange={(e) =>
            setAddress((prevState) => ({ ...prevState, state: e.target.value }))
          }
        />

        <Form.Label htmlFor="zip">Zip </Form.Label>
        <Form.Control
          type="text"
          id="zip"
          value={address.zip}
          onChange={(e) =>
            setAddress((prevState) => ({ ...prevState, zip: e.target.value }))
          }
        />

        <Form.Label htmlFor="country">Country </Form.Label>
        <Form.Control
          type="text"
          id="country"
          value={address.country}
          onChange={(e) =>
            setAddress((prevState) => ({
              ...prevState,
              country: e.target.value,
            }))
          }
        />

        <Form.Label htmlFor="password">Password</Form.Label>
        <Form.Control
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <Form.Label htmlFor="ConfirmPassword">Confirm Password</Form.Label>
        <Form.Control
          type="password"
          id="ConfirmPassword"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
      </Form>
    </Container>
  );
};

export default SignUpPage;
