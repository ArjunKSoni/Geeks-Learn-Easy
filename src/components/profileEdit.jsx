import React, { useContext, useEffect, useState } from 'react'
import { FaHome } from 'react-icons/fa';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import Authcontext from '../context/authContext';
import Theme from '../extraGenerator/theme';
import { BsPencilSquare } from 'react-icons/bs';

export default function ProfileEdit() {
    const { theme, token } = useContext(Authcontext);
    const { profile, updateProfile, redirect } = useContext(Authcontext);
    const navigate = useNavigate();

    useEffect(() => {
        if (token === "") navigate("/home")
    }, [])
    const [newprofile, setnewProfile] = useState({
        user: profile.user,
        clg: profile.clg,
        mobileNo: profile.mobileNo,
        branch: profile.branch,
        year: profile.year,
        Linkedin: profile.Linkedin,
        github: profile.github
    })

    const changed = (e) => {
        setnewProfile({ ...newprofile, [e.target.name]: e.target.value })
    }


    return (
        <div style={Theme[theme].textbg} className='h-screen overflow-scroll no-scrollbar'>
            {redirect === true && <div style={{ backgroundColor: "#000000a0" }} className='flex flex-col z-50 absolute top-0 bottom-0 w-screen items-center justify-center'><img width={"60px"} height={"60px"} src="load.gif" alt="" /></div>}
            <Link to={"/home"}><div style={Theme[theme].bgtext} className={`absolute transition-all text-xl top-4 left-4 rounded-full p-3`}><FaHome /></div></Link>
            <form className="wrapper3">
                <div style={Theme[theme].profile} className="left3">
                    <img src="profile.png" alt="user" width="100" />
                    <input style={{ width: "100%" }} onChange={changed} defaultValue={profile.user} type='text' name='user' className='text-3xl bg-transparent text-center font-bold'></input>
                    <input style={{ width: "100%" }} onChange={changed} defaultValue={profile.clg} type='text' name='clg' className='font-bold bg-transparent text-center text-gray-500 text-xl'></input>
                    <div className="flex items-center justify-around gap-3 mt-4">
                        <button style={Theme[theme].bgtext} onClick={(e) => { e.preventDefault(); updateProfile(newprofile); }} className='px-2 py-1 rounded bg-gray-800' id="edit-course3">Save changes</button>
                        <button style={Theme[theme].bgtext} onClick={(e) => { e.preventDefault(); navigate("/profile") }} className='px-2 py-1 rounded bg-gray-800' id="log-out3">Cancel</button>
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
                                <h4 className='font-bold text-lg flex items-center justify-start gap-2'>Phone <BsPencilSquare /></h4>
                                <input style={{ width: "100%" }} onChange={changed} type='number' defaultValue={profile.mobileNo} name='mobileNo' className=' bg-transparent '></input>

                            </div>
                        </div>

                        <div className="projects3">
                            <h3 className='font-bold text-xl'>Details</h3>
                            <div className="projects_data3">
                                <div className="data3">
                                    <h4 className='font-bold text-lg flex items-center justify-start gap-2'>Branch <BsPencilSquare /></h4>
                                    <input style={{ width: "100%" }} onChange={changed} type='text' defaultValue={profile.branch} name='branch' className=' bg-transparent '></input>
                                </div>
                                <div className="data3">
                                    <h4 className='font-bold text-lg flex items-center justify-start gap-2'>Year <BsPencilSquare /></h4>
                                    <input style={{ width: "100%" }} onChange={changed} type='number' defaultValue={profile.year} name='year' className=' bg-transparent '></input>
                                </div>
                            </div>
                        </div>
                        <div className="projects3 mt-2">
                            <h3 className='font-bold text-xl'>Connect</h3>
                            <div className="projects_data3">
                                <div className="data3">
                                    <h4 className='font-bold text-lg flex items-center justify-start gap-2'>Linkedin <BsPencilSquare /></h4>
                                    <input style={{ width: "100%" }} onChange={changed} type='text' defaultValue={profile.Linkedin} name='Linkedin' className=' bg-transparent '></input>
                                </div>
                                <div className="data3">
                                    <h4 className='font-bold text-lg flex items-center justify-start gap-2'>Github <BsPencilSquare /></h4>
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
