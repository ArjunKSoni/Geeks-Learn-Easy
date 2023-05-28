import React, { useContext, useState } from 'react'
import { FaHome } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';
import Authcontext from '../context/authContext';
import Theme from '../extraGenerator/theme';

export default function ProfileEdit() {
    const { theme } = useContext(Authcontext);
    const { setProfile, profile } = useContext(Authcontext);
    const navigate = useNavigate();
    const [newprofile, setnewProfile] = useState({
        name: profile.name,
        clg: profile.clg,
        email: profile.email,
        Mobile: profile.Mobile,
        branch: profile.branch,
        year: profile.year,
        Linkedin: profile.Linkedin,
        github: profile.github,
    })

    const changed = (e) => {
        setnewProfile({ ...newprofile, [e.target.name]: e.target.value })
    }

    return (
        <div style={Theme[theme].textbg} className='h-screen overflow-scroll no-scrollbar'>
            <Link to={"/home"}><div style={Theme[theme].bgtext} className={`absolute transition-all text-3xl top-4 left-4 rounded-full p-3`}><FaHome /></div></Link>
            <form className="wrapper3">
                <div style={Theme[theme].body} className="left3">
                    <img src="profile.png" alt="user" width="100" />
                    <input style={{ width: "100%" }} onChange={changed} defaultValue={profile.name} type='text' name='name' className='text-3xl bg-transparent text-center font-bold'></input>
                    <input style={{ width: "100%" }} onChange={changed} defaultValue={profile.clg} type='text' name='clg' className='font-bold bg-transparent text-center text-gray-300 text-xl'></input>
                    <div className="flex items-center justify-around gap-3 mt-4">
                        <button onClick={(e) => { e.preventDefault(); setProfile(newprofile); navigate("/profile") }} className='px-2 py-1 rounded bg-gray-800' id="edit-course3">Save changes</button>
                        <button onClick={(e) => { e.preventDefault(); navigate("/profile") }} className='px-2 py-1 rounded bg-gray-800' id="log-out3">Cancel</button>
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
                                <input style={{ width: "100%" }} onChange={changed} type='number' defaultValue={profile.Mobile} name='Mobile' className=' bg-transparent '></input>

                            </div>
                        </div>

                        <div className="projects3">
                            <h3 className='font-bold text-xl'>Details</h3>
                            <div className="projects_data3">
                                <div className="data3">
                                    <h4 className='font-bold text-lg'>Branch</h4>
                                    <input style={{ width: "100%" }} onChange={changed} type='text' defaultValue={profile.branch} name='branch' className=' bg-transparent '></input>
                                    <h4 className='font-bold text-lg'>Courses</h4>
                                    <p>DBMS,CNP</p>
                                </div>
                                <div className="data3">
                                    <h4 className='font-bold text-lg'>Year</h4>
                                    <input style={{ width: "100%" }} onChange={changed} type='number' defaultValue={profile.year} name='year' className=' bg-transparent '></input>
                                </div>
                            </div>
                        </div>
                        <div className="projects3 mt-2">
                            <h3 className='font-bold text-xl'>Connect</h3>
                            <div className="projects_data3">
                                <div className="data3">
                                    <h4 className='font-bold text-lg'>Linkedin</h4>
                                    <input style={{ width: "100%" }} onChange={changed} type='text' defaultValue={profile.Linkedin} name='Linkedin' className=' bg-transparent '></input>
                                </div>
                                <div className="data3">
                                    <h4 className='font-bold text-lg'>Git hub</h4>
                                    <input style={{ width: "100%" }} onChange={changed} type='text' defaultValue={profile.github} name='github' className=' bg-transparent '></input>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    )
}
