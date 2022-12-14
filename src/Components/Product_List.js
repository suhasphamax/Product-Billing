import React, { useState } from "react";
import { Input, Form, Label, FormGroup, Button } from 'reactstrap'

function Product_List(props)
{

    const product_list=props.items.map(item=>
        {
            return (
               
                <div key={item.name}>


                {item.name}                    
                </div>

                
                
            )

        })

        return product_list
    

}

export default Product_List;