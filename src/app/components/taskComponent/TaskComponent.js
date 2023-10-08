import React, { useState } from "react";
import { Task } from "./Task.styles";
import { AiOutlineStar, AiFillStar } from "react-icons/ai";

const TaskComponent = ({ item }) => {
	const [star, setStar] = useState(false);

	const handleChange = () => {
		setStar(!star);
	};
	return (
		<Task>
			<div className="flex items-center">
				<input
					id="default-checkbox"
					type="checkbox"
					defaultValue
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
