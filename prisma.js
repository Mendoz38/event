import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

console.log('Prisma client initialized successfully')

export default prisma
