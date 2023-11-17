import { user } from "@/util/db";
import { NextResponse } from "next/server";

// export async function GET(request){
//     return NextResponse.json({name:'priyanka', city:'Gorgaon', age:'25'})
// }

export function GET(){
    const data = user;
    return NextResponse.json(data)
}

export async function POST(request){
    let payload = await request.json();
    console.log(payload.name);

    if (!payload.name || !payload.age || !payload.email){
        return NextResponse.json({result: 'require field not found', success: false})
    }
    return NextResponse.json({result:'Post request', success: true})
}