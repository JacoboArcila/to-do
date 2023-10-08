import { collection, doc, getDocs, query, setDoc, where } from "firebase/firestore";
import { db } from "../firebase";

export const getCollections = (endpoint) => collection(db, endpoint);
const usersFirebase = getCollections("users");
export const createUser = async (documentTitle, user) => await setDoc(doc(usersFirebase, documentTitle), user);

export const tasksFirebase = getCollections("tasksLists");
export const createList = async (documentTitle, task) => await setDoc(doc(tasksFirebase, documentTitle), task);

export const getTaskLists = async () => {
	let data;
	await getDocs(tasksFirebase).then((res) => {
		data = res.docs.map((item) => ({ ...item.data(), uid: item.id }));
	});
	return data;
};

export const task = getCollections("task");

export const currentTask = async (id) => {
	let data;
	const q = query(tasksFirebase, where("listId", "==", id));

	await getDocs(q).then((res) => {
		data = res.docs.map((item) => ({ ...item.data(), uid: item.id }));
	});

	return data;
};
