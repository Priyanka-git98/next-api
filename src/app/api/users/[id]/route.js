import { user } from "@/util/db";
import { NextResponse } from "next/server";


export function GET(request, content){
    const userData = user.filter((item)=>item.id==content.params.id)
    return NextResponse.json(userData.length==0?{result: 'No Data Found'}:{result: userData[0]})
}

export async function PUT(request, content){
let payload = await request.json();
payload.id = content.params.id;
console.log(payload);

return NextResponse.json({result: payload})
}

export function DELETE(request, content){
    let id = content.params.id
    if(id){
        return NextResponse.json({result: 'user deleted'})
    }else{
        return NextResponse.json({result: 'internal error, please try after sometime'})
    }
}