import { Container, Form } from "react-bootstrap";
import { useState } from "react";
import Address from "../models/Address";

const SignUpPage = () =>{

const [firstName , setFirstName] = useState ("");
const [lastName , setLastName] = useState ("");
const [email , setemail] = useState ("");
const [password , setPassword] = useState ("");
const [confirmPassword , setConfirmPassword] = useState ("");
const [dateOfBirth , setDateOfBirth] = useState <Date | undefined>();
const [address , setAddress] = useState <Address>{
    street: "",
    number: "",
    city: "",
    state: "",
    zip:"",
    country: "",

};



    return (
    <Container>
            <Form>
            <Form.Label htmlFor="inputPassword5">Password</Form.Label>
            <Form.Control
        type="password"
        id="inputPassword5"
        value={password}
        onChange={(e) => 
            setPassword(e.target.value)
        }></Form.Control>
    
            </Form>
        </Container>
    );
}

export default SignUpPage;