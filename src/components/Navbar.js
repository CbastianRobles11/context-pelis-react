import React, { useContext } from 'react'
import UserContext from '../context/UserContext'

export default function Navbar() {

    //es lad data que traemos en el app.js
    const {user,login,logout}= useContext(UserContext)

    return (
        <nav className="navbar navbar-dark bg-dark mb-4">
            <div className="container">
                <span className="navbar-brand">
                    <h2>{user ? `Hola ${user.name}` : `Bienenid@`}</h2>
                </span>
                {user ?
                    <button className="btn btn-primary" onClick={logout}>
                        Cerrar Sesion
                    </button>
                    :
                    <button className="btn btn-primary" onClick={login} >
                        Iniciar Sesion
                    </button>

                }
            </div>
        </nav>
    )
}
