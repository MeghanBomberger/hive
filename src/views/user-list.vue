<template>
	<section>
		<p>User List</p>
	</section>
</template>

<script>
export default {
	name: "UserList",
	created(){
		this.$log.info('fetching users list data')
	}
}
</script>