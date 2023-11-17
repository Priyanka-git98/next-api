async function getUser(id){
    let data = await fetch(`http://localhost:3000/api/users/${id}`)
    data = await data.json();
    return data.result;
}

export default async function Page({params}){
    // console.log(params)
    const user = await getUser(params.userid);
    console.log(user)
    return(
        <div>
            <h2>User detail</h2>
            <h2>name: {user.name}</h2>
            <h2>age:{user.age}</h2>
            <h2>city: {user.city}</h2>
            <h2>email: {user.email}</h2>
        </div>
    )
}