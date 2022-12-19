import axios from 'axios'
export async function PostSignUp(data)
{
    let response=await axios.post("http://localhost:5000/auth/signup",data)
    console.log(response)
}

export async function PostLoginIn(data)
{
    let response=await axios.post("http://localhost:5000/auth/login",data)
    console.log(response)
}
