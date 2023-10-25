import React from "react";
import Card from "../components/cardTask/Card";

const page = async () => {
	return (
		<div>
			<h1 style={{ fontSize: "40px", paddingTop: "30px" }}>Tasks</h1>
			<div>
				<Card />
			</div>
		</div>
	);
};

export default page;
