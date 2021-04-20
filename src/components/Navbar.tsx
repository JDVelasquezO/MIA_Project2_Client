import React from 'react';
import { Link } from 'react-router-dom'

const Navbar = (props: {name: string, setName: (name: string) => void}) => {
    let menu;

    const logoutHandle = async () => {
        await fetch('http://localhost:8000/quinielas.io/logout', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            credentials: 'include',
        });
        props.setName('');
    }

    if (props.name === undefined) {
        menu = (
            <div className="buttons">
                <Link to='/login' className="button is-primary">
                    Iniciar Sesion
                </Link>
                <Link to='/register' className="button is-primary">
                    <strong>Registro</strong>
                </Link>
            </div>
        );
    } else {
        menu = (
            <div className="buttons">
                <Link to='/profile' className="button is-primary">
                    <strong>{props.name}</strong>
                </Link>
                <Link to='/login' className="button is-light" onClick={logoutHandle}>
                    <strong>Cerrar Sesión</strong>
                </Link>
            </div>
        );
    }

    return (
        <nav className="navbar is-primary" role="navigation" aria-label="main navigation">
            <div className="navbar-brand">
                <Link className="navbar-item" to="/">
                    <h1>Quiniela<b>App</b></h1>
                </Link>

                <a role="button" className="navbar-burger" aria-label="menu" aria-expanded="false"
                   data-target="navbarBasicExample">
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                </a>
            </div>

            <div id="navbarBasicExample" className="navbar-menu">
                <div className="navbar-end">
                    <div className="navbar-item">
                        {menu}
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;