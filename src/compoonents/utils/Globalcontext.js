import React from "react";
import Reducer from "./Reducer";
const GlobalContext = React.createContext()

const initialState = {

	access_token: "",
	refresh_token: "",
	username: "",
	userId: "",
	isLoggedIn: true,
}
const initializeState = (state) => {
	let refresh_token = localStorage.getItem("refresh_token");
	let access_token = localStorage.getItem("access_token");
	let userId = localStorage.getItem("userId")
	let username = localStorage.getItem("username")
	if (access_token && refresh_token && userId && username) {
		refresh_token = JSON.parse(refresh_token)
		access_token = JSON.parse(access_token)
		userId = JSON.parse(userId)
		username = JSON.parse(username)
		return { ...state, access_token, refresh_token, userId, isLoggedIn: true, username }
	}
	return state
}

export const GlobalContextProvider = ({ children }) => {


	const [state, dispatch] = React.useReducer(Reducer, initialState, initializeState)
	const value = {
		...state,
		dispatch,
	}
	return (
		<GlobalContext.Provider value={value} >
			{children}
		</GlobalContext.Provider>
	)
}

const useGlobalContext = () => React.useContext(GlobalContext)
export default useGlobalContext