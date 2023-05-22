import React from 'react'
import { AiOutlineInstagram } from "react-icons/ai";
import { FaFacebook, FaLinkedin, FaTwitterSquare, FaYoutube } from "react-icons/fa";
import { MdLocationPin } from "react-icons/md";
import { FiMail } from "react-icons/fi";

export default function Footer() {
    return (
        <div className='bg-black h-fit footer flex-1 text-white  items-center justify-center'>
            <div className='flex items-center justify-around px-1 py-3 flex-wrap bg-fuchsia-800'>
                <div className=' linksbox'>Get connected with us on Social Media</div>
                <div className=' linksbox justify-around flex'><AiOutlineInstagram className='text-3xl hover:invert hover:cursor-pointer' /> <FaFacebook className='text-3xl hover:invert hover:cursor-pointer' /> <FaLinkedin className='text-3xl hover:invert hover:cursor-pointer' /><FaTwitterSquare className='text-3xl hover:invert hover:cursor-pointer' /><FaYoutube className='text-3xl hover:invert hover:cursor-pointer' /></div>
            </div>
            <div className='flex  p-2 justify-around flex-wrap'>
                <div className='footerBox'>
                    <div className='flex gap-3 items-center justify-center my-4'>
                        <img src="logo192.png" alt="" width={"32px"} height={"32px"} />
                        <h3 className='text-white flex font-bold text-xl'>Geeks Learn Easy</h3>
                    </div>
                    <p className='text-center mb-2 font-semibold'>A comprehensive platform for students to make learning easy</p>
                    <p className=' break-words text-center'>This company will provide you a platform where you can get all your study related material in one place  which can help in making your learning easy and effective</p>
                </div>
                <div className='footerBox'>
                    <h1 className='text-center my-4 text-white font-bold text-xl'>Creaters</h1>
                    <a target='__blank' href="https://www.linkedin.com/in/aksoni0520/"><h1 className='text-center hover:text-green-600 mb-1'>Arjun Kumar Soni</h1></a>
                    <a target='__blank' href="https://www.linkedin.com/in/mrsus/"><h1 className='text-center hover:text-green-600 mb-1'>Om Tiwari</h1></a>
                    <a target='__blank' href="https://www.linkedin.com/in/ananya-agrawal-65b1b7252"><h1 className='text-center hover:text-green-600 mb-1'>Ananya Agrawal</h1></a>
                    <a target='__blank' href="https://www.linkedin.com/in/santosh-ranawat-b262561b5"><h1 className='text-center hover:text-green-600 mb-1'>Santosh Ranawat</h1></a>
                    <a target='__blank' href="https://www.linkedin.com/in/monika-sankhla-b64474268"><h1 className='text-center hover:text-green-600 mb-1'>Monika Sankhla</h1></a>
                </div>
                <div className='footerBox'><h1 className='text-center my-4 text-white font-bold text-xl'>Usefull Links</h1>
                    <a href="https://www.coursejoiner.com/" target='__blank'><h1 className='text-center hover:text-green-600 mb-1'>Course Joiner</h1></a>
                    <a href="https://app.grammarly.com/" target='__blank'><h1 className='text-center hover:text-green-600 mb-1'>Grammarly</h1></a>
                    <a href="https://chat.openai.com/" target='__blank'><h1 className='text-center hover:text-green-600 mb-1'>Chat GPT</h1></a>
                    <a href="https://www.buddy4study.com/open-scholarships" target='__blank'><h1 className='text-center hover:text-green-600 mb-1'>Scholarship</h1></a>

                </div>
                <div className='footerBox'><h1 className='text-center my-4 text-white font-bold text-xl'>Contact</h1>
                    <div className='flex items-center justify-center mb-3'>
                        <MdLocationPin className='text-xl text-green-500' />
                        <p>MITS, Gwalior (MP)</p>
                    </div>
                    <div className='flex items-center justify-center '>
                        <FiMail className='text-xl mr-1 text-green-500' />
                        <a href="mailto:arjunkumarsoni0520@gmail.com">feedback@geekslearneasy.org</a>
                    </div>
                </div>

            </div>
        </div>
    )
}
