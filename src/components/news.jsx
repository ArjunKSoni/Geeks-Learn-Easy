import React, { useContext, useState } from 'react'
import Theme from '../extraGenerator/theme'
import Authcontext from '../context/authContext';
import EachNews from '../extraGenerator/eachNews';
import Newscontext from '../context/newsContext';

export default function News() {
    const { news } = useContext(Newscontext);
    const { theme } = useContext(Authcontext);
    return (
        <>
        <div style={Theme[theme].textbg} className='home min-h-screen flex flex-col items-center justify-start'>
            <h1 id="news-title">Latest News</h1>
                {news.length === 0 && <div style={{ height: "80vh" }} className='home flex flex-col items-center justify-center'><img width={"60px"} height={"60px"} src="load.gif" alt="" /></div>}
            {news.map((e, i) => {
                return <EachNews key={i} imgurl={e.imageUrl} title={e.title} desc={e.content} link={e.readMoreUrl} />
            })}
        </div>
        </>
    )
}
