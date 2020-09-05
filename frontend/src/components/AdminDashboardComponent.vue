<template>
    <div class="container">
        <div class="col-12">
            <div class="card-container">
                <span class="pro">EMPLOYEERAITNG</span>
                <br><br>
                <br>
                <p class="spec">- IMPORTANT NOTES -</p>
                <p class="spec">To enter in editing mode, click on user card you want to edit in AdminDashboard or EmployeeCard.</p>
                <p class="spec">Rating is achieved by simply putting desidered number (1-5) in score form.<br>After rating user must put copy rating history (if there is one) and after 
                that paste it in score history form and then he can write his name his name and his rate</p>
                <br>
                <p>NAME  : {{ info.signupName }} </p>
                <p>SURNAME :   {{ info.signupSurname }}</p>
                <p>AGE : {{ info.signupAge }} </p>
                <p>SEX : {{ info.signupSex }} </p>
                <p>ADDRESS : {{ info.signupAddress }} </p>
                <p>POSITION : {{ info.signupPosition }}</p>
                <p>ENTERPRISE : {{ info.signupEnterprise }} </p>
                <p>CITY : {{ info.signupCity }} </p>
                <p>MOST RECENT SCORE : {{ info.signupScore }} / 5</p>
                <p>SCORE HISTORY : {{ info.signupScoreHistory }} </p>
                <p>UNIQUE EMAIL : {{ info.signupEmail }}</p>        
                <br>
            </div>
        </div>
    </div>
</template>

<script>
import store from '@/store'
import axios from 'axios';
import { EmployeeCards } from '@/services/index.js'

export default {
    data() {
        return {
            signupName: '',
            signupSurname: '',
            signupEnterprise: '', 
            signupPosition: '',
            signupAge: '',
            signupSex: ['Male', 'Female'],
            signupEmail: '',
            signupPassword: '',
            signupAddress: '',
            signupCity: '',
            signupType: ['Admin', 'Employee'],
            signupScore: '',
            signupScoreHistory: ''
        }
    
    },
    props: ["info"],
     
  }

</script>

<style scoped>

h3 {
    margin: 10px 0;
}

h6 {
    margin: 5px 0;
    text-transform: uppercase;
}

p {
    font-size: 14px;
    line-height: 21px;
}

.spec {
    color: yellow;
}

.card-container {
    background-image: linear-gradient(rgb(70, 100, 110),rgb(64, 83, 90), rgb(69, 129, 118),rgb(51, 104, 122));;
    border-radius: 30px 10px;
    box-shadow: 0px 10px 20px -10px rgba(0, 0, 0, 0.75);
    color: #B3B8CD;
    padding-top: 30px;
    position: relative;
    margin-bottom: 20px;
    text-align: center;
}

.card-container .pro {
    color: #231E39;
    background-color: #FEBB0B;
    border-radius: 30px 10px;
    font-size: 14px;
    font-weight: bold;
    padding: 3px 7px;
    position: absolute;
    top: 30px;
    left: 30px;
}

.editing {
      border: 2px solid rgb(98, 98, 98);
     padding: 5px;
     border-radius: 50px 20px;
     width: 100px;
}

.card-container .round {
    border: 1px solid #03BFCB;
    border-radius: 50%;
    padding: 7px;
    margin-bottom: 20px;
}

#DeleteButton {
    margin-bottom: 20px;
}

footer {
    background-color: #222;
    color: #fff;
    font-size: 14px;
    bottom: 0;
    position: fixed;
    left: 0;
    right: 0;
    text-align: center;
    z-index: 999;
}

footer p {
    margin: 10px 0;
}

footer i {
    color: red;
}

footer a {
    color: #3c97bf;
    text-decoration: none;
}

.button {
	 display: inline-block;
	 padding: 0.75rem 1.25rem;
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
	 background-image:  linear-gradient(rgb(179, 62, 62), rgb(255, 6, 6));
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
/* optional reset for presentation */
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
 h1 {
	 font-size: 0.8rem;
	 margin-bottom: 2rem;
	 color: #777;
}
 span {
	 display: block;
	 margin-top: 2rem;
	 font-size: 0.7rem;
	 color: #777;
}
 span a {
	 font-size: 0.7rem;
	 color: #999;
	
}
 

</style>
