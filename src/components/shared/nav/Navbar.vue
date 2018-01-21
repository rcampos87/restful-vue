
<template>
<nav>
  <div class="nav-wrapper blue">
    <nav-header v-bind:links="links">{{ header }}</nav-header>
  </div>
</nav>
</template>

<script>
import NavHeader from './NavHeader'

export default {
  name: 'navbar',
  components: { NavHeader },
  data() {
    return {
      header: 'Event Management',
      links: [
        'Employees',
        'Speakers'
      ]
    }
  }
}
</script>
  