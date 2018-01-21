<template>
  <div class="input-field" v-bind:class="className">
    <input v-bind:id="id" v-bind:type="type" v-bind:class="inputClass" v-bind:placeholder="placeholder" v-bind:value="value" v-on:input="$emit('input', $event.target.value)">
    <label v-bind:for="id">{{ label }}</label>
  </div>
</template>

<script>
export default {
	name: 'input-field',
	props: {
		placeholder: {
			type: String,
			default: '',
		},
		id: {
			type: String,
			required: true,
		},
		type: {
			type: String,
			default: 'text',
		},
		label: {
			type: String,
		},
		className: {
			type: String,
		},
		inputClass: {
			type: String,
		},
		value: {
			type: String,
		},
	},
}
</script>

<style>

</style>
