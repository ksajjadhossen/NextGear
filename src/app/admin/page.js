import dbConnect from "@/lib/mongodb";

export default async function AdminDashboard({ searchParams }) {
  const { uid } = await searchParams;
  await dbConnect();

  const user = await userModel.findOne({ uid });

  if (!user || user.role !== "admin") {
    return <h1>Access Denied! You are not an admin.</h1>;
  }

  return (
    <div>
      <h1>Welcome, Admin!</h1>
      {/* এখানে আপনার অ্যাডমিন কন্টেন্ট থাকবে */}
    </div>
  );
}
