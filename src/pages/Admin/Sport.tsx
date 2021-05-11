import React, {SyntheticEvent, useEffect, useState} from 'react';
import { Link } from 'react-router-dom';
import SportTable from "../../components/Admin/SportTable";
import FormSport from "../../components/Admin/FormSport";
import FormColor from "../../components/Admin/FormColor";
import FormTeam from "../../components/Admin/FormTeam";

const Sport = () => {
    const [ colors, setColors ] = useState([]);

    useEffect(() => {
        (
            async () => {
                const res = await fetch('http://localhost:8000/quinielas.io/getColors', {
                    headers: { 'Content-Type': 'application/json' },
                    credentials: 'include'
                });

                const content = await res.json()
                setColors(content)
            }
        )();
    });

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
                    <li>
                        <Link to='/season'>Temporadas</Link>
                    </li>
                    <li>
                        <Link to='/rewardsAdmin'>Recompensas</Link>
                    </li>
                    <li className="is-active">
                        <Link to='/sports'>Deportes</Link>
                    </li>
                    <li>
                        <Link to='/reports'>Reportes</Link>
                    </li>
                </ul>
            </div>
            <div className={'columns'}>
                <div className={'column'}>
                    <SportTable />
                </div>
                <div className={'column'}>
                    <FormSport colors={colors} /><br />
                    <div className={'columns'}>
                        <div className={'column'} >
                            <FormColor />
                        </div>
                        <div className={'column'} >
                            <FormTeam />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Sport;