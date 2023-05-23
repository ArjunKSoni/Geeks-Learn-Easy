import React from 'react'
import { Link } from 'react-router-dom'

export default function Home() {

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
                    <Link to="/subject">
                        <div className="box2 m-4">
                            <div style={{ backgroundColor: colour[0] }} className="title2 w-full text-2xl font-bold h-2/4 flex items-center justify-center">DBMS</div>
                            <div className="sub2 flex h-2/4 items-center justify-center">Database Management System</div>
                        </div>
                    </Link>
                    <Link to="/subject">
                        <div className="box2 m-4">
                            <div style={{ backgroundColor: colour[1] }} className="title2 h-2/4 text-2xl font-bold flex items-center justify-center">CNP</div>
                            <div className="sub2 flex h-2/4 items-center justify-center">Computer Network and Protocols</div>
                        </div>
                    </Link>
                    <Link to="/subject">
                        <div className="box2 m-4">
                            <div style={{ backgroundColor: colour[2] }} className="title2 h-2/4 text-2xl font-bold flex items-center justify-center">Oops</div>
                            <div className="sub2 flex h-2/4 items-center justify-center">Object oriented programming</div>
                        </div>
                    </Link>
                    <Link to="/subject">
                        <div className="box2 m-4">
                            <div style={{ backgroundColor: colour[5] }} className="title2 h-2/4 text-2xl font-bold flex items-center justify-center">CNP</div>
                            <div className="sub2 flex h-2/4 items-center justify-center">Computer Network and Protocols</div>
                        </div>
                    </Link>
                    <Link to="/subject">
                        <div className="box2 m-4">
                            <div style={{ backgroundColor: colour[4] }} className="title2 h-2/4 text-2xl font-bold flex items-center justify-center">CNP</div>
                            <div className="sub2 flex h-2/4 items-center justify-center">Computer Network and Protocols</div>
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    )
}
