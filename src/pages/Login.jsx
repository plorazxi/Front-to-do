import { useState } from "react";
import Label from "../components/label";
import Subtitle from "../components/Subtitle";
import InputArea from "../components/InputArea";
import Button from "../components/Button";
import TitleInputArea from "../components/TitleInputArea";

function Login() {
    let [Email, setEmail] = useState('');
    let [Senha, setSenha] = useState('');

    function login() {
        // Função para logar na API
    }

    return (
        <InputArea>
            <TitleInputArea className="title">
                <h1>To-do-list</h1>
                <h2>Login</h2>
            </TitleInputArea>
            <Label type='email' name="Email" placeholder="Digite o seu email" value={Email} onChange={setEmail} />
            <Label type='password' name="Senha" placeholder="Digite sua senha" value={Senha} onChange={setSenha} />
            <Subtitle ask="Não tem conta?" link="Registre-se" toRouter="/register" />
            <Button content="Realizar login" event={login}/>
        </InputArea>
    )
}

export default Login;