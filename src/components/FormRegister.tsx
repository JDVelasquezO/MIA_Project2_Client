import React, { SyntheticEvent, useState } from 'react';
import FormSection from "./FormSection";
import { Redirect } from 'react-router-dom';

const FormRegister = () => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const [first, setFirst] = useState('');
    const [last, setLast] = useState('');
    const [birth, setBirth] = useState('');
    const [register, setRegister] = useState('');
    const [photo, setPhoto] = useState('');
    const [redirect, setRedirect] = useState(false);

    const handlerSubmit = async (e: SyntheticEvent) => {
        e.preventDefault();
        const date = new Date();
        setRegister(`${date.getFullYear()}/${date.getMonth()+1}/${date.getDate()}`);
        // console.log(username, email, pass, first, last, birth, register, photo);
        const res = await fetch('http://localhost:8000/quinielas.io/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                username, email, pass, first, last, birth, register, photo
            })
        });
        const content = await res.json()
        console.log(content)
        // setRedirect(true);
    }

    if (redirect) {
        return <Redirect to='/login'/>
    }

    return (
        <form onSubmit={handlerSubmit}>
            <div className="columns box">
                <FormSection label={"Usuario"} type={"text"} placeholder={"e.g JDVelasquezO"}
                             setAttr={setUsername}
                />
                <FormSection label={"Correo"} type={"email"} placeholder={"e.g jd@gmail.com"}
                             setAttr={setEmail}
                />
                <FormSection label={"Contraseña"} type={"password"} placeholder={"*********"}
                             setAttr={setPass}
                />
            </div><br />
            <div className="columns box">
                <FormSection label={"Nombre"} type={"text"} placeholder={""}
                             setAttr={setFirst}
                />
                <FormSection label={"Apellido"} type={"text"} placeholder={""}
                             setAttr={setLast}
                />
                <FormSection label={"Fecha Nacimiento"} type={"date"} placeholder={""}
                             setAttr={setBirth}
                />
            </div><br />
            <div className="columns box">
                <FormSection label={"Fotografía"} type={"file"} placeholder={""}
                             setAttr={setPhoto}
                />
            </div><br/>

            <button className="button is-primary">Registrarse</button>
        </form>
    );
};

export default FormRegister;