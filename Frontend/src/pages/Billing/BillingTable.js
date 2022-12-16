import React, { useEffect } from "react";
import { Button, Table } from 'reactstrap'

function BillingTable(props) {
    let items = props.items

    function remove_product(selected_product) {

        let updated_items = items.filter((item) => {
            return item.product_name != selected_product.product_name
        })
        props.setItems(updated_items)

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

        props.setItems(updated_items)

    }

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

        props.setBill_Amt(bill_amt)
        props.setProduct_list(Product_table)
    }, [props.items])

    return (
        <>
            <div>
                {props.product_list}

            </div>
            <div className="offset-4 mb-4">
                <b> Bill Amount: Rs {props.Bill_Amt}</b>
            </div>

        </>
    )

}
export default BillingTable;