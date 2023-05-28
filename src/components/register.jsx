import React, { useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Subcontext from '../context/subContext'

export default function Register() {
    const navigate = useNavigate()
    const { subj, setsub } = useContext(Subcontext)
    const [newsubj, setnewSubj] = useState([])
    useEffect(() => {
        setnewSubj(subj)
    }, [])
    const changed = (e) => {
        if (!newsubj.includes(e.target.value))
            setnewSubj(newsubj.concat(e.target.value))
    }

    return (
        <div className='home min-h-screen bodyregister text-white'>
            <div className='relative gap-1 flex items-center flex-1 pt-5 h-fit flex-wrap justify-center mr-10'>
                <img src="logo192.png" alt="" width={"32px"} height={"32px"} />
                <h3 className='text-white font-bold text-xl'>Geeks Learn Easy</h3>
            </div>
            <div className="container6">
                <div className="form6">
                    <div className="btn6">
                        <button className="loginBtn6">Just few things more...</button>
                    </div>
                    <form className="login6" action="" method="get">

                        <div className="formGroup6">
                            <input type="number" placeholder="Year" name="email" required autoComplete="off" />
                        </div>
                        <div className="formGroup6">
                            <input type="text" id="confirmPassword6" placeholder="Branch" min="10" required autoComplete="off" />
                        </div>
                        <div className="formGroup6">
                            {/* <input type="text" id="password6" placeholder="Subjects" required autoComplete="off" /> */}
                            <select name="cars" defaultValue='Select Subject' id="subject" required onChange={changed} className=''>
                                <option disabled hidden >Select Subject</option>
                                <option value="DBMS">DBMS</option>
                                <option value="CNP">CNP</option>
                                <option value="Oops">Oops</option>
                                <option value="Sensor_Technology">Sensor Technology</option>
                                <option value="Technical_English">Technical English</option>
                            </select>
                        </div>
                        <div className='flex flex-wrap gap-3 p-5' style={{ width: "350px" }}>
                            {newsubj.map((e, i) => {
                                return <button className='bg-gray-600 p-1 rounded flex items-center gap-2' value={e} key={i} onClick={(k) => { k.preventDefault(); setnewSubj(newsubj.filter(u => u !== k.target.value)) }}>{e}</button>
                            })}
                        </div>
                        <div className="formGroup6">
                            <button onClick={(e) => { e.preventDefault(); setsub(newsubj); navigate("/home") }} type="submit" className="btn26">SUBMIT</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}
