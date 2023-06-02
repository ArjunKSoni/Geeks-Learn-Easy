import * as React from 'react';

export default function Pdf() {
    return (
        <div className='h-full w-full'>
            {/* <embed className='h-full w-full' src="https://drive.google.com/file/d/1Ko8cliQ5lmiPR2urqje7pTKLecny1sdN/view?usp=sharing" type="" /> */}
            <iframe className='h-full w-full' src="https://drive.google.com/file/d/19SGGgdLIsER9f7ECpWJ6v3bkYZyk8KdH/preview" frameborder="0"></iframe>
        </div>
    );
}