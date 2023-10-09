"use client";
import { useQuery } from "@tanstack/react-query";
import React, { useState } from "react";
import { ContainerTask } from "./task.styles";
import { createTask, currentTask } from "@/app/db/firebaseMethods";
import TaskComponent from "@/app/components/taskComponent/TaskComponent";
import { AiOutlinePlus } from "react-icons/ai";
import { TextField } from "@mui/material";
import { v4 as uuidv4 } from "uuid";
import "react-toastify/dist/ReactToastify.css";
import { Toast } from "@/app/utils/Toast";
import { toast } from "react-toastify";

const page = ({ params }) => {
	// eslint-disable-next-line react-hooks/rules-of-hooks
	const [showModal, setShowModal] = useState(false);
	// eslint-disable-next-line react-hooks/rules-of-hooks
	const [taskName, setTaskName] = useState("");
	// eslint-disable-next-line react-hooks/rules-of-hooks
	const [description, setDescription] = useState("");
	// eslint-disable-next-line react-hooks/rules-of-hooks
	const [date, setDate] = useState("");
	const { id } = params;
	// eslint-disable-next-line react-hooks/rules-of-hooks
	const { data: task } = useQuery({
		queryKey: ["task"],
		queryFn: async () => {
			const response = await fetch(`/api/task/fetch/${id}`);
			const datos = await response.json();
			return datos.todos;
		},
	});

	// eslint-disable-next-line react-hooks/rules-of-hooks
	const { data: taskList } = useQuery({
		queryKey: ["currentTaskList"],
		queryFn: async () => {
			const response = await currentTask(id);
			return response[0];
		},
	});

	const idTask = uuidv4();

	const handleCreateTask = async () => {
		const idtoast = toast.loading("Please wait...", {
			position: toast.POSITION.BOTTOM_RIGHT,
		});
		const info = {
			taskName: taskName,
			description: description,
			completed: false,
			listId: id,
			taskId: idTask,
			date: date,
		};
		await createTask(idTask, info);
		Toast.update(idtoast, "Task created successfully", "success");
	};

	return (
		<ContainerTask>
			<div>
				<h1 className="list-title">{taskList?.listName}</h1>
			</div>
			<div className="list-tasks">
				{task?.length === 0 ? "Add Task" : task?.map((item) => <TaskComponent key={item.taskId} item={item} />)}
			</div>
			<div className="add-task">
				<div className="container-task" onClick={() => setShowModal(true)}>
					<AiOutlinePlus size={30} color="white" />
					<h4>Add a task</h4>
				</div>
			</div>
			{showModal ? (
				<>
					<div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
						<div className="relative w-auto my-6 mx-auto max-w-3xl">
							<div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-black outline-none focus:outline-none">
								<div className="flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t">
									<h3 className="text-3xl font-semibold">Create New List</h3>
									<button
										className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
										onClick={() => setShowModal(false)}
									>
										<span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
											×
										</span>
									</button>
								</div>
								<div className="flex flex-col gap-4 relative p-6 flex-auto">
									<TextField
										onChange={(e) => setTaskName(e.target.value)}
										sx={{ backgroundColor: "rgba(255, 255,255,0.5)" }}
										label="Task Name"
										variant="filled"
									/>
									<TextField
										onChange={(e) => setDescription(e.target.value)}
										sx={{ backgroundColor: "rgba(255, 255,255,0.5)" }}
										label="Description"
										variant="filled"
									/>
									<TextField
										onChange={(e) => setDate(e.target.value)}
										sx={{ backgroundColor: "rgba(255, 255,255,0.5)" }}
										label="Date DD/MM/YYYY"
										variant="filled"
									/>
								</div>
								<div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
									<button
										className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
										type="button"
										onClick={() => setShowModal(false)}
									>
										Close
									</button>
									<button
										className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
										type="button"
										onClick={() => {
											handleCreateTask();
											setShowModal(false);
										}}
									>
										Create Task
									</button>
								</div>
							</div>
						</div>
					</div>
					<div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
				</>
			) : null}
		</ContainerTask>
	);
};

export default page;
