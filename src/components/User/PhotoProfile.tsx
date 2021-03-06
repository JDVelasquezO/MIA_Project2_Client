import React from 'react';

const date = new Date();

const PhotoProfile = () => {
    return (
        <div className="card mt-3 ml-4">
            <div className="card-image">
                <figure className="image is-1by1">
                    <img className='is-rounded'
                         src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.pinimg.com%2Foriginals%2F28%2F16%2Fd9%2F2816d92aaa1eece6e88b80d469abd227.jpg&f=1&nofb=1"  alt={'profile-photo'}/>
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