import React, { useEffect } from 'react';
import AppCard from '../AppCard/AppCard';
import './index.css';

const AppIndex = () => {
    useEffect(() => {
        let appboard = document.getElementById("AppBoard")!;
        let count = appboard.childElementCount;

        for (let i = 0; i < count; i++) {
            let emptyItem = document.createElement("a");
            emptyItem.className = "card is-empty";
            appboard.appendChild(emptyItem);
        }
    }, []);

    return (
        <div className="AppBoardContent">
            <div>アプリ一覧</div>

            <div id="AppBoard" className="AppBoard">
                <AppCard apptitle="ユーザー一覧" appsrc="/userlist" />
                <AppCard apptitle="YouTube" appsrc="/youtube" />
                <AppCard apptitle="電卓" appsrc="/calc" />
                <AppCard apptitle="電卓" appsrc="/calc" />
                <AppCard apptitle="電卓" appsrc="/calc" />
                <AppCard apptitle="電卓" appsrc="/calc" />
                <AppCard apptitle="電卓" appsrc="/calc" />
            </div>
        </div>
    );
}
export default AppIndex;