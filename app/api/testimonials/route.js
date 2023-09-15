import connectMongoDB from "@/libs/mongodb";
import Testimonial from "@/models/testimonial";
import { NextResponse } from "next/server";

export async function POST(request) {
  const { name, position, stars, description, img, isValid } = await request.json();
  await connectMongoDB();
  await Testimonial.create({ name, position, stars, description, img, isValid });
  return NextResponse.json({ message: "Testimonial Created" }, { status: 201 });
}

export async function GET() {
  await connectMongoDB();
  const testimonials = await Testimonial.find();
  return NextResponse.json({ testimonials });
}

export async function DELETE(request) {
  const id = request.nextUrl.searchParams.get("id");
  await connectMongoDB();
  await Testimonial.findByIdAndDelete(id);
  return NextResponse.json({ message: "Testimonial deleted" }, { status: 200 });
}