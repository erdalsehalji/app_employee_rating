<template>
<div style="background-image: linear-gradient(rgba(0, 141, 136, 0.557), rgb(5, 134, 141)); padding-top: 20px;
  padding-bottom: 20px;">
    <div class="container"><br>
        <div class="row">
            <div class="col">
                <div class="login-form">
                    <form @submit.prevent="login">
                        <img src="login_pic.jpg" class="material-icons" />
                        <h4 class="modal-title">Login to Your Account</h4>
                        <div class="form-group">
                            <input type="text" v-model="signupEmail" class="form-control" placeholder="Email"
                                required="required">
                        </div>
                        <div class="form-group">
                            <input type="password" v-model="signupPassword" class="form-control" placeholder="Password"
                                required="required">
                        </div>
                        <div class="form-group">
                            <input type="any" v-model="signupEnterprise" class="form-control" placeholder="Enterprise"
                                required="required">
                        </div>
                        <button type="submit" class="btn btn-primary btn-block btn-lg">Login</button>
                    </form>
                    <div id="logindesc" class="text-center small">Don't have an account?</div>
                    <router-link to="/Register">Sign up</router-link>
                </div>
            </div>
        </div>
    </div>
</div>

</template>

<script>
import {Auth} from "@/services/index.js"

export default {
  data() {
    return {
      signupEmail: '',
      signupPassword: '',
      signupEnterprise: ''
    }
  },
  methods: {
    async login() {
         let success = await Auth.login(this.signupEmail, this.signupPassword, this.signupEnterprise)
         console.log('Login result', success)
         if (success == true) {
             this.$router.push({ name: 'EmployeeCard' })
         }
      }
  }
}
</script>
<style scoped>.form-control {
    box-shadow: none;
    border-color: #ddd;
}

.form-control:focus {
    border-color: #4aba70;
}

.login-form {
    width: 350px;
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
    color: rgb(13, 96, 100);
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
    font-size: 22px;
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
#logindesc {
    color: black;
}

</style>