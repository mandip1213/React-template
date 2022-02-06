const Reducer = (state, { type, payload }) => {
	console.log("reducer");
	if (type === "LOGIN") {
		const { access_token, refresh_token, userId, isVendor } = payload
		return ({ ...state, access_token, refresh_token, isVendor, userId, isLoggedIn: true })
	}
	if (type === "LOGOUT") {
		return ({ ...state, access_token: "", refresh_token: "", userId: "", isLoggedIn: false, isVendor: false })
	} if (type === "UPDATE_ACCESS") {
		localStorage.setItem("access_token", JSON.stringify(payload.access_token))
		return { ...state, access_token: payload.access_token }
	}
	return state;
}

export default Reducer
