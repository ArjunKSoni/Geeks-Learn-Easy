import React, { useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Theme from './theme';
import Authcontext from '../context/authContext';
import Subcontext from '../context/subContext';

export default function HomeSubject(props) {
    const navigate = useNavigate()
    const { getOnesubjectClick } = useContext(Subcontext)
    const { theme } = useContext(Authcontext)
    const { colour, name, desc } = props;
    const clicked = (e) => {
        e.preventDefault();
        getOnesubjectClick(name)
        navigate("/subject", { state: { name } })
    }
    return (
        <Link style={Theme[theme].boxDown} onClick={clicked} className='box2 m-4'>
            <div style={{ backgroundColor: colour, height: "40%" }} className="title2 w-full text-2xl font-bold flex items-center justify-center">{name}</div>
            <div style={{ height: "60%" }} className="sub2 flex items-center font-bold text-center justify-center">{desc}</div>
        </Link>
    )
}
