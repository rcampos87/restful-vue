<template>
  <div class="container">
    <router-link to="/" class="brand-logo">
      <slot></slot>
    </router-link>    
    <nav-items v-bind:items="links"/>
  </div>
</template>

<script>
import NavItems from './NavItems'

export default {
  name: 'nav-header',
  components: { NavItems },
  props: [
    'links'
  ]
}
</script>

