<template>
	<article class="post">
		<section class="post-container">
			<h2>{{clonedPost.title}}</h2>
			<p>{{clonedPost.body}}</p>
			<p
				class="comment-toggle"
				v-on:click="handleToggle"
			>
				{{isClosed ? '+' : '-'}}
			</p>
		</section>
		<section
			class="comments-list"
			v-show="!isClosed"
		>
			<CommentCard
				v-for="comment in comments"
				:key="comment.id"
				:comment="comment"
			/>
		</section>
	</article>
</template>

<script>
import * as axios from 'axios'

import {API} from '../shared/config'
import CommentCard from './comment-card'

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
			clonedPost: this.post,
			isClosed: true,
			comments: [],
			commentsErrorMessage: ''
		}
	},
	components: {
		CommentCard
	},
	created(){
		this.fetchComments()
	},
	methods: {
		handleToggle(){
			this.isClosed = !this.isClosed
		},
		async fetchComments(){
			try {
				const response = await axios.get(`${API}/comments?postId=${this.clonedPost.id}`)
				this.comments = response.data
				this.commentsErrorMessage = ""
			} catch (error) {
				this.commentsErrorMessage = error
				this.comments = []
			}
		}
	}
}
</script>

<style lang="scss">
@import '../variables.scss';

.post {
	position: relative;
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

	.comment-toggle {
		position: absolute;
		top: -17px;
		right: 18px;
		@include font-one;
		font-size: 9vh;
		color: black;
		cursor: pointer;
	}

	.comments-list {
		padding: 30px 0 0 30px;
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