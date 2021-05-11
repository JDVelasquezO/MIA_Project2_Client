import React, {SyntheticEvent, useState} from 'react';

const FormTeam = () => {
    const [ nameTeam, setNameTeam ] = useState('');
    const [ idSport, setIdSport ] = useState('');

    const registerTeam = async (e: SyntheticEvent) => {
        e.preventDefault();
        await fetch('http://localhost:8000/quinielas.io/postTeams', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                nameTeam,
                "idSport": idSport.toString()
            })
        });

        window.location.href = '/sports'
    }

    return (
        <div>
            <div className="card">
                <div className="card-content">
                    <form onSubmit={registerTeam}>
                        <div className="field">
                            <label className="label">Nombre Equipo</label>
                            <div className="control">
                                <input onChange={ e => setNameTeam(e.target.value) }
                                       className="input" type="text" placeholder="Galatasaray..." />
                            </div>
                        </div>
                        <div className="field">
                            <label className="label">Codigo Deporte</label>
                            <div className="control">
                                <input onChange={ e => setIdSport(e.target.value) }
                                       className="input" type="text" placeholder="1 (Futbol)..." />
                            </div>
                        </div>

                        <div>
                            <button className="button is-primary">Registrar Equipo</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default FormTeam;