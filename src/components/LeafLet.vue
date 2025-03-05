<template>
  <l-map ref="map" v-model:zoom="zoom" v-model:center="center" :useGlobalLeaflet="false">
    <l-tile-layer
      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      layer-type="base"
      name="OpenStreetMap"
    ></l-tile-layer>
    <l-marker v-if="markerPosition" :lat-lng="markerPosition"></l-marker>
  </l-map>
</template>

<script setup>
import { ref, computed, watch, defineProps } from 'vue'
import 'leaflet/dist/leaflet.css'
import { LMap, LTileLayer, LMarker } from '@vue-leaflet/vue-leaflet'

const props = defineProps({
  lat: {
    type: Number,
    default: 0.0,
  },
  lng: {
    type: Number,
    default: 0.0,
  },
})

const zoom = ref(13)
const center = ref([0, 0])

watch(
  // pour être sur que les props soient récupérés avant l'affichage
  () => [props.lat, props.lng],
  ([newLat, newLng]) => {
    if (newLat && newLng) {
      center.value = [newLat, newLng]
    }
  },
  { immediate: true },
)

const markerPosition = computed(() => {
  if (props.lat && props.lng) {
    return [props.lat, props.lng]
  }
  return null
})
</script>

<style scoped>
main {
  height: 100vh;
  width: 100vw;
}
</style>
