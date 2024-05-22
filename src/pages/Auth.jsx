// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import Navbar from "../components/Navbar";
//
// const DEFAULT_DATA = {
//     name: "",
//     email: "",
//     confirmPassword: "",
// };
// const AuthForm = () => {
//
//     const [isSignup, setIsSignup] = useState(true); // true for signup, false for signin
//     const [formData, setFormData] = useState(DEFAULT_DATA);
//     const navigate = useNavigate();
//
//     const handleChange = (event) => {
//         setFormData({ ...formData, [event.target.name]: event.target.value });
//     };
//
//     const handleSubmit = (event) => {
//         event.preventDefault();
//         if (isSignup) {
//             const { email, password, confirmPassword } = formData;
//             if(password !== confirmPassword){
//                 alert("Password and Confirm Password do not match")
//                 return;
//             }
//             localStorage.setItem("auth", JSON.stringify({ email, password }));
//             setIsSignup(false);
//             setFormData(DEFAULT_DATA);
//         } else if (!isSignup) {
//             const { email, password } = JSON.parse(
//                 localStorage.getItem("auth") || "{}"
//             );
//             if (formData.email === email) {
//                 if (formData.password === password) {
//                     navigate(`/homepage`);
//                     // return
//                 } else if (formData.password !== password) {
//                     alert("Please enter a correct password!");
//                     // return
//                 }
//             } else if (formData.email !== email) {
//                 alert("Looks like you are new here, please sign up first!");
//                 // return
//             }
//         }
//     };
//
//     return (
//         <div
//             className="auth-form"
//             style={{
//                 width: "100vw",
//                 height: "100vh",
//                 display: "flex",
//                 flexDirection: "column",
//                 alignItems: "center",
//                 justifyContent: "center",
//             }}
//         >
//             <Navbar props = " "/>
//             <h1>{isSignup ? "Create an Account" : "Sign In"}</h1>
//             <form
//                 onSubmit={handleSubmit}
//                 style={{display: "flex", flexDirection: "column", width: "400px"}}
//             >
//                 <label htmlFor="password">
//                     Your Name
//                     <input
//                         type="name"
//                         id="name"
//                         name="name"
//                         required
//                         value={formData.password}
//                         onChange={handleChange}
//                         style={{width: "100%", padding: "10px", margin: "5px"}}
//                         placeholder="Enter your name"
//                     />
//                 </label>
//                 <label htmlFor="email">
//                     Email address
//                     <input
//                         type="text"
//                         id="email"
//                         name="email"
//                         required
//                         value={formData.email}
//                         onChange={handleChange}
//                         style={{width: "100%", padding: "10px", margin: "5px"}}
//                         placeholder="Enter email address"
//                     />
//                 </label>
//
//                 {isSignup && (
//                     <label htmlFor="Password">
//                         Password
//                         <input
//                             type="password"
//                             required
//                             id="Password"
//                             name="Password"
//                             onChange={handleChange}
//                             value={formData.confirmPassword || ""}
//                             style={{width: "100%", padding: "10px", margin: "5px"}}
//                             placeholder="Password"
//                         />
//                     </label>
//                 )}
//                 <button
//                     type="submit"
//                     style={{
//                         padding: "10px",
//                         margin: "10px",
//                         backgroundColor: "#1877F2",
//                         color: "white",
//                         width: "100%",
//                         // borderRadius: "50px",
//                         border: "none",
//                         cursor: "pointer",
//                     }}
//                 >
//                     {isSignup ? "Register" : "Sign In"}
//                 </button>
//             </form>
//             <p style={{textAlign: "center"}}>
//                 {isSignup ? "Already have an account?" : "Don't have an account?"}
//                 <button
//                     onClick={() => setIsSignup(!isSignup)}
//                     style={{border: "none", cursor: "pointer", borderRadius: "50px"}}
//                 >
//                     <br></br>
//                     {isSignup ? "Sign In" : "Register here"}
//                 </button>
//             </p>
//         </div>
//     );
// };
//
// export default AuthForm;
