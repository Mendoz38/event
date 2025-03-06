<template>
  <a-button type="primary" :size="size" @click="captureImage">
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

const size = ref('default')

const captureImage = async () => {
  try {
    const stream = await navigator.mediaDevices.getUserMedia({ video: true })
    const video = document.createElement('video')
    video.srcObject = stream
    video.play()

    setTimeout(() => {
      const canvas = document.createElement('canvas')
      canvas.width = video.videoWidth
      canvas.height = video.videoHeight
      const ctx = canvas.getContext('2d')
      ctx.drawImage(video, 0, 0, canvas.width, canvas.height)

      const imageData = canvas.toDataURL('image/png')
      console.log(imageData) // Ici tu peux l'afficher ou l'envoyer à un serveur

      stream.getTracks().forEach((track) => track.stop()) // Arrêter la caméra
    }, 1000) // Temps d'attente pour la mise au point
  } catch (error) {
    console.error('Erreur d’accès à la caméra:', error)
  }
}
</script>

<script setup></script>
