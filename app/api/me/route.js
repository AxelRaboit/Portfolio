import { getDataFromToken } from "@/helpers";

import { NextResponse } from "next/server";
import User from "@/models/user";
import connectMongoDB from "@/libs/mongodb";

connectMongoDB();

export async function GET(request){

    try {
        const userId = await getDataFromToken(request);

        if(userId){
            const user = await User.findOne({_id: userId}).select("-password");
            
            return NextResponse.json({
                message: "User found",
                data: user
            })
        }

    } catch (error) {
        return NextResponse.json({error: error.message}, {status: 400});
    }

}