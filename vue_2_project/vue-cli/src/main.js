import Vue from 'vue'
import App from './App.vue'
import Home from './Home.vue'

Vue.component('app-servers', Home)

new Vue({
  el: '#app',
  render: h => h(App)
  // Render is similar to template
})

// ONly one root element in component, ie wrap in a div
// Componnets can be registered globally or locally.
