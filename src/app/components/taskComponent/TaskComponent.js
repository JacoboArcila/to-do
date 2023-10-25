import React, { useState } from "react";
import { Task } from "./Task.styles";
import { AiOutlineStar, AiFillStar } from "react-icons/ai";
import { task } from "@/app/db/firebaseMethods";
import { doc, updateDoc } from "firebase/firestore";
import { useQuery } from "@tanstack/react-query";

const TaskComponent = ({ item }) => {
	const { data: taskInfo } = useQuery({
		queryKey: ["task"],
	});
	const [star, setStar] = useState(taskInfo?.completed);
	const [completed, setCompleted] = useState(taskInfo?.completed);

	const handleChange = async () => {
		setStar(!star);
		await updateDoc(doc(task, item.taskId), { important: !star });
	};

	const handleChangeCompleted = async () => {
		setCompleted((prev) => !prev);
		await updateDoc(doc(task, item.taskId), { completed: !completed });
	};
	return (
		<Task>
			<div className="flex items-center">
				<input
					id="default-checkbox"
					type="checkbox"
					value={true}
					onClick={(e) => handleChangeCompleted(e)}
					className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
				/>
			</div>
			<div className="task-text">
				<p className="task-title">{item.taskName}</p>
				<p className="task-date">{item.date}</p>
			</div>
			<div style={{ width: "100%", display: "flex", justifyContent: "flex-end" }} onClick={handleChange}>
				{star ? (
					<AiFillStar size={30} className="star" color="#D9415E" />
				) : (
					<AiOutlineStar size={30} className="star" />
				)}
			</div>
		</Task>
	);
};

export default TaskComponent;
