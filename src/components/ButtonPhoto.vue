<template>
  <div>
    <button @click="openCamera">Ouvrir l'appareil photo</button>
    <video ref="video" width="640" height="480" autoplay></video>
  </div>
</template>

<script>
export default {
  methods: {
    async openCamera() {
      try {
        const constraints = { video: true }
        const stream = await navigator.mediaDevices.getUserMedia(constraints)
        this.$refs.video.srcObject = stream
      } catch (error) {
        console.error("Erreur lors de l'accès à la caméra :", error)
      }
    },
  },
}
</script>

<style scoped>
/* Ajoutez des styles si nécessaire */
</style>
