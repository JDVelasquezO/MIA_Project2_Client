import React, {useEffect, useState} from 'react';
import '../../styles/loader.css'
import FormEvent from "../../components/Event/FormEvent";

const Event = (props: { match: { params: { id: any; } } }) => {
    const { id } = props.match.params;
    const [ title, setTitle ] = useState("");
    const [ userRes, setUserRes ] = useState(<div className="loader container mt-6 is-align-content-center" />);
    const [ team1, setTeam1 ] = useState("");
    const [ team2, setTeam2 ] = useState("");
    const [ class1, setClass1 ] = useState(0);
    const [ class2, setClass2 ] = useState(0);
    const [ nameClass1, setNameClass1 ] = useState('');
    const [ nameClass2, setNameClass2 ] = useState('');
    const [ formPrediction, setFormPrediction ] = useState(<div />);
    const url = `http://localhost:8000/quinielas.io/getEvent/${id}`

    useEffect(() => {
        (
            async () => {
                const res = await fetch(url, {
                    headers: {'Content-Type': 'application/json'},
                    credentials: 'include'
                });

                const content = await res.json();
                console.log(content);
                setTeam1(content.Teams[0].NameTeam);
                setTeam2(content.Teams[1].NameTeam);
                setClass1(content.Teams[0].IdClass);
                setClass2(content.Teams[1].IdClass);
                setNameClass1(content.Teams[0].Classification);
                setNameClass2(content.Teams[1].Classification);
                setTitle(`${content.Teams[0].NameTeam} vs ${content.Teams[1].NameTeam}`);
                //console.log(team1, team2, class1, class2, nameClass2, nameClass1)
                if (content.Teams[0].UserResult != -1 && content.Teams[1].UserResult != -1) {
                    setUserRes(<p>
                            {content.Teams[0].UserResult} - {content.Teams[1].UserResult}
                        </p>
                    )
                } else {
                    showAlert(content.Teams[0].NameTeam, content.Teams[1].NameTeam, content.Teams[0].Classification,
                        content.Teams[1].Classification, content.Teams[0].IdClass, content.Teams[1].IdClass);
                }
            }
        )();
    }, [url]);

    const showAlert = (team1: string, team2: string, nameClass1: string, nameClass2: string,
                       class1: number, class2: number) => {
        setUserRes(
            <div/>
        )
        setFormPrediction(
            <FormEvent team1={team1} team2={team2} id_event={id} className1={nameClass1} className2={nameClass2}
                       idClass1={class1} idClass2={class2} />
        )
    }

    return (
        <div className={'container'}>
            <h1 className={'title is-2'}>
                {title}
            </h1>
            <div className="card">
                <div className="card-content">
                    <div className="content">
                        Tu predicción: <br />
                        <p className={'title is-4'}>
                            { userRes }
                        </p>
                    </div>
                    <div>
                        { formPrediction }
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Event;