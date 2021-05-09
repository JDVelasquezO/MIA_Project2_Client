import React, {useEffect, useState} from 'react';
import TableResults from "../../components/User/TableResults";

const Results = () => {
    const [ data, setData ] = useState([]);
    const url = "http://localhost:8000/quinielas.io/getPositionsP10";

    useEffect(() => {
        (
            async () => {
                const res = await fetch(url, {
                    headers: {'Content-Type': 'application/json'},
                    credentials: 'include'
                });

                const content = await res.json();
                setData(content);
                // console.log(content);
            }
        )();
    }, [url]);

    return (
        <div className={'container'}>
            <div className={'is-align-content-center'}>
                <h1 className={'title'}>Resultados actuales</h1>
                <TableResults data={data} />
            </div>
            <br/><br/>
        </div>
    );
};

export default Results;