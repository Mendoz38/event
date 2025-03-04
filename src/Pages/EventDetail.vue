<template>
  <a-space v-if="event" direction="vertical" :style="{ width: '100%' }" :size="[0, 48]">
    <a-layout>
      <a-layout-header class="header" aria-label="Image verte pour contraste">
        <img :src="`/${event.picture}`" :alt="`Image de l'évènement ${event.name}`" />
      </a-layout-header>
      <a-layout-content class="content">
        <div class="events">
          <h1>{{ event.name }}</h1>
          <p class="date"><CalendarOutlined /> {{ event.created_at }}</p>
          <p class="place"><EnvironmentOutlined /> Issy</p>
          <p>{{ event.desc }}</p>
          <div style="height: 300px; width: 100%" class="map">
            <LeafLet />
          </div>
        </div>
      </a-layout-content>
    </a-layout>
  </a-space>

  <p v-else>Chargement...</p>
</template>

<script setup>
import { onMounted, ref } from 'vue'
import { useRoute } from 'vue-router'
import { getEventById } from '@/api/Events.js'

const route = useRoute()
const event = ref([])

onMounted(async () => {
  event.value = await getEventById(route.params.id)
  console.log('event', event)
})

import { CalendarOutlined, EnvironmentOutlined } from '@ant-design/icons-vue'
import LeafLet from '@/components/LeafLet.vue'
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
</style>
