import React, {useState} from 'react';
import PhotoProfile from "../../components/User/PhotoProfile";
import FormProfile from "../../components/User/FormProfile";
import ChangePhoto from "../../components/User/ChangePhoto";

const Profile = (props: { first: string, last: string, username: string, birth: string,
    email: string, photo: string }) => {
    return (
        <div className='columns mt-2'>
            <div className={'column'}>
                <PhotoProfile photo={props.photo} />
            </div>
            <div className={'column'}>
                <FormProfile birth={props.birth} email={props.email} first={props.first}
                             last={props.last} username={props.username} />
            </div>
            <div className={'column mr-3'}>
                <ChangePhoto />
            </div>
        </div>
    );
};

export default Profile;