// import Axios from "axios";
// import React, { useState, useContext, useEffect } from "react";
// import ClipLoader from "react-spinners/ClipLoader";
// import axios from 'axios';
// import Footer from "../components/footer";
// import LoginDetails from "../context/LoginContext";
// import Navbar from "../components/navbar";

// import logo from "../assets/imgs/Doctor_20.png";
// import "../assets/css/form.css";
// import toast from "react-hot-toast";
// import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

// const BookAppointments = () => {
//     const { user, baseURL } = useContext(LoginDetails)
//     const [doctors, setDoctors] = useState([]);
//     const [selectedDoctor, setSelectedDoctor] = useState('');
//     const [appointment, setAppointment] = useState({
//         name: "",
//         age: "",
//         symptoms: "",
//         date_of_visit: "",
//         preference: ""
//     });
//     const [loading, setLoading] = useState(false);
//     const history = useHistory()
//     const onMakeAppointment = async (e) => {
//         e.preventDefault();
//         setLoading(true);
//         // try {
//         //     await Axios.post(`https://api-ai-showcase.antiersolutions.com/book_appointment`, {
//         //         ...appointment,
//         //         pid: user._id,
//         //     });
//         try {
//             const response =await Axios.post(`http://192.168.10.68:5001/book_appointment`, {
//                 ...appointment,
//                 pid: user._id,
//             });
//             toast.success("Your appointment successfully scheduled.");
//             setAppointment({
//                 name: "",
//                 age: "",
//                 symptoms: "",
//                 date_of_visit: "",
//                 preference: "",
//                 selectedDoctor:""
                
//             });
//             history.push("/patient");
//         } catch (error) {
            
//             toast.error(response.error);
//             console.error("Some error occurred while making appointment", error);
//         } finally {
//             setLoading(false);
//         }
//     };

    

//     useEffect(() => {
//         const fetchDoctors = async () => {
//             try {
//                 // const response = await axios.get('https://api-ai-showcase.antiersolutions.com/doctors');
                
//                 const response = await axios.get('http://192.168.10.68:5001/doctors');
//                 //  console.log(response)
//                 setDoctors(response.data);
//             } catch (error) {
//                 console.error('Error fetching the doctors:', error);
//             }
//         };

//         fetchDoctors();
//     }, []);
//     //  console.log(doctors)

//     const handleSelectDoctor = (event) => {
//         setSelectedDoctor(event.target.value);
//         setAppointment({
//             ...appointment,
//             preference: event.target.value,
//         });
//     };

//     return (
//         <React.Fragment>
//             <div id="super-container">
//                 <Navbar />
//                 <div className="parent-container">
//                     {loading && (
//                         <div className="loading-overlay">
//                             <ClipLoader size={50} color={"#123abc"} loading={loading} />
//                         </div>
//                     )}
//                     <form id="login-container" onSubmit={onMakeAppointment}>
//                         <h3>Book Appointment</h3>
//                         <img src={logo} alt="Health Insurance" />

//                         <div className="input-container">
//                             <i className="fa fa-user icon"></i>
//                             <input
//                                 type="text"
//                                 name="name"
//                                 placeholder="Name *"
//                                 value={appointment.name}
//                                 required
//                                 onChange={(e) => {
//                                     setAppointment({
//                                         ...appointment,
//                                         name: e.target.value,
//                                     });
//                                 }}
//                             />
//                         </div>

//                         <div className="input-container">
//                             <i className="fa fa-calendar icon"></i>
//                             <input
//                                 type="number"
//                                 name="age"
//                                 placeholder="Age *"
//                                 value={appointment.age}
//                                 required
//                                 onChange={(e) => {
//                                     setAppointment({
//                                         ...appointment,
//                                         age: e.target.value,
//                                     });
//                                 }}
//                             />
//                         </div>

//                         <div className="input-container">
//                             <i className="fa fa-stethoscope icon"></i>
//                             <input
//                                 type="text"
//                                 name="symptoms"
//                                 placeholder="Symptoms *"
//                                 value={appointment.symptoms}
//                                 required
//                                 onChange={(e) => {
//                                     setAppointment({
//                                         ...appointment,
//                                         symptoms: e.target.value,
//                                     });
//                                 }}
//                             />
//                         </div>

//                         <div className="input-container">
//                             <i className="fa fa-calendar-check icon"></i>
//                             <input
//                                 id="dateinput"
//                                 type="date"
//                                 name="date_of_visit"
//                                 placeholder="Date of Visit *"
//                                 value={appointment.date_of_visit}
//                                 required
//                                 onChange={(e) => {
//                                     setAppointment({
//                                         ...appointment,
//                                         date_of_visit: e.target.value,
//                                     });
//                                 }}
//                             />
//                         </div>

//                         <div className="input-container">
//                             <i className="fa fa-heartbeat icon"></i>
//                             <select id="doctor-select" value={selectedDoctor} onChange={handleSelectDoctor} >
//                                 <option value="">Select a doctor</option>
//                                 {doctors.map((doctor) => (
//                                     <option key={doctor.id} value={doctor.name}>
//                                         {doctor.name}
//                                     </option>
//                                 ))}
//                             </select>
//                         </div>

//                         <button id="submit" type="submit" disabled={loading}>
//                             Book
//                         </button>
//                     </form>
//                 </div>
//             </div>
//             <Footer />
//         </React.Fragment>
//     );
// };

// export default BookAppointments;



import React, { useState, useContext, useEffect } from "react";
import ClipLoader from "react-spinners/ClipLoader";
import axios from "axios";
import toast from "react-hot-toast";
import { useHistory } from "react-router-dom";
import LoginDetails from "../context/LoginContext";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import logo from "../assets/imgs/Doctor_20.png";
import "../assets/css/form.css";

const BookAppointments = () => {
  const { user } = useContext(LoginDetails);
  const [doctors, setDoctors] = useState([]);
  const [selectedDoctor, setSelectedDoctor] = useState("");
  const [appointment, setAppointment] = useState({
    name: "",
    age: "",
    symptoms: "",
    date_of_visit: "",
    preference: "",
  });
  const [loading, setLoading] = useState(false);
  const history = useHistory();

  const baseURL = "http://192.168.10.68:5001"; // Replace with your base URL

  const onMakeAppointment = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await axios.post(`${baseURL}/book_appointment`, {
        ...appointment,
        pid: user._id,
      });
  console.log("response",response.data.message);


      toast.success(response.data.message);
      setAppointment({
        name: "",
        age: "",
        symptoms: "",
        date_of_visit: "",
        preference: "",
      });
      setSelectedDoctor(""); // Clear selected doctor
      history.push("/patient");
    } catch (error) {
      toast.error(error);
      console.error("Error making appointment:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const fetchDoctors = async () => {
      try {
        const response = await axios.get(`${baseURL}/doctors`);
        setDoctors(response.data);
      } catch (error) {
        console.error("Error fetching doctors:", error);
      }
    };

    fetchDoctors();
  }, []);

  const handleSelectDoctor = (event) => {
    setSelectedDoctor(event.target.value);
    setAppointment({
      ...appointment,
      preference: event.target.value,
    });
  };

  return (
    <React.Fragment>
      <div id="super-container">
        <Navbar />
        <div className="parent-container">
          {loading && (
            <div className="loading-overlay">
              <ClipLoader size={50} color={"#123abc"} loading={loading} />
            </div>
          )}
          <form id="login-container" onSubmit={onMakeAppointment}>
            <h3>Book Appointment</h3>
            <img src={logo} alt="Health Insurance" />

            <div className="input-container">
              <i className="fa fa-user icon"></i>
              <input
                type="text"
                name="name"
                placeholder="Name *"
                value={appointment.name}
                required
                onChange={(e) =>
                  setAppointment({ ...appointment, name: e.target.value })
                }
              />
            </div>

            <div className="input-container">
              <i className="fa fa-calendar icon"></i>
              <input
                type="number"
                name="age"
                placeholder="Age *"
                value={appointment.age}
                required
                onChange={(e) =>
                  setAppointment({ ...appointment, age: e.target.value })
                }
              />
            </div>

            <div className="input-container">
              <i className="fa fa-stethoscope icon"></i>
              <input
                type="text"
                name="symptoms"
                placeholder="Symptoms *"
                value={appointment.symptoms}
                required
                onChange={(e) =>
                  setAppointment({ ...appointment, symptoms: e.target.value })
                }
              />
            </div>

            <div className="input-container">
              <i className="fa fa-calendar-check icon"></i>
              <input
                id="dateinput"
                type="date"
                name="date_of_visit"
                placeholder="Date of Visit *"
                value={appointment.date_of_visit}
                required
                onChange={(e) =>
                  setAppointment({
                    ...appointment,
                    date_of_visit: e.target.value,
                  })
                }
              />
            </div>

            <div className="input-container">
              <i className="fa fa-heartbeat icon"></i>
              <select
                id="doctor-select"
                value={selectedDoctor}
                onChange={handleSelectDoctor}
              >
                <option value="">Select a doctor</option>
                {doctors.map((doctor) => (
                  <option key={doctor.id} value={doctor.name}>
                    {doctor.name}
                  </option>
                ))}
              </select>
            </div>

            <button id="submit" type="submit" disabled={loading}>
              Book
            </button>
          </form>
        </div>
      </div>
      <Footer />
    </React.Fragment>
  );
};

export default BookAppointments;
