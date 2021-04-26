import React, {useEffect, useState} from 'react';
import { useParams } from "react-router-dom";

const Event = (props: { match: { params: { id: any; }; }; }) => {
    const { id } = props.match.params;
    const [ title, setTitle ] = useState("");
    const [ userRes, setUserRes ] = useState(<div />);
    const [ team1, setTeam1 ] = useState("");
    const [ team2, setTeam2 ] = useState("");
    const [ formPrediction, setFormPrediction ] = useState(<div />);

    useEffect(() => {
        (
            async () => {
                const res = await fetch(`http://localhost:8000/quinielas.io/getEvent/${id}`, {
                    headers: {'Content-Type': 'application/json'},
                    credentials: 'include'
                });

                const content = await res.json();

                if (content.Teams == null) {
                    showAlert();
                } else {
                    setTitle(`${content.Teams[0].NameTeam} vs ${content.Teams[1].NameTeam}`);
                    if (content.Teams[0].UserResult != -1 && content.Teams[1].UserResult != -1) {
                        setUserRes(<p>
                                {content.Teams[0].UserResult} - {content.Teams[1].UserResult}
                            </p>
                        )
                    } else {
                        setUserRes(
                            <div className="notification is-danger">
                                <strong>Aún no tienes ninguna predicción para este evento</strong>
                            </div>
                        );
                    }
                    setTeam1(content.Teams[0].NameTeam);
                    setTeam2(content.Teams[1].NameTeam);
                    //console.log(content);
                    verifyPrediction(content.Teams[0].UserResult, content.Teams[1].UserResult);
                }
            }
        )();
    });

    const showAlert = () => {
        setFormPrediction(
            <div className={'container'}>
                <div className="notification is-danger">
                    <strong>Aún no tienes ninguna predicción para este evento</strong>
                </div>
                <form>
                    <div className="field columns">
                        <div className={'column'}>
                            <label className="label">Prediccion para { team1 }</label>
                            <div className="control">
                                <input className="input" type="text" placeholder="Text input" />
                            </div>
                        </div>

                        <div className={'column'}>
                            <label className="label">Prediccion para { team2 }</label>
                            <div className="control">
                                <input className="input" type="text" placeholder="Text input" />
                            </div>
                        </div>
                    </div>
                    <button className={'button is-primary'}>Predecir</button>
                </form>
            </div>
        )
    }

    const verifyPrediction = (resInt1: number, resInt2: number) => {
        if (resInt2 == -1 && resInt1 == -1) {
            showAlert();
        } else {
            setFormPrediction(
                <div className="notification is-warning">
                    <strong>Esperando resultados...</strong>
                </div>
            )
        }
    }

    return (
        <div className={'container'}>
            <h1 className={'title is-2'}>
                {title}
            </h1>
            <div className="card">
                <div className="card-content">
                    <div className="content">
                        Tu predicción: <br />
                        <p className={'title is-4'}>
                            { userRes }
                        </p>
                    </div>
                    <div>
                        { formPrediction }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Event;