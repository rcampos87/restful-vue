<template>
  <div class="container home-wrapper">
    <loader v-if="loading"/>
    <div v-if="!loading" class="events-wrapper">
      <div v-if="hasEvents()">
        <event-list v-bind:header="header" v-bind:events="events"/>
        <div class="fixed-action-btn">
          <router-link to="/new" class="btn-floating btn-large red">
            <i class="material-icons">create</i>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Axios from '../common/axios'
import Loader from './shared/loader/Loader'
import EventList from './events/EventList'

export default {
  name: 'home',
  data() {
    return {
      Axios: new Axios(),
      header: 'Events',
      events: [],
      loading: true,
    }
  },
  components: { Loader, EventList },
  created() {
    this.Axios
      .doGet('http://localhost:3000/events')
      .then(res => {
        this.loading = false
        if (res.length === 0) {
          this.$router.push('/new')
        }
      })
      .catch(err => {
        this.loading = false
        this.$router.push('/new')
      })
  },
  computed: {
    hasEvents() {
      return !this.loading && this.events.length !== 0
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


