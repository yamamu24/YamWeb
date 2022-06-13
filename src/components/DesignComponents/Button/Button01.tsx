import React, { ChangeEvent, FC, useState } from 'react';
import './Button01.css';

type props = {
    colorType?: string
    buttonText: string
    clickFunc?: VoidFunction
};

const Button01: FC<props> = (props) => {
    return (
        <div className="Button01">
            <button className={props.colorType} onClick={props.clickFunc}>{props.buttonText}</button>
        </div>
    );
}

Button01.defaultProps = { colorType: "white", clickFunc: function () { } };

export default Button01;