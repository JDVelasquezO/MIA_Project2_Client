import React from 'react';
import { Link } from 'react-router-dom'

const EventComponent = (props: {dataArray: Array<any>}) => {
    console.log(props.dataArray)
    return (
        <div className={'container'} >
            {
                props.dataArray.map(data => {
                    // console.log(data);
                    return (
                        <div className="column" style={{ cursor: 'pointer' }}>
                            <div className="card" style={{ backgroundColor: data.colorSport, color: "white" }}>
                                <div className="card-content">
                                    <div className="content">
                                        <Link to={'/event/'+data.id} >
                                            <strong>
                                            { data.title }
                                            </strong>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    );
}

export default EventComponent;