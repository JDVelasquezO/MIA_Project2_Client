import React from 'react';
import { useParams } from "react-router-dom";

const Event = (props: { match: { params: { id: any; }; }; }) => {
    const { id } = props.match.params;
    return (
        <div>
            Hola a todos {id}
        </div>
    );
};

export default Event;