<template>
  <a-space direction="vertical" :style="{ width: '100%' }" :size="[0, 48]">
    <a-layout>
      <a-layout-header class="header" aria-label="Image verte pour contraste"> </a-layout-header>
      <a-layout-content class="content">
        <SearchBar />
        <div class="category">
          <h2>Catégories</h2>
          <a-space>
            <CategoryC size="large" name="Music" icon="iconSoiree" color="#249781" />
            <CategoryC size="large" name="Sport" icon="iconSport" color="blue" />
            <CategoryC size="large" name="Cinema" icon="iconCinema" color="red" />
            <CategoryC size="large" name="Food" icon="iconSport" color="red" />
          </a-space>
        </div>
        <div class="events">
          <h2>Evenements</h2>
          <div class="events-list">
            <div v-for="event in events" :key="event.id">
              <EventC
                :id="event.id"
                :name="event.name"
                :picture="event.picture"
                :address="event.address.display_name"
                :start_at="event.start_at"
              />
            </div>
          </div>
        </div>
      </a-layout-content>
    </a-layout>
  </a-space>
</template>
<script setup>
import { onMounted, ref } from 'vue'
import SearchBar from '../components/SearchBar.vue'
import CategoryC from '../components/CategoryC.vue'
import EventC from '@/components/EventC.vue'
import { getEvents } from '@/api/Events.js'
import { reverseGeocode } from '@/api/GeoCoding.js'

const events = ref([])

onMounted(async () => {
  const fetchedEvents = await getEvents()
  events.value = fetchedEvents

  for (let i = 0; i < fetchedEvents.length; i++) {
    const event = fetchedEvents[i]
    const [lng, lat] = event?.address?.coordinates || []
    if (lat && lng) {
      try {
        const address = await reverseGeocode(lat, lng)
        // Mise à jour explicite pour forcer la réactivité
        events.value[i] = { ...event, address: { ...event.address, display_name: address } }
      } catch (error) {
        events.value[i] = {
          ...event,
          address: { ...event.address, display_name: 'Adresse non disponible' },
        }
      }
    }
  }
})
</script>

<style scoped>
.header {
  text-align: center;
  color: #fff;
  height: 175px;
  line-height: 175px;
  background-image: url('/header.png');
  background-size: cover;
  background-position: center;
}
.content {
  background-color: #f5f7fb;
}

.search {
  margin-top: -25px;
}
.category {
  overflow-x: auto;
  scroll-behavior: smooth;
  margin-bottom: 20px;
}
h2 {
  font-weight: bolder;
  margin-left: 15px;
}
.events {
  margin-bottom: 50px;
}
.events-list {
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 15px;
}
.events-item {
  margin: 5px;
  display: flex;
  flex-direction: row;
}
</style>
