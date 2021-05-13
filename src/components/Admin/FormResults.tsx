import React, {SyntheticEvent, useEffect, useState} from 'react';

// @ts-ignore
// @ts-ignore
const FormResults = () => {
    const [ data, setData ] = useState([]);
    const [ res1, setRes1 ] = useState('');
    const [ res2, setRes2 ] = useState('');
    const [ idEvent, setIdEvent ] = useState('');
    const [ idClass1, setClass1 ] = useState('')
    const [ idClass2, setClass2 ] = useState('')
    const url = 'http://localhost:8000/quinielas.io/getEvents';

    useEffect(() => {
        (
            async () => {
                const res = await fetch(url, {
                    headers: { 'Content-Type': 'application/json' },
                    credentials: 'include'
                });

                const dateArray: Array<any> = [];
                const content = await res.json();
                console.log(content)
                content.map(function (e: any) {
                    let objectDate: any = { title: '', idClass1: '', idClass2: '', idEvent: '',
                    res1: '', res2: ''}
                    // console.log(e.Teams[0]);
                    objectDate.title = `${e.Teams[0].NameTeam} vs ${e.Teams[1].NameTeam}`;
                    objectDate.idClass1 = `${e.Teams[0].Classification}`;
                    objectDate.idClass2 = `${e.Teams[1].Classification}`;
                    objectDate.idEvent = `${e.IdEvent}`;
                    objectDate.res1 = `${e.Teams[0].RealResult}`;
                    objectDate.res2 = `${e.Teams[1].RealResult}`;
                    dateArray.push(objectDate);
                });
                //console.log(dateArray)
                // @ts-ignore
                setData(dateArray);
            }
        )();
    }, [url]);

    const putResults = async (idEvent: string, res1: string, res2: string, idClass1: string, idClass2: string) => {
        let fkIdClass1, fkIdClass2;
        if (idClass1 === 'Visitante' && idClass2 === 'Local') {
            fkIdClass1 = "1";
            fkIdClass2 = "2";
        } else {
            fkIdClass1 = "2";
            fkIdClass2 = "1";
        }
        console.log(idEvent, res1, res2, idClass1, idClass2);
        const res = await fetch('http://localhost:8000/quinielas.io/updateResults', {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                "idEvent": idEvent,
                "idClass1": fkIdClass1,
                "idClass2": fkIdClass2,
                "res1": res1,
                "res2": res2
            })
        });
        window.location.href = '/workingDays'
        /*const content = await res.json();
        console.log(content);*/
    }

    return (
        <div>
            <h1 className={'title'}>Ingresar Resultados</h1>
            <div className='container'>
                {
                    data.map((data) => {
                        // @ts-ignore
                        let title = data.title;
                        // @ts-ignore
                        let idEvent = data.idEvent;
                        // @ts-ignore
                        let idClass1 = data.idClass1;
                        // @ts-ignore
                        let idClass2 = data.idClass2;
                        // @ts-ignore
                        let result1 = data.res1
                        // @ts-ignore
                        let result2 = data.res2
                        return (
                            <div className={'column'}>
                                <div className='card p-3'>
                                    <h2>{ title }</h2>
                                    <input type={'hidden'} defaultValue={idEvent} />
                                    <input onChange={e => setRes1(e.target.value)}
                                           defaultValue={result1}
                                        className="input" type="text" placeholder="Resultado 1" />
                                    <input onChange={e => setRes2(e.target.value)}
                                           defaultValue={result2}
                                        className="input" type="text" placeholder="Resultado 2" /><br/><br/>
                                    <button onClick={() => putResults(idEvent,
                                        (res1) ? res1 : result1,
                                        (res2) ? res2 : result2,
                                        idClass1, idClass2)}
                                            className='button is-primary' >
                                        Ingresar Resultado
                                    </button>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    );
};

export default FormResults;