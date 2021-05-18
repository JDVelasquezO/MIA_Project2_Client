import React, {SyntheticEvent, useState} from 'react';

const FormSeason = () => {
    const [ name, setName ] = useState('');
    const [ startDate, setStartDate ] = useState('');
    const [ endDate, setEndDate ] = useState('');

    const postSeason = async (e: SyntheticEvent) => {
        e.preventDefault()
        const res = await fetch('http://localhost:8000/quinielas.io/postSeason', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            credentials: 'include',
            body: JSON.stringify({
                "startDate": startDate,
                "endDate": endDate,
                "nameSeason": name
            })
        });

        //console.log(res.json());
        window.location.href = '/season'
    }

    return (
        <div>
            <form onSubmit={postSeason}>
                <div className={'card p-3'}>
                    <h1 className={'title'}>Crear Temporadas</h1>
                    <div className="field">
                        <label className="label">Nombre</label>
                        <div className="control">
                            <input onChange={e => setName(e.target.value)}
                                className="input" type="text" placeholder="Ej, 2020-Q1" />
                        </div>
                        <div className="control">
                            <label className={'label'}>Fecha inicio</label>
                            <input onChange={e => setStartDate(e.target.value)}
                                   className="input" type="date" placeholder="Text input" />
                        </div>
                        <div className="control">
                            <label className={'label'}>Fecha Fin</label>
                            <input onChange={e => setEndDate(e.target.value)}
                                   className="input" type="date" placeholder="Text input" />
                        </div><br/>
                        <button className={'button is-primary'}>Crear</button>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default FormSeason;