import mongoose, { Schema } from "mongoose";

const testimonialSchema = new Schema(
    {
        name: {
            type: String,
            required: true,
        },
        position: {
            type: String,
            required: true,
        },
        stars: {
            type: Number,
            required: true,
        },
        description: {
            type: String,
            required: true,
        },
        img: {
            type: String,
            required: false,
        },
        isValid: {
            type: Boolean,
            required: true,
        },
    },
    {
        timestamps: true,
    }
);

const Testimonial =
    mongoose.models.Testimonial || mongoose.model("Testimonial", testimonialSchema);

export default Testimonial;
