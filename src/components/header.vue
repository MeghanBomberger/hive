<template>
	<header v-bind:class="{hidden: !isHidden, 'app-header' : 'app-header'}">
		<h1>hive</h1>
	</header>
</template>

<script>
export default {
	name: 'Header',
	data(){
		return {
			isHidden: false
		}
	},
	mounted(){
		window.addEventListener('scroll', this.handleScroll)
	},
	beforeDestroy(){
		window.removeEventListener('scroll', this.handleScroll)
	},
	methods: {
		handleScroll(){
			if (window.pageYOffset < 15) {
				this.isHidden = false
			} else {
				this.isHidden = true
			}
		}
	}
}
</script>

<style lang="scss">
@import '../variables.scss';

.app-header {
	@include fade;
	position: fixed;
	top: 5px;
	left: 15px;
	right: 15px;
	height: 10vh;
	display: flex;
	align-items: center;
	justify-content: flex-end;
	opacity: 0;	

	h1 {
		@include font-three;
		margin: none;
		font-size: 10vh;
		line-height: 100%;
		color: black;
		text-shadow: $satin-gold 2px 2px 1px;
	}
}

.app-header.hidden {
	opacity: 1;
}
</style>