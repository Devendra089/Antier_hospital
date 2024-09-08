import React, { useEffect, useState } from "react";
import {
	BrowserRouter as Router,
	Redirect,
	Route,
	Switch,
} from "react-router-dom";

import { BASE_URL } from "./config/base";
import BookAppointments from "./containers/BookAppointments";
import LandingPage from "./containers/LandingPage";
// import Login from "./containers/Login";
import LoginDetails from "./context/LoginContext";
import HomePage from "./components/Home";
// import Signup from "./containers/Signup";
import DoctorList from "./components/doctor";
import DoctorSchelude from "./components/doctorSchedule";
import Patient from "./components/patient";
import  { Toaster } from "react-hot-toast"
import scroll from "./assets/css/form.css"
import Formpage from "./components/Form";
// import subm from "./components/Form";

import ProductHome from "./thirdpoc/producthome";


const App = () => {
	const [user, setUser] = useState({});
	const [loggedIn, setLoggedIn] = useState(false);
	const baseURL = BASE_URL;

	useEffect(() => {
		const savedUser = localStorage.getItem("user");
		if (!loggedIn && savedUser) {
			setUser(JSON.parse(savedUser).user);
			setLoggedIn(true);
		}
		// eslint-disable-next-line
	}, []);

	return (

		<>
		<LoginDetails.Provider value={{ loggedIn, user, setUser, baseURL }}>
			<Router>
				<div>
					<Switch>
						
						<Route path={"/"} exact>
							<HomePage />
						</Route>
						<Route path={"/service-insight-pro"} exact> 
							<Formpage/>
						</Route>
						
						<Route path={"/doctor"}>
							<DoctorList/>
						</Route>
						<Route path={"/appointments"} id={scroll} classname="scroll">
							<BookAppointments />
						</Route>
						<Route path={"/appointmentpage"}>
							<LandingPage />
						</Route>
						<Route path={"/appointment/doctor-schedules"}>
							<DoctorSchelude />
						</Route>
						<Route path={"/patient"}>
							<Patient/>
						</Route>
						<Route path={"/producthome"} exact>
							<ProductHome/>
						</Route>



						<Route path={"/about-us"}>
							<Redirect to={"/#about-us"} />
						</Route>

						<Route path={"/404"}>
							<h1>Page not found</h1>
						</Route>
						<Route path={"/**"}>
							<Redirect to={"/404"} />
						</Route>

					</Switch>
				</div>
			</Router>
		</LoginDetails.Provider>
		<Toaster/>
		</>
	);
};

export default App;





// import React from 'react';
// import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// import Navbar from './components/Navbar';
// import Footer from './components/Footer';
// import Home from './pages/Home';
// import AppointmentPage from './pages/AppointmentPage';
// import Doctor from './pages/Doctor';
// import DoctorSchedules from './pages/DoctorSchedules';
// import Patient from './pages/Patient';
// import MarutiPage from './pages/MarutiPage'; // Ensure this path is correct

// const App = () => {
//   return (
//     <Router>
//       <Navbar /> {/* Navbar will conditionally render links based on route */}
//       <Switch>
//         <Route exact path="/" component={Home} />
//         <Route path="/appointmentpage" component={AppointmentPage} />
//         <Route path="/doctor" component={Doctor} />
//         <Route path="/appointment/doctor-schedules" component={DoctorSchedules} />
//         <Route path="/patient" component={Patient} />
//         <Route path="/maruti" component={MarutiPage} />
//         {/* Add other routes as necessary */}
//       </Switch>
//       <Footer />
//     </Router>
//   );
// };

// export default App;
