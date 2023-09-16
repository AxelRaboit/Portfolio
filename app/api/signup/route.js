/* import connectMongoDB from "@/libs/mongodb";
import User from "@/models/user";
import { hash } from "bcryptjs";
import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    const { fullname, email, password, isVerified, isAdmin } = await request.json();
    await connectMongoDB();
    const userExists = await User.findOne({ email });

    if (userExists) {
      return NextResponse.json({ message: "User already exists" }, { status: 409 });
    }

    if (password.length < 8) {
      return NextResponse.json({ message: "Password must be at least 8 characters long" }, { status: 400 });
    }

    const hashedPassword = await hash(password, 12);

    const newUser = new User({ fullname, email, password: hashedPassword, isVerified, isAdmin });

    await newUser.save();

    const userData = {
      email: newUser.email,
      fullname: newUser.fullname,
      isVerified: newUser.isVerified,
      isAdmin: newUser.isAdmin,
      _id: newUser._id,
    };

    return NextResponse.json({ message: "User Created", user: userData }, { status: 201 });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ message: "Internal server error" }, { status: 500 });
  }
}

export async function GET() {
  try {
    await connectMongoDB();
    const users = await User.find();
    return NextResponse.json({ users });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ message: "Internal server error" }, { status: 500 });
  }
}

export async function DELETE(request) {
  try {
    const id = request.nextUrl.searchParams.get("id");
    await connectMongoDB();
    const user = await User.findById(id);

    if (!user) {
      return NextResponse.json({ message: "User not found" }, { status: 404 });
    }

    await user.remove();

    return NextResponse.json({ message: "User deleted" }, { status: 200 });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ message: "Internal server error" }, { status: 500 });
  }
} */

import connectMongoDB from "@/libs/mongodb";
import User from "@/models/user";
import { NextResponse } from "next/server";
import bcryptjs from "bcryptjs";
/* import { sendEmail } from "@/helpers/mailer"; */


connectMongoDB()

export async function POST(request){
    try {
        const reqBody = await request.json()
        const {fullname, email, password} = reqBody

        console.log(reqBody);

        //check if user already exists
        const user = await User.findOne({email})

        if(user){
            return NextResponse.json({error: "User already exists"}, {status: 400})
        }

        //hash password
        const salt = await bcryptjs.genSalt(10)
        const hashedPassword = await bcryptjs.hash(password, salt)

        const newUser = new User({
            fullname,
            email,
            password: hashedPassword
        })

        const savedUser = await newUser.save()
        console.log(savedUser);

        //send verification email

        /* await sendEmail({email, emailType: "VERIFY", userId: savedUser._id}) */

        return NextResponse.json({
            message: "User created successfully",
            success: true,
            savedUser
        })
        
        


    } catch (error) {
        return NextResponse.json({error: error.message}, {status: 500})

    }
}