<template>
<div class="limiter">
<div class="container-login100">
<div class="wrap-login100">
<form class="login100-form validate-form p-l-55 p-r-55 p-t-178">
	<span class="login100-form-title">
		Sign In
	</span>

	<div class="wrap-input100 validate-input m-b-16" data-validate="Please enter username">
		<input class="input100" type="text" id = "username" name="username" placeholder="Username" v-model="username">
		<span class="focus-input100"></span>
	</div>

	<div class="wrap-input100 validate-input" data-validate = "Please enter password">
		<input class="input100" id = "password" type="password" name="pass" placeholder="Password" v-model="password">
		<span class="focus-input100"></span>
	</div>

	<div class="text-right p-t-13 p-b-23">
		<span class="txt1">
		Forgot
		</span>

		<a href="#" class="txt2">
		Username / Password?
		</a>
	</div>

	<div class="container-login100-form-btn">
		<input type="submit" value="Submit" v-on:click="sendData()" />
	</div>

	<div class="flex-col-c p-t-170 p-b-40">
		<span class="txt1 p-b-9">
		Don’t have an account?
		</span>

		<a href="#" class="txt3">
		Sign up now
		</a>
	</div>
</form>
</div>
</div>
</div>
</template>



<script>
// const $ = document
export default {
    name : "signIn",
	data () {
		return {
			username : " ",
			password : " "
		}
	},
	methods : {
		sendData(event){
			event.preventDefault();
			console.log(this.username);
		}
	}
}
</script>

<style scoped>

</style>