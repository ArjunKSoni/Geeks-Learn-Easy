import React, { useContext } from 'react'
import Pdf from '../extraGenerator/pdf'
import Theme from '../extraGenerator/theme'
import Authcontext from '../context/authContext'
import { Link, useLocation } from 'react-router-dom'
import { BiArrowFromRight } from 'react-icons/bi';
import Subcontext from '../context/subContext'
import { useEffect } from 'react'

export default function Pdfread() {
    const location = useLocation()
    const { item } = location.state
    const { setreadpdf } = useContext(Subcontext);
    const { theme } = useContext(Authcontext)
    useEffect(() => {
        setreadpdf(item[0]["unit1"][0]["pdf1"])
    }, [])
    return (
        <div className="flex">
            {/* <div className='h-screen flex'>
                <div style={Theme[theme].bodydesc2} className="contentSidebar p-3 min-h-screen sideDec no-scrollbar border-r-4 overflow-x-auto">
                    {item.map((e, i) => {
                        return (<ul key={i} style={Theme[theme].bodydesc2} className='navButton'> <h1 className={`p-1 px-2 text-xl text-white rounded-xl font-bold hover:text-white  hover:${Theme[theme].newdescHover}`}>{`Unit ${i + 1}`}</h1>
                            {e[`unit${i + 1}`].map((q, j) => {
                                return <div key={j} readOnly={true} onClick={(e) => { e.currentTarget.focus(); setreadpdf(q[`pdf${j + 1}`]) }} className={` ml-3 p-1 px-2 text-gray-500 rounded-xl hover:text-white hover:${Theme[theme].newdescHover}`}>{`Pdf${j + 1}`} </div>
                            })}
                        </ul>
                        )
                    })}
                </div>
                <ul style={{ backgroundColor: "rgb(12, 12, 12)" }} className='absolute xhide px-2  rounded'> <h1 className={`p-1 px-2 text-xl text-white rounded-xl font-bold hover:text-white`}><BiArrowFromRight /></h1></ul>
            </div> */}


            <div className='h-screen flex'>

                <div style={Theme[theme].bodydesc2} className="p-3 contentSidebar min-h-screen sideDec no-scrollbar border-r-4 overflow-x-auto">
                    {item.map((e, i) => {
                        return (<ul key={i} style={Theme[theme].bodydesc2} className='navButton'> <h1 className={`p-1 px-2 text-xl text-white rounded-xl font-bold hover:text-white  hover:${Theme[theme].newdescHover}`}>{`Unit ${i + 1}`}</h1>
                            {e[`unit${i + 1}`].map((q, j) => {
                                return <div key={j} readOnly={true} onClick={(e) => { e.currentTarget.focus(); setreadpdf(q[`pdf${j + 1}`]) }} className={` ml-3 p-1 px-2 text-gray-500 rounded-xl hover:text-white hover:${Theme[theme].newdescHover}`}>{`Pdf${j + 1}`} </div>
                            })}
                        </ul>
                        )
                    })}
                </div>
                <ul style={{ backgroundColor: "rgb(12, 12, 12)" }} className='absolute xhide px-2 rounded-3xl'> <h1 className={`p-1 px-2 text-xl text-white rounded-xl font-bold hover:text-white`}><BiArrowFromRight /></h1></ul>
            </div>
            <Pdf />
        </div>
    )
}
