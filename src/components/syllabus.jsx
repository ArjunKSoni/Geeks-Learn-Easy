import React, { useContext } from 'react'
import Pdf from '../extraGenerator/pdf'
import Theme from '../extraGenerator/theme'
import Authcontext from '../context/authContext'
import { useLocation } from 'react-router-dom'
import Subcontext from '../context/subContext'
import { useEffect } from 'react'
import { BiArrowFromRight } from 'react-icons/bi';

export default function Syllabus() {
    const location = useLocation()
    const { item } = location.state
    const { setreadpdf } = useContext(Subcontext);
    const { theme } = useContext(Authcontext)
    useEffect(() => {
        setreadpdf(item)
    }, [])
    return (
        <div className="flex">
            <div style={Theme[theme].bodydesc2} className="contentSidebar pt-8 p-3 min-h-screen sideDec no-scrollbar border-r-4 overflow-x-auto">
                <ul style={Theme[theme].bodydesc2} className='navButton'>
                    {<input readOnly={true} onClick={(e) => { e.currentTarget.focus(); setreadpdf(item) }} className={` ml-3 p-1 px-2 text-gray-500 rounded-xl hover:text-white hover:${Theme[theme].newdescHover}`} value={`Syllabus`} />}
                </ul>
                {/* <ul style={{ backgroundColor: "rgb(12, 12, 12)" }} className='navButton absolute px-2  rounded'> <h1 className={`p-1 px-2 text-xl text-white rounded-xl font-bold hover:text-white`}><ImCross /></h1></ul> */}
            </div>
            <ul style={{ backgroundColor: "rgb(12, 12, 12)" }} className='navButton absolute px-2  rounded'> <h1 className={`p-1 px-2 text-xl text-white rounded-xl font-bold hover:text-white`}><BiArrowFromRight /></h1></ul>
            <Pdf />
        </div>
    )
}
