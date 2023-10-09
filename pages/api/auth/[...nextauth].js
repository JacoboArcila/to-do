import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth, db } from "@/app/firebase";
import { doc, getDoc } from "firebase/firestore";
import Cookies from "js-cookie";
import { setCookie } from "nookies";
import { Toast } from "@/app/utils/Toast";

let currentUserId = null;

export const authOptions = (req, res) => {
	// Configure one or more authentication providers
	return {
		pages: {
			signIn: "/signin",
		},
		providers: [
			CredentialsProvider({
				name: "Credentials",
				credentials: {},
				async authorize(credentials) {
					return await signInWithEmailAndPassword(auth, credentials.email || "", credentials.password || "")
						.then(async (userCredential) => {
							if (userCredential.user) {
								currentUserId = userCredential.user.uid;
								const docRef = doc(db, `users/${currentUserId}`);
								const docSnap = await getDoc(docRef);
								if (docSnap.exists()) {
									const user = docSnap.data();
									Cookies.set("userId", userCredential.user.uid);
									setCookie({ res }, "userId", userCredential.user.uid, {
										maxAge: 2 * 24 * 60 * 60,
										path: "/",
										httpOnly: true,
									});
									// Include additional data in the user object
									const userWithId = {
										...user,
										userId: currentUserId,
									};
									Toast.success("Successful login");
									return Promise.resolve(userWithId);
								}
							}
							return null;
						})
						.catch((error) => {
							console.log(error);
						})
						.catch((error) => {
							const errorCode = error.code;
							const errorMessage = error.message;
							console.error(errorCode);
							console.error(errorMessage);
							Toast.error("Login error");
						});
				},
			}),
		],
		callbacks: {
			async session({ session }) {
				session.user.userId = currentUserId || null;
				return session;
			},
		},
	};
};
export default (req, res) => {
	return NextAuth(req, res, authOptions(req, res));
};
