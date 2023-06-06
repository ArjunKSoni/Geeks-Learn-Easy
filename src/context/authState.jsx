import React, { useState } from "react"
import Authcontext from "./authContext"
import { useNavigate } from "react-router-dom"

const Authstate = (props) => {
    const navigate = useNavigate()
    const [token, setToken] = useState("")
    const [theme, settheme] = useState(0)
    const [redirect, setredirect] = useState(0)
    const [regis, setregister] = useState({
        user: "",
        email: "",
        password: "",
        mobile: ""
    })

    const [profile, setProfile] = useState("")

    const register = async (reg) => {
        try {
            setredirect(true)
            const apicall = await fetch(`https://gleauth.onrender.com/api/auth/register`, {
                method: 'POST',
                headers: {
                    "Content-Type": "application/json"
                }, body: JSON.stringify({ user: regis.user, email: regis.email, password: regis.password, mobileNo: regis.mobile, year: reg.year, branch: reg.branch, Linkedin: reg.Linkedin, github: reg.github, clg: "Type Your college name" }),
            })
            let data = await apicall.json()
            setToken(data.authToken)
            setProfile(data.user)
            setredirect(false)
            if (data.success === "fail") { alert(data.message); navigate("/") }
            else (navigate("/home"))
        } catch (error) {
            console.log(error);
        }
    }

    const updateProfile = async (reg) => {
        try {
            if (token) {
                setredirect(true)
                const apicall = await fetch(`https://gleauth.onrender.com/api/auth/updateProfile`, {
                    method: 'POST',
                    headers: {
                        "Content-Type": "application/json"
                    }, body: JSON.stringify({ update: reg, filter: { _id: profile._id } }),
                })
                let data = await apicall.json()
                setProfile(data.user)
                setredirect(false)
                if (data.success === "fail") { alert(data.message); navigate("/") }
                else (navigate("/profile"))
            } else { alert("UnAuthorised Access") }
        } catch (error) {
            console.log(error);
        }
    }


    const login = async (email, pass) => {
        try {
            setredirect(true)
            const apicall = await fetch(`https://gleauth.onrender.com/api/auth/login`, {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
                }, body: JSON.stringify({ email: email, password: pass }),
        })
            let data = await apicall.json()
            setToken(data.authToken)
            setProfile(data.user)
            setredirect(false)
            if (data.success === "fail") { alert(data.message); navigate("/") }
            else (navigate("/home"))
        } catch (error) {
            console.log(error);
    }
    }
    return (
        <Authcontext.Provider value={{ redirect, updateProfile, regis, setregister, register, theme, settheme, token, login, setToken, profile, setProfile }}>
            {props.children}
        </Authcontext.Provider>
    )
}
export default Authstate