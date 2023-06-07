import React from 'react'

export default function Intro() {
    return (
        <div className='body9'>
            <div className="container9">
                <div className="navbar9">
                    <div className="logo">
                        <img src="favicon.png" alt="logo" />
                    </div>
                    <div className="options9">
                        <div className="btn9 flex flex-row gap-3">
                            <input type="button" value="Sign In" />
                            <input type="button" value="Sign Up" />
                        </div>
                    </div>
                </div>
                <div className="header9">
                    <div className="content9">
                        <div className="heading9">
                            <h1>Geeks Learn Easy</h1>
                            <h3>It's your Learning Partner</h3>
                        </div>
                        <div className="para9">
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                            Provident iure perferendis repellendus
                            adipisci ex nemo perspiciatis soluta ab quod ullam!
                        </div>
                        <div className="btn9">
                            <input type="button" value="Register" />
                        </div>
                    </div>
                    <div className="illu">
                        <img src="1.png" alt="" srcSet="" />
                    </div>
                </div>
            </div>
        </div>
    )
}
