import React from 'react';

const ChangePhoto = () => {
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

            <div className='card mt-3 p-3'>
                <div className="field">
                    <label className="label">Cambiar Contraseña</label>
                    <div className="control">
                        <input className="input" type="password" placeholder="Antigua Contraseña" value='12345678' />
                    </div><br />
                    <div className="control">
                        <input className="input" type="password" placeholder="Nueva Contraseña" />
                    </div><br />
                    <div className="control">
                        <input className="input" type="password" placeholder="Repetir Nueva Contraseña" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ChangePhoto;