import React from 'react';
import { Link } from 'react-router-dom'

const Banner = (props: { color: string, title: string, subtitle: string, titleButton: string,
            redirect: string}) => {
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
                    <Link to={ props.redirect } className={'button is-info'}>{ props.titleButton }</Link>
                </div>
            </div>
        </section>
    );
};

export default Banner;