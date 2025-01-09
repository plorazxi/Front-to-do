import { useState } from "react";
import Label from "../components/label";
import Subtitle from "../components/Subtitle";
import InputArea from "../components/InputArea";
import Button from "../components/Button";
import TitleInputArea from "../components/TitleInputArea";
import { useNavigate } from "react-router-dom";

const BASE_URL = import.meta.env.VITE_BASE_URL;

function Login() {
    const navigate = useNavigate();

    let [Email, setEmail] = useState('');
    let [Senha, setSenha] = useState('');

    async function login() {
        // Verificando se todas as respostas estão preenchidas
        let variaveis = [Email, Senha];
        if (!variaveis.every((variavel) => variavel != null && variavel.trim() !== "")) {
            alert("Preencha todos os campos!");
            return ;
        }
        // Fazendo a requisição
        let body = {
            email: Email,
            senha: Senha
        };
        let request = await fetch(BASE_URL+'/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(body)
        });
        let response = await request.json();
        // Manipulando o response da requisição
        if(!request.ok) {
            alert(response.erro);
        } else {
            localStorage.setItem('token', response.token);
            navigate('/');
        }
    }

    return (
        <InputArea>
            <TitleInputArea className="title">
                <h1>To-do-list</h1>
                <h2>Login</h2>
            </TitleInputArea>
            <Label type='text' name="Email" placeholder="Digite o seu email" value={Email} onChange={setEmail} />
            <Label type='password' name="Senha" placeholder="Digite sua senha" value={Senha} onChange={setSenha} />
            <Subtitle ask="Não tem conta?" link="Registre-se" toRouter="/register" />
            <Button content="Realizar login" event={login}/>
        </InputArea>
    )
}

export default Login;