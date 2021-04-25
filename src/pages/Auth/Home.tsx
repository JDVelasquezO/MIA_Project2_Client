import React from 'react';
import { Link } from 'react-router-dom'
import Banner from "../../components/Banner";

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
                    <li>
                        <Link to='/events'>Eventos</Link>
                    </li>
                    <li><a>Recompensas</a></li>
                </ul>
            </div>
        )
    }

    return (
        <div>
            { page }
            <Banner color={"container hero is-info"}
                    title={"Ingresa tu predicción"}
                    subtitle={"y gana increíbles premios"} />
            <br />
            <Banner color={"container hero is-danger"}
                    title={"Aqui va otro título"}
                    subtitle={"y otro subtítulo"} />
            <br />
            <Banner color={"container hero is-primary"}
                    title={"Aquí va un titulo mas"}
                    subtitle={"y otro subtitulo"} />
        </div>
    );
};

export default Home;