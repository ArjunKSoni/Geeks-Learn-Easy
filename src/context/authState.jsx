import React, { useState } from "react"
import Authcontext from "./authContext"

const Authstate = (props) => {
    const [token, setToken] = useState()
    const [user, setUser] = useState()

    const [profile, setProfile] = useState({
        name: "user",
        clg: "xyz",
        email: "xyz@yzx.com",
        Mobile: "12345",
        branch: "IT",
        year: "2",
        Linkedin: "xyz.linked.com",
        github: "xyz.github.com",
    })


    const register = async (reg) => {
        const apicall = await fetch(`###`, {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            }, body: JSON.stringify({ user: reg.user, email: reg.email, password: reg.password, mobileNo: reg.mobile, subject: reg.subjects, year: reg.year }),
        })
        let data = await apicall.json()
        console.log(data)
        setToken(data.authToken)
        setUser(data.user)
        alert(data.message)
    }


    const login = async (reg) => {
        const apicall = await fetch(`###`, {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            }, body: JSON.stringify({ user: reg.user, password: reg.password }),
        })
        let data = await apicall.json()
        console.log(data)
        setToken(data.authToken)
        setUser(data.user)
        alert(data.message)
    }

    return (
        <Authcontext.Provider value={{ register, token, user, login, setToken, setUser, profile, setProfile }}>
            {props.children}
        </Authcontext.Provider>
    )
}
export default Authstate