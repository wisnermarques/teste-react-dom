import { useState } from 'react'
import ExibirTarefas from './ExibirTarefas'

function Home({ lista }) {
  const [tarefas, setTarefas] = useState(lista)
  const [tarefa, setTarefa] = useState('')

  const addTarefa = (event) => {
    event.preventDefault()
    event.preventDefault()
    const tarefaObject = {
      nome: tarefa,
      id: tarefas.length + 1,
    }

    setTarefas(tarefas.concat(tarefaObject))
    setTarefa('')
    console.log('botão clicado', event.target)
  }

  const handleTarefaChange = (event) => {
    console.log(event.target.value)
    setTarefa(event.target.value)
  }
  return (
    <div className='container mt-2'>
      <h2>Lista de tarefas:</h2>
      <ExibirTarefas tarefas={tarefas} />
      <hr />
      <h2>Adicionar tarefa:</h2>
      <form onSubmit={addTarefa}>
        <div className='mb-3'>
          <label htmlFor='tarefa' className='form-label'>
            Tarefa:
          </label>
          <input
            type='text'
            className='form-control'
            value={tarefa}
            onChange={handleTarefaChange}
          />
        </div>
        <button type='submit' className='btn btn-dark'>
          Adicionar
        </button>
      </form>
    </div>
  )
}

export default Home
