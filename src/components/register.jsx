import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function Register() {
    const navigate = useNavigate()
    const [subj, setsub] = useState([])
    const changed = (e) => {
        if (!subj.includes(e.target.value))
            setsub(subj.concat(e.target.value))
    }

    return (
        <div className='home h-screen bodyregister text-white'>
            <div class="container6">
                <div class="form6">
                    <div class="btn6">
                        <button class="loginBtn6">Just few things more...</button>
                    </div>
                    <form class="login6" action="" method="get">

                        <div class="formGroup6">
                            <input type="number" placeholder="Year" name="email" required autocomplete="off" />
                        </div>
                        <div class="formGroup6">
                            <input type="text" id="confirmPassword6" placeholder="Branch" min="10" required autocomplete="off" />
                        </div>
                        <div class="formGroup6">
                            {/* <input type="text" id="password6" placeholder="Subjects" required autocomplete="off" /> */}
                            <select name="cars" defaultValue='Select Subject' id="subject" required onChange={changed} className=''>
                                <option disabled hidden >Select Subject</option>
                                <option value="DBMS">DBMS</option>
                                <option value="CNP">CNP</option>
                                <option value="Oops">Oops</option>
                                <option value="Sensor Technology">Sensor Technology</option>
                                <option value="Tehnical English">Tehnical English</option>
                            </select>
                        </div>
                        <div className='flex flex-wrap gap-3 p-5' style={{ width: "350px" }}>
                            {subj.map((e, i) => {
                                return <button className='bg-gray-600 p-1 rounded flex items-center gap-2' value={e} key={i} onClick={(k) => { k.preventDefault(); setsub(subj.filter(u => u != k.target.value)) }}>{e}</button>
                            })}
                        </div>
                        <div class="formGroup6">
                            <button onClick={(e) => { e.preventDefault(); navigate("/home") }} type="submit" class="btn26">SUBMIT</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}
