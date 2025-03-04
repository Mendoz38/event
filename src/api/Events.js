import axios from 'axios'

const api = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
})

export const getEvents = async () => {
  try {
    const response = await api.get('/events')
    return response.data
  } catch (error) {
    console.error('Error fetching events:', error)
    return []
  }
}

export const getEventById = async (id) => {
  console.log('id:', id)
  try {
    const response = await api.get(`/events/${id}`)
    return response.data
  } catch (error) {
    console.error('Error fetching event:', error)
    return {}
  }
}
