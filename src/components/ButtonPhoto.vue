<template>
  <a-button class="bouton-photo" type="primary" :size="size" @click="openCamera">
    <template #icon>
      <PictureOutlined />
    </template>
    Ajoute tes photos
  </a-button>
  <br />
</template>

<script setup>
import { ref } from 'vue'
import { PictureOutlined } from '@ant-design/icons-vue'

const capturedImage = ref(null)

const openCamera = async () => {
  try {
    const input = document.createElement('input')
    input.type = 'file'
    input.accept = 'image/*'
    input.capture = 'environment'
    input.addEventListener('change', (event) => {
      const file = event.target.files[0]
      if (file) {
        capturedImage.value = URL.createObjectURL(file)
      }
    })
    input.click()
  } catch (error) {
    console.error('Erreur lors de l’ouverture de la caméra :', error)
  }
}
</script>

<style>
.bouton-photo {
  margin-bottom: 10px;
}
</style>
