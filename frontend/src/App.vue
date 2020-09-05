<template>
  <div id="app">
    <nav id="mainbar" class="navbar navbar-expand-lg navbar-light bg-light">
      <a class="navbar-brand" href="#">
        <h>EMPLOYEE RATING</h>
      </a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown"
        aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNavDropdown">
        <ul class="navbar-nav">
          <li>
               <div class="cntr">
	<div class="cntr-innr">
	  <label class="search" for="inpt_search">
			<input id="inpt_search" v-model="searchTerm" type="text" placeholder="Search something" />
		</label>
	</div>
</div>  
          </li>
          <li class="nav-item active">
            <router-link class="nav-link" to="/">Home</router-link>
          </li>
          <li>
    
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/AdminDashboard">Admin dashboard</router-link>
          </li>
		   <li class="nav-item">
            <router-link class="nav-link" to="/EmployeeCardList">All Employee List</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/EmployeeCard">Employee List</router-link>
          </li>
         
               <li>
                    <div  class="containerr"><a @click="logout" class="button">Logout</a></div> 
          </li>

          <li>
               
 
           
          </li>
        </ul>

      </div>
    </nav>

    <router-view />

  </div>
</template>



<script type="text/javascript">
import store from '@/store.js'
import {Auth} from '@/services/index.js'

export default {
  data () {
    return store
  },

  methods: {
    logout() {
      Auth.logout()
      this.$router.go()
    }
  }
 
}
</script>


<style lang="scss" >
h1 {
  padding: 5px;
  font-size: 10px;
  letter-spacing: 1px;


}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #217feb;

}

#mainbar {
  background-color: #fbc000;

}

#navbarNavDropdown {
     background-color:rgb(84, 133, 136);
}

#nav {

  a {
    font-weight: bold;
    color: #0adf1c;

    &.router-link-exact-active {
      color: #19466b70;
    }
  }
}

.search {
	display: inline-block;
	position: relative;
	height: 30px;
	width: 70px;
	box-sizing: border-box;
  padding-left: 6px;
	margin:  8px 8px;
  margin-top: 5px;
	border: 5px solid rgba(231, 255, 20, 0.775);
	border-radius: 30px 10px;
	transition: all 200ms ease;
	cursor: text;
	
	&:after {
		content: "";
		position: absolute;
		width: 3px;
		height: 20px;
		right: -5px;
		top: 21px;
		border-radius: 3px;
		transform: rotate(-45deg);
		transition: all 200ms ease;
	}
	
	&.active,
	&:hover {
		width: 200px;
		margin-right: 0px;
		
		&:after {
			height: 0px;	
		}
	}

  
	
	input {
		width: 100%;
		border: none;
		box-sizing: border-box;
		font-family: Helvetica;
		font-size: 15px;
		color: inherit;
		background: transparent;
		outline-width: 0px;
	}
#inpt_search {
  text-align: center;

  color: rgb(0, 0, 0);
 
}


}


.button {
	 display: inline-block;
	 padding: 0.35rem 1.25rem;
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
	 background-image:  linear-gradient(rgb(62, 179, 76), rgb(243, 255, 6));
	 border-radius: 5rem;
	 z-index: -2;
}
 .button:before {
	 content: '';
	 position: absolute;
	 bottom: 0;
	 left: 0;
	 width: 0%;
	 height: 100%;
	 background-color: rgba(231, 255, 20, 0.775);
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

 .containerr {
	 padding-top: 4px;
	 margin: 0 auto;
	 width: 100%;
	 text-align: center;
}


</style>
