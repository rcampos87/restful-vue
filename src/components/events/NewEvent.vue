<template>
  <div class="container">
    <form class="col s12" v-on:submit.prevent="submitEvent()">
      <div class="row">
        <input-field label="Name" className="col s12" inputClass="validate" id="event_name" placeholder="event name" v-model.trim="name"/>
      </div>
      <div class="row">
        <input-field label="Location" className="col s12" inputClass="validate" id="event_location" placeholder="event location" v-model.trim="location"/>
      </div>
      <div class="row">
        <input-field label="Description" className="col s12" inputClass="validate" id="event_description" placeholder="event description" v-model.trim="description"/>
      </div>
      <button class="btn waves-effect waves-light blue" type="submit" name="event_submit">
        Submit
        <i class="material-icons right">send</i>
      </button>
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
      const data = { name, location, description }
      this.addEvent(data)
		},
	},
}
</script>


