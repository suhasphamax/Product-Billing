import axios from 'axios'
export async function PostBill(data)
{
    let response=await axios.post("http://localhost:5000/billing",data)
    return (response)
   }
