import { React } from "react";
import { FiChevronDown, FiAlignJustify } from "react-icons/fi";

function Navbar() {
    return (
        <div>
            <div className=' p-2  z-10 bg-gray-900 h-fit w-screen flex-wrap reshide'>
                <div className='flex gap-3 items-center justify-start flex-1'>
                    <ul className=' pl-4 flex gap-7 flex-wrap items-center justify-center'>
                        <li className="text1 hover:cursor-pointer"><div className='text-white flex py-2 gap-1 items-center justify-center font-bold'>Courses <FiChevronDown className=' mt-1  effecth' /></div>
                            <div className={`text-white absolute disnone `}>
                                <FiChevronDown className=" rotate-180 w-full  h-4 bg-green-500" />
                                <ul className="bg-gray-900">
                                    <li className="p-1 px-2 hover:bg-gray-700">DBMS</li>
                                    <li className="p-1 px-2 hover:bg-gray-700">CNP</li>
                                    <li className="p-1 px-2 hover:bg-gray-700">Oops</li>
                                    <li className="p-1 px-2 hover:bg-gray-700">Sensor Technology</li>
                                    <li className="p-1 px-2 hover:bg-gray-700">Technical English</li>
                                </ul>
                            </div>
                        </li>
                        <li className="text2 hover:cursor-pointer"><div className='text-white py-2 flex gap-1 items-center justify-center font-bold'>PYQ's <FiChevronDown className=' mt-1 effecth' /></div>
                            <div className={`text-white absolute disnone`}>
                                <FiChevronDown className=" rotate-180 w-full  h-4 bg-green-500" />
                                <ul className="bg-gray-900">
                                    <li className="p-1 px-2 hover:bg-gray-700">MidSem-1</li>
                                    <li className="p-1 px-2 hover:bg-gray-700">MidSem-2</li>
                                    <li className="p-1 px-2 hover:bg-gray-700">EndSem</li>
                                </ul>
                            </div>
                        </li>
                        <li className="hover:cursor-pointer"><div className='text-white flex py-2  gap-1 items-center justify-center font-bold'>Notes</div></li>
                        <li className="hover:cursor-pointer"><div className='text-white py-2 flex gap-1 items-center justify-center font-bold'>Articles</div></li>
                    </ul>
                </div>
                <div className='relative gap-1 flex items-center flex-1 mt-2 h-fit flex-wrap w-screen justify-center mr-10'>
                    <img src="logo192.png" alt="" width={"32px"} height={"32px"} />
                    <h3 className='text-white font-bold text-xl'>Geeks Learn Easy</h3>
                </div>
                <div className='flex mr-6 gap-4 flex-1 justify-end'>
                    <div className="user"><img className=' invert' src="user.png" alt="" width={"42px"} height={"22px"} />
                        <div className={`text-white absolute disnone right-5`}>
                            <FiChevronDown className=" rotate-180 w-full  h-4 bg-green-500" />
                            <ul className="bg-gray-900">
                                <li className="p-1 px-2 hover:bg-gray-700">My Profile</li>
                                <li className="p-1 px-2 hover:bg-gray-700">My Courses</li>
                                <li className="p-1 px-2 hover:bg-gray-700">Edit Profile</li>
                                <li className="p-1 px-2 hover:bg-gray-700">Logout</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div >
            {/* *********************************************************************************************************** */}
            <div className="nonres  z-10   p-2 bg-gray-900 items-center justify-center h-fit w-screen flex-wrap">
                <div className=" text4 items-center justify-center"><FiAlignJustify className="invert text-3xl " />
                    <div className="bg-gray-900 h-screen sidebar text-white p-4 absolute">
                        <div className="w-full h-1 bg-green-500"></div>
                        <ul className="bg-gray-900">
                            <li className="p-1 px-5 my-3 hover:bg-gray-700">Courses</li>
                            <li className="p-1 px-5 my-3 hover:bg-gray-700">PYQ's</li>
                            <li className="p-1 px-5 my-3 hover:bg-gray-700">Notes</li>
                            <li className="p-1 px-5 my-3 hover:bg-gray-700">Articles</li>
                        </ul>
                    </div>
                </div>
                <div className='relative gap-1 flex items-center flex-1 mt-2 h-fit flex-wrap w-screen justify-center mr-10'>
                    <img src="logo192.png" alt="" width={"32px"} height={"32px"} />
                    <h3 className='text-white font-bold text-xl'>Geeks Learn Easy</h3>
                </div>
                <div className="text5 z-10  overflow-hidden"><img className=' invert' src="user.png" alt="" width={"42px"} height={"22px"} />
                    <div className="bg-gray-900 h-fit sidebar2 text-white p-4 absolute">
                        <div className="w-full h-1 bg-green-500"></div>
                        <ul className="bg-gray-900">
                            <li className=" p-1 px-5 my-3 hover:bg-gray-700">My Profile</li>
                            <li className=" p-1 px-5 my-3 hover:bg-gray-700">My Courses</li>
                            <li className="p-1 px-5 my-3 hover:bg-gray-700">Edit Profile</li>
                            <li className="p-1 px-5 my-3 hover:bg-gray-700">Logout</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default Navbar
