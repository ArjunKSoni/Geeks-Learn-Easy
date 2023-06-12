import React, { useState } from "react"
import Authcontext from "./authContext"
import { useNavigate } from "react-router-dom"
import Cookie from "js-cookie"

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
            const apicall = await fetch(`https://geekslearneasy-auth.vercel.app/api/auth/register`, {
                method: 'POST',
                headers: {
                    "Content-Type": "application/json"
                }, body: JSON.stringify({ user: regis.user, email: regis.email, password: regis.password, mobileNo: regis.mobile, year: reg.year, branch: reg.branch, Linkedin: "......", github: "......", clg: "Type Your college name" }),
            })
            let data = await apicall.json()
            setredirect(false)
            if (data.success === "fail") { alert(data.message); navigate("/") }
            else {
                setProfile(data.user)
                setToken(data.authToken)
                Cookie.set("jwt", data.authToken, {
                    expires: 30,
                    secure: true,
                    sameSite: "strict",
                    path: "/"
                });
                (navigate("/home"))
            } 
        } catch (error) {
            console.log(error);
        }
    }
    const getprofile = async (token) => {
        try {
            const apicall = await fetch(`https://geekslearneasy-auth.vercel.app/api/auth/getprofile`, {
                method: 'POST',
                headers: {
                    "Content-Type": "application/json"
                }, body: JSON.stringify({ id: token }),
            })
            let data = await apicall.json()
            setProfile(data.user)
            if (data.success === "fail") { alert(data.message); navigate("/") }
        } catch (error) {
            console.log(error);
        }
    }

    const updateProfile = async (reg) => {
        try {
            if (token) {
                setredirect(true)
                const apicall = await fetch(`https://geekslearneasy-auth.vercel.app/api/auth/updateProfile`, {
                    method: 'POST',
                    headers: {
                        "Content-Type": "application/json"
                    }, body: JSON.stringify({ update: reg, filter: { _id: profile._id } }),
                })
                let data = await apicall.json()
                setProfile(data.user)
                setredirect(false)
                if (data.success === "fail") { alert(data.message); navigate("/home") }
                else (navigate("/profile"))
            } else { navigate("/") }
        } catch (error) {
            console.log(error);
        }
    }


    const login = async (email, pass) => {
        try {
            setredirect(true)
            const apicall = await fetch(`https://geekslearneasy-auth.vercel.app/api/auth/login`, {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
                }, body: JSON.stringify({ email: email, password: pass }),
        })
            let data = await apicall.json()
            setredirect(false)
            if (data.success === "fail") { alert(data.message); navigate("/") }
            else {
                setProfile(data.user)
                setToken(data.authToken)
                Cookie.set("jwt", data.authToken, {
                    expires: 30,
                    secure: true,
                    sameSite: "strict",
                    path: "/"
                });
                navigate("/home")
            } 
        } catch (error) {
            console.log(error);
    }
    }
    return (
        <Authcontext.Provider value={{ getprofile, redirect, updateProfile, regis, setregister, register, theme, settheme, token, login, setToken, profile, setProfile }}>
            {props.children}
        </Authcontext.Provider>
    )
}
export default Authstate