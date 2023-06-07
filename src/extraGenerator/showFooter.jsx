import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'

export default function ShowFooter({ children }) {
    const [showfoot, setFoot] = useState(false);
    const location = useLocation();
    useEffect(() => {
        if (location.pathname === "/login" || location.pathname === "/register" || location.pathname === "/signup" || location.pathname === "/profile" || location.pathname === "/profileEdit") {
            setFoot(false)
        } else {
            setFoot(true)
        }
    }, [location])

    return (
        <div>{showfoot && children}</div>
    )
}
