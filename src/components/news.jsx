import React, { useContext, useState } from 'react'
import Theme from '../extraGenerator/theme'
import Authcontext from '../context/authContext';
import EachNews from '../extraGenerator/eachNews';
import { useEffect } from 'react';

export default function News() {
    const [news, setNews] = useState([])

    useEffect(() => {
        async function fetchData() {
            const apicall = await fetch(`https://gle-news.onrender.com/news?category=education`, {
                method: 'GET',
                headers: {
                    "Content-Type": "application/json"
                }
            });
            const data = await apicall.json();
            const parse = await data.data;
            setNews(parse);
        }
        fetchData();
    }, []);

    const { theme } = useContext(Authcontext);
    return (
        <div style={Theme[theme].textbg} className='home min-h-screen flex flex-col items-center justify-start'>
            <h1 id="news-title">Latest News</h1>
            {news.map((e, i) => {
                return <EachNews imgurl={e.imageUrl} title={e.title} desc={e.content} link={e.readMoreUrl} />
            })}
        </div>
    )
}
