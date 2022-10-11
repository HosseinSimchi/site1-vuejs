<template>
<div class="limiter">
<div class="container-login100">
<div class="wrap-login100">
<form class="login100-form validate-form p-l-55 p-r-55 p-t-178">
	<span class="login100-form-title">
		Sign In
	</span>

	<div class="wrap-input100 validate-input m-b-16" data-validate="Please enter username">
		<input class="input100" type="text" name="username" placeholder="Username" v-model.lazy="username">
		<span class="focus-input100"></span>
	</div>

	<div class="wrap-input100 validate-input m-b-16" data-validate = "Please enter password">
		<input class="input100" type="password" name="password" placeholder="Password" v-model.lazy="password">
		<span class="focus-input100"></span>
	</div>

	<div class="container-login100-form-btn">
		<button type="button" class="login100-form-btn" v-on:click="getData()">
			Sign in
		</button>	
	</div>

	<div class="flex-col-c p-t-170 p-b-40">
		<span class="txt1 p-b-9">
		Don’t have an account?
		</span>
		<router-link class="txt3" :to="{name : 'signUp'}">Sign Up</router-link>
	</div>
</form>
</div>
</div>
</div>
</template>



<script>
import axios from 'axios';
import eventBus from '../../eventBus';

export default {
    name: "signIn",
    data() {
        return {
            username: "",
            password: ""
        };
    },
    methods: {
        async getData() {
            try {
                await axios.post("http://localhost:3000/user/signin",{
					username : this.username,
					password : this.password
				});
				eventBus.$emit("username",this.username)
				this.$router.push("/");
            }
            catch (err) {
                console.log(err);
            }
        }
    }
}
</script>

<style scoped>

</style>