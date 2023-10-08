import { task } from "@/app/db/firebaseMethods";
import { getDocs, query, where } from "firebase/firestore";
import { NextResponse } from "next/server";

export async function GET(req) {
	try {
		const url = req.nextUrl.pathname;
		const id = url.substring("/api/task/fetch/".length);

		if (!id) {
			return NextResponse.status(400).json({ error: "Missing task ID parameter" });
		}

		const q = query(task, where("listId", "==", id));
		const querySnapshot = await getDocs(q);
		const todos = querySnapshot.docs.map((doc) => ({ ...doc.data(), taskId: doc.id }));

		return new Response(JSON.stringify({ todos }), {
			headers: {
				"Content-Type": "application/json",
			},
		});
	} catch (error) {
		console.error("Error:", error);
		return new Response(error?.message || "Internal Server Error", { status: 500 });
	}
}
