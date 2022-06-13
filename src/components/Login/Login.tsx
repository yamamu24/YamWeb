import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './index.css';
import Button01 from '../DesignComponents/Button/Button01';
import TextBox01 from '../DesignComponents/TextBox/TextBox01';
import logo from '../../images/Logo/logo.png';

type user = {
    userid: number
    name: string
    email: string
    password: string
    picture: string
}

const Login = () => {
    const [user, setUser] = useState();

    useEffect(() => {
        axios.get('http://localhost/ApiServer/UserManagement/getUserList.php')
            .then(res => {
                setUser(res.data)
            })
    }, [])

    return (
        <div className="loginFormPanel">
            <div className="logoArea">
                <img src={logo} className="logoimg" alt="YamWeb"></img>
            </div>

            <div className="loginForm">
                <TextBox01 type="mail" labelText="メールアドレス" formId="userMailAddress" formName="userMailAddress" defaultValue=""></TextBox01>
                <TextBox01 type="password" labelText="パスワード" formId="userPassword" formName="userPassword" defaultValue=""></TextBox01>

                <div className="buttonArea">
                    <Button01 buttonText="新規登録"></Button01>
                    <Button01 buttonText="ログイン" colorType="blue"></Button01>
                </div>
            </div>
        </div>
    );
}
export default Login;