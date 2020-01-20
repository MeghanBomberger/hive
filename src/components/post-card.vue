<template>
	<article class="post">
		<h2>{{clonedPost.title}}</h2>
		<p>{{clonedPost.body}}</p>
	</article>
</template>

<script>
export default {
	name: "PostCard",
	props: {
		post: {
			type: Object,
			default: () => {}
		}
	},
	data(){
		return {
			clonedPost: this.post
		}
	}
}
</script>

<style lang="scss">
@import '../variables.scss';

.post {
	margin-bottom: 20px;
	padding: 25px 50px 25px 50px;
	width: 70vw;
	border-radius: 50px;
	background-color: $satin-gold;
	
	h2 {
		@include font-one;
		text-transform: uppercase;
		margin-bottom: 15px;
		color: black;
	}

	p {
		@include font-two;
		color: white;
	}
}

@media screen and (min-width: 600px) {
	.post:nth-of-type(odd) {
		margin-right: 10vw;
	}

	.post:nth-of-type(even) {
		margin-left: 10vw;
	}
}
</style>