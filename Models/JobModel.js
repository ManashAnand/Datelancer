const mongoose = require("mongoose");

const JobSchema = mongoose.Schema({
  JobTitle: { type: String, required: true, min: 4,trim:true },
  broadSkill: { type: String},
  JobDescription: { type: String,},
  Tags: [{type:String}],
  skillsRequired: {type:String},
  WorkExperience: {type:String}
},{
  timestamps: true 
});

const JobModel = mongoose.models.Jobs || mongoose.model("Jobs", JobSchema);
export { JobModel };