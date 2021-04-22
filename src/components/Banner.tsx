import React from 'react';

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
                </div>
            </div>
        </section>
    );
};

export default Banner;