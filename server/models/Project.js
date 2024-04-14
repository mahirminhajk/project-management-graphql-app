import mongoose from "mongoose";

const ProjectSchema = new mongoose.Schema({
    name: {
        type: String,
    },
    description: {
        type: String,
    },
    status: {
        type: String,
        enum: ["Not Started", "In Progress", "Completed"],
    },
    client: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Client",
    },
});

export default mongoose.model("Project", ProjectSchema);