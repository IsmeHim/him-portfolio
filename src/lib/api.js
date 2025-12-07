// src/lib/api.js
import axios from 'axios'

export const api = axios.create({
  baseURL: window._env_?.API_URL || import.meta.env.VITE_API_URL || 'http://localhost:5000/api',
})


// เก็บไว้ใช้ตอนมีระบบล็อกอิน
// api.interceptors.request.use((config) => {
//   const t = localStorage.getItem('token') // 👈 ต้องมี key นี้จริง
//   if (t) config.headers.Authorization = `Bearer ${t}`
//   return config
// })