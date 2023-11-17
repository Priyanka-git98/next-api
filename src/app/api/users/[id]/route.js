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