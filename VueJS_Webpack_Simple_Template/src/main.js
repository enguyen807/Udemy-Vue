import Vue from 'vue';
import App from './App.vue';
import AS6Header from './components/AS6-Header.vue';
import AS6Footer from './components/AS6-Footer.vue';

//Global Registration of Component
//import TestComponent from './components/TestComponent.vue'
//Vue.component('app-server-status', TestComponent)

Vue.component('As6Header', AS6Header);
Vue.component('As6Footer', AS6Footer);

new Vue({
  el: '#app',
  components: {
    'As6-Header': AS6Header,
    'As6-Footer': AS6Footer
  },
  render: h => h(App)
});
