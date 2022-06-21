import React, { useState, useEffect, FC } from 'react';
import axios from 'axios';
import './index.css';
import Button01 from '../DesignComponents/Button/Button01';
import TextBox01 from '../DesignComponents/TextBox/TextBox01';
import logo from '../../images/Logo/logo.png';
import { Link } from 'react-router-dom';

type user = {
    userid: number
    name: string
    email: string
    password: string
    picture: string
}

type props = {
    handleLogin: (userData: user) => void
};

const Login: FC<props> = (props) => {
    const [user, setUser] = useState();

    return (
        <div className="loginFormPanel">
            <div className="logoArea">
                <img src={logo} className="logoimg" alt="YamWeb"></img>
            </div>

            <div className="loginForm">
                <form>
                    <TextBox01 type="mail" labelText="メールアドレス" formId="userMailAddress" formName="userMailAddress" defaultValue=""></TextBox01>
                    <TextBox01 type="password" labelText="パスワード" formId="userPassword" formName="userPassword" defaultValue=""></TextBox01>

                    <div className="buttonArea">
                        <Link to="/signup">
                            <Button01 buttonText="新規登録"></Button01>
                        </Link>
                        <Button01 buttonText="ログイン" colorType="blue"></Button01>
                    </div>
                </form>
            </div>
        </div>
    );
}
export default Login;