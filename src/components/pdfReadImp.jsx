import React, { useContext } from 'react'
import Pdf from '../extraGenerator/pdf'
import Theme from '../extraGenerator/theme'
import Authcontext from '../context/authContext'
import { Link, useLocation } from 'react-router-dom'
import Subcontext from '../context/subContext'
import { useEffect } from 'react'
import { BiArrowFromRight } from 'react-icons/bi';

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
        <div className="flex ">
            {/* <div style={Theme[theme].bgtext} className={`absolute transition-all text-3xl top-4 left-4 rounded-full p-3`}><BsArrowBarRight /></div> */}
            <div style={Theme[theme].bodydesc2} className="contentSidebar pt-8 p-3 min-h-screen sideDec no-scrollbar border-r-4 overflow-x-auto">
                {item.map((e, i) => {
                    return (<ul key={i} style={Theme[theme].bodydesc2} className='navButton'>
                        <div readOnly={true} onClick={(e) => { e.currentTarget.focus(); setreadpdf(item[i][`imp${i + 1}`]) }} className={` ml-3 p-1 px-2 text-gray-500 rounded-xl hover:text-white hover:${Theme[theme].newdescHover}`}>{`imp${i + 1}`} </div>
                    </ul>
                    )
                })}
            </div>
            <ul style={{ backgroundColor: "black" }} className='absolute mb-3 top-16 xhide px-2 rounded'> <h1 className={`p-1 px-2 text-xl text-white rounded-xl font-bold hover:text-white`}><BiArrowFromRight /></h1></ul>
            <Pdf />
        </div>
    )
}
