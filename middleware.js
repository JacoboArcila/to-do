import { getToken } from "next-auth/jwt";
import { NextResponse } from "next/server";

export async function middleware(req) {
	const session = await getToken({ req, secret: process.env.NEXTAUTH_SECRET });

	if (!session) {
		const requestedPage = req.nextUrl.pathname;
		const url = req.nextUrl.clone();
		url.pathname = "/signin";
		url.search = `p=${requestedPage}`;

		return NextResponse.redirect(url);
	}

	return NextResponse.next();
}

export const config = {
	matcher: ["/task", "/task/:path*"],
};
