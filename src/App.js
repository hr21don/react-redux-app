/*
 * @Author: Helitha Rupasinghe;
 * @Version: Version 1.0 - 09/02/2022
 * License : MIT
 */
import React, { useEffect } from 'react'
import './app.css'

import { useSelector, useDispatch } from 'react-redux'
import { selectUser } from '../src/features/userSlice'
import { auth } from '../src/config/firebase'
import { login, logout } from '../src/features/userSlice'

import Sidebar from './components/Sidebar'
import Chat from './components/Chat'
import Login from '../src/folio/signin'

function App() {
    const dispatch = useDispatch()
    const user = useSelector(selectUser)

    useEffect(() => {
        auth.onAuthStateChanged((authUser) => {
            if (authUser) {
                dispatch(
                    login({
                        uid: authUser.uid,
                        photo: authUser.photoURL,
                        email: authUser.email,
                        displayName: authUser.displayName,
                    }))
            } else {
                dispatch(logout())
            }
        })
    }, [dispatch])

    return (
        <div className="app">
            {user ? (
                <>
                    <Sidebar />
                    <Chat />
                </>
            ) : (
                    <Login />
                )}
        </div>
    )
}

export default App
