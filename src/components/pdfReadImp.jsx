import React, { useContext } from 'react'
import Pdf from '../extraGenerator/pdf'
import Theme from '../extraGenerator/theme'
import Authcontext from '../context/authContext'
import { Link, useLocation } from 'react-router-dom'
import Subcontext from '../context/subContext'
import { useEffect } from 'react'
import { BsArrowBarRight } from 'react-icons/bs';

export default function PdfReadImp() {
    const location = useLocation()
    const { item } = location.state
    const { setreadpdf } = useContext(Subcontext);
    const { theme } = useContext(Authcontext)
    useEffect(() => {
        setreadpdf(item[0]["imp1"])
        // setreadpdf(item.pyqs[0]["pyq1"])
    }, [])
    return (
        <div className="flex h-screen">
            {/* <div style={Theme[theme].bgtext} className={`absolute transition-all text-3xl top-4 left-4 rounded-full p-3`}><BsArrowBarRight /></div> */}
            <div style={Theme[theme].bodydesc2} className="contentSidebar p-3 min-h-full sideDec no-scrollbar border-r-4 overflow-x-auto">
                {item.map((e, i) => {
                    return (<ul key={i} style={Theme[theme].bodydesc2} className='navButton'>
                        <input readOnly={true} onClick={(e) => { e.currentTarget.focus(); setreadpdf(item[i][`imp${i + 1}`]) }} className={` ml-3 p-1 px-2 text-gray-500 rounded-xl hover:text-white hover:${Theme[theme].newdescHover}`} value={`imp${i + 1}`} />
                    </ul>
                    )
                    // { console.log(e); }
                })}
            </div>
            <Pdf />
        </div>
    )
}
