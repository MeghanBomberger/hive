<template>
	<section class="user-list-container">
		<p v-if="usersListErrorMessage">
			{{ usersListErrorMessage }}
		</p>
		<UserCard
			v-for="user in usersList"
			:key="user.id"
			:user="user"
		/>
	</section>
</template>

<script>
import * as axios from 'axios'
import { API } from '../shared/config'
import UserCard from '@/components/user-card'
import ClementinaImg from '../assets/user-images/Clementina.jpeg'
import ClementineImg from '../assets/user-images/Clementine.jpeg'
import ChelseyImg from '../assets/user-images/Chelsey.jpeg'
import ErvinImg from '../assets/user-images/Ervin.jpeg'
import GlennaImg from '../assets/user-images/Glenna.jpeg'
import KurtisImg from '../assets/user-images/Kurtis.jpeg'
import LeanneImg from '../assets/user-images/Leanne.jpeg'
import MrsDennisImg from '../assets/user-images/MrsDennis.jpeg'
import NicholasImg from '../assets/user-images/Nicholas.jpeg'
import PatriciaImg from '../assets/user-images/Patricia.jpeg'

const userImages = [
	LeanneImg,
	ErvinImg,
	ClementineImg,
	PatriciaImg,
	ChelseyImg,
	MrsDennisImg,
	KurtisImg,
	NicholasImg,
	GlennaImg,
	ClementinaImg
]

export default {
	name: "UserList",
	data(){
		return {
			usersListErrorMessage: '',
			usersList: []
		}
	},
	components: {
		UserCard
	},
	created(){
		this.usersListErrorMessage = ''
		this.usersList = []
		this.fetchUserList()
	},
	methods: {
		async fetchUserList(){
			try {
				const response = await axios.get(`${API}/users`)
				if (response.data.length !== 0) {
					const mappedUsers = response.data.map(user => {
						return {
							...user,
							image: userImages[user.id - 1]
						}
					})
					this.usersListErrorMessage = ''
					this.usersList = mappedUsers
				} else {
					this.usersListErrorMessage = 'No users data available'
					this.usersList = []
				}
			} catch (error) {
				this.usersListErrorMessage = error
				this.userList = []
			}
		}
	}
}
</script>

<style lang="scss">
@import '../variables.scss';

.user-list-container {
	@include centered;
	flex-wrap: wrap;
}
</style>