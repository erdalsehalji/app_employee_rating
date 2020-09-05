<template>
  <div class="cont" style="background-image: linear-gradient(rgba(0, 141, 136, 0.557), rgb(69, 129, 118),rgb(106, 168, 212)); padding-top: 20px;
  padding-bottom: 20px;">
    <div class="EmployeeCard">
      <div class="clicker" :key="card.id" :info="card" v-for="card in cards">
        <EmployeeCardComponent :info="card" />
      </div>
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
  name: 'EmployeeCardList',

  watch: {
    "store.searchTerm": _.debounce(function()  {
      this.fetchCards()
    }, 600)
  },

  methods: {
  async  fetchCards(term) {
     term = term || store.searchTerm
     this.cards = await EmployeeCards.getAllCards(term)
     console.log(this.cards)
    },
  },
 mounted() {
   this.fetchCards()
  
  },
  components: {
    EmployeeCardComponent,
  }
}
</script>

