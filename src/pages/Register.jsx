import { useState } from "react";
import Button from "../components/Button";
import InputArea from "../components/InputArea";
import Label from "../components/label";
import Subtitle from "../components/Subtitle";
import TitleInputArea from "../components/TitleInputArea";

const VITE_BASE_URL = import.meta.env.VITE_BASE_URL;

function Register() {
    let [Nome, setNome] = useState('');
    let [Email, setEmail] = useState('');
    let [DataNasc, setDataNasc] = useState('');
    let [Senha, setSenha] = useState('');
    
    async function Registro() {
        //Função de Registro
    }

    return (
        <InputArea>
            <TitleInputArea>
                <h1>To-do-list</h1>
                <h2>Register</h2>
            </TitleInputArea>
            <Label name="Nome" placeholder="Digite seu nome" type="text" value={Nome} onChange={setNome} />
            <Label name="Email" placeholder="Digite seu email" type="text" value={Email} onChange={setEmail} />
            <Label name="Data Nacimento" type="date" value={DataNasc} onChange={setDataNasc} />
            <Label name="Senha" placeholder="Digite uma senha" type="text" value={Senha} onChange={setSenha} />
            <Subtitle ask="Já tem conta?" link="Faça o login" toRouter="/login" />
            <Button content="Registre-se" event={Registro}/>
        </InputArea>
    )
}

export default Register;