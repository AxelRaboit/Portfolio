import connectMongoDB from "@/libs/mongodb";
import Skill from "@/models/skill";
import { NextResponse } from "next/server";

export async function POST(request) {
  const { icon, nameFR, nameEN, descriptionFR, descriptionEN } = await request.json();
  await connectMongoDB();
  await Skill.create({ icon, nameFR, nameEN, descriptionFR, descriptionEN });
  return NextResponse.json({ message: "Skill Created" }, { status: 201 });
}

export async function GET() {
  await connectMongoDB();
  const skills = await Skill.find();
  return NextResponse.json({ skills });
}

export async function DELETE(request) {
  const id = request.nextUrl.searchParams.get("id");
  await connectMongoDB();
  await Skill.findByIdAndDelete(id);
  return NextResponse.json({ message: "Skill deleted" }, { status: 200 });
}