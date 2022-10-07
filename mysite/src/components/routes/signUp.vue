<template>

<div class="limiter">
<div class="container-login100">
<div class="wrap-login100">
<form class="login100-form validate-form p-l-55 p-r-55 p-t-178">
<span class="login100-form-title">
Sign Up
</span>

<div class="wrap-input100 validate-input m-b-16" data-validate="Please enter username">
<input class="input100" type="text" name="username" placeholder="Username" v-model.lazy="username">
<span class="focus-input100"></span>
</div>

<div class="wrap-input100 validate-input m-b-16" data-validate = "Please enter password">
<input class="input100" type="password" name="password" placeholder="Password" v-model.lazy="password">
<span class="focus-input100"></span>
</div>

<div class="wrap-input100 validate-input m-b-16" data-validate = "Please enter password">
<input class="input100" type="password" name="password" placeholder="Confrim Password" v-model.lazy="confirmPassword">
<span class="focus-input100"></span>
</div>

<div class="container-login100-form-btn">
<button type="button" class="login100-form-btn" v-on:click="postData()">
    Sign up
</button>	
</div>

<div class="flex-col-c p-t-170 p-b-40">
<span class="txt1 p-b-9">
Do you have an account?
</span>

<router-link class="txt3" :to="{name : 'signIn'}">Sign In</router-link>
</div>
</form>
</div>
</div>
</div>

</template>



<script>
import axios from 'axios';

export default {
name : "signIn",
    data () {
    return {
        username : "",
        password : "",
        confirmPassword : ""
    }
    },
    methods : {
    async postData(){
        try {
            await axios.post("http://localhost:3000/user/signup",{
                username : this.username,
                password : this.password,
                confirmPassword : this.confirmPassword
            })
            this.$router.push('/signin') 
        }catch (err) {console.log(err);}
    }
    }
}
</script>

<style scoped>

</style>