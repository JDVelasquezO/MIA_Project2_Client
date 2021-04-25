import React, {useEffect, useState} from 'react';
import {Link} from 'react-router-dom'
import {MyMonthlyCalendar} from "../../components/Calendar";
import {MyWeeklyCalendar} from "../../components/WeeklyCalendar";

const Events = (props: {name: string, role: number}) => {
    const notification = (
        <div className="notification is-warning">
            Para cargar los datos, por favor presionar el botón de <strong>Mensual</strong> o&nbsp;
            <strong>Semanal</strong> :)
        </div>
    )
    const [calendar, setCalendar] = useState(notification);
    let page;
    const dateArray: Array<Date> = [];

    useEffect(() => {
        (
            async () => {
                const res = await fetch('http://localhost:8000/quinielas.io/getEvents', {
                    headers: { 'Content-Type': 'application/json' },
                    credentials: 'include'
                });

                const content = await res.json();
                content.map(function (e: any) {
                    let objectDate: any = { title: '', date: '', color: '' };
                    let dateOfGame = new Date(e.DateOfGame);
                    let color = ''
                    if (e.Color == "Morado") {
                        color = 'has-background-info-dark';
                    } else {
                        color = 'has-background-grey'
                    }
                    objectDate.title = `${e.Teams[0].NameTeam}: ${e.Teams[0].UserResult}  
                    vs 
                    ${e.Teams[1].NameTeam}: ${e.Teams[1].UserResult}`
                    objectDate.date = dateOfGame
                    objectDate.color = color;
                    dateArray.push(objectDate);
                });
                // console.log(dateArray);
            }
        )();
    });

    const changeMensual = () => {
        setCalendar(
            <MyMonthlyCalendar dates={ dateArray } />
        );
    }

    const changeSemanal = () => {
        setCalendar(
            <MyWeeklyCalendar dates={ dateArray } />
        );
    }

    if (props.role == 3) {
        page = 'Admin'
    } else {
        page = (
            <div className="tabs is-centered">
                <ul>
                    <li>
                        <Link to='/home'>Inicio</Link>
                    </li>
                    <li>
                        <Link to='/subs'>Subscripción</Link>
                    </li>
                    <li className="is-active">
                        <Link to='/events'>Eventos</Link>
                    </li>
                    <li><a>Recompensas</a></li>
                </ul>
            </div>
        )
    }

    return (
        <div>
            { page }
            <button onClick={changeMensual} className={'button is-info'}>Mensual</button>&nbsp;
            <button onClick={changeSemanal} className={'button is-primary'}>Semanal</button>
            <br /><br/>
            <div className='container' >
                { calendar }
            </div>
        </div>
    );
};

export default Events;