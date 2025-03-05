<template>
  <router-link :to="`/event/${id}`" class="nav-item">
    <a-card :bordered="false" class="event-card">
      <div class="event-card-container">
        <img class="event-image" :src="`/${picture}`" :alt="name" />
        <div class="event-details">
          <p class="event-category">Food</p>
          <h3 class="event-title">{{ name }}</h3>
          <p class="event-date">{{ start_at_fr }}</p>
          <p class="event-location">{{ address }}</p>
        </div>
        <div class="event-prices">
          <span class="original-price">55 €</span>
          <span class="discounted-price">35 €</span>
        </div>
      </div>
    </a-card>
  </router-link>
</template>

<script setup>
import { defineProps, computed } from 'vue'

const props = defineProps({
  id: String,
  name: String,
  picture: String,
  address: String,
  start_at: String,
})

/*------------- DAYJS --------------*/
import dayjs from 'dayjs'
import 'dayjs/locale/fr'
console.log('props.start_at', props.start_at)
const start_at_fr = computed(() => {
  if (props.start_at) {
    return dayjs(props.start_at).locale('fr').format('dddd D MMMM YYYY ')
  }
  return ''
})
</script>

<style scoped>
.event-card {
  width: 100%;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  background-color: #fff;
  padding: 0;
}
:deep(.ant-card-body) {
  padding: 5px;
  width: 100%;
  margin-bottom: 10px;
}

.event-card-container {
  display: flex;
  align-items: center;
  width: 100%;
  margin: 0;
  padding: 0;
}

.event-image {
  height: 100px;
  width: auto;
  border-radius: 8px;
  margin-right: 16px;
  object-fit: cover;
}

.event-details {
  flex: 1;
}

.event-category {
  font-size: 12px;
  color: #888;
  margin: 0;
}

.event-title {
  font-size: 18px;
  margin: 4px 0;
  color: #000;
  font-weight: bolder;
}

.event-date,
.event-location {
  font-size: 14px;
  color: #666;
  margin: 2px 0;
}

.event-prices {
  margin-top: 8px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
}

.original-price {
  font-size: 14px;
  text-decoration: line-through;
  font-weight: bolder;
}

.discounted-price {
  font-size: 16px;
  color: #249781;
  font-weight: bold;
}
</style>
