<template>
	<section
		class="user-card"
		key="clonedUser.id"
	>
		<div
			v-bind:class="{wall: clonedIsWall, 'user-image-shadow' : 'user-image-shadow'}"
			@mouseover="hover = true"
			@mouseleave="hover = false"
		>
			<div class="user-image-border">
				<div
					class='user-image'
					:style="{backgroundImage: `url('${clonedUser.image}')`}"
				>
					<p
						v-if="!isWall"
						v-show="hover"
					>
						{{ clonedUser.username }}
					</p>
				</div>
			</div>
		</div>
	</section>
</template>

<script>
export default {
	name: "UserCard",
	props: {
		user: {
			type: Object,
			default: () => {}
		},
		isWall: {
			type: Boolean,
			default: false
		}
	},
	data(){
		return {
			clonedUser: { ...this.user },
			hover: false,
			clonedIsWall: this.isWall
		}
	}
}
</script>

<style lang="scss">
@import '../variables.scss';

.user-image-shadow {
	@include centered;
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
				@include bee-font-style;
				margin-top: 12vh;
				font-size: 4vh;
			}
		}
	}
}

.user-image-shadow.wall {
	width: calc(60vh);

	.user-image-border {
		height: 60vh;
		width: calc(54.9vh);

		.user-image {
			height: 52.5vh;
			width: calc(48vh);
		}
	}
}
</style>
