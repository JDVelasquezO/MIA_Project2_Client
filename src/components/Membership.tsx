import React, {SyntheticEvent, useState} from 'react';

const Membership = (props: {idMembresia: number, type: string, price: number, idUser: number}) => {
    const date = new Date();
    const [form, setForm] = useState(<h2>{date.getDate()}/{date.getMonth()}/{date.getFullYear()}</h2>);

    const updateContent = async (e: SyntheticEvent, paramIdTier: number) => {
        e.preventDefault();
        let idTier = paramIdTier;
        let idUser = props.idUser;
        const res = await fetch('http://localhost:8000/quinielas.io/updateMembership', {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            credentials: 'include',
            body: JSON.stringify({
                "idTier": idTier.toString(),
                "idUser": idUser.toString()
            })
        });
        const content = await res.json();
        window.location.href = 'http://localhost:3001/subs';
        console.log(content);
    }

    const updateGold = async (e: SyntheticEvent) => {
        await updateContent(e, 1);
    };
    const updateSilver = async (e: SyntheticEvent) => {
        await updateContent(e, 2);
    };
    const updateBronze = async (e: SyntheticEvent) => {
        await updateContent(e, 3);
    };

    const cancelSubscription = async (e: SyntheticEvent) => {
        await updateContent(e, 4);
    }

    let showForm = () => {
        setForm(
            <div className={'container'}>
                <h3>Escoge una opción a actualizar</h3>
                <div className={'columns'}>
                    <form className={'column'} onSubmit={updateGold}>
                        <button className='button is-warning is-small'>Gold</button>
                    </form>
                    <form className={'column'} onSubmit={updateSilver}>
                        <button className='button is-light is-small'>Silver</button>
                    </form>
                    <form className={'column'} onSubmit={updateBronze}>
                        <button className='button is-danger is-small'>Bronze</button>
                    </form>
                    <form className={'column'} onSubmit={cancelSubscription}>
                        <button className='button is-dark is-small'>Cancelar</button>
                    </form>
                </div>
            </div>
        );
    }

    return (
        <div className='container'>
            <div className="card">
                <header className="card-header">
                    <p className="card-header-title">
                        Estado actual de tu subscripción
                    </p>
                </header>
            </div>

            <div className="card">
                <div className="card-content">
                    <div className="content">
                        <div className="table-container">
                            <table className="table">
                                <thead>
                                <tr>
                                    <th><abbr title="idMemb">Id Membresía</abbr></th>
                                    <th><abbr title="idTemp">Temporada no.</abbr></th>
                                    <th><abbr title="typeMemb">Tipo de Membresía</abbr></th>
                                    <th><abbr title="priceMemb">Precio de Membresía</abbr></th>
                                    <th><abbr title="updateMemb">Acciones</abbr></th>
                                </tr>
                                </thead>
                                <tbody>
                                <tr>
                                    <th>{props.idMembresia}</th>
                                    <td>Primera</td>
                                    <td>{props.type}</td>
                                    <td>Q.{props.price.toString()}</td>
                                    <td>
                                        <button onClick={showForm} className='button is-info is-small'>Actualizar</button>
                                    </td>
                                </tr>
                                </tbody>
                            </table>
                        </div>
                        <hr />
                        { form }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Membership;