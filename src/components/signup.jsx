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
            <div class="container6">
                <div class="form6">
                    <div class="btn6">
                        <button class="signUpBtn6">SIGN UP</button>
                    </div>
                    <form class="signUp6" action="" method="get">
                        <div class="formGroup6">
                            <input type="text" id="userName6" onChange={onChange} name="user" placeholder="User Name" required autocomplete="off" />
                        </div>
                        <div class="formGroup6">
                            <input type="email" onChange={onChange} placeholder="Email ID" name="email" required autocomplete="off" />
                        </div>
                        <div class="formGroup6">
                            <input type="number" onChange={onChange} id="confirmPassword6" name="mobile" placeholder="Phone Number" min="10" required autocomplete="off" />
                        </div>
                        <div class="formGroup6">
                            <input type="password" onChange={onChange} id="password6" name="password" placeholder="Password" required autocomplete="off" />
                        </div>

                        <div class="formGroup6">
                            <button onClick={(e) => { e.preventDefault(); navigate("/register") }} type="submit" class="btn26">Register</button>
                        </div>
                        <div class="checkBox6">
                            <div class="text6" id="checkbox6">Aldready have an account? <Link to={"/"} style={{ color: "rgb(134, 230, 209)" }}>Login</Link></div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}
