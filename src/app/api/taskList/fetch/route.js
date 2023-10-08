import { tasksFirebase } from "@/app/db/firebaseMethods";
import { getDocs, query, where } from "firebase/firestore";
import { NextResponse } from "next/server";

export async function GET(req) {
	try {
		const cookie = req.cookies.get("userId");
		const userId = cookie.value;

		if (!userId) {
			return NextResponse.status(400).json({ error: "Missing userId parameter" });
		}

		let todos = [];

		const q = query(tasksFirebase, where("userId", "==", userId));

		const querySnapshot = await getDocs(q);

		todos = querySnapshot.docs.map((doc) => ({ ...doc.data(), userId: doc.id }));

		return new Response(JSON.stringify({ todos }), {
			headers: {
				"Content-Type": "application/json",
			},
		});
	} catch (error) {
		console.error("Error:", error); // Loguea el error
		return new Response(error?.message || "Internal Server Error", { status: 500 });
	}
}
