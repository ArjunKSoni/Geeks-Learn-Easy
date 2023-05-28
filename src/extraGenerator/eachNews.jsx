import React, { useContext } from 'react'
import Authcontext from '../context/authContext'
import Theme from './theme'

export default function EachNews(props) {
    const { imgurl, title, desc, link } = props;
    const { theme } = useContext(Authcontext)
    return (
        <div>
            <div style={Theme[theme].newsBox} className="news-section">
                <div className="img-left">
                    <img style={{ width: "1300px", height: "300px" }} src={imgurl} alt="news-image" />
                </div>
                <div className="news-content">
                    <h2>{title}</h2>
                    <p>{desc}</p>
                    <a href={link}>Read More</a>
                </div>
            </div>
        </div>
    )
}
