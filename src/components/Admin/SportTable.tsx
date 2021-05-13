import React, {SyntheticEvent, useEffect, useState} from 'react';

const SportTable = () => {
    const [ sports, setSports ] = useState([]);
    const url = 'http://localhost:8000/quinielas.io/getSports'
    const [ nameSport, setNameSport ] = useState('')
    const [ idColor, setIdColor ] = useState('')
    const [ idSport, setIdSport ] = useState(0)

    useEffect(() => {
        (
            async () => {
                const res = await fetch(url, {
                    headers: { 'Content-Type': 'application/json' },
                    credentials: 'include'
                });

                const content = await res.json()
                setSports(content)
                // console.log(content)
            }
        )();
    }, [url])

    const updateSport = async (idSport: number, nameSport:string, idColor: number) => {
        // console.log(idSport, nameSport, idColor);
        const res = await fetch('http://localhost:8000/quinielas.io/putSports', {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                "nameSport": nameSport,
                "idColor": idColor.toString(),
                "idSport": idSport.toString()
            })
        });
        window.location.href = '/sports'
    }

    const deleteSport = async (idSport: number) => {
        await fetch('http://localhost:8000/quinielas.io/delSports', {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                "idSport": idSport.toString()
            })
        });
        window.location.href = '/sports'
    }

    return (
        <div>
            <div className="card">
                <div className="card-content">
                    <div className="content">
                        <div className="table-container">
                            <table className="table">
                                <thead>
                                <tr>
                                    <th><abbr title="idMemb">Id Deporte</abbr></th>
                                    <th><abbr title="idTemp">Nombre</abbr></th>
                                    <th><abbr title="idTemp">Color</abbr></th>
                                    <th><abbr title="idTemp">Actualizar</abbr></th>
                                    <th><abbr title="idTemp">Eliminar</abbr></th>
                                </tr>
                                </thead>
                                <tbody>
                                    {
                                        sports.map(sport => {
                                            return (
                                                <tr style={{ backgroundColor: sport["NameColor"] }}>
                                                    <th>
                                                        <input className={'input'} type={'text'}
                                                        defaultValue={ sport["IdSport"] } readOnly />
                                                    </th>
                                                    <th>
                                                        <input className={'input'}
                                                               onChange={ e => setNameSport(e.target.value) }
                                                               type={'text'} defaultValue={ sport["NameSport"] }/>
                                                    </th>
                                                    <th>
                                                        <input className={'input'}
                                                               onChange={e => setIdColor(e.target.value)}
                                                               type={'text'} defaultValue={ sport["IdColor"] }>
                                                        </input>
                                                    </th>
                                                    <th>
                                                        <button className={'button is-primary'}
                                                                onClick={
                                                                    () => updateSport(sport["IdSport"],
                                                                        (nameSport) ? nameSport : sport["NameSport"],
                                                                        (idColor) ? parseInt(idColor) : sport["IdColor"])
                                                                }
                                                        >Actualizar</button>
                                                    </th>
                                                    <th>
                                                        <button
                                                            onClick={() => deleteSport(sport["IdSport"])}
                                                            className={'button is-danger'}>Eliminar</button>
                                                    </th>
                                                </tr>
                                            )
                                        })
                                    }
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SportTable;