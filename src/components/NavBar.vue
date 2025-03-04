<template>
  <div class="nav-bar">
    <span>
      <router-link to="/" class="navbar-item">
        <HomeOutlined />
      </router-link>
    </span>
    <span>
      <router-link to="/events" class="navbar-item">
        <CustomerServiceOutlined />
      </router-link>
    </span>
    <span>
      <router-link to="/maps" class="navbar-item">
        <EnvironmentOutlined />
      </router-link>
    </span>
    <span>
      <router-link to="/profile" class="navbar-item">
        <a-avatar src="https://xsgames.co/randomusers/avatar.php?g=pixel&key=1" />
      </router-link>
    </span>
  </div>
</template>

<script setup>
import { HomeOutlined, CustomerServiceOutlined, EnvironmentOutlined } from '@ant-design/icons-vue'
</script>

<style scoped>
.nav-bar {
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-color: #f8f9fa;
  padding: 10px 0;
  box-shadow: 0 -2px 5px rgba(0, 0, 0, 0.1);
  z-index: 1000;
}

.nav-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #333;
  font-size: 12px;
  text-align: center;
  text-decoration: none;
}

.navbar-item .anticon {
  color: #868484;
}
.router-link-active .anticon {
  color: #249781;
}

.nav-item:hover {
  background-color: #e9ecef;
  border-radius: 5px;
}
</style>
