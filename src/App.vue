<template>
  <a-config-provider :theme="customTheme">
    <RouterView />
    <NavBar />
  </a-config-provider>
</template>

<script setup>
import NavBar from './components/NavBar.vue'
import { computed } from 'vue'
import { theme } from 'ant-design-vue'

const { defaultAlgorithm } = theme

const customTheme = computed(() => ({
  algorithm: defaultAlgorithm,
  token: {
    colorPrimary: '#249781',
    colorSuccess: '#52c41a',
    colorWarning: '#faad14',
    colorError: '#f5222d',
  },
}))
</script>

<style scoped>
#app {
  display: flex;
}
</style>
