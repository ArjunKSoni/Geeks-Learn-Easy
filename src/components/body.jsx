import React, { useContext } from 'react'
import { ImRadioChecked2 } from "react-icons/im";
import Add from './add';
import Subcontext from '../context/subContext';

export default function Body() {
    const { sub } = useContext(Subcontext)
    return (
        <div className=' p-3 no-scrollbar text-white body overflow-x-auto flex flex-1'>
            <div className='break-words w-3/4 p-3 pl-5'>
                {/* heading */}
                <div className='text-3xl font-bold pb-3 border-slate-500 border-b-4 break-words'> Heading </div>

                {/* paragraph  */}
                <div className='mt-2'>
                    Lorem ipsum dolor sit, <a className='text-green-700 font-semibold underline mx-1' href="https://www.google.com/">Arjun</a> amet consectetur adipisicing elit. Atque nesciunt id adipisci iste, modi sunt facilis! Explicabo, ducimus molestias atque eveniet numquam modi, perspiciatis porro beatae quasi ut enim. Temporibus?
                </div>

                {/* list  */}
                <ul className='font-bold mt-3'> List heading name:
                    <li className='ml-4 font-normal flex items-center'><ImRadioChecked2 className='text-xs mt-1 mr-2' /> value 1</li>
                    {/* List with link */}<li className='ml-4 font-normal flex items-center'><ImRadioChecked2 className='text-xs mt-1 mr-2' />Click me to open<a className='text-green-700 font-semibold underline mx-1' href="https://www.google.com/">google</a>.</li>
                    <li className='ml-4 font-normal flex items-center'><ImRadioChecked2 className='text-xs mt-1 mr-2' /> value 3</li>
                </ul>

                {/* paragraph  */}
                <div className='mt-2'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem rerum ducimus, unde qui obcaecati iste, temporibus ipsum voluptatum aspernatur similique amet molestiae repudiandae tenetur consequatur cum. Esse sint enim modi?
                </div>

                {/* sub heading  */}
                <div className='text-2xl mt-3 font-semibold justify-center items-center flex break-words'>
                    subheading
                </div>

                {/* paragraph  */}
                <div className='mt-2'>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Atque nesciunt id adipisci iste, modi sunt facilis! Explicabo, ducimus molestias atque eveniet numquam modi, perspiciatis porro beatae quasi ut enim. Temporibus?
                </div>

                {/* image  */}
                <div className='flex items-center justify-center'>
                    <div><img src="logo192.png" alt="" width={"150px"} height={"150px"} /><h4 className=' text-center text-xs'>Name of image</h4></div>
                </div>

                {/* paragraph  */}
                <div className='mt-2'>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Atque nesciunt id adipisci iste, modi sunt facilis! Explicabo, ducimus molestias atque eveniet numquam modi, perspiciatis porro beatae quasi ut enim. Temporibus?
                </div>

                {/* list  */}
                <ul className='font-bold mt-3'> List heading name:
                    <li className='ml-4 font-normal flex items-center'><ImRadioChecked2 className='text-xs mt-1 mr-2' /> value 1</li>
                    <li className='ml-4 font-normal flex items-center'><ImRadioChecked2 className='text-xs mt-1 mr-2' />Click me to open<a className='text-green-700 font-semibold underline mx-1' href="https://www.google.com/">google</a>.</li>
                    <li className='ml-4 font-normal flex items-center'><ImRadioChecked2 className='text-xs mt-1 mr-2' /> value 3</li>
                </ul>

                {/* page end  */}
                <div className='p-2 text-center font-semibold text-xl'>Thank you for reading</div>

            </div>
            <Add />
        </div>
    )
}

// for some bold words in between =>   <spam className='font-bold'>your word</spam>

// words with greater text size =>     <spam className='text-xl'>your word</spam>

// for links in between =>             <a className='text-green-700 font-semibold underline mx-1' href="https://www.google.com/">google</a>

// {/* image  */}
// <div className='flex items-center justify-center'>
// <div><img src="logo192.png" alt="" width={"150px"} height={"150px"} /><h4 className=' text-center text-xs'>Name of image</h4></div>
// </div>