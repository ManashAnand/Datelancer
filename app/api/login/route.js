import UserModel from "@/Models/UserModel";
import { connectDB } from "@/lib/mongodb";
import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";

export async function POST(req) {
  let { email,password } = await req.json();
  await connectDB();

  try {
    let userDoc = await UserModel.findOne({ email });
    const passOk = bcrypt.compareSync(password, userDoc.password);
    if (passOk) {
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
    return NextResponse.json(
      { user: "Error in fetching user data", error },
      { status: 500 }
    );
  }
}
