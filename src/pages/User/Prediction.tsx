import React, {useEffect, useState} from 'react';
import '../../styles/loader.css'
import EventComponent from "../../components/EventComponent";

const Prediction = () => {
    const [ events, setEvents ] = useState(<div className="loader container mt-6 is-align-content-center"/>);
    const dataArray: any = [];

    useEffect(() => {
        (
            async () => {
                const res = await fetch('http://localhost:8000/quinielas.io/getEvents', {
                    headers: {'Content-Type': 'application/json'},
                    credentials: 'include'
                });

                const content = await res.json();
                content.map(function (e: any) {
                    let objectDate: any = { title: '', date: '', colorSport: '' };
                    let dateOfGame = new Date(e.DateOfGame);
                    let color = e.ColorSport;

                    objectDate.title = `${e.Teams[0].NameTeam}: ${e.Teams[0].UserResult}  
                    vs 
                    ${e.Teams[1].NameTeam}: ${e.Teams[1].UserResult}`;
                    objectDate.date = dateOfGame;
                    objectDate.colorSport = chooseColor(color);
                    objectDate.id = e.IdEvent;
                    dataArray.push(objectDate);
                });
                showEvents();
            }
        )();
    });

    const chooseColor = (color: string) => {
        let newColor = "";
        switch (color) {
            case "Rojo":
                newColor = "red";
                break;
            case "Azul":
                newColor = "blue";
                break;
        }
        return newColor;
    }

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