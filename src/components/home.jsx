import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import HomeSubject from '../extraGenerator/homeSubject'
import Subcontext from '../context/subContext'

export default function Home() {
    const { subj } = useContext(Subcontext)

    const desc = { "DBMS": "Database Management System", "CNP": "Computer Network and Protocols", "Oops": "Object oriented programming", "Sensor_Technology": "Sensors", "Technical_English": "Basic English" }
    const colour = ["rgb(61, 240, 91)", "#2FCED8", "#C02FD8", "#882caf", "#0adb73", "#b21525", "#572ed1", "#325d3d", "#1198a2", "#98a211"]

    return (
        <div className='text-white h-fit'>
            <div className="body2">
                <div className="head2 pt-5 text-xl">
                    <h1>Hey <spam className="font-bold"> User</spam>,</h1>
                </div>
                <div className="para2 pb-5">
                    <p>What would you like to learn today?</p>
                </div>
                <div className="container2">
                    {subj.length === 0 && <div className='flex items-center justify-center' style={{ height: "50vh" }}>Go to profile to add subjects</div>}
                    {subj.map((e, i) => {
                        return <HomeSubject colour={colour[i % 10]} name={e} desc={desc[e]} />
                    })}
                </div>
            </div>
        </div>
    )
}
