import React from 'react';
import { Link } from 'react-router-dom'

const Home = (props: {name: string, role: number}) => {
    let page;

    if (props.role == 3) {
        page = 'Admin'
    } else {
        page = (
            <div className="tabs is-centered">
                <ul>
                    <li className="is-active">
                        <Link to='/home'>Inicio</Link>
                    </li>
                    <li>
                        <Link to='/subs'>Subscripción</Link>
                    </li>
                    <li><a>Eventos</a></li>
                    <li><a>Recompensas</a></li>
                </ul>
            </div>
        )
    }

    return (
        <div>
            { page }
            <h1>Quinielas</h1>
        </div>
    );
};

export default Home;