import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import Authcontext from '../context/authContext'
import Theme from '../extraGenerator/theme'

export default function Home() {
    const { theme } = useContext(Authcontext)

    const colour = ["rgb(61, 240, 91)", "#2FCED8", "#C02FD8", "#882caf", "#0adb73", "#b21525", "#572ed1", "#325d3d", "#1198a2", "#98a211"]

    return (
        <div style={Theme[theme].textbg} className=' h-fit'>
            <div className="body2">
                <div className="head2 py-5 text-xl">
                    <h1><spam className="font-bold"> Subject Name</spam></h1>
                </div>
                <div style={Theme[theme].homeCont} className="container2">
                    <Link style={Theme[theme].boxDown} to="/pdfread" className="box2 m-4">
                            <div style={{ backgroundColor: colour[0] }} className="title2 text-2xl font-bold h-2/4 flex items-center justify-between px-7">Notes <img src="notes.webp" alt="notes" width="90rem" height="90rem" /></div>
                        <div className="sub2 flex text-center  h-2/4 items-center justify-center">Get all notes at one place topicwise</div>
                    </Link>
                    <Link style={Theme[theme].boxDown} to="/pdfread" className="box2 m-4">
                            <div style={{ backgroundColor: colour[3] }} className="title2 h-2/4 text-2xl font-bold flex items-center justify-between px-7">PYQ <img src="pyq2.webp" alt="pyq" width="90rem" height="90rem" /></div>
                        <div className="sub2 flex text-center  h-2/4 items-center justify-center">Get all the previous year questions at one place</div>
                    </Link>
                    <Link style={Theme[theme].boxDown} to="/pdfread" className="box2 m-4">
                            <div style={{ backgroundColor: colour[2] }} className="title2 h-2/4 text-2xl font-bold flex items-center justify-between px-7">Important Questions <img src="ques1.png" alt="Ques" width="90rem" height="90rem" /></div>
                        <div className="sub2 flex text-center  h-2/4 items-center justify-center">Get all the important questions at one place</div>
                    </Link>
                    <Link style={Theme[theme].boxDown} to="/pdfread" className="box2 m-4">
                        <div style={{ backgroundColor: colour[5] }} className="title2 h-2/4 text-2xl font-bold flex items-center justify-between px-7">Syllabus <img src="syllabus2.png" alt="note" width="90rem" height="90rem" /></div>
                        <div className="sub2 text-center flex h-2/4 items-center justify-center">Know your syllabus</div>
                    </Link>
                </div>
            </div>
        </div>
    )
}
