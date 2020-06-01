import Vue from 'vue'
import App from './App'
import Json from './json.js'
import store from './store'


Vue.config.productionTip = false
App.mpType = 'app'
const json = type=>{
	//模拟异步请求数据
	return Json[type]
}
Vue.prototype.$api = {json};
Vue.prototype.$store = store
const app = new Vue({
	store,
    ...App
})
app.$mount()
