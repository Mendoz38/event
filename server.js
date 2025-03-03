import express from 'express'
import prisma from './prisma.js'
import cors from 'cors'

const app = express()
app.use(cors())

app.get('/events', async (req, res) => {
  const events = await prisma.event.findMany()
  res.json(events)
})

const PORT = 3000
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`)
})
