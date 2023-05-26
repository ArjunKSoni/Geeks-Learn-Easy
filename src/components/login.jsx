import React from 'react'

export default function Login() {
    return (
        <div className='home min-h-screen bodyregister text-white'>
            <div class="container6">
                <div class="form6">
                    <div class="btn6">
                        <button class="signUpBtn6">SIGN UP</button>
                    </div>
                    <form class="signUp6" action="" method="get">
                        <div class="formGroup6">
                            <input type="text" id="userName6" placeholder="User Name" required autocomplete="off" />
                        </div>
                        <div class="formGroup6">
                            <input type="email" placeholder="Email ID" name="email" required autocomplete="off" />
                        </div>
                        <div class="formGroup6">
                            <input type="number" id="confirmPassword6" placeholder="Phone Number" min="10" required autocomplete="off" />
                        </div>
                        <div class="formGroup6">
                            <input type="password" id="password6" placeholder="Password" required autocomplete="off" />
                        </div>

                        <div class="formGroup6">
                            <button type="submit" class="btn26">REGISTER</button>
                        </div>
                        <div class="checkBox6">
                            <div class="text6" id="checkbox6">Aldready have an account? <a href="#" style={{ color: "rgb(134, 230, 209)" }}>Login</a></div>
                        </div>
                    </form>



                </div>
            </div>
        </div>
    )
}
