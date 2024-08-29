import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { FormEvent, useState } from "react";
import Address from "../models/Address";
import classes from "./SignUpPage.module.css";

//TODO : add validation for password
//TODO : age older than 18 years
const SignUpPage = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [validated, setValidated] = useState(false);
  const [dateOfBirth, setDateOfBirth] = useState<Date | undefined>();
  const [address, setAddress] = useState<Address>({
    street: "",
    number: "",
    city: "",
    state: "",
    zip: "",
    country: "",
  });

  const onSubmitHandler = (e: FormEvent<HTMLFormElement>) => {
    const form = e.currentTarget;

    e.preventDefault();
    e.stopPropagation();

    if (form.checkValidity() === false) {
      alert("Please fill out all the fields");
      return;
    }

    setValidated(true);

    if (password !== confirmPassword) {
      alert("Password do not match");
      return;
    }

    alert(
      JSON.stringify({
        firstName,
        lastName,
        email,
        dateOfBirth,
        address,
        password,
        confirmPassword,
      })
    );
  };

  // if (password !== confirmPassword) {
  //   alert("Password do not match");
  // }

  return (
    <Container className={classes.container}>
      <h3 className={classes.title}>Sign Up</h3>
      <Row>
        <Form noValidate validated={validated} onSubmit={onSubmitHandler}>
          <Row>
            <Col>
              <Form.Label htmlFor="firstName">First Name</Form.Label>
              <Form.Control
                type="text"
                id="firstName"
                required
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
              />
              <Form.Control.Feedback type="invalid">
                Invalid Input
              </Form.Control.Feedback>
            </Col>

            <Col>
              <Form.Label htmlFor="lasttName">Last Name</Form.Label>
              <Form.Control
                type="text"
                id="lastName"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
              />
            </Col>
          </Row>

          <Row>
            <Col>
              <Form.Label htmlFor="email">Email</Form.Label>
              <Form.Control
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </Col>

            <Col>
              <Form.Label htmlFor="dateOfBirth">Date Of Birth</Form.Label>
              <Form.Control
                type="date"
                id="dateOfBirth"
                value={dateOfBirth?.toISOString().split("T")[0] ?? ""}
                onChange={(e) => setDateOfBirth(new Date(e.target.value))}
              />
            </Col>
          </Row>

          <Row>
            <Col>
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
            </Col>
            <Col>
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
            </Col>
            <Col>
              <Form.Label htmlFor="city">City </Form.Label>
              <Form.Control
                type="text"
                id="city"
                value={address.city}
                onChange={(e) =>
                  setAddress((prevState) => ({
                    ...prevState,
                    city: e.target.value,
                  }))
                }
              />
            </Col>
          </Row>

          <Row>
            <Col>
              <Form.Label htmlFor="state">State </Form.Label>
              <Form.Control
                type="text"
                id="state"
                value={address.state}
                onChange={(e) =>
                  setAddress((prevState) => ({
                    ...prevState,
                    state: e.target.value,
                  }))
                }
              />
            </Col>
            <Col>
              <Form.Label htmlFor="zip">Zip </Form.Label>
              <Form.Control
                type="text"
                id="zip"
                value={address.zip}
                onChange={(e) =>
                  setAddress((prevState) => ({
                    ...prevState,
                    zip: e.target.value,
                  }))
                }
              />
            </Col>
            <Col>
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
            </Col>
          </Row>

          <Row>
            <Col>
              <Form.Label htmlFor="password">Password</Form.Label>
              <Form.Control
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </Col>
            <Col>
              <Form.Group>
                <Form.Label htmlFor="ConfirmPassword">
                  Confirm Password
                </Form.Label>
                <Form.Control
                  type="password"
                  id="ConfirmPassword"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                />
              </Form.Group>
            </Col>
          </Row>
          <br></br>
          <Row>
            <Button
              onClick={() => onSubmitHandler}
              variant="dark"
              className={classes.submit_btn}
              type="submit"
            >
              Sign UP
            </Button>
          </Row>
        </Form>
      </Row>
    </Container>
  );
};

export default SignUpPage;
