import * as React from 'react';
import { useContext } from 'react';
import Subcontext from '../context/subContext';

export default function Pdf() {
    const { readpdf, setreadpdf } = useContext(Subcontext)
    return (
        <div className='h-full w-full flex items-center justify-center'>
            {readpdf && <iframe className='h-full w-full' src={readpdf}></iframe>}
            {!readpdf && <div className='text-center text-2xl font-bold'>Pdf is not available right now</div>}
        </div>
    );
}