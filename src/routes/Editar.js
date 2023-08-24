import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

import tarefaService from '../services/tarefas'
import Botao from '../components/Botao'

function Editar() {
  const { id } = useParams()
  const navigate = useNavigate() // Inicializa o useNavegate

  const [tarefaEditada, setTarefaEditada] = useState('')

  useEffect(() => {
    tarefaService
      .getOne(id)
      .then((response) => {
        setTarefaEditada(response.data.nome)
      })
      .catch((err) => console.log(err))
  }, [id])

  const handleTarefaChange = (event) => {
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
        <Botao text='Editar' />
      </form>
    </div>
  )
}

export default Editar
