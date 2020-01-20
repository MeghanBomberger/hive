<template>
	<div>
		<p>User List</p>
	</div>
</template>

<script>
export default {
	name: "UserList",
	created(){
		this.$log.info('fetching users list data')
	}
}
</script>