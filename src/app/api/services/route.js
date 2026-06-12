import clientPromise from "@/lib/mongodb";
import { NextResponse } from "next/server";

export async function GET() {
  const client = await clientPromise;

  const services = await client
    .db("orbixEdu")
    .collection("services")
    .find()
    .toArray();

  return NextResponse.json(services);
}