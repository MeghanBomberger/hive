<template>
	<section class="user-card" key="clonedUser.id">
		<div
			class="user-image-shadow"
			@mouseover="hover = true"
			@mouseleave="hover = false"
		>
			<div class="user-image-border">
				<div
					class="user-image"
					:style="{backgroundImage: `url('${clonedUser.image}')`}"
				>
					<p v-show="hover">
						{{ clonedUser.username }}
					</p>
				</div>
			</div>
		</div>
	</section>
</template>

<script>
import * as axios from 'axios'
import {API} from '../shared/config'

export default {
	name: "UserCard",
	props: {
		user: {
			type: Object,
			default: () => {}
		}
	},
	data(){
		return {
			clonedUser: { ...this.user },
			postsListErrorMessage: '',
			postsList: [],
			hover: false
		}
	},
	created () {
		this.postsListErrorMessage = ''
		this.postsList = []
		this.fetchPostsList(this.clonedUser.id)
	},
	methods: {
		async fetchPostsList (id) {
			try {
				const response = await axios.get(`${API}/users/${id}/posts`)
				if (response.data.length !== 0) {
					this.postsListErrorMessage = ''
					this.postsList = response.data
				} else {
					this.postsListErrorMessage = 'This user has no posts'
					this.postsList = []
				}
			} catch (error) {
				this.postsListErrorMessage = error
				this.postsList = []
			}
		}
	}
}
</script>

<style lang="scss">
@import '../variables.scss';

.user-image-shadow {
	grid-column: span 2;
	width: calc(40vh);
	margin: 10px 0 10px 0;
	filter: drop-shadow($satin-gold 4px 4px 1px)
					drop-shadow(rgba(0, 0, 0, 0.75) 10px 10px 10px);
	
	.user-image-border {
		@include centered;
		@include hexagon;
		height: 40vh;
		width: calc(36.6vh);
		background-color: $yellow-orange;
		
		.user-image {
			@include hexagon;
			@include centered;
			height: 35vh;
			width: calc(32vh);
			background-size: cover;

			p {
				@include font-one;
				margin-top: 12vh;
				font-size: 4vh;
				color: white;
				filter: drop-shadow(black 4px 4px 0)
								drop-shadow($yellow-orange 1px 1px 0)
								drop-shadow(black 1px 1px 0)
								drop-shadow($yellow-orange 1px 1px 0)
								drop-shadow(black -1px -1px 0)
								drop-shadow($yellow-orange -1px -1px 0);
			}
		}
	}
}



</style>
