<template>
  <div class="container home-wrapper">
    <loader v-if="loading"/>
    <div v-if="!loading" class="events-wrapper">
      <div v-if="hasEvents()">
        <event-list v-bind:header="header" v-bind:events="events"/>
        <div class="fixed-action-btn">
          <router-link to="/new" class="btn-floating btn-large red">
            <i class="material-icons">add</i>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import Loader from './shared/loader/Loader'
import EventList from './events/EventList'

export default {
	name: 'home',
	data() {
		return {
			header: 'Events',
		}
	},
	components: { Loader, EventList },
	created() {
    this.getAllEvents()
  },
	computed: {
		...mapGetters({
			loading: 'isLoading',
			events: 'getEvents',
		}),
	},
  methods: {
		...mapActions(['getAllEvents']),
		hasEvents() {
			return this.events.length !== 0
		},
  },
}
</script>

<style lang="scss">
.home-wrapper {
	display: flex;
	flex: 1;

	> .preloader-wrapper {
		margin: auto auto;
	}

	.events-wrapper {
		margin-top: 30px;
		width: 100%;
	}
}
</style>


