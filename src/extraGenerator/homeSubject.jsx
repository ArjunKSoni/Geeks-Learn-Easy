import React from 'react'
import { Link } from 'react-router-dom'

export default function HomeSubject(props) {
    const { colour, name, desc } = props;
    return (
        <Link to="/subject" className='box2 m-4'>
            <div style={{ backgroundColor: colour, height: "40%" }} className="title2 w-full text-2xl font-bold flex items-center justify-center">{name}</div>
            <div style={{ height: "60%" }} className="sub2 flex items-center justify-center">{desc}</div>
        </Link>
    )
}
