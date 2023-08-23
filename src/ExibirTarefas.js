import { useState } from 'react'
import { Link } from 'react-router-dom'
import tarefaService from './services/tarefas'

import './ExibirTarefas.css'

function ExibirTarefas({ tarefas, setTarefas }) {
  const [showConfirmation, setShowConfirmation] = useState(false)
  const [taskIdToDelete, setTaskIdToDelete] = useState(null)

  const openConfirmation = (id) => {
    setTaskIdToDelete(id)
    setShowConfirmation(true)
  }

  const closeConfirmation = () => {
    setTaskIdToDelete(null)
    setShowConfirmation(false)
  }

  const confirmDelete = () => {
    if (taskIdToDelete !== null) {
      tarefaService
        .remove(taskIdToDelete)
        .then(() => {
          setTarefas(tarefas.filter((tarefa) => tarefa.id !== taskIdToDelete))
          closeConfirmation()
        })
        .catch((erro) => console.log(erro))
    }
  }

  if (tarefas.length === 0) {
    return (
      <div>
        <p>Não existem tarefas a serem exibidas!</p>
      </div>
    )
  }

  return (
    <div>
      <ul>
        {tarefas.map((tarefa) => (
          <li key={tarefa.id}>
            {tarefa.nome}
            <Link to={'/' + tarefa.id} className='fs-4 m-2'>
              <i className='bi bi-pencil-square text-secondary'></i>
            </Link>

            <i
              className='bi bi-x-square text-danger fs-4'
              onClick={() => openConfirmation(tarefa.id)}
            ></i>
          </li>
        ))}
      </ul>

      {showConfirmation && (
        <div className='modal container'>
          <div className='modal-content'>
            <h4>Realmente deseja excluir?</h4>
            <button onClick={confirmDelete}>Sim</button>
            <button onClick={closeConfirmation}>Cancelar</button>
          </div>
        </div>
      )}
    </div>
  )
}

export default ExibirTarefas
