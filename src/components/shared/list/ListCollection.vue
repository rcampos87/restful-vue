<template>
  <ul class="collection with-header">
    <li class="collection-header">
      <h4>{{listHeader}}</h4>
    </li>
    <li v-for="item in listItems" class="collection-item" v-bind:key="item">
      <div>
        {{ item }}
        <a href="#!" class="secondary-content">
          <i class="material-icons">send</i>
        </a>
      </div>
    </li>
  </ul>
</template>

<script>
export default {
  name: 'list-collection',
  props: ['listHeader', 'listItems'],
}
</script>
