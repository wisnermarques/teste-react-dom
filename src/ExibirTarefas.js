import { Link } from 'react-router-dom'

function ExibirTarefas({ tarefas }) {
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
              <i class='bi bi-x-square text-danger fs-4'></i>
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
