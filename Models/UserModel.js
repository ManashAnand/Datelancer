const mongoose = require("mongoose");
import { ProjectModel } from "@/Models/ProjectModel";

import { JobModel } from "@/Models/JobModel";

const UserSchema = mongoose.Schema(
  {
    username: { type: String, required: true, min: 4, trim: true },
    password: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    role: { type: String, default: "Freelancer" },
    projects: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Project",
        default: () => [],
      },
    ],
    jobs: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Jobs",
        default: () => [],
      },
    ],
  },
  {
    timestamps: true,
  }
);

const UserModel = mongoose.models.User || mongoose.model("User", UserSchema);

export { UserModel };
