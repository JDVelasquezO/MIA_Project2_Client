import React, {SyntheticEvent, useState} from 'react';
import { Link } from 'react-router-dom';
const yaml = require('js-yaml');
const user = require('../../models/User');

const BulkLoad = () => {
    const [ load, setLoad ] = useState({});
    const chargeFile = (file: FileList | null) => {
        const reader = new FileReader();
        if (file) {
            // console.log(file[0])
            reader.readAsText(file[0]);
            reader.onload = e => {
                // @ts-ignore
                const doc = yaml.load(e.target.result);
                // setLoad(JSON.stringify(doc, null, 2));
                setLoad(doc);
            }
        }
    }

    const sendFile = async (e: SyntheticEvent) => {
        e.preventDefault();
        // @ts-ignore
        // console.log(load);
        const res = await fetch('http://localhost:8000/quinielas.io/uploadFile', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                // @ts-ignore
                "load": load
            })
        });
        const content = await res.json();
        console.log(content)
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
                <form onSubmit={sendFile} className={'container'} >
                    <div className="file">
                        <label className="file-label">
                            <input onChange={ e => chargeFile(e.target.files) }
                                   className="file-input" type="file" name="resume" />
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