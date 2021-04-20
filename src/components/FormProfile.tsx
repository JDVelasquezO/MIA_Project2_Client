import React, {SyntheticEvent, useState} from 'react';

const FormProfile = (props: { first: string, last: string, username: string, birth: string, email: string }) => {
    const [first, setFirst] = useState('');
    const [last, setLast] = useState('');
    const [username, setUsername] = useState('');
    const [birth, setBirth] = useState('');
    const [email, setEmail] = useState('');

    let date = new Date(props.birth);

    const uploadProfile = async (e: SyntheticEvent) => {
        e.preventDefault();
        await fetch('http://localhost:8000/quinielas.io/updateUser', {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            credentials: 'include',
            body: JSON.stringify({
                "username": (username) ? username : props.username,
                "first": (first) ? first : props.first,
                "last": (last) ? last : props.last,
                "birth": props.birth,
                "email": (email) ? email : props.email
            })
        });
        window.location.href = '/profile';
    }

    return (
        <form onSubmit={uploadProfile} className="card mt-3 p-3">
            <div className="field columns">
                <div className='column'>
                    <label className="label">Nombre</label>
                    <div className="control">
                        <input className="input" type="text" defaultValue={props.first}
                            onChange={e => setFirst(e.target.value)} />
                    </div>
                </div>

                <div className='column'>
                    <label className="label">Apellido</label>
                    <div className="control">
                        <input className="input" type="text" placeholder="Text input" defaultValue={props.last}
                               onChange={e => setLast(e.target.value)}/>
                    </div>
                </div>
            </div>

            <div className="field">
                <label className="label">Usuario</label>
                <div className="control">
                    <input className="input" type="text" placeholder="Text input" defaultValue={props.username}
                           onChange={e => setUsername(e.target.value)}/>
                </div>
            </div>

            <div className="field">
                <label className='label'>Cumpleaños: {date.toLocaleDateString()}</label>
                <div className='control'>
                    <input className="input" type='date'
                           onChange={e => setBirth(e.target.value)} />
                </div>
            </div>

            <div className="field">
                <label className="label">Correo</label>
                <div className="control">
                    <input className="input" type="email" placeholder="Email input" defaultValue={props.email}
                           onChange={e => setEmail(e.target.value)}/>
                </div>
            </div>
            <div className="field is-grouped">
                <div className="control">
                    <input className="button is-primary" type="submit" value="Actualizar Perfil" />
                </div>
            </div>
        </form>
    );
};

export default FormProfile;