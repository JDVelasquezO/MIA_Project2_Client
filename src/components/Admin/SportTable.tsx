import React, {useEffect, useState} from 'react';

const SportTable = () => {
    const [ sports, setSports ] = useState([]);
    const url = 'http://localhost:8000/quinielas.io/getSports'

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
                                </tr>
                                </thead>
                                <tbody>
                                    {
                                        sports.map(sport => {
                                            return (
                                                <tr style={{ backgroundColor: sport["NameColor"] }}>
                                                    <th>{ sport["IdSport"] }</th>
                                                    <th>{ sport["NameSport"] }</th>
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