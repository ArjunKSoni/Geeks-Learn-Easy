import React from 'react'
import { ImRadioChecked2 } from "react-icons/im";

export default function Body() {
    return (
        <div className=' p-3 no-scrollbar text-white body overflow-x-auto flex flex-1'>
            <div className='break-words w-3/4 p-3 pl-5'>
                {/* heading */}
                <div className='text-3xl font-bold pb-3 border-slate-500 border-b-4 break-words'> Heading </div>

                {/* paragraph  */}
                <div className='mt-3'>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Atque nesciunt id adipisci iste, modi sunt facilis! Explicabo, ducimus molestias atque eveniet numquam modi, perspiciatis porro beatae quasi ut enim. Temporibus?
                </div>

                {/* list  */}
                <ul className='font-bold mt-3'> List heading name:
                    <li className='ml-4 font-normal flex items-center'><ImRadioChecked2 className='text-xs mt-1 mr-2' /> value 1</li>
                    <li className='ml-4 font-normal flex items-center'><ImRadioChecked2 className='text-xs mt-1 mr-2' />Click me to open<a className='text-green-700 font-semibold underline mx-1' href="https://www.google.com/">google</a>.</li>
                    <li className='ml-4 font-normal flex items-center'><ImRadioChecked2 className='text-xs mt-1 mr-2' /> value 3</li>
                </ul>

                {/* sub heading  */}
                <div className='text-2xl mt-3 font-semibold pb-3 break-words'>
                    subheading
                </div>

            </div>

            <div className='flex-1 pl-4'>
                Adds
            </div>
        </div>
    )
}

// for some bold words in between =>   <div className='font-bold'>your word</div>
// words with greater text size =>     <div className='text-xl'>your word</div>
// for links in between =>             <a className='text-green-700 font-semibold underline mx-1' href="https://www.google.com/">google</a>