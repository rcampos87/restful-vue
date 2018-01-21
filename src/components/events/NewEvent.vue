<template>
  <div class="container">
    <form class="col s12">
      <div class="row">
        <input-field label="Name" className="col s12" inputClass="validate" id="event_name" placeholder="type your event name" v-model="name"/>
      </div>
      <div class="row">
        <input-field label="Location" className="col s12" inputClass="validate" id="event_location" placeholder="type your event location"  v-model="location"/>
      </div>
    </form>
  </div>
</template>

<script>
import InputField from '../shared/field/InputField'

export default {
  name: 'new-event',
  data() {
    return {
      name: '',
      location: ''
    }
  },
  components:  { InputField }
}
</script>


