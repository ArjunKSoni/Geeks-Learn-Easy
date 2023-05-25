import React, { useContext } from 'react'
import { FaEdit } from 'react-icons/fa';
import { AiFillDelete } from 'react-icons/ai';
import Notecontext from '../context/noteContext';



export default function EachMyNotes(props) {
    const { myNotes, editNote } = useContext(Notecontext)

    const { note } = props
    return (
        <div key={note.id} id={note.id} className='items-center justify-center flex flex-col'>
            <div className='bg-gray-700 text-xl font-bold myNotesWidth my-4 rounded-xl flex justify-between px-3 py-1 items-center'>
                <h2 style={{ width: "20vw" }} className=' overflow-hidden'>{note.title}</h2>
                <div className='text-sm font-normal flex items-center gap-4'>{note.lastModified}<div className='flex gap-3 items-center p-3 justify-evenly text-2xl'><FaEdit /><AiFillDelete onClick={() => myNotes.splice(note.id, 1)} /></div></div>
            </div>
        </div>
    )
}
