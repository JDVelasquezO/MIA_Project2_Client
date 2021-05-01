import React from 'react';

const FormSection = (props: { setAttr: (e: string) => void,
    label: string, type: string, placeholder: string}) => {
    return (
        <div className="column">
            <div className="field">
                <label className="label">{props.label}</label>
                <div className="control">
                    <input className="input" type={props.type}
                           placeholder={props.placeholder}
                           onChange={e => props.setAttr(e.target.value)}
                    />
                </div>
            </div>
        </div>
    );
};

export default FormSection;