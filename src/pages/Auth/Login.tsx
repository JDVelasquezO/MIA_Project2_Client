import React, {SyntheticEvent, useState} from 'react';
import { Redirect } from 'react-router-dom';
import { Link } from 'react-router-dom';

const Login = (props: {setName: (name: string) => void}) => {
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const [redirect, setRedirect] = useState(false);

    const submitHandler = async (e: SyntheticEvent) => {
        e.preventDefault();
        const res = await fetch('http://localhost:8000/quinielas.io/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            credentials: 'include',
            body: JSON.stringify({
                email, pass
            })
        });
        const content = await res.json();
        setRedirect(true);
        props.setName(content.Username)
    }

    if (redirect) {
        return <Redirect to='/home' />
    }

    return (
        <section className="section container">
            <h1 className="title">
                Inicia Sesión
            </h1>
            <p className="subtitle">
                Para participar en las quinielas
            </p>

            <form onSubmit={submitHandler} className="box">
                <div className="field">
                    <label className="label">Correo</label>
                    <div className="control">
                        <input onChange={e => setEmail(e.target.value)} autoFocus={true}
                               className="input" type="email"
                               placeholder="e.g. alex@example.com" />
                    </div>
                </div>

                <div className="field">
                    <label className="label">Contraseña</label>
                    <div className="control">
                        <input onChange={e => setPass(e.target.value)}
                               className="input" type="password" placeholder="********" />
                    </div>
                </div>

                <button className="button is-primary">Entrar</button>
            </form>
            <Link to='/forgotPass' className="button is-danger">¿Olvidaste tu contraseña?</Link>
        </section>
    );
};

export default Login;