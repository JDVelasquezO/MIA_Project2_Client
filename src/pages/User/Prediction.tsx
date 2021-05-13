import React, {useEffect, useState} from 'react';
import '../../styles/loader.css'
import EventComponent from "../../components/Event/EventComponent";

const Prediction = () => {
    const [ events, setEvents ] = useState(<div className="loader container mt-6 is-align-content-center"/>);
    const dataArray: any = [];
    const url = 'http://localhost:8000/quinielas.io/getEvents';

    useEffect(() => {
        (
            async () => {
                const res = await fetch(url, {
                    headers: {'Content-Type': 'application/json'},
                    credentials: 'include'
                });

                const content = await res.json();
                content.map(function (e: any) {
                    let objectDate: any = { title: '', date: '', colorSport: '' };
                    let dateOfGame = new Date(e.DateOfGame);
                    let color = e.ColorSport;

                    objectDate.title = `${e.Teams[0].NameTeam}  
                    vs 
                    ${e.Teams[1].NameTeam}`;
                    objectDate.date = dateOfGame;
                    objectDate.colorSport = color;
                    objectDate.id = e.IdEvent;
                    dataArray.push(objectDate);
                });
                showEvents();
            }
        )();
    }, [url]);

    const showEvents = () => {
        setEvents(<EventComponent dataArray={dataArray} />);
    }

    return (
        <div>
            <h1>Escoge el evento de tu preferencia:</h1>
            <div className={'container'}>
                { events }
            </div>
        </div>
    );
};

export default Prediction;