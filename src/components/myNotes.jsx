import React, { useContext, useState } from 'react'
import EachMyNotes from '../extraGenerator/EachMyNotes'
import { HiPlusSm } from 'react-icons/hi'
import { Link } from 'react-router-dom'
import Notecontext from '../context/noteContext'

export default function MyNotes() {
    const { myNotes, editNote } = useContext(Notecontext)

    return (
        <div className='home min-h-screen text-white'>
            {myNotes.map((e, i) => {
                return <EachMyNotes note={{ title: e.title, id: i, lastModified: e.lastModified, token: "1234" }} />
            })}
            <Link to={"/addOrEditNotes"} state={{ user: { token: "1234", title: "", desc: "", lastModified: "" } }} className='absolute bottom-10 right-10 text-4xl p-3 rounded-full hover:cursor-pointer hover:bg-green-500 transition-all bg-green-700 flex items-center justify-center'><HiPlusSm /></Link>
        </div>
    )
}
