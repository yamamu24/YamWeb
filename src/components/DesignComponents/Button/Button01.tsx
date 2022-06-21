import React, { FC } from 'react';
import './Button01.css';

type props = {
    colorType?: string
    buttonText: string
    clickFunc?: VoidFunction
    isSubmit?: boolean
};

const Button01: FC<props> = (props) => {
    const type = props.isSubmit ? "submit" : "button";

    return (
        <div className="Button01">
            <button className={props.colorType} onClick={props.clickFunc} type={type}>{props.buttonText}</button>
        </div>
    );
}

Button01.defaultProps = { colorType: "white", clickFunc: function () { }, isSubmit: false };

export default Button01;