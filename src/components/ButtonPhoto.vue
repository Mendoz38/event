<template>
  <div>
    <button @click="openCameraApp">Ouvrir l'application photo</button>
    <input
      type="file"
      accept="image/*"
      capture="environment"
      ref="fileInput"
      style="display: none"
      @change="handleFileChange"
    />
  </div>
</template>

<script>
export default {
  methods: {
    openCameraApp() {
      this.$refs.fileInput.click()
    },
    handleFileChange(event) {
      const file = event.target.files[0]
      if (file) {
        console.log('Photo capturée :', file)
        // Vous pouvez traiter le fichier ici, par exemple l'afficher ou l'envoyer à un serveur
      }
    },
  },
}
</script>

<style scoped>
/* Ajoutez des styles si nécessaire */
</style>
