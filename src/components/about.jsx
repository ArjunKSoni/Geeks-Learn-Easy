import React from 'react'
import { Link } from 'react-router-dom'

export default function About() {
    return (
        <div className='home min-h-screen text-black'>
            <div className="banner9">
                {/* <!-- <div className="head9">ABOUT US</div> --> */}
                <div className="img9">
                    <img src="abt7.png" alt="" />
                </div>
            </div>
            <div className="body99">
                {/* <div className="left99">
                    <nav id="nav9" className="nav99">
                        <header>Contents</header>
                        <ol type="1">
                            <li><a href="#seedse-stor" className="nav-abt9" >Our Mission</a></li>
                            <li><a href="#creat-nav9" className="nav-abt9">Creators</a></li>
                            <li><a href="#app-nav9" className="nav-abt9">How to install our app</a></li>
                            <li><a href="#doc-nav9" className="nav-abt9">Documentaion</a></li>
                        </ol>
                    </nav>
                </div> */}
                <div id="about9" className="about99">
                    <section className="abt" id="miss-nav9">
                        <header>Our Mission</header>
                        <div className="content99">
                            <strong>As we are aware of the fact that college students struggle to keep notes organized, so they visit different sites and ask other to lend them their notes.</strong> With the help of our system, students will be able to access all the exam related material at one place, be it handwritten notes, PYQ, imp questions etc. The students must first choose which subjects they want to access to get all its related content. Additionally, we offer our specialized notes in Hinglish language which will be easy to grasp at the last minute. This will help students excel in university examinations. <br />
                            The students can contribute in our website by uploading their own notes to get recognition which will help them to get new connections and grow on LinkedIn.
                            Not every student comes from an English medium background. All the website provides it’s content in proper English language which makes them difficult to understand some of the hard words. This breaks their flow of study. Our website will provide notes in Hinglish language (Hindi+English) which will be very easy to understand.
                            <strong>Our aim is to provide a comprehensive and interactive platform for learners of all backgrounds.</strong>

                        </div>
                    </section>
                    <section className="abt" id="creat-nav9">
                        <header>Creators</header>
                        <div className="content99">
                            <div className="ananya ">
                                <div className="photo flex items-center justify-center"><img src="arj.jpeg" alt="" /></div>
                                <div className="info9">
                                    Hi, I am Arjun Kumar Soni. <br /> I am MERN stack developer and data analyst, persuing Btech from MITS, Gwalior in ITAIR 3rd year.
                                </div>
                            </div>
                            <div className="ananya">
                                <div className="photo flex items-center justify-center"><img src="ana.jpeg" alt="" /></div>
                                <div className="info9">
                                    Hi, I am Ananya Agrawal. <br /> I am a Full stack developer persuing Btech from MITS, Gwalior in ITAIR 3rd year.
                                </div>
                            </div>
                            <div className="ananya">
                                <div className="photo flex items-center justify-center"><img src="om.jpeg" alt="" /></div>
                                <div className="info9">
                                    Hi, I am Om Tiwari <br /> specialised in Django and ... persuing Btech from MITS, Gwalior in ITAIR 3rd year.
                                </div>
                            </div>
                            <div className="ananya">
                                <div className="photo flex items-center justify-center"><img src="mona.jpeg" alt="" /></div>
                                <div className="info9">
                                    Hi, I am Monika Sankhla, <br />Front end developer persuing Btech from MITS, Gwalior in ITAIR 3rd year.
                                </div>
                            </div>
                            <div className="ananya">
                                <div className="photo flex items-center justify-center"><img src="santosh.jpeg" alt="" /></div>
                                <div className="info9">
                                    Hi, I am Santosh Ranawat <br /> Full stack developer persuing Btech from MITS, Gwalior in ITAIR 3rd year.
                                </div>
                            </div>
                        </div>
                    </section>
                    <section className="abt" id="app-nav9">
                        <header className='text-center'>How to install our app</header>
                        <div className="content99">
                            <div className="step flex justify-center items-center flex-col">
                                <div className="detail">Step 1: Go to www.geekslearneasy.com in your Android device's web browser.</div>
                                <div className="img-step"><img src="1.jpeg" alt="" /></div>
                            </div>
                            <div className="step">
                                <div className="detail">Step 2: Open the browser's menu by tapping the three-dot icon or similar in the top-right corner of the browser window.</div>
                                <div className="img-step"><img src="2.jpeg" alt="" /></div>
                            </div>
                            <div className="step">
                                <div className="detail">Step 3: Look for "Install App". The wording may vary depending on the browser you're using. Tap the option.</div>
                                <div className="img-step"><img src="3.jpeg" alt="" /></div>
                            </div>
                            <div className="step">
                                <div className="detail">Step 4: A prompt will appear asking you to confirm the installation. Tap "Install". The browser will create an app shortcut on your home screen or app drawer.</div>
                                <div className="img-step"><img src="4.jpeg" alt="" /></div>
                            </div>
                            <div className="step">
                                <div className="detail">Step 5: Now you can access the  GLE website app easily.
                                </div>
                                <div className="img-step"><img src="5.jpeg" alt="" /></div>
                            </div>
                            <div className="step">
                                <div className="detail">Step 6: Tap the app icon to open the website directly in the browser, without the need to type the URL every time.
                                </div>
                                <div className="img-step"><img src="6.jpeg" alt="" /></div>
                            </div>
                        </div>
                    </section>
                    <section className="abt" id="doc-nav9">
                        <header>Documentaion</header>
                        <div className="content99">
                            The two interface types found in the Geeks Learn Easy Application are as follows: <br />
                            1. User Interface: Users are able to view the home page of the Geeks Learn Easy application, browse and select subject and create their own important  notes  in  GLE, look for information about each subject , attempt the quiz’s, assignments for better learning , access GLE from anywhere and anytime, enhance their learning experience. <br />
                            2. Admin Interface: The administrator is able to view the users’ information that was entered during sign-in  in  the database, can update the information and features ,add or remove items from the main display. <Link to="/doc" className='text-blue-700'>Read More</Link>
                        </div>
                    </section>
                </div>
            </div>
        </div>
    )
}
