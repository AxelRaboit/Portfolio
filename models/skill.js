import mongoose, { Schema } from "mongoose";

const skillSchema = new Schema(
    {
        icon: {
            type: String,
            required: true,
        },
        nameFR: {
            type: String,
            required: true,
        },
        nameEN: {
            type: String,
            required: true,
        },
        descriptionFR: {
            type: String,
            required: true,
        },
        descriptionEN: {
            type: String,
            required: true,
        },
    },
    {
        timestamps: true,
    }
);

const Skill =
    mongoose.models.Skill || mongoose.model("Skill", skillSchema);

export default Skill;
