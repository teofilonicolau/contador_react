import { useState } from 'react';
import './Form.css';

function Form() {
    const [tarefas, setTarefas] = useState([]);
    const [novaTarefa, setNovaTarefa] = useState('');
    const [isEditing, setIsEditing] = useState(false);
    const [editingIndex, setEditingIndex] = useState(null);

    // Função para lidar com mudanças no input
    const handleInputChange = (event) => {
        setNovaTarefa(event.target.value);
    };

    // Função para adicionar ou atualizar uma tarefa
    const handleAddOrUpdateTask = () => {
        if (novaTarefa.trim() === '') return;

        if (isEditing) {
            const updatedTasks = tarefas.map((tarefa, index) =>
                index === editingIndex ? { ...tarefa, text: novaTarefa } : tarefa
            );
            setTarefas(updatedTasks);
            setIsEditing(false);
            setEditingIndex(null);
        } else {
            setTarefas([...tarefas, { text: novaTarefa, isCompleted: false }]);
        }
        setNovaTarefa('');
    };

    // Função para iniciar a edição de uma tarefa
    const handleEditTask = (index) => {
        setIsEditing(true);
        setEditingIndex(index);
        setNovaTarefa(tarefas[index].text);
    };

    // Função para marcar uma tarefa como concluída
    const handleToggleComplete = (index) => {
        const updatedTasks = tarefas.map((tarefa, i) =>
            i === index ? { ...tarefa, isCompleted: !tarefa.isCompleted } : tarefa
        );
        setTarefas(updatedTasks);
    };

    // Função para remover uma tarefa específica
    const handleRemoveTask = (index) => {
        const updatedTasks = tarefas.filter((_, i) => i !== index);
        setTarefas(updatedTasks);
    };

    // Função para limpar as tarefas concluídas
    const handleClearCompleted = () => {
        const updatedTasks = tarefas.filter((tarefa) => !tarefa.isCompleted);
        setTarefas(updatedTasks);
    };

    return (
        <div className="calculator">
            <h1>Lista de Tarefas</h1>
            <input
                type="text"
                value={novaTarefa}
                onChange={handleInputChange}
                placeholder="Digite uma nova tarefa"
            />
            <button onClick={handleAddOrUpdateTask}>
                {isEditing ? 'Atualizar Tarefa' : 'Adicionar Tarefa'}
            </button>

            <ul>
                {tarefas.map((tarefa, index) => (
                    <li key={index} className={tarefa.isCompleted ? 'completed' : ''}>
                        {tarefa.text}
                        <button onClick={() => handleToggleComplete(index)}>
                            {tarefa.isCompleted ? 'Desfazer' : 'Concluído'}
                        </button>
                        <button onClick={() => handleEditTask(index)}>Editar</button>
                        <button onClick={() => handleRemoveTask(index)}>Remover</button>
                    </li>
                ))}
            </ul>

            <button onClick={handleClearCompleted}>Limpar Tarefas Concluídas</button>
        </div>
    );
}

export default Form;
