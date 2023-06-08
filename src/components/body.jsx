import React, { useContext } from 'react'
import { ImRadioChecked2 } from "react-icons/im";
import Add from './add';
import Subcontext from '../context/subContext';
import Theme from '../extraGenerator/theme';
import Authcontext from '../context/authContext';

export default function Body() {
    const { theme } = useContext(Authcontext);
    const { sub } = useContext(Subcontext)
    return (
        <div style={Theme[theme].textbgw} className=' p-3 no-scrollbar w-full justify-center body overflow-hidden flex'>
            <div className='break-words widthbody p-3 px-5 h-full'>
                {/* heading */}
                <div className='text-3xl font-bold  border-slate-500 border-b-4 break-words'> Geeks Learn Easy </div>
                <div className='flex-1 flex items-center justify-center h-full text-2xl font-bold text-green-500'>
                    Coming soon
                </div>
            </div>
            <Add />
        </div>
    )
}

// for some bold words in between =>   <span className='font-bold'>your word</span>

// words with greater text size =>     <span className='text-xl'>your word</span>

// for links in between =>             <a className='text-green-700 font-semibold underline mx-1' href="https://www.google.com/">google</a>

// {/* image  */}
// <div className='flex items-center justify-center'>
// <div><img src="logo192.png" alt="" width={"150px"} height={"150px"} /><h4 className=' text-center text-xs'>Name of image</h4></div>
// </div>