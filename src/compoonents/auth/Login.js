import React, { useState } from 'react'
import URL from "../../baseurl"
import "./Login.css"
import AuthLayout from './AuthLayout'
import useGlobalContext from '../utils/Globalcontext'
import { useNavigate, Link } from 'react-router-dom'
/* imports  */

const togglePassword = (inputSelector) => (e) => {
	/* onClick={togglePassword(inputSelector)}
	* selector = input element selector
	* for <input id="for-toggle-password"  />
	*onClick={togglePassword("input#togglePassword")}
	*/
	e.currentTarget.classList.toggle("cross-eye")
	//for styling eye
	const element = document.querySelector(inputSelector)
	element.type = (element.type === "text" ? "password" : "text")
}
const Login = () => {
	const navigate = useNavigate()
	const { dispatch, isLoggedIn } = useGlobalContext();
	const [error, setError] = useState("")
	const [loginDetails, setLoginDetails] = useState({ email: "", password: "" })

	const { email, password } = loginDetails;

	React.useEffect(() => {
		document.title = "Login"
		if (isLoggedIn) {
			navigate("/");
		}

	}, [isLoggedIn])

	const handleChange = ({ target: { name, value } }) => {
		if (error) setError("");
		setLoginDetails({ ...loginDetails, [name]: value })
	}

	const login = (_loginDetails) => async (e) => {
		const { email, password } = _loginDetails
		e.preventDefault()
		if (!email || !password)
			return setError("All fields must be filled");

		if (password.length < 6)
			return setError("Incorrect Password");
		let result;
		// try {
		// 	const res = await fetch(`${URL}/api/auth/login/`, {
		// 		method: "POST",
		// 		body: JSON.stringify({ email, password }),
		// 		/* you can send as form data too */
		// 		headers: {
		// 			"content-type": "application/json"
		// 		}
		// 	})
		// 	result = await res.json()
		// 	console.log(result);
		// }
		// catch (error) {
		// 	return setError("An unknown error occured")
		// }
		// const { access: access_token, refresh: refresh_token, username, userId } = result

		// if (access_token && refresh_token && userId && username) {
		// 	console.log("hello");
		// 	localStorage.setItem("refresh_token", JSON.stringify(refresh_token));
		// 	localStorage.setItem("access_token", JSON.stringify(access_token));
		// 	localStorage.setItem("userId", JSON.stringify(userId))
		// 	localStorage.setItem("username", JSON.stringify(username))
		// 	dispatch({
		// 		type: "LOGIN",
		// 		payload: {
		// 			access_token: access_token,
		// 			username, userId,
		// 			refresh_token: refresh_token,
		// 		}
		// 	})
		// 	return;
		// } else {
		// 	setError("Invalid account")
		// }


	}


	return (
		<AuthLayout>
			<form onSubmit={login(loginDetails)} action="" id="login-form">
				<fieldset>
					<legend className="auth-title">Login</legend>
					<h3 className='auth-subtitle'	> Get , Set and Go !</h3>

					{error && <div className="auth-error">{error}</div>}

					<div className="input-container">
						<label htmlFor="email" className="label">Email</label>
						<input type="text" name="email" id="email" className="input" value={email} onChange={handleChange} />
					</div>

					<div className="input-container">
						<label htmlFor="" className="label">Password</label>
						<div className="password-input">
							<input type="text" name="password" id="password" className="input password" value={password} onChange={handleChange} />
							<span onClick={togglePassword}><Eye />
							</span>
						</div>
					</div>

					<button type="submit" className="login action-button">Login</button>

					<div className="to-signup">Don't have an account ?   <Link to="/signup" className="hover-link">signup</Link></div>
				</fieldset>
			</form>

		</AuthLayout>
	)
}

function Eye() {
	return (
		<svg
			width="24"
			height="24"
			viewBox="0 0 24 24"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<path
				fillRule="evenodd"
				clipRule="evenodd"
				d="M16 12C16 14.2091 14.2091 16 12 16C9.79086 16 8 14.2091 8 12C8 9.79086 9.79086 8 12 8C14.2091 8 16 9.79086 16 12ZM14 12C14 13.1046 13.1046 14 12 14C10.8954 14 10 13.1046 10 12C10 10.8954 10.8954 10 12 10C13.1046 10 14 10.8954 14 12Z"
				fill="currentColor"
			/>
			<path
				fillRule="evenodd"
				clipRule="evenodd"
				d="M12 3C17.5915 3 22.2898 6.82432 23.6219 12C22.2898 17.1757 17.5915 21 12 21C6.40848 21 1.71018 17.1757 0.378052 12C1.71018 6.82432 6.40848 3 12 3ZM12 19C7.52443 19 3.73132 16.0581 2.45723 12C3.73132 7.94186 7.52443 5 12 5C16.4756 5 20.2687 7.94186 21.5428 12C20.2687 16.0581 16.4756 19 12 19Z"
				fill="currentColor"
			/>
		</svg>
	)
}
export default Login
export { Eye, togglePassword }