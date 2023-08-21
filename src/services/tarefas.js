import axios from 'axios'
const baseUrl = 'http://localhost:3001/tarefas'

const getAll = () => {
  return axios.get(baseUrl)
}

const create = (newObject) => {
  return axios.post(baseUrl, newObject)
}

const update = (id, newObject) => {
  return axios.put(`${baseUrl}/${id}`, newObject)
}

const tarefaService = { getAll, create, update }

export default tarefaService
