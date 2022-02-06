import React, { useState, useEffect } from 'react';
import AuthLayout from './AuthLayout';
import { Eye, togglePassword } from "./Login";
import { Link } from 'react-router-dom';
import "./Signup.css"

const Signup = () => {
	const [error, setError] = useState("");
	const [signupDetails, setSignupDetails] = useState({ username: "", email: "", password: "", confirmPassword: "" });
	const { email, username, password, confirmPassword } = signupDetails
	useEffect(() => {
		document.title = "Signup"
	}, []);

	const handleChange = ({ target: { name, value } }) => {
		if (error) setError("");
		setSignupDetails({ ...signupDetails, [name]: value })
	}

	const signup = (e, _signupDetails) => {
		console.log("signup ");
		e.preventDefault()
		const { email, password, username, confirmPassword } = _signupDetails;
		const checkFields = ["email", "password", "password", "confirmPassword"]

		for (let key of Object.keys(_signupDetails)) {
			if (_signupDetails.hasOwnProperty(key)) {
				if (!(_signupDetails[key])) {
					return setError(`${key} cannot be empty`)
				}
			}
		}
		if (password !== confirmPassword) {
			return setError("Password donot match")
		}
		if (!(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/).test(email.toLowerCase())) {
			return setError("Invalid email")
		}

		const formdata = new FormData()
		for (let key of Object.keys(_signupDetails)) {
			if (_signupDetails.hasOwnProperty(key)) {
				formdata.append(key, _signupDetails[key])
			}
		}

		//TODO:send req to server for signup
	}
	return (
		<AuthLayout>

			{/* <form onSubmit={lol(temp)} id="signup-form"> */}
			<form onSubmit={(e) => { signup(e, signupDetails) }} id="signup-form">
				<fieldset>
					<legend className="auth-title">Signup</legend>
					<h3 className='auth-subtitle'	> Ready to explore ?</h3>

					{error && <div className="auth-error">{error}</div>}

					<div className="input-container">
						<label htmlFor="email" className="label">Email</label>
						<input type="text" name="email" id="email" className="input" value={email} onChange={handleChange} />
					</div>

					<div className="input-container">
						<label htmlFor="username" className="label">Username</label>
						<input type="text" name="username" id="username" className="input" value={username} onChange={handleChange} />
					</div>

					<div className="input-container">
						<label htmlFor="password" className="label">Password</label>
						<div className="password-input">
							<input type="text" name="password" id="password" className="input toggle-confirm-password" value={password} onChange={handleChange} />
							<span onClick={togglePassword("input.toggle-confirm-password")}><Eye />
							</span>
						</div>
					</div>


					<div className="input-container">
						<label htmlFor="confirmPassword" className="label">Confirm Password</label>
						<div className="password-input">
							<input type="text" name="confirmPassword" id="confirmPassword" className="input toggle-confirmPassword" value={confirmPassword} onChange={handleChange} />
							<span onClick={togglePassword("input.toggle-confirmPassword")}><Eye />
							</span>
						</div>
					</div>

					<button type="submit" className="signup action-button">Signup</button>

					<div className="to-login">Already registered ?   <Link to="/login" className="hover-link">login</Link></div>

				</fieldset>
			</form>

		</AuthLayout>)
};

export default Signup;
