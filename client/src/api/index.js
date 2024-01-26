import axios from 'axios';

const URL = process.env.REACT_APP_URL || 'http://localhost:4000'
const API = axios.create({ baseURL: URL })

API.interceptors.request.use((req) => {
    const user = localStorage.getItem('Profile')
    if (user) {
        req.headers.Authorization = `Bearer ${JSON.parse(user).token}`
    }
    return req;
})

//authorization
export const login = (authData) => API.post('/user/login', authData)
export const signup = (authData) => API.post('/user/signup', authData)

//questions
export const postTask = (data) => API.post('/tasks', { ...data })
export const getAllTask = () => API.get('/tasks')
export const updateTask = (data) => API.put(`/tasks/${data.id}`, { ...data.updatedTask })
export const deleteTask = (id) => API.delete(`/tasks/${id}`)
export const deleteAll = () => API.delete(`/tasks/deleteAll`)



