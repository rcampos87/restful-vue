<template>
  <div class="container">
    <form class="col s12" v-on:submit.prevent="submitEvent()">
      <div class="row">
        <h3 class="event-header">{{header}}</h3>
      </div>
      <div class="row">
        <input-field label="Name" className="col s12" inputClass="validate" id="event_name" placeholder="event name" v-model.trim="name"/>
      </div>
      <div class="row">
        <input-field label="Location" className="col s12" inputClass="validate" id="event_location" placeholder="event location" v-model.trim="location"/>
      </div>
      <div class="row">
        <input-field label="Description" className="col s12" inputClass="validate" id="event_description" placeholder="event description" v-model.trim="description"/>
      </div>
      <button v-if="!isNew && isEdit" class="btn waves-effect waves-light red" v-on:click="deleteEvent()" name="event_delete">
        Delete
        <i class="material-icons right">clear</i>
      </button>
      <button v-if="isNew || isEdit" class="btn waves-effect waves-light blue" type="submit" name="event_submit">
        Submit
        <i class="material-icons right">send</i>
      </button>
      <div v-if="!isNew && !isEdit" class="fixed-action-btn">
        <a class="btn-floating btn-large red" v-on:click.prevent="setEdit()">
          <i class="material-icons">edit</i>
        </a>
      </div>
    </form>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import InputField from '../shared/field/InputField'

export default {
  name: 'event-details',
  props: {
    id: {
      type: String,
    },
  },
  components: { InputField },
  created() {
    if (this.$route.params.id) {
      this.getEventDetails(this.$route.params.id).then(res => {
        if (res.data.name) {
          const { name, description, location } = res.data 
          this.header = name
          this.name = name
          this.description = description
          this.location = location 
        }
      })
    }
  },
  data() {
    return {
      isNew: !this.$route.params.id,
      isEdit: false,
      header: 'New Event',
      name: '',
      location: '',
      description: ''
    }
  },
  computed: {
		...mapGetters({
			loading: 'isLoading',
		}),
  },
	methods: {
    ...mapActions(['addEvent', 'getEventDetails', 'editEvent', 'deleteEvent']),
    deleteEvent() {
      this.deleteEvent(this.id)
    },
		submitEvent() {
      const { name, location, description } = this
      const data = { name, location, description }

      if (this.isNew) {
        this.addEvent(data)
      } else {
        this.editEvent(data, this.id)
      }
		},
    setEdit() {
      this.isEdit = true
    }
  },
}
</script>


