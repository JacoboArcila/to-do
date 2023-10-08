import { useQuery } from "@tanstack/react-query";
import { ButtonMenu } from "../navbar/Navbar.styles";
import { BsListTask } from "react-icons/bs";
import { IoIosArrowForward } from "react-icons/io";
import { useRouter } from "next/navigation";

export default function TaskList() {
	const { data: taskLists } = useQuery({
		queryKey: ["taskList"],
		queryFn: async () => {
			const response = await fetch("/api/taskList/fetch");
			const datos = await response.json();
			return datos.todos;
		},
	});
	const router = useRouter();

	return (
		<>
			{taskLists?.map((list) => (
				<ButtonMenu key={list.listId} onClick={() => router.push(`/task/${list.listId}`)}>
					<BsListTask className="icon" color="#5946D2" />
					<button>{list.listName}</button>
					<div className="container-arrow">
						<IoIosArrowForward className="arrow" />
					</div>
				</ButtonMenu>
			))}
		</>
	);
}
