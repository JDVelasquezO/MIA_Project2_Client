import React, {useEffect, useState} from 'react';
import '../../styles/loader.css'
import FormEvent from "../../components/Event/FormEvent";

const Event = (props: { match: { params: { id: any; }; }; }) => {
    const { id } = props.match.params;
    const [ title, setTitle ] = useState("");
    const [ userRes, setUserRes ] = useState(<div className="loader container mt-6 is-align-content-center" />);
    const [ team1, setTeam1 ] = useState("");
    const [ team2, setTeam2 ] = useState("");
    const [ idTeam1, setIdTeam1 ] = useState(0);
    const [ idTeam2, setIdTeam2 ] = useState(0);
    const [ class1, setClass1 ] = useState(0);
    const [ class2, setClass2 ] = useState(0);
    const [ formPrediction, setFormPrediction ] = useState(<div />);

    useEffect(() => {
        (
            async () => {
                const res = await fetch(`http://localhost:8000/quinielas.io/getEvent/${id}`, {
                    headers: {'Content-Type': 'application/json'},
                    credentials: 'include'
                });

                const content = await res.json();
                setTitle(`${content.Teams[0].NameTeam} vs ${content.Teams[1].NameTeam}`);
                setTeam1(content.Teams[0].NameTeam);
                setTeam2(content.Teams[1].NameTeam);
                setIdTeam1(content.Teams[0].IdTeam);
                setIdTeam2(content.Teams[1].IdTeam);
                if (content.Teams[0].Classification == 'local') {
                    setClass1(1);
                    setClass2(2);
                } else {
                    setClass1(2);
                    setClass2(1);
                }
                if (content.Teams[0].UserResult != -1 && content.Teams[1].UserResult != -1) {
                    setUserRes(<p>
                            {content.Teams[0].UserResult} - {content.Teams[1].UserResult}
                        </p>
                    )
                } else {
                    showAlert();
                }
            }
        )();
    });

    const showAlert = () => {
        setUserRes(
            <div />
        )
        setFormPrediction(
            <FormEvent team1={team1} team2={team2} id_event={id} idTeam2={idTeam2}
                       idTeam1={idTeam1} idClass1={class1} idClass2={class2} />
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