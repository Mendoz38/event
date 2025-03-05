<template>
  <br />
  ---------------<br />
  <a-avatar-group>
    <a-avatar src="https://xsgames.co/randomusers/avatar.php?g=pixel&key=1" />
    <a href="https://www.antdv.com">
      <a-avatar style="background-color: #f56a00">K</a-avatar>
    </a>
    <a-tooltip title="Ant User" placement="top">
      <a-avatar style="background-color: #87d068">
        <template #icon><UserOutlined /></template>
      </a-avatar>
    </a-tooltip>
    <a-avatar style="background-color: #1890ff">
      <template #icon><AntDesignOutlined /></template>
    </a-avatar>
  </a-avatar-group>

  <a-button type="primary">Primary Button</a-button>
  <h1 class="main50">TEST</h1>
  <home-outlined />
  <setting-filled />

  <ButtonPhoto />
</template>

<script setup>
import ButtonPhoto from '@/components/ButtonPhoto.vue'
import { HomeOutlined, SettingFilled } from '@ant-design/icons-vue'
</script>

<style scoped></style>
