import React from 'react';
import { Link } from 'react-router-dom';
import Banner from "../../components/Banner";

const Home = (props: {name: string, role: number}) => {
    let page;

    if (props.role == 4) {
        page = (
            <div>
                <div className="tabs is-centered">
                    <ul>
                        <li className="is-active">
                            <Link to='/home'>Inicio</Link>
                        </li>
                        <li>
                            <Link to='/bulkLoad'>Carga Masiva</Link>
                        </li>
                        <li>
                            <Link to='/workingDays'>Jornadas</Link>
                        </li>
                        <li>
                            <Link to='/season'>Temporadas</Link>
                        </li>
                        <li>
                            <Link to='/rewardsAdmin'>Recompensas</Link>
                        </li>
                        <li>
                            <Link to='/sports'>Deportes</Link>
                        </li>
                        <li>
                            <Link to='/reports'>Reportes</Link>
                        </li>
                    </ul>
                </div>

                <div className={'container'}>
                    <div className="card">
                        <div className="card-content">
                            <div className="content">
                                <strong>2020-Q5</strong><br />
                                <p>
                                    En juego: Q.8030.00
                                </p>
                                <p>
                                    Participantes:
                                </p>
                                <div className={'columns'} >
                                    <div className="column mr-3 box has-background-warning">
                                        <p>52</p>
                                    </div>
                                    <div className="column mr-3 box has-text-white has-background-dark">
                                        <p>33</p>
                                    </div>
                                    <div className="column box has-text-white has-background-danger">
                                        <p>12</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    } else {
        page = (
            <div>
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
        )
    }

    return (
        <div>
            { page }
        </div>
    );
};

export default Home;