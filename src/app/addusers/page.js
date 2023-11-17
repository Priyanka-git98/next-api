"use client"
import '../../style.css'
import { useState } from 'react'


export default function page() {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [age, setAge] = useState('')


    const addUser = async () => {
        // console.log(name, age, email)
        let response = await fetch("http://localhost:3000/api/users", {
            method: 'post',
            body: JSON.stringify({ name, age, email })
        });
        response = await response.json();
        console.log(response)
    }
    return (
        <div className='add-user'>
            <h1>
                Add new user
            </h1>
            <div >
                <input type="text" value={name} placeholder="Enter Name" onChange={(e) => setName(e.target.value)} className='input-field' />
                <input type="text" value={email} placeholder="Enter Email" onChange={(e) => setEmail(e.target.value)} className='input-field' />
                <input type="text" value={age} placeholder="Enter Age" onChange={(e) => setAge(e.target.value)} className='input-field' />
            </div>
            <button onClick={addUser} className='btn'>Add User</button>
        </div>
    )
}