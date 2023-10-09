import { toast } from "react-toastify";

class ToastHelper {
	constructor() {}

	success(msn) {
		return toast.success(`¡${msn}!`, {
			position: "top-right",
			autoClose: 5000,
			hideProgressBar: false,
			closeOnClick: true,
			pauseOnHover: true,
			draggable: true,
			progress: undefined,
			theme: "light",
		});
	}

	update(id, msn, type) {
		toast.update(id, {
			position: toast.POSITION.BOTTOM_RIGHT,
			render: msn,
			type: type,
			isLoading: false,
		});
		return setTimeout(() => {
			toast.dismiss(id);
		}, 3000);
	}

	error(msn) {
		return toast.error(msn, {
			position: "top-right",
			autoClose: 5000,
			hideProgressBar: false,
			closeOnClick: true,
			pauseOnHover: true,
			draggable: true,
			progress: undefined,
			theme: "light",
		});
	}

	warning(msn) {
		return toast.warning(msn, {
			position: "top-right",
			autoClose: 5000,
			hideProgressBar: false,
			closeOnClick: true,
			pauseOnHover: true,
			draggable: true,
			progress: undefined,
			theme: "light",
		});
	}
}

export const Toast = new ToastHelper();
