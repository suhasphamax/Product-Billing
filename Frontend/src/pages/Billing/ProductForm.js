import React, { useCallback, useEffect, useState } from "react";
import { Input, Form, Label, FormGroup, Button, Table, Container, Row, Col } from 'reactstrap'

function ProductForm(props) {

    const [current_item, setcurrent_item] = useState({
        productName: "",
        price: 0,
        quantity: 0,
        totalPrice: 0
    })

    function add_product() {

        if (current_item.productName && current_item.price && current_item.quantity) {

            const items_mapping=props.items.filter((item)=>{
                return item.productName==current_item.productName
            })
            if(items_mapping.length!=0)
            {

                alert("Product Already Added")

            }
            else{

                props.setItems([...props.items, current_item])
            }
            setcurrent_item({
                productName: "",
                quantity: 0,
                price: 0,
                totalPrice: 0
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
                        value={props.UserDetails.customerName}
                        onChange={(e) => props.setUserDetails({ ...props.UserDetails, customerName: e.target.value })}
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
                        value={props.UserDetails.contactNumber}
                        onChange={(e) => {
                            props.setUserDetails({ ...props.UserDetails, contactNumber: e.target.value })
                        }}
                    />
                </FormGroup>
                <FormGroup>
                    <Label for="productName">
                        Product Name
                    </Label>
                    <Input
                        id="productName"
                        name="productName"
                        placeholder="Enter Product Name"
                        type="text"
                        value={current_item.productName}
                        onChange={(e) => setcurrent_item({ ...current_item, productName: e.target.value })}
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
                            totalPrice: e.target.value * current_item.quantity
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
                            totalPrice: current_item.price * e.target.value
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