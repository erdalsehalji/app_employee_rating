<template>
  <div class="home" style="background-image: linear-gradient(rgba(0, 141, 136, 0.557), rgb(5, 150, 161)); padding-top: 20px;
  padding-bottom: 20px;">
    <div class="container"><br>
      <br>
      <div class="row">
        <div class="col">
          <p>Employee rating is web app for simply rating
            your employees. Application
            is not made for measuring the accurate opinion of employee effinency
            and its quality, but for brief view of its work. All employees and its
            data are visible to other users ( yes, everyone who use the app can see your score ).
          </p>
          <br><br>
          <router-link to="/Register" id="signupButton">SIGN ME UP</router-link><br><br>
          <router-link to="/Login" id="signupButton">LOGIN ME IN</router-link>
          <br>
          <br>
          <br>
          <h>TYPES OF USER</h>
          <p>3 types: Guest (can see list of all employees of all enterprises), Employee (view rates and data), Admin
            (view, add, edit, remove).</p>
          <br><br>
          <h>ADDING, EDITING, REMOVING</h>
          <p>New employees and admins are added by using signup form.
            Admin dashboard is used only by admins. In Admin Dashboard user can edit one attribute or
            entire document and can also delete employee or other admin.</p>
          <br><br>
          <h>RATING</h>
          <p>Rating is admin only feature that enables admins to rate other users by
            putting number (1-5) in score form, and also putting their grade in
            score history ( along with previous scores).</p>
        </div>
      </div><br><br>
    </div>
    <br>
  </div>
</template>

<script>
import store from '@/store.js'

export default {
    data() {
      return store
    },
    name: 'Home',
    components: {}
  }

$('.popover-dismiss').popover({
      trigger: 'hover'
    }
  ),
$(function () {
      $('[data-toggle="popover"]').popover()
    }
),
$('#myModal').on('shown.bs.modal', function () {
      $('#myInput').trigger('hover')
    }
  ) 
</script>
<style scoped>p {
  color: black
}

h1 {
  color: black;
}

form-group col-md-6 {
  color: black
}

#signupButton {
  font-size: 30px;
  color: rgb(255, 30, 0);
}

.jumbotron {
  background-image: linear-gradient(rgb(185, 179, 179), rgb(138, 156, 144), rgb(185, 179, 179));
  height: 300px;
  margin-top: 0px;
}

#buttonhome {
  margin-top: 10px;
}

</style>