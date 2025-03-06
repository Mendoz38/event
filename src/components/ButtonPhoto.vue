<template>
  <a-button type="primary" :size="size" @click="openCamera">
    <template #icon>
      <PictureOutlined />
    </template>
    Ajoute ta photo
  </a-button>
  <input
    ref="fileInput"
    type="file"
    accept="image/*"
    capture
    style="display: none"
    @change="handleFileChange"
  />
</template>

<script setup>
import { ref } from 'vue'
import { PictureOutlined } from '@ant-design/icons-vue'

const size = ref('default')
const fileInput = ref(null)

const openCamera = () => {
  fileInput.value.click()
}

const handleFileChange = (event) => {
  const file = event.target.files[0]
  if (file) {
    const imageUrl = URL.createObjectURL(file)
    console.log(imageUrl) // Afficher ou traiter l'image sélectionnée
  }
}
</script>
