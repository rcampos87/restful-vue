<template>
  <ul class="collection with-header">
    <li class="collection-header">
      <h4>{{listHeader}}</h4>
    </li>
    <li v-for="item in listItems" class="collection-item" v-bind:key="item._id">
      <div>
        {{ item.name }}
        <router-link v-bind:to="getLink(item._id)" class="secondary-content">
          <i class="material-icons">chevron_right</i>
        </router-link>
      </div>
    </li>
  </ul>
</template>

<script>
export default {
  name: 'list-collection',
  props: {
    listHeader: {
      type: String,
      required: true
    },  
    listItems: {
      type: Array,
      required: true
    },
    baseLink: {
      type: String,
      default: ''
    }
  },
  methods: {
    getLink(id) {
      return `${this.baseLink}/${id}`;
    }
  }
}
</script>
