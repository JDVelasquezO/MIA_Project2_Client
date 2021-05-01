import React from 'react';

const ActualSeason = (props: { name: string, capital: number, bronze: number,
        silver: number, gold: number }) => {
    return (
        <div className="card">
            <div className="card-content">
                <div className="content">
                    <strong>{ props.name }</strong><br />
                    <p>
                        En juego: Q.{ props.capital }
                    </p>
                    <p>
                        Participantes:
                    </p>
                    <div className={'columns'} >
                        <div className="column mr-3 box has-background-warning">
                            <p>{ props.gold }</p>
                        </div>
                        <div className="column mr-3 box has-text-white has-background-dark">
                            <p>{ props.silver }</p>
                        </div>
                        <div className="column box has-text-white has-background-danger">
                            <p>{ props.bronze }</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ActualSeason;