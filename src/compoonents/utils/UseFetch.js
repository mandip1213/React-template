import { useState, useEffect } from "react"
import useGlobalContext from "./Globalcontext";
import URL from "../../baseurl"
import { handleLogout } from "./logout";

const useFetch = (endpoint, dependencyArray = []) => {
	const [state, setState] = useState({ isLoading: true, data: [], error: "" });
	const { access_token, refresh_token, dispatch } = useGlobalContext();


	useEffect(async () => {
		try {
			//try to fetch data
			const _res = await fetch(`${URL}${endpoint}`, {
				headers: { "Authorization": `Bearer ${access_token}` }
			})

			const res = await _res.json()

			console.log("get req response for  ", endpoint, res);

			setState({ ...state, data: res, isLoading: false })

		}

		catch (error) {
			console.log("get req from ", endpoint, error);
			setState({ ...state, error: error, isLoading: false })
		}

	}, dependencyArray);

	return state;


}

export default useFetch