import UserModel from "@/Models/UserModel";
import { connectDB } from "@/lib/mongodb";
import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";

var salt = bcrypt.genSaltSync(10);
const secret  = process.env.BCRYPT_SECRET;
// console.log(secret)

export async function POST(req) {
  let { username, email, password,role  } =
    await req.json();
  await connectDB();
  
    try {
        const userRole = role ? "HR":"Freelancer" ;
        const user = await UserModel.create({
          username,
           email,
           password: bcrypt.hashSync(password, salt),
          role:userRole
        
         });
         return NextResponse.json({ user }, { status: 200 }, { message: "User Registered" },);
         } catch (error) {
           console.log(error);
           return NextResponse.json(
             { message: "Error in registering user" },
             { status: 500 }
           );
         }
}
