import React from 'react';

const FormProfile = () => {
    return (
        <div className="card mt-3 p-3">
            <div className="field">
                <label className="label">Nombre</label>
                <div className="control">
                    <input className="input" type="text" placeholder="Text input" value='Yessica Lara' />
                </div>
            </div>

            <div className="field">
                <label className="label">Usuario</label>
                <div className="control">
                    <input className="input" type="text" placeholder="Text input" value="Yessi" />
                </div>
            </div>

            <div className="field">
                <label className='label'>Cumpleaños</label>
                <div className='control'>
                    <input className="input" type='date' value='1999-04-23' />
                </div>
            </div>

            <div className="field">
                <label className="label">Correo</label>
                <div className="control">
                    <input className="input" type="email" placeholder="Email input" value="yess@gmail.com" />
                </div>
            </div>
            <div className="field is-grouped">
                <div className="control">
                    <button className="button is-link">Actualizar Perfl</button>
                </div>
            </div>
        </div>
    );
};

export default FormProfile;