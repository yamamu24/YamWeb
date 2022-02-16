import React, { FC } from 'react';
import './index.css';

type props = {
    username: string
    picture: string
};

const UserCard: FC<props> = ({ username, picture }) => {
    return (
        <div className="userCard">
            <span>{username}</span>
            <span>{picture}</span>
        </div>
    );
}
export default UserCard;