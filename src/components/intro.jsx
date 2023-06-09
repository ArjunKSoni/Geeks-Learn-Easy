import React, { useContext, useEffect } from 'react'
import { Link } from 'react-router-dom'
import Subcontext from '../context/subContext'

export default function Intro() {
    const { getallsubjects } = useContext(Subcontext)
    useEffect(() => {
        getallsubjects()
    }, [])
    return (
        <div className='body9'>
            <div className="container9">
                <div className="navbar9">
                    <div className="logo">
                        <img src="favicon.png" alt="logo" />
                    </div>
                    <div className="options9">
                        <div className="btn9 flex flex-row gap-3">
                            <Link to={"/login"}><div className='link'>Sign In</div></Link>
                            <Link to={"/signup"}><div className='link'>Sign Up</div></Link>
                        </div>
                    </div>
                </div>
                <div className="header9">
                    <div className="content9">
                        <div className="heading9">
                            <h1>Geeks Learn Easy</h1>
                            <h3 className='para9'>A comprehensive platform for students to make learning easy</h3>
                        </div>
                        <div className="para9">
                            Start your educational journey with us today! Explore our resources, join our vibrant community, and unlock your full potential. Together, let's embrace the joy of learning and empower ourselves for a brighter future.
                        </div>
                        <div className="btn9">
                            <Link to={"/signup"}><div style={{ width: "95px" }} className='link'>Register</div></Link>
                        </div>
                    </div>
                    <div className="illu">
                        <img src="1.png" alt="" srcSet="" />
                    </div>
                </div>
            </div>
        </div>
    )
}
