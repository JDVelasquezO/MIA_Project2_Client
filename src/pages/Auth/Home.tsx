import React, {useEffect, useState} from 'react';
import { Link } from 'react-router-dom';
import Banner from "../../components/User/Banner";
import ActualSeason from "../../components/Admin/ActualSeason";

const Home = (props: {name: string, role: number}) => {
    const [ name, setName ] = useState('');
    const [ capital, setCapital ] = useState(0);
    const [ quantBronze, setQuantBronze ] = useState(0);
    const [ quantSilver, setQuantSilver ] = useState(0);
    const [ quantGold, setQuantGold ] = useState(0);
    let page;

    useEffect(() => {
        (
            async () => {
                const res = await fetch('http://localhost:8000/quinielas.io/getActualSeason', {
                    headers: { 'Content-Type': 'application/json' },
                    credentials: 'include'
                });

                const content = await res.json();
                // console.log(content);
                setName(content.NameSeason);
                setCapital(content.Capital)
                setQuantBronze(content.QuantityBronze)
                setQuantGold(content.QuantityGold)
                setQuantSilver(content.QuantitySilver)
            }
        )();
    })

    if (props.role == 4) {
        page = (
            <div>
                <div className="tabs is-centered">
                    <ul>
                        <li className="is-active">
                            <Link to='/home'>Inicio</Link>
                        </li>
                        <li>
                            <Link to='/bulkLoad'>Carga Masiva</Link>
                        </li>
                        <li>
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

                <div className={'container'}>
                    <ActualSeason name={name} capital={capital} bronze={quantBronze}
                     silver={quantSilver} gold={quantGold} />
                </div>
            </div>
        )
    } else {
        page = (
            <div>
                <div className="tabs is-centered">
                    <ul>
                        <li className="is-active">
                            <Link to='/home'>Inicio</Link>
                        </li>
                        <li>
                            <Link to='/subs'>Subscripción</Link>
                        </li>
                        <li>
                            <Link to='/events'>Eventos</Link>
                        </li>
                        <li><a>Recompensas</a></li>
                    </ul>
                </div>
                <Banner color={"container hero is-info"}
                        title={"Ingresa tu predicción"}
                        subtitle={"y gana increíbles premios"}
                        titleButton={"Predecir ahora"} redirect={"/prediction"} />
                <br />
                <Banner color={"container hero is-danger"}
                        title={"Posiciones"}
                        subtitle={"Ven a ver en que posición estás actualmente"}
                        titleButton={"Ver resultados"} redirect={"/results"} />
                <br />
                <Banner color={"container hero is-primary"}
                        title={"Resultados"}
                        subtitle={"Marcador real de cada partido"}
                        titleButton={"Juegos de la temporada"} redirect={"/real_result"} />
            </div>
        )
    }

    return (
        <div>
            { page }
        </div>
    );
};

export default Home;