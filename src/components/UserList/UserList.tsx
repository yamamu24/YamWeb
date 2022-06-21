import React, {useState, useEffect} from 'react';
import axios from 'axios';
import './index.css';
import UserCard from '../UserCard/UserCard';

type user = {
    userid: number
    name: string
    email: string
    password: string
    picture: string
}

const UserList = () => {
    const [users, setUsers] = useState<user[]>([]);

    useEffect(() => {
        axios.get('http://yamamu24.sakura.ne.jp/ApiServer/UserManagement/getUserList.php')
            .then(res => {
                setUsers(res.data)
            })
    }, [])

    return (
        <div className="contentArea">
            {
                users.map(user => <UserCard key={user.userid} username={user.name} picture={user.picture} />)
            }
        </div>
    );
}
export default UserList;