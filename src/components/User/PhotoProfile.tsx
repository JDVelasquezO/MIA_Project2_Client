import React from 'react';

const date = new Date();

const PhotoProfile = (props: { photo: string } ) => {
    return (
        <div className="card mt-3 ml-4">
            <div className="card-image">
                <figure className="image is-1by1">
                    <img className='is-rounded'
                         src={ props.photo }  alt={'profile-photo'}/>
                </figure>
            </div>
            <div className="card-content">
                <div className="media">
                    <div className="media-content">
                        <p className="title is-4">@Yessi</p>
                    </div>
                </div>

                <div className="content">
                    <p>
                        Fecha de registro<br/>
                        <time>{date.getDay()}/{date.getMonth()}/{date.getFullYear()}</time>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default PhotoProfile;