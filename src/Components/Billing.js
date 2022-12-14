import React, { useCallback, useEffect, useState } from "react";
import { Input, Form, Label, FormGroup, Button } from 'reactstrap'



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
        quantity: 0,
        price: 0,
        total_price: 0
    })

    useEffect(() => {

        const list = items?.map((item, index) => {
            return (

                <div key={index}>
                    <div className="p-2">
                        <span >
                        {item.product_name +" "}
                        </span>
                        <span>
                        {item.quantity +" "}
                        </span>
                        <span>
                        {item.price+" "  }
                        </span>
                        <span>
                        {item.total_price}
                        </span>
                        <span>
                            <Button onClick={()=>
                            remove_product(item)}>
                                Remove Product
                            </Button>
                        </span>
                    
                    
                    </div>


                   
                </div>

            )

        })

        setProduct_list(list)
    }, [items])



    function add_product() {

        setItems([...items, current_item])
        setBill_Amt((prev_amt)=>current_item.total_price+prev_amt)
        setcurrent_item({
            product_name: "",
            quantity: 0,
            price: 0,
            total_price: 0
        })
        
        
        

    }

    function remove_product(selected_product) {

        let updated_items=items.filter((item)=>
        {
           return item.product_name!=selected_product.product_name
        })
        setItems(updated_items)
        setBill_Amt((prev_amt)=>prev_amt-selected_product.total_price)
        
        
        
        

    }









    return (
        <>
            <div>

                <Form>
                    <FormGroup>
                        <Label for="Name">
                            Name
                        </Label>
                        <Input
                            id="Name"
                            name="Name"
                            placeholder="Enter Name"
                            type="text"
                            value={UserDetails.name}
                            onChange={(e) => setUserDetails({ ...UserDetails, name: e.target.value })}
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
                            onChange={(e) => setUserDetails({ ...UserDetails, phoneno: e.target.value })}
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
                    <FormGroup>
                        <Label for="product_price">
                            Price
                        </Label>
                        <Input
                            id="product_price"
                            name="product_price"
                            placeholder="Enter Product Price"
                            type="number"
                            value={current_item.price}
                            onChange={(e) => setcurrent_item({ ...current_item, price: e.target.value,
                                total_price:e.target.value*current_item.quantity })}
                        />
                    </FormGroup>
                    <FormGroup>
                        <Label for="quantity">
                            Quantity
                        </Label>
                        <Input
                            id="quantity"
                            name="quantity"
                            placeholder="Enter Quantity"
                            type="text"
                            value={current_item.quantity}
                            onChange={(e) => setcurrent_item({ ...current_item, quantity: e.target.value,
                                total_price:current_item.price*e.target.value})}
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

                    <FormGroup>
                        <Button onClick={()=>add_product()}>
                            Add Product
                        </Button>
                    </FormGroup>


                </Form>
                                <div>
                                {product_list}
                                </div>
                
               
                <div>
                    <span>
                        Bill Amount : {Bill_Amt}
                    </span>
                </div>


            </div>






        </>

    );
}

export default Billing;
