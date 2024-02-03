
import { UserModel } from "@/Models/UserModel";
import { NextResponse } from "next/server";
import { connectDB } from "@/lib/mongodb";

export async function GET(req,{params}) {
    let {id} = params
  await connectDB();
  try {
    const projects = await UserModel.findById(id).populate('projects',' -email -password -username');

    if(projects){
        return NextResponse.json({
            userProjects:projects,
        },{status:200})
    }
    else{
        return NextResponse.json({
            user: "User doesn't have projects",
        },{
            status: 400
        })
    }

  } catch (error) {
    console.log(error)
    return NextResponse.json(
        error,
      { status: 500 }
    );
  }
}
