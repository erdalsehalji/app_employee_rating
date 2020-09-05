<template>
    <div class="container">
        <div class="col-12">
            <div class="card-container">
                <span class="pro">EMPLOYEERATING</span>
                <img class="round" src="employee.jpg" alt="user" />
                <p>NAME : {{ info.signupName}}</p>
                <p>SURNAME : {{ info.signupSurname }}</p>
                <p>AGE : {{ info.signupAge }}</p>
                <p>SEX : {{ info.signupSex }}</p>
                <p>ADDRESS : {{ info.signupAddress }}</p>
                <p>POSITION : {{ info.signupPosition }}</p>
                <p>ENTERPRISE : {{ info.signupEnterprise }}</p>
                <p>CITY : {{ info.signupCity }}</p>
                <p>MOST RECENT SCORE : {{ info.signupScore }} / 5</p>
                <p>SCORE HISTORY : {{ info.signupScoreHistory }} </p>
                <div>
                    <br>
                    <br>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import store from '@/store'

export default {
    props: ["info"],
    name: 'EmployeeCardComponent',

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
    font-size: 17px;
    line-height: 21px;
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

.card-container .round {
    border: 1px solid #03BFCB;
    border-radius: 50%;
    padding: 7px;
    margin-bottom: 20px;
}


</style>
