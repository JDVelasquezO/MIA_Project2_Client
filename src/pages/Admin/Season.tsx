import React, {useEffect, useState} from 'react';
import { Link } from 'react-router-dom';

const Season = () => {
    const url = 'http://localhost:8000/quinielas.io/getParticipants';
    const [ data, setData ] = useState([]);

    useEffect(() => {
        (
            async () => {
                const res = await fetch(url, {
                    headers: { 'Content-Type': 'application/json' },
                    credentials: 'include'
                });

                const content = await res.json();
                setData(content)
                // console.log(content)
            }
        )();
    }, [url]);

    return (
        <div>
            <div className="tabs is-centered">
                <ul>
                    <li>
                        <Link to='/home'>Inicio</Link>
                    </li>
                    <li>
                        <Link to='/bulkLoad'>Carga Masiva</Link>
                    </li>
                    <li>
                        <Link to='/workingDays'>Jornadas</Link>
                    </li>
                    <li className="is-active">
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
            <div>
                <h1 className={'title'}>Temporadas</h1>
                <p>Participantes actuales:</p>
                <div className={'container'}>
                    {
                        data.map(d => {
                            // @ts-ignore
                            let id = d.Id
                            // @ts-ignore
                            let name = d.Username
                            // @ts-ignore
                            let IdMembership = d.IdMembership
                            return (
                                <div className={'card m-2 p-3'}>
                                    <p className={'title'}>{ id } - { name } - { IdMembership }</p>
                                    <Link className={'button is-primary'} to={'/seasonUser/'+IdMembership} >
                                        <strong>
                                            Ver detalles
                                        </strong>
                                    </Link>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    );
};

export default Season;