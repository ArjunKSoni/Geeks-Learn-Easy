import React, { useContext } from 'react'
import Pdf from '../extraGenerator/pdf'
import Theme from '../extraGenerator/theme'
import Authcontext from '../context/authContext'
import { useLocation } from 'react-router-dom'
import Subcontext from '../context/subContext'
import { useEffect } from 'react'

export default function Syllabus() {
    const location = useLocation()
    const { item } = location.state
    const { setreadpdf } = useContext(Subcontext);
    const { theme } = useContext(Authcontext)
    useEffect(() => {
        setreadpdf(item)
    }, [])
    return (
        <div className="flex h-screen">
            <div style={Theme[theme].bodydesc2} className="contentSidebar p-3 min-h-full sideDec no-scrollbar border-r-4 overflow-x-auto">
                <ul style={Theme[theme].bodydesc2} className='navButton'>
                    {<input readOnly={true} onClick={(e) => { e.currentTarget.focus(); setreadpdf(item) }} className={` ml-3 p-1 px-2 text-gray-500 rounded-xl hover:text-white hover:${Theme[theme].newdescHover}`} value={`Syllabus`} />}
                </ul>
            </div>
            <Pdf />
        </div>
    )
}
