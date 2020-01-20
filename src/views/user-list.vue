<template>
	<section>
		<UserCard
			v-for="user in usersList"
			:key="user.id"
			:user="user"
		/>
	</section>
</template>

<script>
import * as axios from 'axios'
import {API} from '../shared/config'
import UserCard from '@/components/user-card'

export default {
	name: "UserList",
	data(){
		return {
			message: '',
			usersList: []
		}
	},
	components: {
		UserCard
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