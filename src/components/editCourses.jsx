import React, { useContext, useEffect, useState } from 'react'
import Subcontext from '../context/subContext'
import { useNavigate } from 'react-router-dom'
import Theme from '../extraGenerator/theme';
import Authcontext from '../context/authContext';

export default function EditCourses() {
    const { theme } = useContext(Authcontext);
    const navigate = useNavigate();
    const { subj, setsub, sethide, addsubjects, sublist } = useContext(Subcontext)
    const [newsubj, setnewSubj] = useState([])
    useEffect(() => {
        setnewSubj(subj)
    }, [])
    const changed = (e) => {
        if (!newsubj.includes(e.target.value))
            setnewSubj(newsubj.concat(e.target.value))
    }
    return (
        <div>
            <div style={Theme[theme].editCourses} className='absolute  z-10  w-full h-full'>
                <div className='editcontainer'>
                    <div style={Theme[theme].editCourseInside} className='editform z-20 rounded-xl flex flex-col items-center justify-center'>
                        <div className="mt-10">
                            {/* <input type="text" id="password6" placeholder="Subjects" required autoComplete="off" /> */}
                            <select style={{ width: "250px" }} name="cars" defaultValue='Select Subject' id="subject" required onChange={changed} className=''>
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
                        <button onClick={(e) => { e.preventDefault(); setsub(newsubj); sethide(false); addsubjects(newsubj) }} style={Theme[theme].bgtext} className='px-2 py-1 rounded ' id="edit-course3">Save changes</button>
                        <button onClick={(e) => { e.preventDefault(); sethide(false) }} style={Theme[theme].bgtext} className='px-2 py-1 my-2 rounded' id="log-out3">Cancel</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
