<template>
  <div v-for="event in events" :key="event.id">
    <EventC :id="event.id" :name="event.name" :picture="event.picture" />
  </div>
</template>
<script setup>
import { onMounted, ref } from 'vue'
import EventC from './EventC.vue'

const events = ref([])
console.log('events', events)
onMounted(async () => {
  try {
    const response = await fetch('http://localhost:3000/events')
    events.value = await response.json()
  } catch (error) {
    console.error('Error fetching events:', error)
  }
})
</script>

<style scoped></style>
