import React from 'react'
import { FaHome } from 'react-icons/fa';
import { Link } from 'react-router-dom';

export default function Profile() {
    return (
        <div className='home h-screen overflow-scroll no-scrollbar text-white'>
            <Link to={"/home"}><div className='absolute transition-all text-black text-3xl top-4 left-4 rounded-full p-3 hover:bg-white'><FaHome /></div></Link>
            <div className="wrapper3">
                <div className="left3">
                    <img src="profile.png" alt="user" width="100" />
                    <h4 className='text-3xl font-bold'>User Name</h4>
                    <p className='font-bold text-gray-300 text-xl'>Madhav Institute of Technology and Science</p>
                    <div className="flex items-center justify-around gap-3 mt-4">
                        <button className='px-2 py-1 rounded bg-gray-800' id="edit-profile3">Edit Profile</button>
                        <button className='px-2 py-1 rounded bg-gray-800' id="edit-course3">Edit Courses</button>
                        <button className='px-2 py-1 rounded bg-gray-800' id="log-out3">Log Out</button>
                    </div>
                </div>
                <div className="right3">
                    <div className="info3">
                        <h3>Information</h3>
                        <div className="info_data3">
                            <div className="data3">
                                <h4>Email</h4>
                                <p>random@email.com</p>
                            </div>
                            <div className="data3">
                                <h4>Phone</h4>
                                <p>+91 123456789</p>

                            </div>
                        </div>

                        <div className="projects3">
                            <h3>Details</h3>
                            <div className="projects_data3">
                                <div className="data3">
                                    <h4>Branch</h4>
                                    <p>ITAIR</p>
                                    <h4>Courses</h4>
                                    <p>DBMS,CNP</p>
                                </div>
                                <div className="data3">
                                    <h4>Year</h4>
                                    <p>3rd</p>
                                </div>
                            </div>
                        </div>
                        <div className="projects3 mt-2">
                            <h3>Connect</h3>
                            <div className="projects_data3">
                                <div className="data3">
                                    <h4>Linkedin</h4>
                                    <p>user.linkedin.com</p>
                                </div>
                                <div className="data3">
                                    <h4>Git hub</h4>
                                    <p>user.Github.com</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
