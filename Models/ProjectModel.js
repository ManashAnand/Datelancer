const mongoose = require("mongoose");

const ProjectSchema = mongoose.Schema({
  projectTitle: { type: String, required: true, min: 4,trim:true },
  broadSkill: { type: String},
  projectDescription: { type: String,},
  Tags: [{type:String}],
  skillsRequired: {type:String},
  WorkExperience: {type:String}
},{
  timestamps: true 
});

const ProjectModel = mongoose.models.Project || mongoose.model("Project", ProjectSchema);
export { ProjectModel };