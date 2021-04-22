import React, {useState} from 'react';
import PhotoProfile from "../../components/PhotoProfile";
import FormProfile from "../../components/FormProfile";
import ChangePhoto from "../../components/ChangePhoto";

const Profile = (props: { first: string, last: string, username: string, birth: string, email: string }) => {
    return (
        <div className='columns mt-2'>
            <div className={'column'}>
                <PhotoProfile />
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