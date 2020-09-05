<template>
<div style="background-image: linear-gradient(rgba(0, 141, 136, 0.557), rgb(5, 134, 141)); padding-top: 20px;
  padding-bottom: 20px;">
    <form>
        <div class="container">
            <div class="login-form">
                <form @submit.prevent="register">
                    <img src="register.png" class="material-icons" />
                    <h4 class="modal-title">REGISTER</h4>
                    <div class="row">
                        <div class="col">
                            <div class="form-row">
                                <div class="form-group col-md-6"><label for="inputEmail4">Name</label><input
                                        type="string" class="form-control" v-model="signupName" id="signupName"></div>
                                <div class="form-group col-md-6"><label for="inputPassword4">Surname</label><input
                                        type="string" class="form-control" v-model="signupSurname" id="signupSurname">
                                </div>
                            </div>
                            <div class="form-row">
                                <div class="form-group col-md-6"><label for="inputEmail4">Enterprise or workplace
                                    </label><input type="string" class="form-control" v-model="signupEnterprise"
                                        id="signupEnterprise">
                                </div>
                                <div class="form-group col-md-6"><label for="inputState">Position</label><select
                                        v-model="signupPosition" id="signupPosition" class="form-control">
                                        <option selected></option>
                                        <option>Senior executive</option>
                                        <option>Executive </option>
                                        <option>Executive managment</option>
                                        <option>Senior director</option>
                                        <option>Director</option>
                                        <option>Senior manager</option>
                                        <option>Manager</option>
                                        <option>Senior advisor</option>
                                        <option>Advisor</option>
                                        <option>Senior (staff)</option>
                                        <option>Intermediate (staff)</option>
                                        <option>Associate (staff)</option>
                                        <option>Other</option>
                                    </select></div>
                            </div>
                            <div class="form-row">
                                <div class="form-group col-md-6"><label for="inputEmail4">Age</label><input
                                        type="number" class="form-control" v-model="signupAge" id="signupAge"></div>
                                <div class="form-group col-md-6"><label for="inputState">Sex</label><select
                                        v-model="signupSex" id="signupSex" class="form-control">
                                        <option selected></option>
                                        <option>Male</option>
                                        <option>Female</option>
                                    </select></div>
                            </div>
                            <div class="form-row">
                                <div class="form-group col-md-6"><label for="inputEmail4">Email</label><input
                                        type="email" class="form-control" v-model="signupEmail" id="signupEmail"></div>
                                <div class="form-group col-md-6"><label for="inputPassword4">Password</label><input
                                        type="password" class="form-control" v-model="signupPassword"
                                        id="signupPassword"></div>
                            </div>
                            <div class="form-row">
                                <div class="form-group col-md-6"><label for="inputEmail4">Address</label><input
                                        type="any" class="form-control" v-model="signupAddress" id="signupAddress">
                                </div>
                                <div class="form-group col-md-6"><label for="inputPassword4">City</label><input
                                        type="string" class="form-control" v-model="signupCity" id="signupCity"></div>
                            </div>
                            <div class="form-group col-md-12"><label for="inputState">Account type</label><select
                                    v-model="signupType" id="signupType" class="form-control">
                                    <option selected></option>
                                    <option>Admin</option>
                                    <option>Employee</option>
                                </select>
                            </div>
                            <div class="form-group">
                            </div><button type="submit" class="btn btn-primary">Sign in</button>
                        </div>
                    </div>
                </form>
                <div id="signupdesc" class="text-center small">Already have an account?</div>
                <router-link to="/Login">Login</router-link>
            </div>
        </div>
    </form>
</div>
</template>

<script>
import {Auth} from "@/services/index.js"

export default {
    data() {
        return {
            id: '',
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
            signupImage: 'employee.jpg',
            signupScore: '',
            signupScoreHistory: ''
        }
    },
  methods: {
    async register() {
         let success = await Auth.register(this.signupName, this.signupSurname, this.signupPassword,
       this.signupAddress, this.signupAge, this.signupCity, this.signupEnterprise,
        this.signupPosition, this.signupSex, this.signupType, this.signupEmail)
         if (true) {
             this.$router.push({ name: 'Login' })
         }
      }
  }  
}
</script>
<style scoped>p {
    color: black
}

h1 {
    color: black;
    font-size: 40;
}

form-group col-md-6 {
    color: black
}

.form-control {
    box-shadow: none;
    border-color: #ddd;
}

.form-control:focus {
    border-color: #4aba70;
}

.login-form {
    width: auto;
    margin: 0 auto;
    padding: 30px 0;
}

.login-form form {
    color: #434343;
    border-radius: 1px;
    margin-bottom: 15px;
    background-image: linear-gradient(rgb(135, 168, 180), rgb(135, 168, 180), rgb(69, 129, 118));
    ;
    border: 1px solid #f3f3f3;
    box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.3);
    padding: 30px;
}

.login-form h4 {
    text-align: center;
    font-size: 22px;
    margin-bottom: 20px;
}

.login-form .avatar {
    color: rgb(100, 13, 13);
    margin: 0 auto 30px;
    text-align: center;
    width: 100px;
    height: 100px;
    border-radius: 50%;
    z-index: 9;
    background: #4aba70;
    padding: 15px;
    box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.1);
}

.login-form .avatar i {
    font-size: 62px;
}

.login-form .form-group {
    margin-bottom: 20px;
}

.login-form .form-control,
.login-form .btn {
    min-height: 40px;
    border-radius: 2px;
    transition: all 0.5s;
}

.login-form .close {
    position: absolute;
    top: 15px;
    right: 15px;
}

.login-form .btn {
    background: #4aba70;
    border: none;
    line-height: normal;
}

.login-form .btn:hover,
.login-form .btn:focus {
    background: #42ae68;
}

.login-form .checkbox-inline {
    float: left;
}

.login-form input[type="checkbox"] {
    margin-top: 2px;
}

.login-form .forgot-link {
    float: right;
}

.login-form .small {
    font-size: 13px;
}

.login-form a {
    color: #4aba70;
}

.modal-title {
    padding-top: 20px;
}

#signupdesc {
    color: black;
}

</style>