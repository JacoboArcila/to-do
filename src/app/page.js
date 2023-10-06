"use client";
import { useRouter } from "next/navigation";
import styles from "./page.module.css";
/* import { signOut, useSession } from "next-auth/react"; */
import Image from "next/image";

export default function Home() {
	const router = useRouter();
	/* const session = useSession({
		require: true,
		onUnauthenticated() {
			redirect("/signin");
		},
	}); */
	return (
		<main className={styles.main}>
			{/* <div>{session?.data?.user?.email}</div>
			<button onClick={() => router.push("/signin")}>SignIn</button>
			<button onClick={() => signOut()}>Logout</button> */}
			<div className={styles.text}>
				<Image src="/logo.png" alt="minilogo" width={100} height={100} />
				<h1>Welcome to Uno To Do!</h1>
				<p>Start using the best to-do app, you can create and manage your To Do lists to improve your organization.</p>
				<button className={styles.button_start} onClick={() => router.push("/signin")}>
					{" "}
					Get started{" "}
				</button>
			</div>
			<div className={styles.image}>
				<Image src="/ilustration.png" alt="logo" width={1000} height={1000} />
			</div>
		</main>
	);
}

Home.requireAuth = true;
