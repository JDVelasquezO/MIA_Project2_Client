import React, {useEffect} from 'react';
import { Link } from 'react-router-dom';
import FormResults from "../../components/Admin/FormResults";

const Results = () => {
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
                    <li className="is-active">
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
            <FormResults />
        </div>
    );
};

export default Results;