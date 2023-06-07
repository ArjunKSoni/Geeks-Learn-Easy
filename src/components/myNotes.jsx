import React, { useContext, useState } from 'react'
import EachMyNotes from '../extraGenerator/EachMyNotes'
import { HiPlusSm } from 'react-icons/hi'
import { Link } from 'react-router-dom'
import Notecontext from '../context/noteContext'
import Theme from '../extraGenerator/theme'
import Authcontext from '../context/authContext'
import { useEffect } from 'react'

export default function MyNotes() {
    const { theme } = useContext(Authcontext);
    const { myNotes, noteRender } = useContext(Notecontext)

    return (
        <div style={Theme[theme].textbg} className=' min-h-screen'>
            {noteRender && <div style={{ backgroundColor: "#000000a0" }} className='flex flex-col absolute top-0 bottom-0 h-full w-full items-center justify-center'><img width={"60px"} height={"60px"} src="load.gif" alt="" /></div>}
            {myNotes.length == 0 && <div className='flex items-center justify-center h-screen'><div className='mb-10'><h1 style={Theme[theme].text} className='text-xl text-center'>Add your daily target here..</h1><div className=' text-sm text-center mt-1 text-gray-500'>click on the "+" button to start</div></div></div>}
            {myNotes.map((e, i) => {
                return <EachMyNotes key={i} note={{ title: e.title, id: e._id, lastModified: e.time, desc: e.desc }} />
            })}
            <Link to={"/addOrEditNotes"} state={{ user: { title: "", desc: "", lastModified: "" }, edit: false }} className='absolute text-white bottom-10 right-10 text-4xl p-3 rounded-full hover:cursor-pointer hover:bg-green-500 transition-all bg-green-700 flex items-center justify-center'><HiPlusSm /></Link>
        </div>
    )
}
