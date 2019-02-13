<template>
  <div class="pure-menu pure-menu-horizontal">
    <div class="container">
      <router-link to="/" class="pure-menu-heading pure-menu-link">Home</router-link>
      <ul class="pure-menu-list">
        <li class="pure-menu-item">
          <router-link to="/new" class="pure-menu-link">News</router-link>
        </li>
        <li class="pure-menu-item">
          <router-link to class="pure-menu-link">Sports</router-link>
        </li>
        <li class="pure-menu-item">
          <router-link to class="pure-menu-link">Finance</router-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class NavBar extends Vue {}
</script>

<style scoped>
.pure-menu {
  background-color: #e17842;
}
.pure-menu a {
  color: white;
}
</style>