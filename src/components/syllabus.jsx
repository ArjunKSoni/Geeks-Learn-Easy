import React from 'react'
import Theme from '../extraGenerator/theme'
import { useContext } from 'react'
import Authcontext from '../context/authContext'

export default function Syllabus() {
    const { theme } = useContext(Authcontext)
    return (
        <div style={Theme[theme].textbg} className='home h-screen flex flex-col items-center justify-start'>
            <iframe className='h-full w-full' src="https://drive.google.com/file/d/19SGGgdLIsER9f7ECpWJ6v3bkYZyk8KdH/preview" frameborder="0"></iframe>
        </div>
    )
}
