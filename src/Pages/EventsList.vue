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
            <ListEvent />
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
import ListEvent from '@/components/ListEvent.vue'
import { getEvents } from '@/api/Events.js'

const events = ref([])

onMounted(async () => {
  events.value = await getEvents()
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
