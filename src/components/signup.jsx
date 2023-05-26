import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

export default function Signup() {
    const navigate = useNavigate();
    const [newuser, setNewUser] = useState({
        user: "",
        email: "",
        password: "",
        mobile: ""
    });

    const onChange = (e) => {
        setNewUser({ ...newuser, [e.target.name]: e.target.value })
    }

    return (
        <div className='home min-h-screen bodyregister text-white'>
            <div className='relative gap-1 flex items-center flex-1 pt-5 h-fit flex-wrap justify-center mr-10'>
                <img src="logo192.png" alt="" width={"32px"} height={"32px"} />
                <h3 className='text-white font-bold text-xl'>Geeks Learn Easy</h3>
            </div>
            <div className="container6 pt-10">
                <div className="form6">
                    <div className="btn6">
                        <button className="signUpBtn6">SIGN UP</button>
                    </div>
                    <form className="signUp6" action="" method="get">
                        <div className="formGroup6">
                            <input type="text" id="userName6" onChange={onChange} name="user" placeholder="User Name" required autocomplete="off" />
                        </div>
                        <div className="formGroup6">
                            <input type="email" onChange={onChange} placeholder="Email ID" name="email" required autocomplete="off" />
                        </div>
                        <div className="formGroup6">
                            <input type="number" onChange={onChange} id="confirmPassword6" name="mobile" placeholder="Phone Number" min="10" required autocomplete="off" />
                        </div>
                        <div className="formGroup6">
                            <input type="password" onChange={onChange} id="password6" name="password" placeholder="Password" required autocomplete="off" />
                        </div>

                        <div className="formGroup6">
                            <button onClick={(e) => { e.preventDefault(); navigate("/register") }} type="submit" className="btn26">Register</button>
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
