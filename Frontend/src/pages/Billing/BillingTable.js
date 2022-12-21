import React, { useEffect, useState } from "react";
import { Table, Button, Modal, ModalFooter, ModalHeader, ModalBody } from 'reactstrap'
import { PostBill } from "../../services/BillingApi";

function BillingTable(props) {

    const [billStatus, setBillStatus] = useState(null)
    const [modal, setModal] = useState(false);

    // Toggle for Modal
    const toggle = () => setModal(!modal);

    let items = props.items

    function remove_product(selected_product) {
        let updated_items = items.filter((item) => {
            return item.productName != selected_product.productName
        })
        props.setItems(updated_items)
    }
    function updateitem(selected_product, type) {
        let updated_items = items?.map((item) => {
            if (item.productName == selected_product.productName) {
                if (type == 'increase') {
                    item.quantity = parseInt(selected_product.quantity) + 1
                    item.totalPrice = item.price * item.quantity
                }
                else {
                    item.quantity = parseInt(selected_product.quantity) - 1
                    item.totalPrice = item.price * item.quantity
                }
            }
            return item
        })

        // TO Remove any items whose quantity becomes zero
        updated_items = updated_items.filter((item) => {
            return item.quantity != 0
        })
        props.setItems(updated_items)
    }

    useEffect(() => {

        let list = []
        let bill_amt = 0
        if (items.length > 0) {
            list = items?.map((item, index) => {

                bill_amt = bill_amt + item.totalPrice

                return (
                    <>
                        <tr key={index}>
                            <td>{index + 1}</td>
                            <td > {item?.productName}</td>
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
                            <td>{item?.totalPrice}</td>
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
        props.setBill_Amt(bill_amt)
        props.setProduct_list(Product_table)
    }, [props.items])

    async function SubmitBill() {
        if (props.items.length != 0 && props.UserDetails.customerName != ""
        && props.UserDetails.contactNumber && props.billAmount != 0) {
            let response = await PostBill({
                "data": {
                    "items": props.items,
                    "UserDetails": props.UserDetails,
                    "billAmount": props.Bill_Amt
                }
            })
            setBillStatus(response)
        }
        else{
            alert("Fill All Bill Details.")
        }



    }
    useEffect(() => {

        if (billStatus?.data) {
            setModal(true)
        }
        if (billStatus?.status == 200) {
            props.setBill_Amt(0)
            props.setItems([])
            props.setUserDetails(
                {
                    customerName: "",
                    contactNumber: ""
                }
            )
        }

    }, [billStatus])

    return (
        <>
            <div>
                {props.product_list}

            </div>
            <div className="offset-4 mb-4">
                <b> Bill Amount: Rs {props.Bill_Amt}</b>
            </div>
            <div className="offset-4 mb-4">
                <Button onClick={() => SubmitBill()}>
                    Save Bill
                </Button>
            </div>

            <Modal isOpen={modal}>
                <ModalHeader toggle={toggle} >Product Billing</ModalHeader>
                <ModalBody>
                    {billStatus?.data}
                </ModalBody>
            </Modal>

        </>
    )
}
export default BillingTable;