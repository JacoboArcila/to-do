import { getServerSession } from "next-auth";
import React from "react";
import { authOptions } from "../../../pages/api/auth/[...nextauth]";

const page = async () => {
	const session = await getServerSession(authOptions);
	return (
		<div>
			<h1>Aqui aparecerá el home del usuario {session?.user?.email}</h1>
		</div>
	);
};

export default page;
