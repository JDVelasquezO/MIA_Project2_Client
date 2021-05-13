import React, {useEffect, useState} from 'react';

const SeasonUser = (props: { match: { params: { id: any; } } }) => {
    const { id } = props.match.params;
    const url = `http://localhost:8000/quinielas.io/getEventParticipant/${id}`;
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
                console.log(content)
            }
        )();
    }, [url]);

    return (
        <div className={'container'}>
            <h1 className={'title'}>Detalles de usuario {id}</h1>
            <div className={'card'}>
                <table className="table">
                    <thead>
                        <tr>
                            <th><abbr>Deporte</abbr></th>
                            <th><abbr>Equipo</abbr></th>
                            <th><abbr>Prediccion Usuario</abbr></th>
                            <th><abbr>Resultado</abbr></th>
                            <th><abbr>Fecha de juego</abbr></th>
                        </tr>
                    </thead>
                    <tbody>
                    {
                        data.map(d => {
                            // @ts-ignore
                            let sport = d.NameSport
                            // @ts-ignore
                            let team1 = `${d.Teams[0].NameTeam} - ${d.Teams[0].Classification}`
                            // @ts-ignore
                            let userRes = d.Teams[0].UserResult
                            // @ts-ignore
                            let realRes = d.Teams[0].RealResult
                            // @ts-ignore
                            let date = d.DateOfGame
                            const newDate = new Date(date)
                            return (
                                <tr>
                                    <th>{ sport }</th>
                                    <td>{ team1 }</td>
                                    <td>{ userRes }</td>
                                    <td>{ realRes }</td>
                                    <td>{ newDate.toDateString() }</td>
                                </tr>
                            )
                        })
                    }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default SeasonUser;