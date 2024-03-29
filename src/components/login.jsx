import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useContext } from 'react';
import Authcontext from '../context/authContext';
import Subcontext from '../context/subContext';
import { useEffect } from 'react';


export default function Login() {
    const { login, redirect } = useContext(Authcontext)
    const [email, setmail] = useState("")
    const [pass, setpass] = useState("")

    const EmailVal = (mail) => {
        const reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        return (reg.test(mail))
    }

    const presslogin = (e) => {
        e.preventDefault()
        if (EmailVal(email.trim()) !== true) alert("Invalid Email")
        else if (pass.trim() === "") alert("Fill the password ")
        else login(email, pass);
    }

    return (
        <div className='home min-h-screen bodyregister text-white '>
            {redirect === true && <div style={{ backgroundColor: "#000000a0" }} className='flex flex-col absolute top-0 bottom-0 h-full w-full items-center justify-center'><img width={"60px"} height={"60px"} src="load.gif" alt="" /></div>}
            <div className='relative gap-1 flex items-center flex-1 pt-5 h-fit flex-wrap justify-center mr-10'>
                <img src="favicon.png" alt="" width={"32px"} height={"32px"} />
                <h3 className='text-white font-bold text-xl'>Geeks Learn Easy</h3>
            </div>
            <div className="container6 no-scrollbar">
                <div className="form6">
                    <div className="btn6">
                        <button className="loginBtn6">LOG IN</button>
                    </div>
                    <form className="login6" action="" method="get">

                        <div className="formGroup6">
                            <input type="email" onChange={(e) => { setmail(e.target.value) }} placeholder="Email ID" name="email" required autoComplete="off" />
                        </div>
                        <div className="formGroup6">
                            <input type="password" onChange={(e) => { setpass(e.target.value) }} id="password6" name='password' placeholder="Password" required autoComplete="off" />
                        </div>
                        <div className="formGroup6">
                            <button type="submit" onClick={presslogin} className="btn26">LOG IN</button>
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
