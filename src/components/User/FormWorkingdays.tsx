import React, {SyntheticEvent, useEffect, useState} from 'react';

const FormWorkingdays = () => {
    const url = 'http://localhost:8000/quinielas.io/getSeasons';
    const [ data, setData ] = useState([]);
    const [ name, setName ] = useState('');
    const [ startDate, setStartDate ] = useState('')
    const [ endDate, setEndDate ] = useState('')

    useEffect(() => {
        (
            async () => {
                const res = await fetch(url, {
                    headers: { 'Content-Type': 'application/json' },
                    credentials: 'include'
                });

                const content = await res.json();
                setData(content)
                console.log(content)
            }
        )();
    }, [url]);

    const selectName = (name: string) => {
        console.log(name.split(' ')[0]);
        setName(name.split(' ')[0])
    }

    const postWorkingDay = (e: SyntheticEvent) => {
        e.preventDefault();
    }

    return (
        <div>
            <form onSubmit={postWorkingDay}>
                <div className={'card p-3'}>
                    <h1 className={'title'}>Crear Jornadas</h1>
                    <div className="field">
                        <label className="label">Temporada a la que pertenece</label>
                        <div className="control">
                            <div className="select">
                                <select onChange={e => selectName(e.target.value)}>
                                    {
                                        data.map(d => {
                                            // @ts-ignore
                                            let startDate = d.StartDate
                                            // @ts-ignore
                                            let endDate = d.EndDate
                                            let newStart = new Date(startDate)
                                            let endStart = new Date(endDate)
                                            // @ts-ignore
                                            let name = `${d.IdSeason} ${d.NameSeason}  (${newStart.toDateString()} - ${endStart.toDateString()})`
                                            return (
                                                <option>{ name }</option>
                                            )
                                        })
                                    }
                                </select>
                            </div>
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

export default FormWorkingdays;