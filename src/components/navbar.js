import React, { useContext } from "react";

import LoginDetails from "../context/LoginContext";
import logo from "../assets/imgs/image-removebg-preview.png";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
const Navbar = () => {
	const { loggedIn, user } = useContext(LoginDetails);
	return !loggedIn ? (
		<div className={"navbar"}>
			<div className={"nav-container"}>
				{/* <h1
					onClick={() => {
						window.location.href = "/";
					}}
					className={"nav-head"}>
					HMS
				</h1> */}
				<a href={"/"}> <img src={logo} alt="Health Insurance" className="logo" /> </a>
			</div>
			<ul className={"nav-links"}>
				<li>
					<Link to={""}>Home</Link>
				</li>
				<li>
					<Link to={"/appointmentpage"}>Appointment</Link>
				</li>
				<li>
					<Link to={"/doctor"}>Doctor</Link>
				</li>
				<li>
					<Link to={"/appointment/doctor-schedules"}>Doctor Schedules</Link>
				</li>
				<li>
					<Link to={"/patient"}>Patient</Link>
				</li>
				{/* <li>
					<a
						rel="noreferrer"
						href={""}
						target={"_blank"}>
						About-Us
					</a>
				</li> */}
			</ul>
		</div>
	) : (
		<></>
		
	);
};

export default Navbar;
