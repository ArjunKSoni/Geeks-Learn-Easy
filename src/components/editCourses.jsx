import React, { useContext, useState } from 'react'
import Subcontext from '../context/subContext'
import { useNavigate } from 'react-router-dom'

export default function EditCourses() {
    const navigate = useNavigate();
    const { subj, setsub, sethide } = useContext(Subcontext)
    const [newsubj, setnewSubj] = useState(subj)

    const changed = (e) => {
        if (!newsubj.includes(e.target.value))
            setnewSubj(newsubj.concat(e.target.value))
    }
    return (
        <div>
            <div style={{ backgroundColor: "rgba(41, 39, 39, 0.8)" }} className='absolute  z-10  w-full h-full'>
                <div className='editcontainer'>
                    <div className='editform z-20 rounded-xl flex flex-col items-center justify-center'>
                        <div className="mt-10">
                            {/* <input type="text" id="password6" placeholder="Subjects" required autoComplete="off" /> */}
                            <select style={{ width: "250px" }} name="cars" defaultValue='Select Subject' id="subject" required onChange={changed} className=''>
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
                                return <button className='bg-gray-600 p-1 rounded flex items-center gap-2' value={e} key={i} onClick={(k) => { k.preventDefault(); setsub(subj.filter(u => u !== k.target.value)) }}>{e}</button>
                            })}
                        </div>
                        <button onClick={(e) => { e.preventDefault(); setsub(newsubj); sethide(false) }} className='px-2 py-1 rounded bg-white text-black' id="edit-course3">Save changes</button>
                        <button onClick={(e) => { e.preventDefault(); navigate("/profile"); sethide(false) }} className='px-2 py-1 my-2 rounded bg-white text-black' id="log-out3">Cancel</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
