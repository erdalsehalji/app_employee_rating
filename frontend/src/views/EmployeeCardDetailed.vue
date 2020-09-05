<template>
  <div v-if="cards" style=" background-image: linear-gradient(rgba(0, 141, 136, 0.557), rgb(5, 134, 141)); padding-top: 20px;
  padding-bottom: 20px;">
    <div class="container">
      <AdminDashboardComponent :info="cards" />
      <form @submit.prevent="updateEmployeeAll">
        <input v-model="signupName" placeholder="edit name" class="editing">
        <br>
        <div class="containerr"><a @click="updateEmployeeName" class="button">Update name</a></div>
        <input v-model="signupSurname" placeholder="edit surname" class="editing">
        <br>
        <div class="containerr"><a @click="updateEmployeeSurname" class="button">Update surname</a></div>
        <input v-model="signupAge" placeholder="edit age" class="editing">
        <br>
        <div class="containerr"><a @click="updateEmployeeAge" class="button">Update age</a></div>
        <input v-model="signupSex" placeholder="edit sex" class="editing">
        <br>
        <div class="containerr"><a @click="updateEmployeeSex" class="button">Update sex</a></div>
        <input v-model="signupAddress" placeholder="edit address" class="editing">
        <br>
        <div class="containerr"><a @click="updateEmployeeAddress" class="button">Update address </a></div>
        <input v-model="signupPosition" placeholder="edit position" class="editing">
        <br>
        <div class="containerr"><a @click="updateEmployeePosition" class="button">Update position</a></div>
        <input v-model="signupEnterprise" placeholder="edit enterprise" class="editing">
        <br>
        <div class="containerr"><a @click="updateEmployeeEnterprise" class="button">Update enterprise</a></div>
        <input v-model="signupCity" placeholder="edit city" class="editing">
        <br>
        <div class="containerr"><a @click="updateEmployeeCity" class="button">Update city</a></div>
        <input v-model="signupScore" placeholder="edit score" class="editing">
        <br>
        <div class="containerr"><a @click="updateEmployeeScore" class="button">Update score</a></div>
        <input v-model="signupScoreHistory" placeholder="edit score history" class="editing">
        <br>
        <div class="containerr"><a @click="updateEmployeeScoreHistory" class="button">Update score history</a></div>
        <button type="submit" class="button">UPDATE ALL (all fields must be different)</button>
      </form>
    </div>
    <br>
    <input type="text" class="editing1" v-model="id">
    <div class="containerr"><a @click="deleteEmployee(id)" class="buttond">DELETE EMPLOYEE</a></div>
  </div>
</template>

<script>
import AdminDashboardComponent from '@/components/AdminDashboardComponent.vue'
import store from '@/store.js'
import {
  EmployeeCards,
  Service
} from '@/services/index.js'
import axios from 'axios'

export default {
  data() {
    return {
      cards: null,
      id: null,
      signupName: '',
      signupSurname: '',
      signupEnterprise: '',
      signupPosition: '',
      signupAge: '',
      signupSex: ['Male', 'Female'],
      signupAddress: '',
      signupCity: '',
      signupScore: '',
      signupScoreHistory: ''
    }
  },
  props: ['id'],

  methods: {
    //DELETING EMPLOYEE
    async deleteEmployee() {
      console.log("ovo je id", this.id)
      let res = await Service.post(`/AdminDashboard/delete/${this.id}`)
      console.log("Deleting post response", res)
      this.$router.push({
        name: 'AdminDashboard'
      })
    },

    //UPDATE ALL
    async updateEmployeeAll(update, id) {
      try {
        let update = {
          signupName: this.signupName,
          signupSurname: this.signupSurname,
          signupEnterprise: this.signupEnterprise,
          signupPosition: this.signupPosition,
          signupAge: this.signupAge,
          signupSex: this.signupSex,
          signupAddress: this.signupAddress,
          signupCity: this.signupCity,
          signupScroe: this.signupScore,
          signupScoreHistory: this.signupScoreHistory
        }
        await EmployeeCards.updateEmployee(update, this.id)

      } catch (e) {
        console.log("Error!", e)
      }
      this.$router.push({
        name: 'AdminDashboard'
      })
    },

    //UPDATE NAME
    async updateEmployeeName(update, id) {
      try {
        let update = {
          signupName: this.signupName
        }
        await EmployeeCards.updateEmployeeOne(update, this.id)

      } catch (e) {
        console.log("Error!", e)
      }
      this.$router.push({
        name: 'AdminDashboard'
      })
    },

    //UPDATE SURNAME
    async updateEmployeeSurname(update, id) {
      try {
        let update = {
          signupSurname: this.signupSurname
        }
        await EmployeeCards.updateEmployeeOne(update, this.id)

      } catch (e) {
        console.log("Error!", e)
      }
      this.$router.push({
        name: 'AdminDashboard'
      })
    },

    //UPDATE SEX
    async updateEmployeeSex(update, id) {
      try {
        let update = {
          signupSex: this.signupSex
        }
        await EmployeeCards.updateEmployeeOne(update, this.id)

      } catch (e) {
        console.log("Error!", e)
      }
      this.$router.push({
        name: 'AdminDashboard'
      })
    },

    //UPDATE AGE
    async updateEmployeeAge(update, id) {
      try {
        let update = {
          signupAge: this.signupAge
        }
        await EmployeeCards.updateEmployeeOne(update, this.id)

      } catch (e) {
        console.log("Error!", e)
      }
      this.$router.push({
        name: 'AdminDashboard'
      })
    },

    //UPDATE ADDRESS
    async updateEmployeeAddress(update, id) {
      try {
        let update = {
          signupAddress: this.signupAddress
        }
        await EmployeeCards.updateEmployeeOne(update, this.id)

      } catch (e) {
        console.log("Error!", e)
      }
      this.$router.push({
        name: 'AdminDashboard'
      })
    },

    //UPDATE POSITION
    async updateEmployeePosition(update, id) {
      try {
        let update = {
          signupPosition: this.signupPosition
        }
        await EmployeeCards.updateEmployeeOne(update, this.id)

      } catch (e) {
        console.log("Error!", e)
      }
      this.$router.push({
        name: 'AdminDashboard'
      })
    },

    //UPDATE ENTERPRISE
    async updateEmployeeEnterprise(update, id) {
      try {
        let update = {
          signupEnterprise: this.signupEnterprise
        }
        await EmployeeCards.updateEmployeeOne(update, this.id)

      } catch (e) {
        console.log("Error!", e)
      }
      this.$router.push({
        name: 'AdminDashboard'
      })
    },

    //UPDATE CITY 
    async updateEmployeeCity(update, id) {
      try {
        let update = {
          signupCity: this.signupCity
        }
        await EmployeeCards.updateEmployeeOne(update, this.id)
      } catch (e) {
        console.log("Error!", e)
      }
      this.$router.push({
        name: 'AdminDashboard'
      })
    },

    //UPDATE SCORE
    async updateEmployeeScore(update, id) {
      try {
        let update = {
          signupScore: this.signupScore
        }
        await EmployeeCards.updateEmployeeOne(update, this.id)

      } catch (e) {
        console.log("Error!", e)
      }
      this.$router.push({
        name: 'AdminDashboard'
      })
    },

    //UPDATE SCORE HISTORY
    async updateEmployeeScoreHistory(update, id) {
      try {
        let update = {
          signupScoreHistory: this.signupScoreHistory
        }
        await EmployeeCards.updateEmployeeOne(update, this.id)

      } catch (e) {
        console.log("Error!", e)
      }
      this.$router.push({
        name: 'AdminDashboard'
      })
    },

  },

  async mounted() {
    console.log(this.id)
    this.cards = await EmployeeCards.getOneCard(this.id)
  },

  name: 'EmployeeCardDetailed',
  components: {
    AdminDashboardComponent
  }
} 
</script>

<style scoped>.editing {
  border: 2px solid rgb(98, 98, 98);
  padding: 5px;
  border-radius: 50px 20px;
  width: 140px;
}

.editing1 {
  border: 2px solid rgb(98, 98, 98);
  padding: 5px;
  border-radius: 50px 20px;
  width: 260px;
}

.button {
  display: inline-block;
  padding: 0.75rem 1.0rem;
  border-radius: 10rem;
  color: #fff;
  font-size: 1rem;

  transition: all 0.3s;
  position: relative;
  overflow: hidden;
  z-index: 1;
}

.button:after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #0cf;
  border-radius: 10rem;
  z-index: -2;
}

.button:before {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 0%;
  height: 100%;
  background-image: linear-gradient(rgb(62, 111, 179), rgb(6, 89, 255));
  transition: all 0.5s;
  border-radius: 10rem;
  z-index: -1;
}

.button:hover {
  color: #fff;
}

.button:hover:before {
  width: 100%;
}


.buttond {
  display: inline-block;
  padding: 0.75rem 1.0rem;
  border-radius: 10rem;
  color: #fff;
  font-size: 1rem;

  transition: all 0.3s;
  position: relative;
  overflow: hidden;
  z-index: 1;
}

.buttond:after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgb(216, 20, 20);
  border-radius: 10rem;
  z-index: -2;
}

.buttond:before {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 0%;
  height: 100%;
  background-color: rgb(6, 89, 255);
  transition: all 0.5s;
  border-radius: 10rem;
  z-index: -1;
}

.buttond:hover {
  color: #fff;
}

.buttond:hover:before {
  width: 100%;
}

* {
  font-family: Arial;
  text-decoration: none;
  font-size: 20px;
}

.containerr {
  padding-top: 20px;
  margin: 0 auto;
  width: 100%;
  text-align: center;
}

</style>