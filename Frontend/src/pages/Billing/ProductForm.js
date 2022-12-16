import React, { useCallback, useEffect, useState } from "react";
import { Input, Form, Label, FormGroup, Button, Table, Container, Row, Col } from 'reactstrap'

function ProductForm(props) {

    const [current_item, setcurrent_item] = useState({
        product_name: "",
        price: 0,
        quantity: 0,
        total_price: 0
    })

    function add_product() {

        if (current_item.product_name && current_item.price && current_item.quantity) {
    
            const items_mapping=props.items.filter((item)=>{
                return item.product_name==current_item.product_name
            })
            if(items_mapping.length!=0)
            {
    
                alert("Product Already Added")
               
            }
            else{
    
                props.setItems([...props.items, current_item])
            }
    
            
            setcurrent_item({
                product_name: "",
                quantity: 0,
                price: 0,
                total_price: 0
            })
            
    
        }
        else {
            alert("Fill All Form details")
        }
    
    }

  
    
   return (

        <>
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
                        value={props.UserDetails.name}
                        onChange={(e) => props.setUserDetails({ ...props.UserDetails, name: e.target.value })}
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
                        value={props.UserDetails.phoneno}
                        onChange={(e) => {
                            props.setUserDetails({ ...props.UserDetails, phoneno: e.target.value })
                        }}
                    />
                </FormGroup>
                <FormGroup>
                    <Label for="product_name">
                        Product Name
                    </Label>
                    <Input
                        id="product_name"
                        name="product_name"
                        placeholder="Enter Product Name"
                        type="text"
                        value={current_item.product_name}
                        onChange={(e) => setcurrent_item({ ...current_item, product_name: e.target.value })}
                    />
                </FormGroup>
                <FormGroup >
                    <Label for="product_price">
                        Price
                    </Label>
                    <Input
                        id="product_price"
                        name="product_price"
                        placeholder="Enter Product Price"
                        type="number"
                        value={current_item.price}
                        onChange={(e) => setcurrent_item({
                            ...current_item, price: e.target.value,
                            total_price: e.target.value * current_item.quantity
                        })}
                    />
                </FormGroup>
                <FormGroup >
                    <Label for="quantity">
                        Quantity
                    </Label>
                    <Input
                        id="quantity"
                        name="quantity"
                        placeholder="Enter Quantity"
                        type="number"
                        value={current_item.quantity}
                        onChange={(e) => setcurrent_item({
                            ...current_item, quantity: e.target.value,
                            total_price: current_item.price * e.target.value
                        })}
                    />
                </FormGroup>
                <FormGroup>
                    <Label for="Total Price">
                        Total Price
                    </Label>
                    <Input
                        id="Total Price"
                        name="Total Price"
                        type="text"
                        disabled
                        value={current_item.price * current_item.quantity}
                    />
                </FormGroup>
                <FormGroup >
                    <Button onClick={() => add_product()}>
                        Add Product
                    </Button>
                </FormGroup>
           </Form>
           </>)
}
export default ProductForm;