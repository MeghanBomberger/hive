<template>
	<figure class="user-card" key="clonedUser.id">
		<p>{{ clonedUser.name }}</p>
	</figure>
</template>

<script>
export default {
	name: "UserCard",
	props: {
		user: {
			type: Object,
			default: () => {}
		}
	},
	data () {
		return {
			clonedUser: { ...this.user }
		}
	}
}
</script>