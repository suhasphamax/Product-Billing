import React, { useCallback, useEffect, useState } from "react";
import { Input, Form, Label, FormGroup, Button, Table, Container, Row, Col } from 'reactstrap'



function Billing() {
    const [UserDetails, setUserDetails] = useState(({
        name: "",
        phoneno: ""
    }));

    const [items, setItems] = useState([]);
    const [Bill_Amt, setBill_Amt] = useState(0);
    const [product_list, setProduct_list] = useState()
    const [current_item, setcurrent_item] = useState({
        product_name: "",
        price: 0,
        quantity: 0,
        total_price: 0
    })

    useEffect(() => {

        let list = []
        let bill_amt = 0
        if (items.length > 0) {
            list = items?.map((item, index) => {

                bill_amt = bill_amt + item.total_price

                return (
                    <>

                        <tr key={index}>
                            <td>{index + 1}</td>
                            <td > {item?.product_name}</td>
                            <td>{item?.price}</td>
                            <td>
                                <span>
                                    <Button onClick={() => updateitem(item, "decrease")}>-</Button>
                                </span>
                                {item?.quantity}
                                <span>
                                    <Button onClick={() => updateitem(item, "increase")}>+</Button>
                                </span>
                            </td>
                            <td>{item?.total_price}</td>
                            <td className="p-2"> <Button onClick={() =>
                                remove_product(item)}>
                                Remove Product
                            </Button></td>
                        </tr>

                    </>

                )

            })
        }

        const Product_table = () => {
            return (
                <>

                    <Table bordered>

                        <thead>
                            <tr>
                                <th scope="row">SL NO</th>
                                <th>Product Name</th>
                                <th>Price</th>
                                <th>Quantity


                                </th>
                                <th>Total Price</th>
                            </tr>
                        </thead>
                        <tbody>
                            {list}
                        </tbody>
                    </Table>
                </>
            )
        }

        setBill_Amt(bill_amt)
        setProduct_list(Product_table)




    }, [items])


    function add_product() {

        if (current_item.product_name && current_item.price && current_item.quantity) {

            const items_mapping=items.filter((item)=>{
                return item.product_name==current_item.product_name
            })
            if(items_mapping.length!=0)
            {

                alert("Product Already Added")
               
            }
            else{

                setItems([...items, current_item])
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

    function remove_product(selected_product) {

        let updated_items = items.filter((item) => {
            return item.product_name != selected_product.product_name
        })
        setItems(updated_items)

    }

    function updateitem(selected_product, type) {
        let updated_items = items?.map((item) => {
            if (item.product_name == selected_product.product_name) {
                if (type == 'increase') {
                    item.quantity = parseInt(selected_product.quantity) + 1
                    item.total_price = item.price * item.quantity

                }
                else {
                    item.quantity = parseInt(selected_product.quantity) - 1
                    item.total_price = item.price * item.quantity

                }
            }

            return item


        })

        // TO Remove any items whose quantity becomes zero
        updated_items = updated_items.filter((item) => {
            return item.quantity != 0
        })

        setItems(updated_items)

    }

    return (
        <>
            <div className="container" >
                <h1 className="offset-4 col-6 mt-4">
                    Product Billing
                </h1>

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


                    </FormGroup >

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

                <div className="Bill">
                    <div>
                        <h4>
                            <span className="p-3">
                                Customer Name : {UserDetails.name}
                            </span>
                            <span>
                                Phone No : {UserDetails.phoneno}

                            </span>

                        </h4>

                    </div>


                    <div>
                        {product_list}
                    </div>
                    <div className="offset-5">

                        Bill Amount : Rs {Bill_Amt}
                    </div>

                </div>
            </div>
        </>

    );
}

export default Billing;
