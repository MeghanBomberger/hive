<template>
	<footer>
		<a href="https://github.com/MeghanBomberger/hive">
			<img
				src="../assets/github-image.svg"
				class="arrow-button"
			/>
		</a>
	</footer>
</template>

<script>
export default {
	name: "Footer"
}
</script>

<style lang="scss">
@import '../variables.scss';

footer {
	display: flex;
	align-items: center;
	justify-content: flex-start;
	width: 96%;
	margin-bottom: 2vh;

	a > img {
		height: 8vh;
		filter: drop-shadow(black 3px 3px 10px);
	}
}
</style>