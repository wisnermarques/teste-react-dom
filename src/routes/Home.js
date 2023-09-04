import { useEffect, useState } from 'react'
import ExibirTarefas from '../components/ExibirTarefas'

import tarefaService from '../services/tarefas'
import Botao from '../components/Botao'
import Loading from '../components/Loading'

function Home() {
  const [tarefas, setTarefas] = useState([])
  const [tarefa, setTarefa] = useState('')
  const [erro, setErro] = useState(null)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    setTimeout(() => {
      tarefaService
        .getAll()
        .then((response) => {
          setTarefas(response.data)
          setIsLoading(false)
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
    }, 5000)
  }, [])

  const addTarefa = (event) => {
    event.preventDefault()

    const tarefaObject = {
      nome: tarefa,
      //id: tarefas.length + 1,
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
        <p className='alert alert-warning'>{erro}</p>
      ) : (
        <>
          {isLoading ? (
            <Loading />
          ) : (
            <>
              <h2>Lista de tarefas:</h2>
              {tarefas.length > 0 ? (
                <ExibirTarefas tarefas={tarefas} setTarefas={setTarefas} />
              ) : (
                <p className='alert alert-warning' role='alert'>
                  Não existem tarefas cadastradas!
                </p>
              )}
              <hr />
              <h2>Adicionar tarefa:</h2>
              <form onSubmit={addTarefa}>
                <div className='mb-3'>
                  <label htmlFor='tarefa' className='form-label'>
                    Tarefa:
                  </label>
                  <input
                    type='text'
                    placeholder='Digite a tarefa...'
                    className='form-control'
                    value={tarefa}
                    onChange={handleTarefaChange}
                  />
                </div>
                <Botao text='Adicionar' />
              </form>
            </>
          )}
        </>
      )}
    </div>
  )
}

export default Home
