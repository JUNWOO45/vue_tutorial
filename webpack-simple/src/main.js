import Vue from 'vue'
import App from './App.vue'
//ES6에서는 이렇게 import로..
import NavHeader from './components/NavHeader.vue'

import Greeting from './components/Greeting.vue'

//ES5에서는 이렇게..require()썼었지.
//var NavHeader = require('./components/NavHeader.vue')

Vue.component('nav-header', NavHeader)
Vue.component('greeting', Greeting)
// 이건 지금
// Vue.component('es5-greeting', {
//   template: `
//     <div>
//       Good day! ES5!
//     </div>
//   `
// })
//이랑 똑같다고 보면됨..

new Vue({
  el: '#app',
  render: h => h(App)
})
