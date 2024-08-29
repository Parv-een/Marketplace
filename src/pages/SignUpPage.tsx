import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { FormEvent, useState } from "react";
import Address from "../models/Address";
import classes from "./SignUpPage.module.css";
import FormInput from "../components/FormInput";

const getMaxDate = () => {
  const date = new Date();
  date.setFullYear(date.getFullYear() - 18);
  return date;
};

//done : add validation for password
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
              <FormInput
                type="text"
                required
                title="First Name"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
              ></FormInput>
            </Col>

            <Col>
              <FormInput
                type="text"
                required
                title="Last Name"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
              ></FormInput>
            </Col>
          </Row>

          <Row>
            <Col>
              <FormInput
                type="email"
                required
                title="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              ></FormInput>
            </Col>

            <Col>
              <FormInput
                type="date"
                required
                title="Date Of Birth"
                value={dateOfBirth}
                onChange={(e) => setDateOfBirth(new Date(e.target.value))}
                max={getMaxDate().toISOString().split("T")[0]}
              ></FormInput>
            </Col>
          </Row>

          <Row>
            <Col>
              <FormInput
                type="text"
                required
                title="Street Number"
                value={address.number}
                onChange={(e) =>
                  setAddress((prevState) => ({
                    ...prevState,
                    number: e.target.value,
                  }))
                }
              ></FormInput>
            </Col>
            <Col>
              <FormInput
                type="text"
                required
                title="Street Name"
                value={address.street}
                onChange={(e) =>
                  setAddress((prevState) => ({
                    ...prevState,
                    street: e.target.value,
                  }))
                }
              ></FormInput>
            </Col>
            <Col>
              <FormInput
                type="text"
                required
                title="City"
                value={address.city}
                onChange={(e) =>
                  setAddress((prevState) => ({
                    ...prevState,
                    city: e.target.value,
                  }))
                }
              ></FormInput>
            </Col>
          </Row>

          <Row>
            <Col>
              <FormInput
                type="text"
                required
                title="State"
                value={address.state}
                onChange={(e) =>
                  setAddress((prevState) => ({
                    ...prevState,
                    state: e.target.value,
                  }))
                }
              ></FormInput>
            </Col>
            <Col>
              <FormInput
                type="text"
                required
                title="Zip"
                value={address.zip}
                onChange={(e) =>
                  setAddress((prevState) => ({
                    ...prevState,
                    zip: e.target.value,
                  }))
                }
              ></FormInput>
            </Col>
            <Col>
              <FormInput
                type="text"
                required
                title="Country"
                value={address.country}
                onChange={(e) =>
                  setAddress((prevState) => ({
                    ...prevState,
                    country: e.target.value,
                  }))
                }
              ></FormInput>
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
          {password !== confirmPassword && <Row> Password do not match</Row>}
          <br></br>
          <Row>
            <Button
              disabled={password !== confirmPassword || !email}
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
