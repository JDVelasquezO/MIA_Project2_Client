import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import {User} from "../../models/User";
const data = require('../../data/test.yaml');

const BulkLoad = () => {
    const [name, setName] = useState("");
    const [selectedFile, setSelectedFile] = useState(null);

    const uploadFile = (files: string) => {
        /*const formData = new FormData();
        formData.append("file", files);*/
        console.log(files);
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
                <form className={'container'}>
                    <div className="file">
                        <label className="file-label">
                            <input onChange={
                                e => uploadFile(e.target.value)
                            } className="file-input" type="file" name="resume" />
                            <span className="file-cta">
                              <span className="file-icon">
                                <i className="fas fa-upload" />
                              </span>
                              <span className="file-label">
                                Escoger archivo...
                              </span>
                            </span>
                            </label>
                        </div>
                </form>
            </div>
        </div>
    );
};

export default BulkLoad;