import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  const events = await prisma.event.findMany({
    include: {
      adress: true,
      photos: true,
    },
  })
  console.log(events)

  // Ajouter un événement
  await prisma.event.create({
    data: {
      name: 'Exemple Event',
      desc: "Description de l'événement",
      picture: 'exemple.jpg',
      adress: {
        create: {
          type: 'Point',
          coordinates: [2.35, 48.85], // Exemple de coordonnées
        },
      },
      start_at: new Date(),
      end_at: new Date(),
      created_at: new Date(),
    },
  })
}

main()
  .catch((e) => {
    console.error(e)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
