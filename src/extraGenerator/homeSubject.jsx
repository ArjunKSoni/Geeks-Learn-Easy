import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import Theme from './theme';
import Authcontext from '../context/authContext';

export default function HomeSubject(props) {
    const { theme } = useContext(Authcontext)
    const { colour, name, desc } = props;
    return (
        <Link style={Theme[theme].boxDown} to="/subject" className='box2 m-4'>
            <div style={{ backgroundColor: colour, height: "40%" }} className="title2 w-full text-2xl font-bold flex items-center justify-center">{name}</div>
            <div style={{ height: "60%" }} className="sub2 flex items-center font-bold text-center justify-center">{desc}</div>
        </Link>
    )
}
