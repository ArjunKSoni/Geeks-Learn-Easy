import React, { useContext, useEffect } from 'react'
import { FaHome, FaGithubSquare } from 'react-icons/fa';
import { BsLinkedin } from 'react-icons/bs';
import { Link, useNavigate } from 'react-router-dom';
import Authcontext from '../context/authContext';
import Subcontext from '../context/subContext';
import EditCourses from './editCourses';
import Theme from '../extraGenerator/theme';
import Cookies from "js-cookie"

export default function Profile() {
    const { theme, setToken,token } = useContext(Authcontext);
    const {profile} = useContext(Authcontext);
    const { hide, sethide, setsub } = useContext(Subcontext);

    const navigate = useNavigate();
    useEffect(() => {
        if(token==="")navigate("/home")
    }, [])

    return (
        <div style={Theme[theme].textbg} className='h-screen overflow-scroll no-scrollbar'>
            {hide && <EditCourses />}
            <Link to={"/home"}><div style={Theme[theme].bgtext} className={`absolute transition-all text-xl top-4 left-4 rounded-full p-3`}><FaHome /></div></Link>
            <div className="wrapper3">
                <div style={Theme[theme].profile} className="left3">
                    <img src="profile.png" alt="user" width="100" />
                    <h4 className='text-3xl font-bold'>{profile.user}</h4>
                    <p className='font-bold text-gray-500 text-xl'>{profile.clg}</p>
                    <div className="flex items-center justify-around gap-3 mt-4">
                        <button style={Theme[theme].bgtext} onClick={(e) => { e.preventDefault(); navigate("/profileEdit") }} className='px-2 py-1 rounded bg-gray-800' id="edit-profile3">Edit Profile</button>
                        <button style={Theme[theme].bgtext} onClick={(e) => { e.preventDefault(); sethide(true) }} className='px-2 py-1 rounded bg-gray-800' id="edit-course3">Edit Courses</button>
                        <button style={Theme[theme].bgtext} onClick={(e) => { e.preventDefault(); setToken(""); Cookies.remove("jwt"); setsub([]); navigate("/") }} className='px-2 py-1 rounded bg-gray-800' id="log-out3">Log Out</button>
                    </div>
                </div>
                <div style={Theme[theme].profilEeditBg} className="right3">
                    <div className="info3">
                        <h3 className='font-bold text-xl'>Information</h3>
                        <div className="info_data3">
                            <div className="data3">
                                <h4 className='font-bold text-lg'>Email</h4>
                                <p>{profile.email}</p>
                            </div>
                            <div className="data3">
                                <h4 className='font-bold text-lg'>Phone</h4>
                                <p>{profile.mobileNo}</p>

                            </div>
                        </div>

                        <div className="projects3">
                            <h3 className='font-bold text-xl'>Details</h3>
                            <div className="projects_data3">
                                <div className="data3">
                                    <h4 className='font-bold text-lg'>Branch</h4>
                                    <p>{profile.branch}</p>
                                </div>
                                <div className="data3">
                                    <h4 className='font-bold text-lg'>Year</h4>
                                    <p>{profile.year}</p>
                                </div>
                            </div>
                        </div>
                        <div className="projects3 mt-2">
                            <h3 className='font-bold text-xl'>Connect</h3>
                            <div className="projects_data3">
                                <div className="data3">
                                    <h4 className='font-bold text-lg'>Linkedin</h4>
                                    <div className='ml-4'>{profile.Linkedin}</div>
                                </div>
                                <div className="data3">
                                    <h4 className='font-bold text-lg'>Git hub</h4>
                                    <div className='ml-4'>{profile.github}</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
