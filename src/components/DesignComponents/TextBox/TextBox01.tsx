import React, { ChangeEvent, FC, useState } from 'react';
import './TextBox01.css';

type props = {
    type?: string
    labelText: string
    formId: string
    formName: string
    defaultValue?: string
};

const TextBox01: FC<props> = (props) => {
    const [value, setValue] = useState('');

    const handleChangeValue = (e: ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value);
    }

    if (props.defaultValue) {
        setValue(props.defaultValue);
    }

    return (
        <div className="textBox01">
            <label>{props.labelText}</label>
            <input type={props.type} id={props.formId} name={props.formName} value={value} onChange={handleChangeValue} />
        </div>
    );
}

TextBox01.defaultProps = { type: "text", defaultValue: "" };

export default TextBox01;