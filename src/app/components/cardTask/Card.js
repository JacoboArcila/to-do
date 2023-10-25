"use client";
import { useQuery } from "@tanstack/react-query";
import React from "react";
import { Container, ContainerCard } from "./Card.styles";
import { useRouter } from "next/navigation";

const Card = () => {
	const router = useRouter();
	const { data: task } = useQuery({
		queryKey: ["taskList"],
	});
	return (
		<Container>
			{task?.map((item) => (
				<ContainerCard key={item.listId} onClick={() => router.push(`task/${item.listId}`)}>
					<h3>{item.listName}</h3>
				</ContainerCard>
			))}
			<h1></h1>
		</Container>
	);
};

export default Card;
