import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

import tarefaService from './services/tarefas'

function Editar() {
  const { id } = useParams()
  const navigate = useNavigate() // Inicializa o useHistory

  const nome = ''

  const [tarefaEditada, setTarefaEditada] = useState('')

  useEffect(() => {
    tarefaService
      .getOne(id)
      .then((response) => {
        setTarefaEditada(response.data.nome)
      })
      .catch((err) => console.log(err))
  }, [id, nome])

  const handleTarefaChange = (event) => {
    console.log(event.target.value)
    setTarefaEditada(event.target.value)
  }

  const editTarefa = (event) => {
    event.preventDefault()

    const tarefaObject = {
      nome: tarefaEditada,
      id: id,
    }

    // setTarefas(tarefas.concat(tarefaObject))
    tarefaService.update(id, tarefaObject).then((response) => {
      setTarefaEditada('')
      navigate('/')
    })
  }

  return (
    <div className='container mt-2'>
      <h2>Editar tarefa:</h2>
      <form onSubmit={editTarefa}>
        <div className='mb-3'>
          <label htmlFor='tarefa' className='form-label'>
            Tarefa:
          </label>
          <input
            type='text'
            className='form-control'
            value={tarefaEditada}
            onChange={handleTarefaChange}
          />
        </div>
        <button type='submit' className='btn btn-dark'>
          Editar
        </button>
      </form>
    </div>
  )
}

export default Editar
