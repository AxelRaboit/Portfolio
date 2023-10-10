import mongoose, { Schema } from "mongoose";

const projectSchema = new Schema(
    {
        nameFR: {
            type: String,
            required: true,
        },
        descriptionFR: {
            type: String,
            required: true,
        },
        nameEN: {
            type: String,
            required: true,
        },
        descriptionEN: {
            type: String,
            required: true,
        },
        img: {
            type: String,
            required: false,
        },
        repoLink: {
            type: String,
            required: false,
        },
        demoLink: {
            type: String,
            required: false,
        },
        isAvailable: {
            type: Boolean,
            required: true,
            default: true,
        },
        technologies: {
            type: Array,
            required: false,
        }
    },
    {
        timestamps: true,
    }
);

const Project =
    mongoose.models.Project || mongoose.model("Project", projectSchema);

export default Project;
