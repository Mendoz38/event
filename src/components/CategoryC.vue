<template>
  <a-button :type="'default'" :size="size">
    <template #icon>
      <component :is="icons[icon]" :style="{ color: color }" />
    </template>
    <span class="categorieName">{{ name }}</span>
  </a-button>
</template>

<script setup>
import { defineProps } from 'vue'
import {
  TrophyOutlined,
  CustomerServiceOutlined,
  NotificationOutlined,
} from '@ant-design/icons-vue'

// eslint-disable-next-line no-unused-vars
const props = defineProps({
  size: String,
  name: String,
  icon: String,
  color: String,
})

const icons = {
  iconSport: NotificationOutlined,
  iconCinema: TrophyOutlined,
  iconSoiree: CustomerServiceOutlined,
}
</script>

<style scoped>
.ant-space-item button {
  height: auto;
  border: none;
  margin: 10px;
  padding: 20px 40px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  font-weight: bold;
}
.categorieName {
  font-weight: bold;
}
</style>
