import {UserModel} from "@/Models/UserModel";
import { connectDB } from "@/lib/mongodb";
import { NextResponse } from "next/server";
import {ProjectModel} from "@/Models/ProjectModel";

export async function PUT(req,{params}) {
    try {
        
    const {id} = params
    let {projectTitle,WorkExperience,option, value,skillValue,tags } = await req.json();
    // console.log(id);
  
    // console.log('Received Data:');
    // console.log('projectTitle:', projectTitle);
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

      const newProject = new ProjectModel({
        projectTitle,
        WorkExperience,
        broadSkill: option,
        projectDescription: value,
        skillsRequired: skillValue,
        Tags: tags,
      });

      await newProject.save();
      if (!userToUpdate.projects) {
        userToUpdate.projects = []; 
      }
      userToUpdate.projects.push(newProject?.id);
      await userToUpdate.save();

      return NextResponse.json(
        { message: 'User and Project updated successfully' },
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
