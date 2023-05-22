import React from 'react'

export default function Footer() {
    return (
        <div className='bg-black h-fit footer flex-1 text-white flex items-center justify-center'>
            <div className='relative gap-3 flex items-center flex-1 mt-2 h-fit flex-wrap w-screen justify-center mr-10'>
                <img src="logo192.png" alt="" width={"32px"} height={"32px"} />
                <h3 className='text-white font-bold text-xl'>Geeks Learn Easy</h3>
            </div>
        </div>
    )
}
