import React, { useState } from "react";
import { Input, Form, Label, FormGroup, Button, Table, Container, Row, Col } from 'reactstrap'

import { PostLoginIn } from "../../services/AuthApi";

function Login ()
{

    const [UserDetails, setUserDetails] = useState(({
        email: "",
        password: ""
    }));

    return (
        <>
            <div className="container">
                <h3>
                    SignIn
                </h3>
                <Form className="form" >
                    <FormGroup className="row">
                        <Label for="Email" className="col-4">
                            Email
                        </Label>
                        <Input
                            className="col-6"
                            id="Email"
                            name="Email"
                            placeholder="Enter Email"
                            type="email"
                            value={UserDetails.email}
                            onChange={(e) => setUserDetails({ ...UserDetails, email: e.target.value })}
                        />
                    </FormGroup>
                    <FormGroup className="row">
                        <Label for="Password" className="col-4">
                            Password
                        </Label>
                        <Input
                            className="col-6"
                            id="Password"
                            name="Password"
                            placeholder="Enter Password"
                            type="password"
                            value={UserDetails.password}
                            onChange={(e) => setUserDetails({ ...UserDetails, password: e.target.value })}
                        />
                    </FormGroup>
                    <FormGroup className="row">
                        <Button onClick={() => { PostLoginIn({ "UserDetails": UserDetails }) }}>
                            SignIn
                        </Button>
                    </FormGroup>
                </Form>
            </div>


        </>
    )


}
export default Login;