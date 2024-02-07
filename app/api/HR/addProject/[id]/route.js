import {UserModel} from "@/Models/UserModel";
import { connectDB } from "@/lib/mongodb";
import { NextResponse } from "next/server";
import {JobModel} from "@/Models/JobModel";

export async function PUT(req,{params}) {
    try {
        
    const {id} = params
    let {JobTitle,WorkExperience,option, value,skillValue,tags } = await req.json();
    // console.log(id);
  
    // console.log('Received Data:');
    // console.log('JobTitle:', JobTitle);
    // console.log('WorkExperience:', WorkExperience);
    // console.log('selectedOption:', option);
    // console.log('value:', value);
    // console.log('skillValue:', skillValue);
    // console.log('tags:', tags);
    await connectDB();
    const userToUpdate  = await UserModel.findById({ _id:id });
    // console.log(userToUpdate)
    if (!userToUpdate) {
        return NextResponse.json(
          { error: "User not found" },
          { status: 404 }
        );
      }

      const newJob = new JobModel({
        JobTitle,
        WorkExperience,
        broadSkill: option,
        JobDescription: value,
        skillsRequired: skillValue,
        Tags: tags,
        
      });

      await newJob.save();
      if (!userToUpdate.Jobs) {
        userToUpdate.Jobs = []; 
      }
      userToUpdate.Jobs.push(newJob?.id);
      await userToUpdate.save();

      return NextResponse.json(
        { message: 'User and Job updated successfully' },
        { status: 200 }
      );

    } catch (error) {
        console.error('Error updating user:', error);

        return NextResponse.json(
          { error: 'Internal server error' },
          { status: 500 }
        );
    }
    
}
