import React, {useEffect, useState} from 'react';
import { Link } from 'react-router-dom';
import FormSeason from "../../components/User/FormSeason";
import FormWorkingdays from "../../components/User/FormWorkingdays";

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
            <div className={'columns'}>
                <div className={'column'}>
                    <div className={'card container'}>
                        <h1 className={'title'}>Temporadas</h1>
                        <p>Participantes actuales:</p>
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
                                        <p className={'title'}>{ IdMembership } - { name } </p>
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
                <div className={'column'}>
                    <FormSeason />
                    <br />
                    <FormWorkingdays />
                </div>
            </div>
        </div>
    );
};

export default Season;