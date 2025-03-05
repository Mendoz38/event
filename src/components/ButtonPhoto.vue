<template>
  <button @click="openCamera">Ajouter une photo</button>
  <div v-if="capturedImage">
    <p>Aperçu :</p>
    <img :src="capturedImage" alt="Captured" style="max-width: 100%; height: auto" />
  </div>
  <a-button type="primary" :size="size">
    <template #icon>
      <PictureOutlined />
    </template>
    Ajoute tes photos
  </a-button>
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
    input.capture = 'environment' // Ouvre directement l'appareil photo
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
