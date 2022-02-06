
export const handleLogout = (dispatch) => {
	localStorage.removeItem("access_token")
	localStorage.removeItem("refresh_token")
	localStorage.removeItem("userId")
	dispatch({ type: "LOGOUT" })
}
