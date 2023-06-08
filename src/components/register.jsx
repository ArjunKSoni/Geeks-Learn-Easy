import React, { useContext, useEffect, useState } from 'react'
import Subcontext from '../context/subContext'
import Authcontext from '../context/authContext'

export default function Register() {
    const { register, redirect } = useContext(Authcontext);
    const { subj, setsub, addsubjects } = useContext(Subcontext)
    const [newsubj, setnewSubj] = useState([])
    const { sublist } = useContext(Subcontext);
    const [details, setdet] = useState({
        year: "",
        branch: "",
        Linkedin: "",
        github: ""
    })
    useEffect(() => {
        setnewSubj(subj)
    }, [])
    const detailchange = (e) => {
        setdet({ ...details, [e.target.name]: e.target.value })
    }
    const changed = (e) => {
        if (!newsubj.includes(e.target.value))
            setnewSubj(newsubj.concat(e.target.value))
    }
    const onRegister = (e) => {
        e.preventDefault();
        setsub(newsubj);
        addsubjects(newsubj);
        if (details.year.trim() === "") alert("Year can't be empty")
        else if (details.branch.trim() === "") alert("Branch can't be empty")
        else if (details.Linkedin.trim() === "") alert("Linkedin can't be empty")
        else if (details.github.trim() === "") alert("Github can't be empty")
        else {
            register(details)
        }
    }

    return (
        <div className='home h-screen overflow-scroll no-scrollbar bodyregister text-white'>
            {redirect === true && <div style={{ backgroundColor: "#000000a0" }} className='flex flex-col absolute top-0 bottom-0 h-full w-full items-center justify-center'><img width={"60px"} height={"60px"} src="load.gif" alt="" /></div>}
            <div className='relative gap-1 flex items-center flex-1 pt-5 h-fit flex-wrap justify-center mr-10'>
                <img src="favicon.png" alt="" width={"32px"} height={"32px"} />
                <h3 className='text-white font-bold text-xl'>Geeks Learn Easy</h3>
            </div>
            <div className="container6  no-scrollbar">
                <div className="form6">
                    <div className="btn6">
                        <button className="loginBtn6">Just few things more...</button>
                    </div>
                    <form className="" action="" method="get">

                        <div className="formGroup6">
                            <input type="number" placeholder="Year" name='year' onChange={detailchange} required autoComplete="off" />
                        </div>
                        <div className="formGroup6">
                            <input type="text" name="branch" onChange={detailchange} placeholder="Branch" required autoComplete="off" />
                        </div>
                        <div className="formGroup6">
                            <input type="text" name="Linkedin" onChange={detailchange} placeholder="Linkedin Profile" required autoComplete="off" />
                        </div>
                        <div className="formGroup6">
                            <input type="text" name="github" onChange={detailchange} placeholder="Github Profile" required autoComplete="off" />
                        </div>
                        <div className="formGroup6">
                            <select name="cars" defaultValue='Select Subject' id="subject" required onChange={changed} className=''>
                                <option disabled hidden >Select Subject</option>
                                {sublist.map((e) => {
                                    return <option value={e}>{e}</option>
                                })}
                            </select>
                        </div>
                        <div className='flex flex-wrap gap-3 p-5' style={{ width: "350px" }}>
                            {newsubj.map((e, i) => {
                                return <button className='bg-gray-600 p-1 rounded flex items-center gap-2' value={e} key={i} onClick={(k) => { k.preventDefault(); setnewSubj(newsubj.filter(u => u !== k.target.value)) }}>{e}</button>
                            })}
                        </div>
                        <div className="formGroup6">
                            <button onClick={onRegister} type="submit" className="btn26 mb-2">SUBMIT</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}
