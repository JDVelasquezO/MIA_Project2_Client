import React, {useEffect, useState} from 'react';
import { Link } from 'react-router-dom'
import Membership from "../../components/User/Membership";

const Subscription = (props: {name: string, role: number, idUser: number}) => {
    const [idMembership, setIdMembership] = useState(0);
    const [tier, setTier] = useState('');
    const [price, setPrice] = useState(0);
    let page;

    useEffect(() => {
        (
            async () => {
                const res = await fetch('http://localhost:8000/quinielas.io/membership', {
                    headers: { 'Content-Type': 'application/json' },
                    credentials: 'include'
                });

                const content = await res.json();
                setIdMembership(content.IdMembership)
                setTier(content.TypeTier)
                setPrice(content.PriceTier)
            }
        )();
    });

    if (props.role == 4) {
        page = 'Admin'
    } else {
        page = (
            <div className="tabs is-centered">
                <ul>
                    <li>
                        <Link to='/home'>Inicio</Link>
                    </li>
                    <li className="is-active">
                        <Link to='/subs'>Subscripción</Link>
                    </li>
                    <li>
                        <Link to='/events'>Eventos</Link>
                    </li>
                    <li><a>Recompensas</a></li>
                </ul>
            </div>
        )
    }

    return (
        <div>
            {page}
            <Membership idMembresia={idMembership} price={price} type={tier} idUser={props.idUser} />
        </div>
    );
};

export default Subscription;