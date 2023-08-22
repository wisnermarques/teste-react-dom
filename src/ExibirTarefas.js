import { Link } from 'react-router-dom'
import tarefaService from './services/tarefas'

function ExibirTarefas({ tarefas, setTarefas }) {
  const remove = (id) => {
    tarefaService.remove(id)
    setTarefas(tarefas.filter((tarefa) => tarefa.id !== id))
  }

  if (tarefas.length > 0) {
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
                onClick={() => remove(tarefa.id)}
              ></i>
            </li>
          ))}
        </ul>
      </div>
    )
  }
  return (
    <div>
      <p>Não existem tarefas a serem exibidas!</p>
    </div>
  )
}

export default ExibirTarefas
