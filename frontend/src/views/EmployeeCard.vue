<template>
  <div class="EmployeeCard" style="background-image: linear-gradient(rgba(0, 141, 136, 0.557), rgb(5, 134, 141)); padding-top: 20px;
  padding-bottom: 20px;">
    <div @click="gotoDetails(card)" :key="card.id" :info="card" v-for="card in cards">
      <EmployeeCardComponent :info="card" />
    </div>
  </div>
</template>

<script>
import EmployeeCardComponent from '@/components/EmployeeCardComponent.vue'
import _ from 'lodash'
import store from '@/store.js'
import { EmployeeCards, Service, Auth } from '@/services/index.js'

export default {
  data () {
    return {
    store,
    cards: [],
    term: ''
    }
  },
  name: 'EmployeeCard',

  watch: {
    "store.searchTerm": _.debounce(function()  {
      this.fetchCards()
    }, 600)
  },

  methods: {
  async fetchCards() {
     let enterprise = Auth.getEnterprise()
     this.cards = await EmployeeCards.getCardsEnterprise(enterprise)
    },
   gotoDetails(card) {
     this.$router.push({ path: `AdminDashboard/${card._id}` });
   }},

 mounted() {
   this.fetchCards()
  },

  components: {
    EmployeeCardComponent,
   
  }
}
</script>



