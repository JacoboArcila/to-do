import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth, db } from "@/app/firebase";
import { doc, getDoc } from "firebase/firestore";

let currentUserId = null;

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
							currentUserId = userCredential.user.uid;
							const docRef = doc(db, `users/${currentUserId}`);
							const docSnap = await getDoc(docRef);
							if (docSnap.exists()) {
								const user = docSnap.data();
								console.log(user);

								// Include additional data in the user object
								const userWithId = {
									...user,
									userId: currentUserId,
								};

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
					});
			},
		}),
	],
	callbacks: {
		// Customize the session object
		async session({ session }) {
			// Forward the userId property from the stored variable to the session
			session.user.userId = currentUserId || null;

			return session;
		},
	},
};
export default NextAuth(authOptions);
