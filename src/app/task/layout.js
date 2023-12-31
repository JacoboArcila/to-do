import SessionProvider from "../SessionProvider";
import { authOptions } from "../../../pages/api/auth/[...nextauth]";
import { getServerSession } from "next-auth";
import Navbar from "../components/navbar/Navbar";

export default async function TaskLayout({ children }) {
	const session = await getServerSession(authOptions);
	return (
		<section>
			<SessionProvider>
				<Navbar info={session?.user} />
				<section style={{ paddingLeft: "22%", backgroundColor: "#544794", height: "100vh" }}>{children}</section>
			</SessionProvider>
		</section>
	);
}
