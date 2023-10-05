export const getEnvVariables = () => {
	return {
		apiKey: process.env.REACT_APP_FB_API_KEY,
		authDomain: process.env.REACT_APP_FB_AUTH_DOMAIN,
		databaseURL: process.env.REACT_APP_FB_DB_URL,
		projectId: process.env.REACT_APP_FB_PJ_ID,
		storageBucket: process.env.REACT_APP_FB_STORAGE_BCK,
		messagingSenderId: process.env.REACT_APP_FB_MSN_SENDER_ID,
		appId: process.env.REACT_APP_FB_APP_ID,
	};
};