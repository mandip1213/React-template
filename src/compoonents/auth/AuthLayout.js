import React from 'react';
import useGlobalContext from '../utils/Globalcontext';
import "./AuthLayout.css"
import { useNavigate, Navigate } from 'react-router-dom';
const AuthLayout = ({ children }) => {
	const { isLoggedIn } = useGlobalContext()
	console.log("auth layouot")
	React.useEffect(() => {
	}, []);
	if (isLoggedIn) { return <Navigate to="/"></Navigate> }

	return (
		<div className="auth-layout">

			<section className="upper">
				<h1>Show your trademark here</h1>
				<h1>do you get it </h1>
				<p>go to components/auth/AuthLayout.js</p>

			</section>

			{children}
		</div>
	)
};

export default AuthLayout;
