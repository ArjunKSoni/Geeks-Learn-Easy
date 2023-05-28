import React, { useContext, useState } from 'react'
import EachMyNotes from '../extraGenerator/EachMyNotes'
import { HiPlusSm } from 'react-icons/hi'
import { Link } from 'react-router-dom'
import Notecontext from '../context/noteContext'
import Theme from '../extraGenerator/theme'
import Authcontext from '../context/authContext'

export default function MyNotes() {
    const { theme } = useContext(Authcontext);
    const { myNotes, editNote } = useContext(Notecontext)

    return (
        <div style={Theme[theme].textbg} className=' min-h-screen'>
            {myNotes.length == 0 && <div className='flex items-center justify-center h-screen'><div className='mb-10'><h1 style={Theme[theme].text} className='text-xl text-center'>Add your daily target here..</h1><div className=' text-sm text-center mt-1 text-gray-500'>click on the "+" button to start</div></div></div>}
            {myNotes.map((e, i) => {
                return <EachMyNotes note={{ title: e.title, id: i, lastModified: e.lastModified, token: "1234", desc: e.desc }} />
            })}
            <Link to={"/addOrEditNotes"} state={{ user: { token: "1234", title: "", desc: "", lastModified: "" }, edit: false }} className='absolute bottom-10 right-10 text-4xl p-3 rounded-full hover:cursor-pointer hover:bg-green-500 transition-all bg-green-700 flex items-center justify-center'><HiPlusSm /></Link>
        </div>
    )
}
