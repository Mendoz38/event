<script setup lang="ts">
import { onMounted, ref } from 'vue'

const events = ref([])

onMounted(async () => {
  try {
    const response = await fetch('http://localhost:3000/events')
    events.value = await response.json()
  } catch (error) {
    console.error('Error fetching events:', error)
  }
})
</script>

<template>
  <div>
    <h1>Liste des Événementsssss</h1>
    <ul>
      <li v-for="event in events" :key="event.id">
        {{ event.name }}
      </li>
    </ul>
  </div>
</template>
