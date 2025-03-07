<template>
  <div class="upload-photo">
    <a-button class="bouton-photo" type="primary" shape="circle" @click="openCamera">
      <template #icon>
        <PictureOutlined />
      </template>
    </a-button>
    <div v-if="imageUrl" class="image-preview">
      <img :src="imageUrl" alt="Captured Image" />
      <a-button type="primary" @click="sendImage">Envoyer</a-button>
    </div>
    <div class="bouton-envoyer">
      <input
        type="file"
        accept="image/*"
        capture="environment"
        ref="fileInput"
        style="display: none; max-width: 100%"
        @change="handleFileChange"
      />
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { PictureOutlined } from '@ant-design/icons-vue'
import { message } from 'ant-design-vue'

const fileInput = ref(null)
const imageUrl = ref(null)

const openCamera = () => {
  fileInput.value.click()
}

const handleFileChange = (event) => {
  const file = event.target.files[0]
  if (file) {
    imageUrl.value = URL.createObjectURL(file)
  }
}

const sendImage = () => {
  if (imageUrl.value) {
    message.success('Image envoyée avec succès !')
    // à faire pour envoyer l'image
  } else {
    message.error('Aucune image à envoyer.')
  }
}
</script>

<style scoped>
.upload-photo {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 20px;
}
.bouton-photo {
  font-size: 25px;
  height: 50px;
  width: 50px;
}
.bouton-envoyer {
  width: 80%;
}
.image-preview {
  margin-top: 20px;
  text-align: center;
  width: 80%;
}

.image-preview img {
  max-width: 100%;
  height: auto;
  border-radius: 8px;
}
</style>
