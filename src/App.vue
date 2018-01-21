<template>
  <div id="app">
    <Navbar />
    <div class="app-content">
    <router-view/>
    </div>
  </div>
</template>

<script>
import 'materialize-css/dist/css/materialize.min.css'
import 'materialize-css/dist/js/materialize.min.js'
import Navbar from './components/shared/nav/Navbar'

export default {
	name: 'app',
	components: {
		Navbar,
	},
}
</script>

<style lang="scss">
#app {
	height: calc(100vh - 50px);
	display: flex;
	flex-direction: column;

  .app-content {
	  padding: 40px 0 20px 0;
    margin: 0 20px 0 20px;
  }
}
</style>