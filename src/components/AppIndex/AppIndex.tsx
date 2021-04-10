import React from 'react';
import AppCard from '../AppCard/AppCard';
import './index.css';

const AppIndex = () => {
    return (
        <div>
            <div>アプリ一覧</div>

            <div className="AppBoard">
                <AppCard apptitle="電卓" appsrc="/calc" />
            </div>
        </div>
    );
}
export default AppIndex;