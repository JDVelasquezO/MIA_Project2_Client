import React, {SyntheticEvent, useState} from 'react';

const FormEvent = (props: { team1: string, team2: string, id_event: string }) => {
    const [ userRes1, setUserRes1 ] = useState(0);
    const [ userRes2, setUserRes2 ] = useState(0);

    const postPrediction = async (e: SyntheticEvent) => {
        e.preventDefault();

        console.log(props.id_event, userRes1, userRes2);
        const res = await fetch('http://localhost:8000/quinielas.io/postPrediction', {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            credentials: 'include',
            body: JSON.stringify({
                "id_event": parseInt(props.id_event),
                "userRes1": userRes1,
                "userRes2": userRes2
            })
        });
        const content = await res.json();
        // window.location.href = '/profile';
        setUserRes1(content.userRes1);
        setUserRes2(content.userRes2);
    }

    return (
        <div className={'container'}>
            <div className="notification is-danger">
                <strong>Aún no tienes ninguna predicción para este evento</strong>
            </div>
            <form onSubmit={postPrediction} >
                <div className="field columns">
                    <div className={'column'}>
                        <label className="label">Prediccion para { props.team1 }</label>
                        <div className="control">
                            <input className="input" type="text" placeholder="Text input"
                            onChange={e => setUserRes1(parseInt(e.target.value))} />
                        </div>
                    </div>

                    <div className={'column'}>
                        <label className="label">Prediccion para { props.team2 }</label>
                        <div className="control">
                            <input className="input" type="text" placeholder="Text input"
                                   onChange={e => setUserRes2(parseInt(e.target.value))} />
                        </div>
                    </div>
                </div>
                <button className={'button is-primary'}>Predecir</button>
            </form>
        </div>
    );
};

export default FormEvent;