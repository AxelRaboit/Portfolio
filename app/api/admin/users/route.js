import connectMongoDB from "@/libs/mongodb";
import User from "@/models/user";
import { NextResponse } from "next/server";

connectMongoDB();

/**
 * Get all users from the database
 */
export async function GET(request) {
    try {
        const users = await User.find({}, '-password'); // Exclude password from the response

        return NextResponse.json({
            users,
            success: true,
        });
    } catch (error) {
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}
