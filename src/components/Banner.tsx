import React from 'react';
import { Link } from 'react-router-dom'

const Banner = (props: { color: string, title: string, subtitle: string }) => {
    return (
        <section className={props.color}>
            <div className="hero-body">
                <div className="">
                    <p className="title">
                        {props.title}
                    </p>
                    <p className="subtitle">
                        {props.subtitle}
                    </p>
                    <Link to='/prediction' className={'button is-info'}>Predecir ahora</Link>
                </div>
            </div>
        </section>
    );
};

export default Banner;