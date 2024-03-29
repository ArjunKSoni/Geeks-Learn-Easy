import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'

export default function Maybeshow({ children }) {
    const [shownav, setNav] = useState(false);
    const location = useLocation();
    useEffect(() => {
        if (location.pathname === "/" || location.pathname === "/register" || location.pathname === "/signup" || location.pathname === "/profile" || location.pathname === "/profileEdit" || location.pathname === "/login") {
            setNav(false)
        } else {
            setNav(true)
        }
    }, [location])

    return (
        <div>{shownav && children}</div>
    )
}
