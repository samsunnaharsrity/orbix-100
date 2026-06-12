import clientPromise from "@/lib/mongodb";

export async function GET() {
  const client = await clientPromise;

  const reviews = await client
    .db("orbixEdu")
    .collection("reviews")
    .find({})
    .toArray();

  return Response.json(reviews);
}