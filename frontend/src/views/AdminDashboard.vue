<template>
  <div class="AdminDashboard" style="background-image: linear-gradient(rgba(0, 141, 136, 0.557), rgb(69, 129, 118),rgb(106, 168, 212)); padding-top: 20px;
  padding-bottom: 20px;">
    <div @click="gotoDetails(card)" :key="card.id" :info="card" v-for="card in cards">
    <AdminDashboardComponent :info="card"/>
  </div>
  </div>
</template>

<script>
import AdminDashboardComponent from '@/components/AdminDashboardComponent.vue'
import _ from 'lodash'
import store from '@/store.js'
import { EmployeeCards, Service, Auth } from '@/services/index.js'

export default {
  data () {
    return{    
    store,
    cards: [],
    term: ''
    }
  },
  name: 'AdminDashboard',

  watch: {
    "store.searchTerm": _.debounce(function()  {
      this.fetchCards()
    }, 600)
  },

  methods: {
     gotoDetails(card) {
     this.$router.push({ path: `AdminDashboard/${card._id}` });
     },
  
     async fetchCards() {
     let enterprise = Auth.getEnterprise()
     this.cards = await EmployeeCards.getCardsEnterprise(enterprise)
    }},
  

 mounted() {
     this.fetchCards()
  },

  components: {
    AdminDashboardComponent,
  }
}
</script>
