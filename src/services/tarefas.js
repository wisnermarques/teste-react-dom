import axios from 'axios'
const baseUrl = 'http://localhost:3001/tarefas'

const getAll = () => {
  return axios.get(baseUrl)
}

const getOne = (id) => {
  return axios.get(`${baseUrl}/${id}`)
}

const create = (newObject) => {
  return axios.post(baseUrl, newObject)
}

const update = (id, newObject) => {
  return axios.put(`${baseUrl}/${id}`, newObject)
}

const remove = (id) => {
  return axios.delete(`${baseUrl}/${id}`)
}

const tarefaService = { getAll, getOne, create, update, remove }

export default tarefaService
