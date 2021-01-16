import Vue from 'vue'
import App from './App.vue'
import router from './router'

Vue.config.productionTip = false

new Vue({
  data: {
    cards: [
      {
        // ID används inte till något, låter det vara kvar ändå.
        id: 1610801447119,
        cardNumber: "1337133713371337",
        cardName: "Ionysos Hedblom",
        month: "03",
        year: "21",
        vendor: "Ninja Bank",
      },
      {
        id: 1610801447120,
        cardNumber: "1337133713371337",
        cardName: "Ionysos Hedblom",
        month: "06",
        year: "24",
        vendor: "Bitcoin Inc",
      },
      {
        id: 1610801447121,
        cardNumber: "1337133713371337",
        cardName: "Ionysos Hedblom",
        month: "04",
        year: "22",
        vendor: "Blockchain Inc",
      },
      {
        id: 1610801447122,
        cardNumber: "1337133713371337",
        cardName: "Ionysos Hedblom",
        month: "12",
        year: "25",
        vendor: "Evil Corp",
      },

    ]
  },
  router,
  render: h => h(App)
}).$mount('#app')
