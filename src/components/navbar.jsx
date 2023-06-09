import { React, useContext, useState } from "react";
import { FiChevronDown, FiAlignJustify } from "react-icons/fi";
import { Link } from "react-router-dom";
import Subcontext from "../context/subContext";
import { MdToggleOff, MdToggleOn } from 'react-icons/md';
import Authcontext from "../context/authContext";

function Navbar() {
    const { theme, settheme } = useContext(Authcontext);

    return (
        <div>
            <div className='  z-10 bg-black h-fit flex-wrap reshide'>
                <div className='flex gap-3 items-center justify-start flex-1'>
                    <ul className=' pl-4 flex gap-7 flex-wrap items-center justify-center'>
                        <Link to={"/content"}><li className="hover:cursor-pointer"><div className='text-white flex py-2  gap-1 items-center justify-center font-bold'>GLE Notes</div></li></Link>
                        <Link to={"/mynotes"}><li className="hover:cursor-pointer"><div className='text-white flex py-2  gap-1 items-center justify-center font-bold'>My Notes</div></li></Link>
                        <Link to={"/news"}><li className="hover:cursor-pointer"><div className='text-white py-2 flex gap-1 items-center justify-center font-bold'>News</div></li></Link>
                        <Link to={"/about"}><li className="hover:cursor-pointer"><div className='text-white py-2 flex gap-1 items-center justify-center font-bold'>About us</div></li></Link>
                    </ul>
                </div>

                <div className='relative gap-1 flex flex-1 mt-2 h-fit items-center flex-wrap w-screen justify-center mr-10'>
                    <Link to={"/home"}><img src="favicon.png" alt="" width={"50px"} height={"50px"} /></Link>
                    <Link to={"/home"}><h3 className='text-white font-bold text-xl'>Geeks Learn Easy</h3></Link>
                </div>

                <div className='flex items-center mr-6 gap-4 flex-1 text-white justify-end'>
                    Dark / Light
                    {theme === 0 && <MdToggleOff onClick={() => settheme(1)} className="hover:cursor-pointer text-white text-4xl" />}
                    {theme === 1 && <MdToggleOn onClick={() => settheme(0)} className="hover:cursor-pointer text-white text-4xl" />}
                    <Link to={"/profile"}><div className="user"><img className=' invert' src="user.png" alt="" width={"42px"} height={"22px"} /></div></Link>
                </div>
            </div >
            {/* *********************************************************************************************************** */}
            <div className="nonres  z-10   p-2 bg-black items-center justify-center h-fit w-screen flex-wrap">
                <div className=" text4 items-center justify-center"><FiAlignJustify className="invert text-3xl " />
                    <div className="bg-gray-900 h-screen mt-5 sidebar text-white p-4 absolute">
                        <div className="w-full h-1 bg-green-500"></div>
                        <ul className="bg-gray-900">
                            <Link to={"/content"}><li className="p-1 px-5 my-3 hover:bg-gray-700">GLE Notes</li></Link>
                            <Link to={"/mynotes"}><li className="p-1 px-5 my-3 hover:bg-gray-700">My Notes</li></Link>
                            <Link to={"/news"}><li className="p-1 px-5 my-3 hover:bg-gray-700">News</li></Link>
                            <Link to={"/about"}><li className="p-1 px-5 my-3 hover:bg-gray-700">About us</li></Link>
                        </ul>
                    </div>
                </div>
                <div className='relative gap-1 flex items-center flex-1 mt-2 h-fit flex-wrap w-screen justify-center'>
                    <Link to={"/home"}><img src="favicon.png" alt="" width={"50px"} height={"50px"} /></Link>
                    <Link to={"/home"}><h3 className='text-white font-bold text-xl'>Geeks Learn Easy</h3></Link>
                </div>
                {theme === 0 && <MdToggleOff onClick={() => settheme(1)} className="hover:cursor-pointer text-white text-4xl" />}
                {theme === 1 && <MdToggleOn onClick={() => settheme(0)} className="hover:cursor-pointer text-white text-4xl" />}
                <Link to={"/profile"}><div className="text5 z-10  overflow-hidden"><img className=' invert' src="user.png" alt="" width={"42px"} height={"22px"} /></div></Link>
            </div>
        </div >
    )
}

export default Navbar
