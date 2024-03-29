import DeleteUser from "@/util/DeleteUser";
import Link from "next/link";
import '../../style.css'

async function getUsers(){
    let data = await fetch('http://localhost:3000/api/users')
    data = await data.json();
    return data;
}


export default async function Page({params}){
    const users = await getUsers();
    console.log(users);
    return(
        <div>
            <h1>User list</h1>
            {users.map((item)=>(
                <div>
                    {/* {item.name} */}
                    <Link href={`users/${item.id}`}>{item.name}</Link>
                    <DeleteUser id={item.id}/>
                </div>
            ))}
        </div>
    )
}