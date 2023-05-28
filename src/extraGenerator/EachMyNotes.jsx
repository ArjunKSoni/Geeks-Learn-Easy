import React, { useContext } from 'react'
import { FaEdit } from 'react-icons/fa';
import { AiFillDelete } from 'react-icons/ai';
import Notecontext from '../context/noteContext';
import { Link } from 'react-router-dom';
import Theme from './theme';
import Authcontext from '../context/authContext';



export default function EachMyNotes(props) {
    const { theme } = useContext(Authcontext)
    const { myNotes, editNote } = useContext(Notecontext)

    const { note } = props
    return (
        <div key={note.id} id={note.id} className='items-center justify-center flex flex-col'>
            <div className={`${Theme[theme].descHover} text-xl font-bold myNotesWidth my-4 rounded-xl flex justify-between px-3 py-1 items-center`}>
                <h2 style={{ width: "20vw" }} className=' overflow-hidden'>{note.title}</h2>
                <div className='text-sm font-normal flex items-center gap-4'>{note.lastModified}<div className='flex gap-3 items-center p-3 justify-evenly text-2xl'>
                    <Link to={"/addOrEditNotes"} state={{ user: { token: "1234", title: note.title, desc: note.desc, lastModified: note.lastModified }, edit: true }}><FaEdit onClick={() => editNote(myNotes.filter(u => u.title !== note.title && u.desc !== note.desc))} /> </Link>
                    <AiFillDelete className='hover:cursor-pointer' onClick={() => editNote(myNotes.filter(u => u.title !== note.title && u.desc !== note.desc))} /></div></div>
            </div>
        </div>
    )
}
