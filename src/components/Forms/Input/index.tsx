import React, { InputHTMLAttributes } from 'react';

import { InputContainer } from './styles';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    name: string;
    placeholder: string;
}

const Input: React.FC<InputProps> = ({ name, placeholder, ...rest }) => {
    return (
        <InputContainer>
            <input id={name} placeholder={placeholder} name={name} type="text" {...rest} />
        </InputContainer>
    );
};

export default Input;
