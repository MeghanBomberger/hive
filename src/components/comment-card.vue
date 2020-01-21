<template>
	<article class="comment-card">
		<h3>- {{clonedComment.name}}</h3>
		<p>{{clonedComment.body}}</p>
	</article>
</template>

<script>
export default {
	name: "CommentCard",
	props: {
		comment: {
			type: Object,
			default: () => {}
		}
	},
	data(){
		return {
			clonedComment: {...this.comment}
		}
	}
}
</script>

<style lang="scss">
@import '../variables.scss';

.comment-card {
	margin-bottom: 15px;

	p {
		margin-left: 1vw;
	}
}
</style>