import React, {useState} from 'react';
import { Link } from 'react-router-dom'
import {MyMonthlyCalendar} from "../../components/Calendar";
import {MyWeeklyCalendar} from "../../components/WeeklyCalendar";

const Events = (props: {name: string, role: number}) => {
    const [calendar, setCalendar] = useState(<MyMonthlyCalendar />);
    let page;

    const changeMensual = () => {
        setCalendar(
            <MyMonthlyCalendar />
        );
    }

    const changeSemanal = () => {
        setCalendar(
            <MyWeeklyCalendar />
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
            <div className='container' >
                { calendar }
            </div>
        </div>
    );
};

export default Events;