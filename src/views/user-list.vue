<template>
	<section>
		<p>User List</p>
		<p>MESSAGE:</p>
		<p>{{message}}</p>
		<p>USERS LIST:</p>
		<p>{{usersList}}</p>
	</section>
</template>

<script>
import * as axios from 'axios'
import {API} from '../shared/config'

export default {
	name: "UserList",
	data(){
		return {
			message: '',
			usersList: []
		}
	},
	created(){
		this.$log.info('fetching users list data')
		this.fetchUserList()
	},
	methods: {
		async fetchUserList(){
			try {
				const response = await axios.get(`${API}/users`)
				if (response.data.length !== 0) {
					this.message = ''
					this.usersList = response.data
				} else {
					this.message = 'No users data available'
					this.usersList = []
				}
			} catch (error) {
				this.message = error
				this.userList = []
			}
		}
	}
}
</script>