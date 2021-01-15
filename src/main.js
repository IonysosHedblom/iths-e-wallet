import Vue from 'vue'
import App from './App.vue'
import router from './router'

Vue.config.productionTip = false

new Vue({
  data: {
    cards: [
      {
        cardNumber: "1337133713371337",
        cardName: "Ionysos Hedblom",
        month: "03",
        year: "21",
        vendor: "Evil Corp",
      },
    ]
  },
  router,
  render: h => h(App)
}).$mount('#app')
