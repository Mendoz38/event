<template>
  <a-space v-if="event" direction="vertical" :style="{ width: '100%' }" :size="[0, 48]">
    <a-layout>
      <a-layout-header class="header" aria-label="Image verte pour contraste">
        <img :src="`/${event.picture}`" :alt="`Image de l'évènement ${event.name}`" />
      </a-layout-header>
      <a-layout-content class="content">
        <div class="events">
          <h1>{{ event.name }}</h1>
          <p class="date"><CalendarOutlined /> Du {{ start_at }} au {{ end_at }}</p>
          <p class="place"><EnvironmentOutlined /> {{ address }}</p>
          <p>{{ event.desc }}</p>
        </div>
      </a-layout-content>
      <div style="height: 400px; width: 100%" class="map">
        <LeafLet :lat="event?.address?.coordinates[1]" :lng="event?.address?.coordinates[0]" />
      </div>
    </a-layout>
  </a-space>

  <p v-else>Chargement...</p>
</template>

<script setup>
import { onMounted, ref, computed } from 'vue'
import { CalendarOutlined, EnvironmentOutlined } from '@ant-design/icons-vue'

/*------------- API --------------*/
import { useRoute } from 'vue-router'
import { getEventById } from '@/api/Events.js'
import { reverseGeocode } from '@/api/GeoCoding.js'

const route = useRoute()
const event = ref([])
const address = ref(null)

/*------------- REVERSE GEOCODDING --------------*/
onMounted(async () => {
  event.value = await getEventById(route.params.id)

  const lat = event?.value.address.coordinates[1]
  const lng = event?.value.address.coordinates[0]

  if (lat && lng) {
    try {
      address.value = await reverseGeocode(lat, lng)
    } catch (error) {
      ;(address.value = "Impossible de récupérer l'adresse"), error
    }
  }
})

/*------------- LEAFLET --------------*/
import LeafLet from '@/components/LeafLet.vue'

/*------------- DAYJS --------------*/
import dayjs from 'dayjs'
import 'dayjs/locale/fr'
const start_at = computed(() => {
  if (event.value && event.value.start_at) {
    return dayjs(event.value.start_at).locale('fr').format('dddd D MMMM ')
  }
  return ''
})
const end_at = computed(() => {
  if (event.value && event.value.end_at) {
    return dayjs(event.value.end_at).locale('fr').format('dddd D MMMM ')
  }
  return ''
})
</script>

<style scoped>
.header {
  text-align: center;
  color: #fff;
  height: 175px;
  line-height: 175px;
}
.header img {
  text-align: center;
  color: #fff;
  height: 175px;
  line-height: 175px;
  background-size: cover;
  background-position: center;
}
.content {
  background-color: #f5f7fb;
  border-radius: 20px 20px 0 0;
  margin-top: -20px;
  padding: 20px;
}
.map {
  background-color: aquamarine;
}
.place {
  font-weight: bold;
  margin: 5px 0;
}
</style>
