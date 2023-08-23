import { useEffect, useState } from 'react'
import ExibirTarefas from './ExibirTarefas'

import tarefaService from './services/tarefas'
import Botao from './components/Botao'

function Home() {
  const [tarefas, setTarefas] = useState([])
  const [tarefa, setTarefa] = useState('')
  const [erro, setErro] = useState(null)

  useEffect(() => {
    tarefaService
      .getAll()
      .then((response) => {
        setTarefas(response.data)
      })
      .catch((error) => {
        if (error.response) {
          // O servidor respondeu com um status de erro
          console.error('Erro na requisição:', error.response)
        } else if (error.request) {
          // A requisição foi feita, mas não houve resposta do servidor
          console.error('Não foi possível se conectar ao servidor.')
          setErro(
            'Não foi possível se conectar ao servidor. Verifique sua conexão de rede.'
          )
        } else {
          // Algo aconteceu na configuração da requisição que causou o erro
          console.error('Erro na configuração da requisição:', error.message)
        }
      })
  }, [])

  const addTarefa = (event) => {
    event.preventDefault()

    const tarefaObject = {
      nome: tarefa,
      id: tarefas.length + 1,
    }

    // setTarefas(tarefas.concat(tarefaObject))
    tarefaService.create(tarefaObject).then((response) => {
      setTarefas(tarefas.concat(response.data))
      setTarefa('')
    })
  }

  const handleTarefaChange = (event) => {
    setTarefa(event.target.value)
  }
  return (
    <div className='container mt-2'>
      {erro ? (
        <p>{erro}</p>
      ) : (
        <>
          <h2>Lista de tarefas:</h2>
          <ExibirTarefas tarefas={tarefas} setTarefas={setTarefas} />
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
            <Botao text='Adicionar' />
          </form>
        </>
      )}
    </div>
  )
}

export default Home
