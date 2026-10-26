"use server"
import { revalidatePath } from "next/cache"

 export const createUser =async(formData)=>{
    const newUsers = Object  .fromEntries(formData.entries())
    const res = await fetch("http://localhost:5000/users",{
        method:"POST",
        headers:{
            'content-type':'application/json'
        },
        body:JSON.stringify(newUsers)
    })
    if(!res.ok){
        throw new Error("failed to fetch data by post method")
    }
    const data = await res .json(newUsers)
    revalidatePath('/users')
    return data
}