import React from 'react';
import useGlobalContext from '../utils/Globalcontext';
import { Outlet, useLocation, Navigate, Link } from "react-router-dom"
import Sidebar from '../Sidebar/Sidebar';
import Header from '../Header/Header';

const LogInView = () => {
	const { isLoggedIn } = useGlobalContext()
	const { pathname } = useLocation()
	console.log("login view");

	if (!isLoggedIn && pathname !== "/") {
		return (
			<Navigate to="/" />)
	}

	if (!isLoggedIn && pathname === "/") {
		// return (<LandingPage />)
		return (<h1>Landing Page
			<Link to="/signup">signup</Link>
			<Link to="/login">login</Link>


		</h1>)
	}

	return (
		<div className="container">
			<Sidebar />
			<div className="outlet-wrapper">
				<Header />
				<div className="outlet" style={{ flex: 1 }}>
					<Outlet />
				</div>
			</div>
		</div>
	)
};

export default LogInView;
