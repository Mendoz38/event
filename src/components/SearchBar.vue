<template>
  <div class="search">
    <a-input
      v-model:value="query"
      placeholder="Rechercher un évènement"
      label="Rechercher un évènement"
    >
      <template #suffix>
        <a-tooltip title="Lancer la recherche" placement="left">
          <SearchOutlined />
        </a-tooltip>
      </template>
    </a-input>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { SearchOutlined } from '@ant-design/icons-vue'

const query = ref('')

// function onSearch() {
//   emit('search', query.value)
// }
</script>

<style scoped>
.search {
  margin: 20px;
}

.search .ant-input-affix-wrapper {
  padding: 10px;
}

.search-bar input {
  width: 100%;
  padding: 20px;
  font-size: 16px;
}
</style>
