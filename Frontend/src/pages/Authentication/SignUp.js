import React, { useState } from "react";
import { Input, Form, Label, FormGroup, Button, Table, Container, Row, Col } from 'reactstrap'



function SignUp() {

    const [UserDetails, setUserDetails] = useState(({
        name: "",
        email:"",
        phoneno:"",
        password:""

    }));

   



    return (
        <>
            <div className="container">
                <div className="ml-4 mt-2">
                <h3>
                    SignUp
                </h3>

                </div>
            
            <Form className="form" >
                <FormGroup className="row">
                    <Label for="Name" className="col-4">
                        Name
                    </Label>
                    <Input
                        className="col-6"

                        id="Name"
                        name="Name"
                        placeholder="Enter Name"
                        type="text"
                        value={UserDetails.name}
                        onChange={(e) => setUserDetails({ ...UserDetails, name: e.target.value })}
                    />
                </FormGroup>
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

                <FormGroup>
                    <Label for="Phone No">
                        Phone Number
                    </Label>
                    <Input
                        id="Phone No"
                        name="Phone No"
                        placeholder="Enter Phone Number"
                        type="number"
                        value={UserDetails.phoneno}
                        onChange={(e) => {
                            setUserDetails({ ...UserDetails, phoneno: e.target.value })
                        }}
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
                    <Button>
                        SignUp

                    </Button>
                </FormGroup>
                </Form>
               

            </div>


        </>
    )


}
export default SignUp;