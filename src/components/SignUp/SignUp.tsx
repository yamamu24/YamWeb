import React, { FC } from 'react';
import axios from 'axios';
import './index.css';
import Button01 from '../DesignComponents/Button/Button01';
import TextBox01 from '../DesignComponents/TextBox/TextBox01';
import logo from '../../images/Logo/logo.png';
import { Link } from 'react-router-dom';
import * as His from 'history'

type user = {
    userid: number
    name: string
    email: string
    password: string
    picture: string
}

type props = {
    handleLogin: (userData: user) => void
    history: His.History
};

const SignUp: FC<props> = (props) => {
    const handleSubmit = (event: any) => {
        const target = event.target as typeof event.target & {
            userName: { value: string };
            userMailAddress: { value: string };
            userPassword: { value: string };
        };

        const userName = target.userName.value;
        const userMailAddress = target.userMailAddress.value;
        const userPassword = target.userPassword.value;

        const params = new URLSearchParams();
        params.append('name', userName);
        params.append('email', userMailAddress);
        params.append('password', userPassword);
        params.append('picture', '');

        const axiosBase = axios.create({
            baseURL: "http://yamamu24.sakura.ne.jp",
            headers: {
              'Content-Type': 'application/x-www-form-urlencoded',
              "Access-Control-Allow-Origin": 'yamamu24.sakura.ne.jp'
            },
            responseType: "json"
          });

          axiosBase.post("/ApiServer/UserManagement/registUser.php", params)
            .then(response => {
                props.handleLogin(response.data.user);
                props.history.push("/userlist")
            }).catch(error => {
                console.log("エラーだよ！", error)
            });

        event.preventDefault();
    }

    return (
        <div className="signUpFormPanel">
            <div className="logoArea">
                <img src={logo} className="logoimg" alt="YamWeb"></img>
            </div>

            <div className="signUpFormDiv">
                <form onSubmit={handleSubmit}>
                    <TextBox01 type="text" labelText="ユーザー名" formId="userName" formName="userName" defaultValue=""></TextBox01>
                    <TextBox01 type="mail" labelText="メールアドレス" formId="userMailAddress" formName="userMailAddress" defaultValue=""></TextBox01>
                    <TextBox01 type="password" labelText="パスワード" formId="userPassword" formName="userPassword" defaultValue=""></TextBox01>

                    <div className="buttonArea">
                        <Link to="/login">
                            <Button01 buttonText="ログイン画面に戻る"></Button01>
                        </Link>

                        <Button01 buttonText="登録" colorType="blue" isSubmit={true}></Button01>
                    </div>
                </form>
            </div>
        </div>
    );
}
export default SignUp;