import React, { FC, InputHTMLAttributes, ComponentType } from "react";
import { IconBaseProps } from "react-icons";
import { Container } from "./styles";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  icon?: ComponentType<IconBaseProps>;
}

const Input: FC<InputProps> = ({ icon: Icon, ...rest }) => (
  <Container>
    {Icon && <Icon size={20} />}
    <input {...rest} />
  </Container>
);

export default Input;
