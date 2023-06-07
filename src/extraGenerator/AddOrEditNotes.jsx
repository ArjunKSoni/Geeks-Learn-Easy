import React, { useContext, useEffect, useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import Notecontext from '../context/noteContext'
import Theme from './theme'
import Authcontext from '../context/authContext';
import { AiOutlineArrowLeft } from 'react-icons/ai';

export default function AddOrEditNotes() {
    const { theme, token } = useContext(Authcontext);
    const { addNotes, editNotes, noteRender } = useContext(Notecontext)

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
        navigate("/mynotes")
    }
    const onclickedAdd = (e) => {
        e.preventDefault()
        if (title.trim() === "" && desc.trim() === "") (navigate("/mynotes"))
        else {
            addNotes({ title, desc, time: currentDate, uid: token })
        }
    }
    const onclickedEdit = (e) => {
        e.preventDefault()
        if (title.trim() === "" && desc.trim() === "") (navigate("/mynotes"))
        else {
            editNotes({ "note_id": user.note_id, "update": { title, desc, time: currentDate } })
        }
    }
    return (
        <div style={Theme[theme].profile} className='h-full  text-black flex items-start justify-center'>
            {noteRender && <div style={{ backgroundColor: "#000000a0" }} className='flex flex-col absolute top-0 bottom-0 h-full w-full items-center justify-center'><img width={"60px"} height={"60px"} src="load.gif" alt="" /></div>}
            <div className="notes8 h-full text-black">
                <div className="container8 h-full">
                <div className="title8 flex items-center justify-center px-2">
                    <Link onClick={clickedLinked}><div className={`bg-black text-white px-10 rounded-xl font-bold text-2xl mt-2 hover:bg-green-600 transition-all py-2`}><AiOutlineArrowLeft /></div></Link>
                    <input type="text" name="title" onChange={(e) => settitle(e.target.value)} defaultValue={title} id="title8" placeholder="Title" />
                        {!edit && <><Link onClick={onclickedAdd} className='bg-green-800 text-white px-10 rounded-xl font-bold  mt-2 hover:bg-green-600 transition-all py-2'>Save</Link></>}
                        {edit && <><Link onClick={onclickedEdit} className='bg-green-800 text-white px-10 rounded-xl font-bold  mt-2 hover:bg-green-600 transition-all py-2'>edit</Link></>}
                </div>
                    <textarea name="text" id="text" className="text8" cols="30" rows="10" placeholder='Notes here...' onChange={(e) => setDesc(e.target.value)} type="text" defaultValue={desc} />
                </div>
            </div>
        </div>
    )
}
