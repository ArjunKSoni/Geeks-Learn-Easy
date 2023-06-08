import React, { useState } from "react"
import Newscontext from "./newsContext"
const Newsstate = (props) => {

    const [news, setNews] = useState([])
    const fetchData = async () => {
        const apicall = await fetch(`https://glenews.onrender.com/api/education`, {
            method: 'GET',
            headers: {
                "Content-Type": "application/json"
            }
        });
        const data = await apicall.json();
        const parse = await data;
        setNews(parse);
    }

    return (
        <Newscontext.Provider value={{ fetchData, news }}>
            {props.children}
        </Newscontext.Provider>
    )
}
export default Newsstate