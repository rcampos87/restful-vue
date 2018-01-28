<template>
  <div class="container">
    <form class="col s12" v-on:submit.prevent="submitEvent()">
      <div class="row">
        <input-field label="Name" className="col s12" inputClass="validate" id="event_name" placeholder="event name" v-model="name"/>
      </div>
      <div class="row">
        <input-field label="Location" className="col s12" inputClass="validate" id="event_location" placeholder="event location" v-model="location"/>
      </div>
      <div class="row">
        <input-field label="Description" className="col s12" inputClass="validate" id="event_description" placeholder="event description" v-model="description"/>
      </div>
    </form>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
import InputField from '../shared/field/InputField'

export default {
	name: 'new-event',
	data() {
		return {
			name: '',
			location: '',
			description: '',
		}
	},
	components: { InputField },
	methods: {
		...mapActions(['addEvent']),
		submitEvent() {
      const { name, location, description } = this
      
      this.addEvent({ name, location, description })
		},
	},
}
</script>


