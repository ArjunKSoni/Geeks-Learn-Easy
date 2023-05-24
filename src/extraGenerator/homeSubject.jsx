import React from 'react'
import { Link } from 'react-router-dom'

export default function HomeSubject(props) {
    const { colour, name, desc } = props;
    return (
        <Link to="/subject" className='box2 m-4'>
            <div style={{ backgroundColor: colour }} className="title2 w-full text-2xl font-bold h-2/4 flex items-center justify-center">{name}</div>
            <div className="sub2 flex h-2/4 items-center justify-center">{desc}</div>
        </Link>
    )
}
