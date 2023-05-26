import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

export default function Login() {
    const navigate = useNavigate();
    const [email, setmail] = useState("")
    const [pass, setpass] = useState("")


    return (
        <div className='home min-h-screen bodyregister text-white '>
            <div className='relative gap-1 flex items-center flex-1 pt-5 h-fit flex-wrap w-screen justify-center mr-10'>
                <img src="logo192.png" alt="" width={"32px"} height={"32px"} />
                <h3 className='text-white font-bold text-xl'>Geeks Learn Easy</h3>
            </div>
            <div className="container6">
                <div className="form6">
                    <div className="btn6">
                        <button className="loginBtn6">LOG IN</button>
                    </div>
                    <form className="login6" action="" method="get">

                        <div className="formGroup6">
                            <input type="email" onChange={(e) => { setmail(e.target.value) }} placeholder="Email ID" name="email" required autocomplete="off" />
                        </div>
                        <div className="formGroup6">
                            <input type="password" onChange={(e) => { setpass(e.target.value) }} id="password6" name='password' placeholder="Password" required autocomplete="off" />
                        </div>
                        <div className="formGroup6">
                            <button type="submit" onClick={(e) => { e.preventDefault(); (email == "gle@gle.com" && pass == "gle") ? navigate("/home") : alert("Incorrect Credentials") }} className="btn26">LOG IN</button>
                        </div>
                        <div className="checkBox6">
                            <div className="text6" id="checkbox6">New member? <Link to={"/signup"} style={{ color: "rgb(134, 230, 209)" }}>Sign up</Link></div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}
