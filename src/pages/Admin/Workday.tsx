import React, {useEffect, useState} from 'react';
import { Link } from 'react-router-dom';
import {MyMonthlyCalendar} from "../../components/Widgets/Calendar";
import {MyWeeklyCalendar} from "../../components/Widgets/WeeklyCalendar";
import FormSport from "../../components/Admin/FormSport";

const Workday = () => {
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
                    //console.log(e.Teams[0]);
                    objectDate.title = `${e.Teams[0].NameTeam}: ${e.Teams[0].RealResult}  
                    vs 
                    ${e.Teams[1].NameTeam}: ${e.Teams[1].RealResult}`
                    objectDate.date = dateOfGame
                    objectDate.color = color;
                    dateArray.push(objectDate);
                });
                //console.log(dateArray);
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

    return (
        <div>
            <div className="tabs is-centered">
                <ul>
                    <li>
                        <Link to='/home'>Inicio</Link>
                    </li>
                    <li>
                        <Link to='/bulkLoad'>Carga Masiva</Link>
                    </li>
                    <li className="is-active">
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

            <div className={'container columns'}>
                <div className={'column ml-6 card is-two-thirds'}>
                    <button onClick={changeMensual} className={'button is-info'}>Mensual</button>&nbsp;
                    <button onClick={changeSemanal} className={'button is-primary'}>Semanal</button>
                    <br /><br/>
                    <div className='container' >
                        { calendar }
                    </div>
                </div>&nbsp;
                <div className={'column card is-one-third'}>
                    <h2 className={'title'}>Crear Evento</h2>
                    <FormSport />
                </div>
            </div>
        </div>
    );
};

export default Workday;