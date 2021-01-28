import React, { ButtonHTMLAttributes } from 'react';
import { FormButton } from './styles';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    text: string;
}

const Button: React.FC<ButtonProps> = ({ text, ...rest }) => {
    return <FormButton {...rest}>{text}</FormButton>;
};

export default Button;
