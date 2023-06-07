import React, { useContext } from 'react'
import Pdf from '../extraGenerator/pdf'
import Theme from '../extraGenerator/theme'
import Authcontext from '../context/authContext'
import { useLocation } from 'react-router-dom'
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
        <div className="flex h-screen">
            <div style={Theme[theme].bodydesc2} className="contentSidebar p-3 min-h-full sideDec no-scrollbar border-r-4 overflow-x-auto">
                {item.map((e, i) => {
                    return (<ul style={Theme[theme].bodydesc2} className='navButton'> <h1 className={`p-1 px-2 text-xl text-white rounded-xl font-bold hover:text-white  hover:${Theme[theme].newdescHover}`}>{`Unit ${i + 1}`}</h1>
                        {e[`unit${i + 1}`].map((q, j) => {
                            return <input readOnly={true} onClick={(e) => { e.currentTarget.focus(); setreadpdf(q[`pdf${j + 1}`]) }} className={` ml-3 p-1 px-2 text-gray-500 rounded-xl hover:text-white hover:${Theme[theme].newdescHover}`} value={`Pdf${j + 1}`} />
                        })}
                    </ul>
                    )
                })}
            </div>
            <Pdf />
        </div>
    )
}
