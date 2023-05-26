import React from 'react'

export default function News() {
    return (
        <div className='home min-h-screen flex flex-col items-center justify-start text-white'>
            <h1 id="news-title">Latest News</h1>
            <div className="news-section">
                <div className="img-left">
                    <img src="https://picsum.photos/300/300" alt="news-image" />
                </div>
                <div className="news-content">
                    <h2>Lorem ipsum dolor sit amet.</h2>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quod cupiditate natus pariatur
                        exercitationem. Voluptatibus adipisci aspernatur expedita minima debitis qui ipsum dicta excepturi
                        voluptates magni!</p>
                    <a href="#">Read More</a>
                </div>
            </div>
            <div className="news-section">
                <div className="img-left">
                    <img src="https://picsum.photos/300/300" alt="news-image" />
                </div>
                <div className="news-content">
                    <h2>Lorem ipsum dolor sit amet.</h2>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quod cupiditate natus pariatur
                        exercitationem. Voluptatibus adipisci aspernatur expedita minima debitis qui ipsum dicta excepturi
                        voluptates magni!</p>
                    <a href="#">Read More</a>
                </div>
            </div>
            <div className="news-section">
                <div className="img-left">
                    <img src="https://picsum.photos/300/300" alt="news-image" />
                </div>
                <div className="news-content">
                    <h2>Lorem ipsum dolor sit amet.</h2>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quod cupiditate natus pariatur
                        exercitationem. Voluptatibus adipisci aspernatur expedita minima debitis qui ipsum dicta excepturi
                        voluptates magni!</p>
                    <a href="#">Read More</a>
                </div>
            </div>
        </div>
    )
}
