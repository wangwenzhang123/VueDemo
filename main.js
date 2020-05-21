import Vue from 'vue'
import App from './App'
import Json from './json.js'

Vue.config.productionTip = false

App.mpType = 'app'
const json = type=>{
	//模拟异步请求数据
	return Json[type]
}
Vue.prototype.$api = {json};
const app = new Vue({
    ...App
})
app.$mount()
