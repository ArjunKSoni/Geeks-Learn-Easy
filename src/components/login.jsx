import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

export default function Login() {
    const navigate = useNavigate();
    const [email, setmail] = useState("")
    const [pass, setpass] = useState("")


    return (
        <div className='home min-h-screen bodyregister text-white'>
            <div class="container6">
                <div class="form6">
                    <div class="btn6">
                        <button class="loginBtn6">LOG IN</button>
                    </div>
                    <form class="login6" action="" method="get">

                        <div class="formGroup6">
                            <input type="email" onChange={(e) => { setmail(e.target.value) }} placeholder="Email ID" name="email" required autocomplete="off" />
                        </div>
                        <div class="formGroup6">
                            <input type="password" onChange={(e) => { setpass(e.target.value) }} id="password6" name='password' placeholder="Password" required autocomplete="off" />
                        </div>
                        <div class="formGroup6">
                            <button type="submit" onClick={(e) => { e.preventDefault(); (email == "gle@gle.com" && pass == "gle") ? navigate("/home") : alert("Incorrect Credentials") }} class="btn26">LOG IN</button>
                        </div>
                        <div class="checkBox6">
                            <div class="text6" id="checkbox6">New member? <Link to={"/signup"} style={{ color: "rgb(134, 230, 209)" }}>Sign up</Link></div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}
