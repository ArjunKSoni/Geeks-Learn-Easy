import React from 'react'

export default function Register() {
    return (
        <div className='home h-screen bodyregister text-white'>
            <div class="container6">
                <div class="form6">
                    <div class="btn6">
                        <button class="loginBtn6">Just few things more...</button>
                    </div>
                    <form class="login6" action="" method="get">

                        <div class="formGroup6">
                            <input type="number" placeholder="Year" name="email" required autocomplete="off" />
                        </div>
                        <div class="formGroup6">
                            <input type="text" id="confirmPassword6" placeholder="Branch" min="10" required autocomplete="off" />
                        </div>
                        <div class="formGroup6">
                            <input type="text" id="password6" placeholder="Subjects" required autocomplete="off" />
                        </div>
                        <div class="formGroup6">
                            <button type="submit" class="btn26">SUBMIT</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}
