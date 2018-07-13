// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import MuseUI from 'muse-ui'
import $ from 'jquery'
import 'muse-ui/dist/muse-ui.css'
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
import moment from 'moment/moment'
import Navigation from 'vue-navigation'
// Vue.prototype.$moment = moment;
window.baseUrl = 'http://boss.eatjoys.com:8081';
Vue.use(MuseUI)
Vue.use(MintUI)
Vue.use(Navigation, {router})
Vue.filter('TIMEDF', function (value, format) {
	// ,{'username':username,'password':password}
	let date = new Date(value)
	let Y = date.getFullYear() + '-';
	let M = (date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1) + '-';
	let D = date.getDate() + ' ';
	let h = date.getHours() + ':';
	let m = date.getMinutes() + ':';
	let s = date.getSeconds();
	return Y + M + D + h + m + s

});
// import { Tab, TabItem } from 'vux'

// Vue.component('tab', Tab)
// Vue.component('tab-item', TabItem)
// import 

Vue.config.productionTip = false
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
