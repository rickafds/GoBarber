import React, { FC } from "react";
import { FiLock, FiUser, FiMail, FiArrowLeft } from "react-icons/fi";

import logoImg from "../../assets/logo.svg";

import Input from "../../components/input";
import Button from "../../components/Button";

import { Container, Content, Background } from "./styles";

const SignUp: FC = () => (
  <Container>
    <Background />

    <Content>
      <img src={logoImg} alt="GoBarber" />
      <form>
        <h1>Faça seu cadastro</h1>
        <Input name="name" icon={FiUser} placeholder="Nome" />
        <Input name="email" icon={FiMail} placeholder="E-mail" />
        <Input name="password" icon={FiLock} type="password" placeholder="Senha" />

        <Button type="submit">Cadastrar</Button>
      </form>
      <a href="login">
        <FiArrowLeft />
        Voltar para logon
      </a>
    </Content>
  </Container>
);

export default SignUp;
