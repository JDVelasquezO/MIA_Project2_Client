import React, {SyntheticEvent, useState} from 'react';

const ChangePhoto = () => {
    const [oldPass, setOldPass] = useState('');
    const [newPass, setNewPass] = useState('');
    const [newRepeat, setNewPassRepeat] = useState('');

    const updatePassword = async (e: SyntheticEvent) => {
        e.preventDefault();

        if (newPass !== newRepeat) {
            alert("Las contraseñas son diferentes");
            return;
        }

        const res = await fetch('http://localhost:8000/quinielas.io/updatePass', {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            credentials: 'include',
            body: JSON.stringify({
                oldPass, newPass
            })
        });
        const content = await res.json();
        if (content == "not success") {
            alert("La antigua contraseña no existe");
        } else {
            window.location.href = '/profile';
        }
    }

    return (
        <div className={'container'}>
            <div className='card mt-3 p-3'>
                <div className="field">
                    <label className="label">Cambiar Foto de Perfil</label>
                    <div className="file has-name">
                        <div className="file">
                            <label className="file-label">
                                <input className="file-input" type="file" name="resume" />
                                <span className="file-cta">
                                  <span className="file-label">
                                    Choose a file…
                                  </span>
                                </span>
                            </label>
                        </div>
                    </div>
                </div>
            </div>

            <form onSubmit={updatePassword} className='card mt-3 p-3'>
                <div className="field">
                    <label className="label">Cambiar Contraseña</label>
                    <div className="control">
                        <input className="input" type="password" placeholder="Antigua Contraseña"
                           onChange={e => setOldPass(e.target.value)} />
                    </div><br />
                    <div className="control">
                        <input className="input" type="password" placeholder="Nueva Contraseña"
                               onChange={e => setNewPass(e.target.value)} />
                    </div><br />
                    <div className="control">
                        <input className="input" type="password" placeholder="Repetir Nueva Contraseña"
                            onChange={e => setNewPassRepeat(e.target.value)} />
                    </div><br />
                    <div className="field is-grouped">
                        <div className="control">
                            <input className="button is-primary" type="submit" value="Actualizar Contraseña" />
                        </div>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default ChangePhoto;