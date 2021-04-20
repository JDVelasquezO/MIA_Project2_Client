import React from 'react';
import PhotoProfile from "../../components/PhotoProfile";
import FormProfile from "../../components/FormProfile";
import ChangePhoto from "../../components/ChangePhoto";

const Profile = () => {
    return (
        <div className='columns mt-2'>
            <div className={'column'}>
                <PhotoProfile />
            </div>
            <div className={'column'}>
                <FormProfile />
            </div>
            <div className={'column mr-3'}>
                <ChangePhoto />
            </div>
        </div>
    );
};

export default Profile;