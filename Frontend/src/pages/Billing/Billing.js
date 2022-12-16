import React, { useState } from "react";
import ProductForm from "./ProductForm";
import BillingTable from "./BillingTable";

function Billing() {

    const [items, setItems] = useState([]);
    const [Bill_Amt, setBill_Amt] = useState();

    const [product_list, setProduct_list] = useState()
    const [UserDetails, setUserDetails] = useState(({
        name: "",
        phoneno: ""
    }));



    return (
        <>
            <div className="container">
                <ProductForm items={items} setItems={setItems} UserDetails={UserDetails} setUserDetails={setUserDetails} />
                <BillingTable items={items} setItems={setItems} product_list={product_list} setProduct_list={setProduct_list} Bill_Amt={Bill_Amt} setBill_Amt={setBill_Amt} ></BillingTable>

            </div>


        </>
    )


}
export default Billing;