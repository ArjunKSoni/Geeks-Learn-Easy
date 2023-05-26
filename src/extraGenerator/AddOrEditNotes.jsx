import React, { useContext, useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import Notecontext from '../context/noteContext'

export default function AddOrEditNotes() {
    const { myNotes, editNote } = useContext(Notecontext)

    const navigate = useNavigate()
    const location = useLocation()
    const { user, edit } = location.state
    const [title, settitle] = useState("");
    const [desc, setDesc] = useState("");

    const date = new Date();
    let day = date.getDate();
    let month = date.getMonth() + 1;
    let year = date.getFullYear();
    let currentDate = `${day}-${month}-${year}`;

    const onclicked = (e) => {
        e.preventDefault()
        editNote(myNotes.concat({ title, desc, lastModified: currentDate, token: "1234" }))
        navigate("/mynotes")
    }
    return (
        <div className='home min-h-screen overflow-hidden flex items-start justify-center text-white'>
            <form className='mt-10 flex items-center justify-center flex-col'>
                <input style={{ width: "22rem" }} onChange={(e) => settitle(e.target.value)} placeholder='Title' className='bg-gray-600 mb-7 px-3 text-center text-2xl font-semibold rounded-lg' type="text" defaultValue={user.title} id='title' />
                <div><textarea style={{ width: "22rem" }} placeholder='Notes here...' onChange={(e) => setDesc(e.target.value)} rows={10} type="text" className='mt-5 bg-gray-600 p-3 text-xl rounded-lg' defaultValue={user.desc} /></div>
                {!edit && <><Link onClick={onclicked} className='bg-green-800 px-10 rounded-xl font-bold text-lg mt-2 hover:bg-green-600 transition-all py-2'>Save</Link></>}
                {edit && <><Link onClick={onclicked} className='bg-green-800 px-10 rounded-xl font-bold text-lg mt-2 hover:bg-green-600 transition-all py-2'>edit</Link></>}
            </form>
        </div>
    )
}
