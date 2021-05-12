import React, {SyntheticEvent, useState} from 'react';

const FormEvent = (props: { team1: string, team2: string, id_event: string, idClass1: number,
    idClass2: number, className1: string, className2: string }) => {
    const [ userRes1, setUserRes1 ] = useState(0);
    const [ userRes2, setUserRes2 ] = useState(0);

    console.log(props.team2, props.team1, props.id_event, props.idClass2, props.idClass1)

    const postPrediction = async (e: SyntheticEvent) => {
        e.preventDefault();

        // console.log(props.id_event, userRes1, userRes2);
        const res = await fetch('http://localhost:8000/quinielas.io/postPrediction', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            credentials: 'include',
            body: JSON.stringify({
                "id_event": parseInt(props.id_event),
                "userRes1": userRes1,
                "userRes2": userRes2,
                "id_class1": props.idClass1,
                "id_class2": props.idClass2
            })
        });
        const content = await res.json();
        // window.location.href = '/profile';
        setUserRes1(content.userRes1);
        setUserRes2(content.userRes2);
        window.location.href = `/event/${props.id_event}`
    }

    return (
        <div className={'container'}>
            <div className="notification is-danger">
                <strong>Aún no tienes ninguna predicción para este evento</strong>
            </div>
            <form onSubmit={postPrediction} >
                <div className="field columns">
                    <div className={'column'}>
                        <label className="label">Prediccion para { props.team1 } ({ props.className1 })
                        </label>
                        <div className="control">
                            <input className="input" type="text" placeholder="Text input"
                            onChange={e => setUserRes1(parseInt(e.target.value))} />
                        </div>
                    </div>

                    <div className={'column'}>
                        <label className="label">Prediccion para { props.team2 } ({ props.className2 })
                        </label>
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