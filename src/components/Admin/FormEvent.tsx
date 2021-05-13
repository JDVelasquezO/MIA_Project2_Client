import React, {SyntheticEvent, useEffect, useState} from 'react';

const FormEvent = () => {
    const url = 'http://localhost:8000/quinielas.io/getSports';
    const url2 = 'http://localhost:8000/quinielas.io/getWorkdays';
    const [ idSport, setIdSport ] = useState(0);
    const [ nameSport, setNameSport ] = useState('');
    const [ data, setData ] = useState([]);
    const [ nameTeamV, setNameTeamV ] = useState('');
    const [ nameTeamL, setNameTeamL ] = useState('');
    const [ date, setDate ] = useState('');
    const [ time, setTime ] = useState('');
    const [ idWd, setIdWd ] = useState(0);
    const [ nameWd, setNameWd ] = useState('');
    const [ wds, setWds ] = useState([]);

    useEffect(() => {
        (
            async () => {
                const res = await fetch(url, {
                    headers: { 'Content-Type': 'application/json' },
                    credentials: 'include'
                });
                const content = await res.json();
                setData(content);
                content.map((sport: any) => {
                    setIdSport(sport.IdSport);
                    setNameSport(sport.NameSport);
                });

                const res2 = await fetch(url2, {
                    headers: { 'Content-Type': 'application/json' },
                    credentials: 'include'
                });
                const content2 = await res2.json();
                setWds(content2);
                console.log(content2)
            }
        )();
    }, [url, url2]);

    const changeOption = (e: string) => {
        //console.log(e);
        setIdSport(parseInt(e.split(' ')[0]));
    }

    const changeTeamV = (e:string) => {
        setNameTeamV(e);
        // console.log(idTeam, nameTeam);
    }

    const changeTeamL = async (e: string) => {
        setNameTeamL(e);
    }

    const changeWD = async (e: string) => {
        setIdWd(parseInt(e.split(' ')[0]));
        setNameWd(e.split(' ')[2]);
    }

    const sendTeam = async (e: SyntheticEvent) => {
        e.preventDefault();
        const newDate = `${date} ${time}`;
        const res = await fetch('http://localhost:8000/quinielas.io/postEvent', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                "dateEvent": newDate,
                "idWd": idWd.toString(),
                "idStatus": "1",
                "idClass1": "1",
                "idClass2": "2",
                "player1": nameTeamV,
                "player2": nameTeamL,
                "idSport": idSport.toString()
            })
        });
        const content = await res.json();
        // console.log(content)
        window.location.href = '/workingDays'
    }

    return (
        <div>
            <form onSubmit={sendTeam}>
                <div className="field">
                    <label>Escoger Deporte</label><br />
                    <div className="select">
                        <select onChange={e => changeOption(e.target.value)}>
                            <option>- Deporte -</option>
                            {
                                data.map(d => {
                                    return (
                                        // @ts-ignore
                                        <option>{ d.IdSport } - { d.NameSport }</option>
                                    )
                                })
                            }
                        </select>
                    </div>
                </div>
                <div className="field">
                    <label>Escoger Equipo Visitante</label><br />
                    <div className="control">
                        <input onChange={e => changeTeamV(e.target.value)}
                               className="input" type="text" placeholder="Visitante" />
                    </div>
                </div>

                <div className="field">
                    <label>Escoger Equipo Local</label><br />
                    <input onChange={e => changeTeamL(e.target.value)}
                           className="input" type="text" placeholder="Local" />
                </div>

                <div className="field">
                    <label>Escoger Jornada</label><br />
                    <div className="select">
                        <select onChange={e => changeWD(e.target.value)} >
                            <option>- Jornadas -</option>
                            {
                                wds.map(wd => {
                                    return (
                                        // @ts-ignore
                                        <option>{ wd.IdWorkday } - { wd.NameWorkday }</option>
                                    )
                                })
                            }
                        </select>
                    </div>
                </div>

                <div className="field">
                    <label className='label'>Fecha de evento</label>
                    <div className='control'>
                        <input onChange={ e => setDate(e.target.value) } className="input" type='date' />
                    </div>
                </div>
                <div className="field">
                    <label className={'label'} htmlFor="appt">Hora de inicio:</label>
                    <div className={'control'}>
                        <input onChange={ e => setTime(e.target.value) }
                               className={'input'} type="time" min="07:00" max="20:00" />
                    </div>
                    <br />
                    <button className={'button is-primary'}>
                        Crear Evento
                    </button>
                </div>
            </form>
        </div>
    );
};

export default FormEvent;