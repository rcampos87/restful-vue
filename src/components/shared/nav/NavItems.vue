<template>
<div>
  <a href="#" class="button-collapse">
    <i class="material-icons">menu</i>
  </a>
  <ul id="nav-mobile" class="right hide-on-med-and-down">
    <li v-for="item in items" v-bind:key="item">
      <a v-bind:href="item">{{item}}</a>
    </li>
  </ul>
  <ul id="mobile-side-nav" class="side-nav">
    <li v-for="item in items" v-bind:key="item">
      <a v-bind:href="item">{{item}}</a>
    </li>
  </ul>
</div>
</template>

<script>
export default {
  name: 'nav-items',
  props: [
    'items'
  ]
}
</script>


