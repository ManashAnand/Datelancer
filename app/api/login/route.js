import {UserModel} from "@/Models/UserModel";
import { connectDB } from "@/lib/mongodb";
import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";

export async function POST(req) {
  let { email,password,toggle } = await req.json();
  await connectDB();

  try {
    let userDoc = await UserModel.findOne({ email }).populate("projects");
    // console.log(userDoc)

    if(!toggle && userDoc?.role != 'Freelancer'){
      return NextResponse.json(
        { user: "User is not registered as freelancer" },
        { status: 401 }
      );
    }
    else if(toggle && userDoc?.role != 'HR'){
      return NextResponse.json(
        { user: "User is not registered as HR" },
        { status: 401 }
      );
    }
    const passOk = bcrypt.compareSync(password, userDoc.password);
    if (passOk) {
      userDoc.password="";
      return NextResponse.json(
        { user: "User is registered", userDoc },
        { status: 200 }
      );
    }
    return NextResponse.json(
      { user: "User is not registered " },
      { status: 201 }
    );
  } catch (error) {
    console.log(error)
    return NextResponse.json(
      { user: "Error in fetching user data", error },
      { status: 500 }
    );
  }
}
