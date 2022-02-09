/*
 * @Author: Helitha Rupasinghe;
 * @Version: Version 1.0 - 09/02/2022
 * License : MIT
 */
import { Button } from '@material-ui/core'
import React from 'react'
import './login.css'
import { auth, provider } from '../../config/firebase'

const Login = () => {
    const signIn = () => {
        // clever google login shizz...

        auth.signInWithPopup(provider).catch((err) => alert(err.message))
    }
    return (
        <div className='login' >
            <div className="login__logo">
                <img src="https://www.freepnglogos.com/uploads/discord-logo-png/discord-logo-logodownload-download-logotipos-1.png" alt="discord logo" />
            </div>

            <Button onClick={signIn}>Sign In</Button>
        </div>
    )
}

export default Login
