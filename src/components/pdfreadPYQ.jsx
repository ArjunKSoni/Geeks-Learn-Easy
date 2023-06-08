import React, { useContext } from 'react'
import Pdf from '../extraGenerator/pdf'
import Theme from '../extraGenerator/theme'
import Authcontext from '../context/authContext'
import { Link, useLocation } from 'react-router-dom'
import Subcontext from '../context/subContext'
import { useEffect } from 'react'
import { ImCross } from 'react-icons/im';
// import { AiOutlineArrowLeft } from 'react-icons/ai';

export default function PyqRead() {
    const location = useLocation()
    const { item } = location.state
    const { setreadpdf } = useContext(Subcontext);
    const { theme } = useContext(Authcontext)
    useEffect(() => {
        setreadpdf(item.pyqs[0]["pyq1"])
    }, [])
    return (
        <div className="flex h-screen">
            {/* <Link to={"/subject"}><div style={Theme[theme].bgtext} className={`absolute transition-all text-3xl top-4 left-4 rounded-full p-3`}><AiOutlineArrowLeft /></div></Link> */}
            <div style={Theme[theme].bodydesc2} className="contentSidebar  p-3 min-h-full sideDec no-scrollbar border-r-4 overflow-x-auto">
                {item.pyqs.map((e, i) => {
                    return (
                        <ul key={i} style={Theme[theme].bodydesc2} className='navButton'>
                            <input readOnly={true} onClick={(e) => { e.currentTarget.focus(); setreadpdf(item.pyqs[i][`pyq${i + 1}`]); }} className={` ml-3 p-1 px-2 text-gray-500 rounded-xl hover:text-white hover:${Theme[theme].newdescHover}`} value={`pyq${i + 1}`} />
                    </ul>
                    )
                })}
                {/* <ul style={{ backgroundColor: "rgb(12, 12, 12)" }} className='navButton absolute px-2  rounded'> <h1 className={`p-1 px-2 text-xl text-white rounded-xl font-bold hover:text-white`}><ImCross /></h1></ul> */}
            </div>
            <ul style={{ backgroundColor: "rgb(12, 12, 12)" }} className='navButton none xcross absolute px-2  rounded'> <h1 className={`p-1 px-2 text-xl text-white rounded-xl font-bold hover:text-white`}><ImCross /></h1></ul>
            <Pdf />
        </div>
    )
}
