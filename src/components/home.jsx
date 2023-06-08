import React, { useContext } from 'react'
import HomeSubject from '../extraGenerator/homeSubject'
import Subcontext from '../context/subContext'
import Theme from '../extraGenerator/theme'
import Authcontext from '../context/authContext'
import Newscontext from '../context/newsContext'
import { useEffect } from 'react'
import Notecontext from '../context/noteContext'
import desc from '../extraGenerator/desc'

export default function Home() {
    const { fetchData } = useContext(Newscontext)
    const { theme, profile } = useContext(Authcontext);
    const { subj, findmysubjects } = useContext(Subcontext)
    const { fetchNotes } = useContext(Notecontext)

    // console.log(desc[0]);
    useEffect(() => {
        fetchData();
        findmysubjects();
        fetchNotes()
    }, [])

    const colour = ["rgb(61, 240, 91)", "#2FCED8", "#C02FD8", "#882caf", "#0adb73", "#b21525", "#572ed1", "#325d3d", "#1198a2", "#98a211"]

    return (
        <div style={Theme[theme].text} className=' h-fit'>
            <div style={Theme[theme].body} className="body2">
                <div className="head2 pt-5 text-xl">
                    <h1>Hey <span className="font-bold">{profile.user}</span>,</h1>
                </div>
                <div className="para2 pb-5">
                    <p>What would you like to learn today?</p>
                </div>
                <div style={Theme[theme].homeCont} className="container2">
                    {subj.length === 0 && <div className='flex flex-col p-16 items-center justify-center' style={{ height: "50vh" }}><img width={"50px"} height={"50px"} src="load.gif" alt="" />Go to profile to add courses</div>}
                    {subj.map((e, i) => {
                        return <HomeSubject key={i} colour={colour[i % 10]} name={e} desc={desc[0][e]} />
                    })}
                </div>
            </div>
        </div>
    )
}
