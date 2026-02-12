import axios from 'axios'

const baseURL = 'http://localhost:3001/persons'

const getAll = () => {
    return axios.get(baseURL)
}

const create = (newObj) => {
    return axios.post(baseURL, newObj)
}

const update = (id, newObj) => {
    return axios.put(`${baseURL}/${id}`, newObj)
}

const deleteId = (id) => {
    return axios.delete(`${baseURL}/${id}`)
}

export default { getAll, create, update, deleteId }