import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import './index.css';

type props = {
    apptitle: string
    appsrc: string
};

const AppCard: FC<props> = ({ apptitle, appsrc }) => {
    return (
        <Link to={appsrc} className="card">{apptitle}</Link>
    );
}
export default AppCard;