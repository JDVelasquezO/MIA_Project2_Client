import React, {SyntheticEvent, useState} from 'react';

const FormSport = (props: { colors: Array<any> }) => {
    const [ idColor, setIdColor ] = useState(0);
    const [ nameSport, setNameSport ] = useState('');

    const changeColor = (e: string) => {
        setIdColor(parseInt(e.split(' ')[0]));
    }

    const registerSport = async (e: SyntheticEvent) => {
        e.preventDefault();
        console.log(idColor, nameSport)
        const res = await fetch('http://localhost:8000/quinielas.io/postSports', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                "nameSport": nameSport,
                "fkIdColor": idColor.toString()
            })
        });

        /*const content = await res.json()
        console.log(content)*/
        window.location.href = '/sports'
    }

    return (
        <div>
            <div className="card">
                <div className="card-content">
                    <form onSubmit={registerSport}>
                        <div className="field">
                            <label className="label">Nombre Deporte</label>
                            <div className="control">
                                <input onChange={ e => setNameSport(e.target.value) }
                                       className="input" type="text" placeholder="Futbol..." />
                            </div>
                        </div>
                        <div className="field">
                            <label>Escoger Equipo Visitante</label><br />
                            <div className="select">
                                <select onChange={e => changeColor(e.target.value)}>
                                    <option>- Color -</option>
                                    {
                                        props.colors.map(color => {
                                            return (
                                                // @ts-ignore
                                                <option>{ color.IdColor } - { color.NameColor }</option>
                                            )
                                        })
                                    }
                                </select>
                            </div>
                        </div>

                        <div>
                            <button className="button is-primary">Registrar Deporte</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default FormSport;