import React, {SyntheticEvent, useState} from 'react';
import { Link } from 'react-router-dom';
import {User} from "../../models/User";
const data = require('../../data/test.yaml');

const BulkLoad = () => {

    const sendFile = (e: SyntheticEvent) => {
        e.preventDefault()

        const res = async () => {

        }
    }

    return (
        <div>
            <div className="tabs is-centered">
                <ul>
                    <li>
                        <Link to='/home'>Inicio</Link>
                    </li>
                    <li className="is-active">
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

            <div>
                <form className={'container'} >
                    <div className="file">
                        <label className="file-label">
                            <input className="file-input" type="file" name="resume" />
                            <span className="file-cta">
                              <span className="file-icon">
                                <i className="fas fa-upload" />
                              </span>
                              <span className="file-label">
                                Escoger archivo...
                              </span>
                            </span>
                            </label>
                        <input type={'submit'} value={'Enviar'} />
                        </div>
                </form>
            </div>
        </div>
    );
};

export default BulkLoad;