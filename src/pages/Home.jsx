import InputArea from '../components/InputArea';
import TitleInputArea from '../components/TitleInputArea';
import Label from '../components/Label';
import Button from '../components/Button';
import TaskArea from '../components/TaskArea';

import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const BASE_URL = import.meta.env.VITE_BASE_URL;

function Home() {
    const navigate = useNavigate();
    const token = localStorage.getItem('token');

    let [Titulo, setTitulo] = useState('');
    let [Subtitulo, setSubtitulo] = useState('');
    let [Tasks, setTasks] = useState([]);

    useEffect(() => {
        // Verifica se está logado
        if (!token) {
            navigate('/login');
        }
        GetTasks();
    }, []);

    async function GetTasks() {
        let request = await fetch(BASE_URL+'/'+token);
        let data = await request.json();
        console.log(data);
        setTasks(data);
    }

    function CreateTask() {
        // Verificando se todas as respostas estão preenchidas
        let variaveis = [Titulo, Subtitulo];
        if (!variaveis.every((variavel) => variavel != null && variavel.trim() !== "")) {
            alert("Preencha todos os campos!");
            return;
        }
        // Criação da tarefa
    }

    function DeleteTask() {
        //Função para deletar a task
    }

    function CompleteTask() {
        //Função para mudar o status da task
    }

    function DetailsTask() {
        //Função para mostrar os detalhes da Task
    }

    return (
        <>
            <InputArea>
                <TitleInputArea>
                    <h1>Adicione uma tarefa</h1>
                </TitleInputArea>
                <Label name="Titulo" placeholder="Escreva um titulo" type="text" value={Titulo} onChange={setTitulo} />
                <Label name="Subtitulo" placeholder="Escreva um subtitulo" type="text" value={Subtitulo} onChange={setSubtitulo} />
                <Button content="Criar tarefa" event={CreateTask} />
            </InputArea>
            {Tasks.map((Task) => {
                return <TaskArea
                    key={Task.id}
                    id={Task.id}
                    status={Task.status}
                    title={Task.titulo}
                    CompleteEvent={CompleteTask}
                    DeleteEvent={DeleteTask}
                    DetailsEvent={DetailsTask}
                />
            })}
        </>
    )
}

export default Home;