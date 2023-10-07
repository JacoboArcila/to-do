import { collection, doc, setDoc } from "firebase/firestore";
import { db } from "../firebase";

export const getCollections = (endpoint) => collection(db, endpoint);
const usersFirebase = getCollections("users");
export const createUser = async (documentTitle, user) => await setDoc(doc(usersFirebase, documentTitle), user);

const tasksFirebase = getCollections("tasksLists");
export const createList = async (documentTitle, task) => await setDoc(doc(tasksFirebase, documentTitle), task);
