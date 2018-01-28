<template>
  <list-collection v-bind:listHeader="header" v-bind:listItems="events" v-bind:baseLink="'/'"/>
</template>

<script>
import ListCollection from '../shared/list/ListCollection'

export default {
  name: 'event-list',
  props: ['header', 'events'],
  components: { ListCollection },
}
</script>
