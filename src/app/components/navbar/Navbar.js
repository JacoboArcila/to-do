"use client";
import React, { useState } from "react";
import { signOut, useSession } from "next-auth/react";
import { ContainerNav, ButtonMenu, InputTask } from "./Navbar.styles";
import { GrStar } from "react-icons/gr";
import { BsListTask } from "react-icons/bs";
import { MdOutlineHouseSiding } from "react-icons/md";
import { IoIosArrowForward } from "react-icons/io";
import { createTask } from "@/app/db/firebaseMethods";
import { v4 as uuidv4 } from "uuid";

const Navbar = ({ info }) => {
	const [showModal, setShowModal] = useState(false);
	const [text, setText] = useState("");
	const { data: session } = useSession();

	const handleChange = async () => {
		console.log(session);
		const id = uuidv4();
		await createTask(id, { listId: id, title: text });
	};

	return (
		<ContainerNav>
			<div className="profile">
				<div class="profile-icon relative inline-flex items-center justify-center w-10 h-10 overflow-hidden bg-gray-100 rounded-full">
					<span class="font-medium text-gray-600 dark:text-black">JA</span>
				</div>
				<div>
					<h2>{info?.name}</h2>
					<h3>{info?.email}</h3>
				</div>
			</div>
			<ButtonMenu>
				<GrStar className="icon" color="#D9415E" />
				<button>Important</button>
				<div className="container-arrow">
					<IoIosArrowForward className="arrow" />
				</div>
			</ButtonMenu>
			<ButtonMenu>
				<MdOutlineHouseSiding className="icon" color="#9373FF" />
				<button>Tasks</button>
				<div className="container-arrow">
					<IoIosArrowForward className="arrow" />
				</div>
			</ButtonMenu>
			<hr className="linea" />
			<ButtonMenu>
				<BsListTask className="icon" color="#5946D2" />
				<button>Task List</button>
				<div className="container-arrow">
					<IoIosArrowForward className="arrow" />
				</div>
			</ButtonMenu>
			<ButtonMenu>
				<BsListTask className="icon" color="#5946D2" />
				<button>House List</button>
				<div className="container-arrow">
					<IoIosArrowForward className="arrow" />
				</div>
			</ButtonMenu>
			<div className="container-button">
				<button
					className="button-logout rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
					type="button"
					onClick={() => setShowModal(true)}
				>
					New list
				</button>
				{showModal ? (
					<>
						<div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
							<div className="relative w-auto my-6 mx-auto max-w-3xl">
								{/*content*/}
								<div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-black outline-none focus:outline-none">
									{/*header*/}
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
									{/*body*/}
									<div className="relative p-6 flex-auto">
										<InputTask type="text" onChange={(e) => setText(e.target.value)} placeholder="Write the title" />
									</div>
									{/*footer*/}
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
												handleChange();
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
				<button
					className="button-logout rounded-md bg-red-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-red-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
					onClick={() => signOut()}
				>
					Log Out
				</button>
			</div>
		</ContainerNav>
	);
};

export default Navbar;
