import React from 'react';

const TableResults = (props: { data: Array<any> }) => {

    return (
        <div className='container'>
            <div className="card">
                <header className="card-header">
                    <p className="card-header-title">
                        Estado actual de los resultados
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
                                    <th><abbr title="idMemb">Posición</abbr></th>
                                    <th><abbr title="idTemp">Jugador</abbr></th>
                                    <th><abbr title="typeMemb">P10</abbr></th>
                                    <th><abbr title="priceMemb">P5</abbr></th>
                                    <th><abbr title="updateMemb">P3</abbr></th>
                                    <th><abbr title="updateMemb">P0</abbr></th>
                                    <th><abbr title="updateMemb">Totales</abbr></th>
                                </tr>
                                </thead>
                                <tbody>
                                {
                                    props.data.map(d => {
                                        return (
                                            <tr>
                                                <th>{ d.IdUser }</th>
                                                <td>{ d.FirstName }</td>
                                                <td>{ d.QuantHits }</td>
                                                <td>6</td>
                                                <td>8</td>
                                                <td>3</td>
                                                <td>22</td>
                                            </tr>
                                        )
                                    })
                                }
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TableResults;