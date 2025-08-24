import axios from 'axios'
import { useAuthStore } from '@/store/authStore'

// Create axios instance
const api = axios.create({
  baseURL: '/api',
  headers: {
    'Content-Type': 'application/json',
  },
})

// Request interceptor to add auth token
api.interceptors.request.use(
  (config) => {
    const token = useAuthStore.getState().token
    if (token) {
      config.headers.Authorization = `Bearer ${token}`
    }
    return config
  },
  (error) => {
    return Promise.reject(error)
  }
)

// Response interceptor to handle auth errors
api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      useAuthStore.getState().logout()
    }
    return Promise.reject(error)
  }
)

// Auth API
export const authApi = {
  login: (email: string, password: string) =>
    api.post('/auth/login', { email, password }),
  
  register: (userData: any) =>
    api.post('/auth/register', userData),
  
  getMe: () => api.get('/auth/me'),
  
  logout: () => api.post('/auth/logout'),
}

// Users API
export const usersApi = {
  getAll: (params?: any) => api.get('/users', { params }),
  
  getById: (id: string) => api.get(`/users/${id}`),
  
  update: (id: string, data: any) => api.put(`/users/${id}`, data),
  
  delete: (id: string) => api.delete(`/users/${id}`),
}

// Posts API
export const postsApi = {
  getAll: (params?: any) => api.get('/posts', { params }),
  
  getById: (id: string) => api.get(`/posts/${id}`),
  
  create: (data: any) => api.post('/posts', data),
  
  update: (id: string, data: any) => api.put(`/posts/${id}`, data),
  
  delete: (id: string) => api.delete(`/posts/${id}`),
}

// Comments API
export const commentsApi = {
  getByPost: (postId: string, params?: any) =>
    api.get(`/comments/post/${postId}`, { params }),
  
  create: (data: any) => api.post('/comments', data),
  
  update: (id: string, data: any) => api.put(`/comments/${id}`, data),
  
  delete: (id: string) => api.delete(`/comments/${id}`),
}

export default api
