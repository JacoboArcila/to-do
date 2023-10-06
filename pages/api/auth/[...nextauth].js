import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth, db } from "@/app/firebase";
import { doc, getDoc } from "firebase/firestore";
export const authOptions = {
	// Configure one or more authentication providers
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
							const docRef = doc(db, `users/${userCredential.user.uid}`);
							const docSnap = await getDoc(docRef);
							if (docSnap.exists()) {
								const user = docSnap.data();
								console.log(user);
								const session = {
									...user,
									userId: userCredential.user.uid,
								};
								return session;
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
					});
			},
		}),
	],
};
export default NextAuth(authOptions);
