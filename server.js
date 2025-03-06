import express from 'express'
import prisma from './prisma.js'
import cors from 'cors'

const app = express()
app.use(cors())

app.get('/events', async (req, res) => {
  const events = await prisma.event.findMany()
  res.json(events)
})

app.get('/events/:id', async (req, res) => {
  const { id } = req.params
  const event = await prisma.event.findUnique({
    where: { id },
  })
  res.json(event)
})

const PORT = 3002
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`)
})
