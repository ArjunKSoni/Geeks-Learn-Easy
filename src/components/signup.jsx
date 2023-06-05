import React, { useContext, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Authcontext from '../context/authContext';

export default function Signup() {
    const { setregister } = useContext(Authcontext)
    const navigate = useNavigate();
    const [newuser, setNewUser] = useState({
        user: "",
        email: "",
        password: "",
        mobile: ""
    });

    const EmailVal = (mail) => {
        const reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        return (reg.test(mail))
    }

    const onChange = (e) => {
        setNewUser({ ...newuser, [e.target.name]: e.target.value })
    }
    const signup = (e) => {
        e.preventDefault();
        if (EmailVal(newuser.email.trim()) !== true) alert("Invalid Email")
        else if (newuser.user.trim() === "") alert("User can't be empty ")
        else if (newuser.mobile.trim() === "") alert("Mobile can't be empty")
        else if (newuser.password.trim() === "") alert("Fill the password ")
        else {
            setregister(newuser);
            navigate("/register");
        }
    }

    return (
        <div className='home min-h-screen bodyregister text-white'>
            <div className='relative gap-1 flex items-center flex-1 pt-5 h-fit flex-wrap justify-center mr-10'>
                <img src="favicon.png" alt="" width={"32px"} height={"32px"} />
                <h3 className='text-white font-bold text-xl'>Geeks Learn Easy</h3>
            </div>
            <div className="container6 pt-10">
                <div className="form6">
                    <div className="btn6">
                        <button className="signUpBtn6">SIGN UP</button>
                    </div>
                    <form className="signUp6" action="" method="get">
                        <div className="formGroup6">
                            <input type="text" id="userName6" onChange={onChange} name="user" placeholder="User Name" required autoComplete="off" />
                        </div>
                        <div className="formGroup6">
                            <input type="email" onChange={onChange} placeholder="Email ID" name="email" required autoComplete="off" />
                        </div>
                        <div className="formGroup6">
                            <input type="number" onChange={onChange} id="confirmPassword6" name="mobile" placeholder="Phone Number" min="10" required autoComplete="off" />
                        </div>
                        <div className="formGroup6">
                            <input type="password" onChange={onChange} id="password6" name="password" placeholder="Password" required autoComplete="off" />
                        </div>

                        <div className="formGroup6">
                            <button onClick={signup} type="submit" className="btn26">Register</button>
                        </div>
                        <div className="checkBox6">
                            <div className="text6" id="checkbox6">Aldready have an account? <Link to={"/"} style={{ color: "rgb(134, 230, 209)" }}>Login</Link></div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}
