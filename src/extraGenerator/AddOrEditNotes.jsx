import React, { useContext, useEffect, useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import Notecontext from '../context/noteContext'
import Theme from './theme'
import Authcontext from '../context/authContext';
import { AiOutlineArrowLeft } from 'react-icons/ai';

export default function AddOrEditNotes() {
    const { theme } = useContext(Authcontext);
    const { myNotes, editNote } = useContext(Notecontext)

    const navigate = useNavigate()
    const location = useLocation()
    const { user, edit } = location.state
    const [title, settitle] = useState("");
    const [desc, setDesc] = useState("");

    useEffect(() => {
        settitle(user.title)
        setDesc(user.desc)
    }, [])

    const date = new Date();
    let day = date.getDate();
    let month = date.getMonth() + 1;
    let year = date.getFullYear();
    let currentDate = `${day}-${month}-${year}`;

    const clickedLinked = (e) => {
        e.preventDefault()
        settitle(user.title)
        setDesc(user.desc)
        editNote(myNotes.concat({ title, desc, lastModified: user.lastModified, token: "1234" }))
        navigate("/mynotes")
    }

    const onclicked = (e) => {
        e.preventDefault()
        if (title.trim() === "" && desc.trim() === "") (navigate("/mynotes"))
        else {
            editNote(myNotes.concat({ title, desc, lastModified: currentDate, token: "1234" }))
            navigate("/mynotes")
        }
    }
    return (
        <div style={Theme[theme].profile} className='h-screen  text-black flex items-start justify-center'>
            <div className="notes8  text-black">
                <div className="title8 flex items-center justify-center px-2">
                    <Link onClick={clickedLinked}><div className={`bg-black text-white px-10 rounded-xl font-bold text-2xl mt-2 hover:bg-green-600 transition-all py-2`}><AiOutlineArrowLeft /></div></Link>
                    <input type="text" name="title" onChange={(e) => settitle(e.target.value)} defaultValue={title} id="title8" placeholder="Title" />
                    {!edit && <><Link onClick={onclicked} className='bg-green-800 text-white px-10 rounded-xl font-bold  mt-2 hover:bg-green-600 transition-all py-2'>Save</Link></>}
                    {edit && <><Link onClick={onclicked} className='bg-green-800 text-white px-10 rounded-xl font-bold  mt-2 hover:bg-green-600 transition-all py-2'>edit</Link></>}
                </div>
                <div className="container8">
                    <textarea name="text" id="text8" className="text8" cols="30" rows="10" placeholder='Notes here...' onChange={(e) => setDesc(e.target.value)} type="text" defaultValue={desc} />
                </div>
            </div>
        </div>
    )
}
