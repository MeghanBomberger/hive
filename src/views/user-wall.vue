<template>
	<section class="user-wall">
		<router-link to='/users' title="go back">
			<img
				src="../assets/forward-button.svg"
				class="arrow-button"
			/>
		</router-link>
		<div class="user-header">
			<UserCard
				:key="userProfile.id"
				:user="userProfile"
				:isWall="true"
				class="wall-image"
			/>
			<div class="user-info">
				<h2>{{userProfile.username}}</h2>
				<h3><span class="h-flip">&#x1f41d;</span> ( {{userProfile.name}} ) &#x1f41d;</h3>
			</div>
		</div>
		<section class="posts-list-container">
			<PostCard
				v-for="post in posts"
				:key="post.id"
				:post="post"
			/>
		</section>
	</section>
</template>

<script>
import * as axios from 'axios'

import {API} from '../shared/config'

import UserCard from '@/components/user-card'
import PostCard from '@/components/post-card'

export default {
	name: "UserWall",
	props: {
		userId: {
			type: String,
			default: "1"
		},
		username: {
			type: String,
			default: ""
		},
		name: {
			type: String,
			default: ""
		},
		image: {
			type: String,
			default: ""
		}
	},
	data(){
		return {
			userErrorMessage: '',
			userProfile: {
				id: this.userId,
				username: this.username,
				name: this.name,
				image: this.image
			},
			posts: []
		}
	},
	components: {
		UserCard,
		PostCard
	},
	created(){
		this.posts = []
		this.fetchUserPosts()
	},
	methods: {
		async fetchUserPosts(){
			try {
				const response = await axios.get(`${API}/posts?userId=${this.userProfile.id}`)
				this.posts = response.data
				this.userErrorMessage = ''
			} catch (error) {
				this.userErrorMessage = error
				this.userPostsList = []
			}
		}
	}	
}
</script>

<style lang="scss">
@import '../variables.scss';

.user-wall {
	@include centered;
	flex-direction: column;

	.arrow-button {
		position: fixed;
		top: 1vh;
		left: 1vw;
		height: 5vh;
		transform: scaleX(-1);
		filter: drop-shadow(black 3px 3px 5px);
	}

	.arrow-button:hover {
		filter: drop-shadow(rgba(200, 200, 255, 0.75) 0 0 5px);
	}

	.user-header {
		@include centered;
		flex-wrap: wrap;
		width: 90vw;
		margin-top: 6vh;

		.wall-image {
			justify-self: flex-start;
		}

		.user-info {
			@include centered;
			flex-direction: column;
			margin: 10px;

			h2 {
				@include bee-font-style;
				font-size: 10vh;
				line-height: 100%;
				text-align: center;
			}

			h3 {
				@include font-one;
				color: $yellow-orange;
				font-size: 4.5vh;
				text-shadow: black 3px 3px 1px;
				margin-top: 1vh;

				.h-flip {
					display: inline-block;
					-webkit-transform: scaleX(1);
					transform: scaleX(-1);
				}
			}
		}
	}

	.posts-list-container {
		margin-top: 5vh;
	}
}

@media screen and (min-width: 900px) {
	.user-wall {
		.user-header {
			.user-info {
				margin: 10px 10px 10px 10vw;
			}
		}
	}
}
</style>