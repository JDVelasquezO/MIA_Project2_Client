import React, {SyntheticEvent, useState} from 'react';

const FormColor = () => {
    const [ nameColor, setNameColor ] = useState('');
    const [ codHex, setCodHex ] = useState('');

    const registerColor = async (e: SyntheticEvent) => {
        e.preventDefault();
        await fetch('http://localhost:8000/quinielas.io/postColors', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                nameColor, codHex
            })
        });

        window.location.href = '/sports'
    }

    return (
        <div>
            <div className="card">
                <div className="card-content">
                    <form onSubmit={registerColor}>
                        <div className="field">
                            <label className="label">Nombre Color</label>
                            <div className="control">
                                <input onChange={ e => setNameColor(e.target.value) }
                                       className="input" type="text" placeholder="Rojo..." />
                            </div>
                        </div>
                        <div className="field">
                            <label className="label">Codigo Hexadecimal</label>
                            <div className="control">
                                <input onChange={ e => setCodHex(e.target.value) }
                                       className="input" type="text" placeholder="#5e35b1..." />
                            </div>
                        </div>

                        <div>
                            <button className="button is-primary">Registrar Color</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default FormColor;