"use client"

export default function DeleteUser(props) {
    const userId = props.id;
    console.log(userId);

    const deleteUser = async () => {
        let result = await fetch('http://localhost:3000/api/users/4' + userId, {
            method: 'delete'
        });
        result = await result.json()
        if(result.success){
            alert('user is deleted')
        }
    }
    return <button onClick={deleteUser}>Delete</button>
}