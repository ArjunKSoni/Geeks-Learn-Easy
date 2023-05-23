import React, { useState, useRef, useMemo } from 'react'
import JoditEditor from 'jodit-react';
// import { RxCross2 } from "react-icons/rx";
// jodit react is the reach text editor 
import HTMLReactParser from 'html-react-parser';

export default function AddContent() {
    const [subj, setsub] = useState([])
    const [topic, settopic] = useState([])
    const [content, setContent] = useState('');
    const [author, setauther] = useState([])
    const editor = useRef(null);

    const config = {
        readonly: false, // all options from https://xdsoft.net/jodit/docs/,
        placeholder: 'Start typings...'
    }


    const changed = (e) => {
        if (!subj.includes(e.target.value))
            setsub(subj.concat(e.target.value))
    }

    return (
        <div className='home min-h-screen text-white'>
            <h1 className=' text-center p-3'>Add Post</h1>
            <div className='addmain'>
                <form className="">
                    <div className="addForm">
                        <label htmlFor="subject">Subject:
                            <select name="cars" defaultValue='Select Subject' id="cars" onChange={changed} className='bg-gray-600 ml-2 rounded px-3'>
                                <option disabled hidden >Select Subject</option>
                                <option value="DBMS">DBMS</option>
                                <option value="CNP">CNP</option>
                                <option value="Oops">Oops</option>
                                <option value="Sensor Technology">Sensor Technology</option>
                                <option value="Tehnical English">Tehnical English</option>
                            </select>
                        </label>
                        <label htmlFor="subject">Topic:
                            <input type="text" id='subject' onChange={(e) => settopic(e.target.value)} className='bg-gray-600 ml-2 rounded px-3' />
                        </label>
                    </div>
                    <div className='flex gap-3 m-2'>
                        {subj.map((e, i) => {
                            return <button className='bg-gray-600 p-1 rounded-xl flex items-center gap-2' value={e} key={i} onClick={(k) => { k.preventDefault(); setsub(subj.filter(u => u != k.target.value)) }}>{e}</button>
                        })}
                    </div>
                    <div>
                        <JoditEditor
                            className='text-black'
                            ref={editor}
                            value={content}
                            // tabIndex={1}
                            // onBlur={newContent => setContent(newContent)} // preferred to use only this option to update the content for performance reasons
                            onChange={newContent => { setContent(newContent) }}
                        />
                    </div>
                    <div className='flex items-center justify-center m-3'>
                        <label htmlFor="subject">Auther Name:
                            <input type="text" id='subject' onChange={(e) => setauther(e.target.value)} className='bg-gray-600 ml-2 rounded px-3' />
                        </label>
                    </div>
                    <div className='flex items-center justify-center m-3'><button type="submit" className="btn bg-green-700 px-3 py-1 rounded hover:bg-white hover:text-black transition-all font-bold btn-primary">Submit</button></div>
                </form>
                <div>
                    {content}
                    {HTMLReactParser(content)}
                </div>
            </div>
        </div>
    )
}
