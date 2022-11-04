<script setup>
import { ref, onMounted } from 'vue'

import SlHeader from './components/Header.vue'
import SlCategory from './components/Category.vue'

import { initializeApp } from 'firebase/app'
import { getDatabase, ref as fbRef, child, get } from 'firebase/database'
import fbConfig from './configs/firebase.config'

// Firebase
const app = initializeApp(fbConfig)
const db = getDatabase(app)

const categories = ref([])
const error = ref('')

onMounted(() => {
	getData()
})

const getData = () => {

	const dbRef = fbRef(db)

	get(child(dbRef, 'categories'))
	.then((snapshot) => {
		if (snapshot.exists()) {
			categories.value = snapshot.val().data
		} else {
			console.log("No data available")
		}
	})
	.catch((err) => {
		error.value = err
	})

}

</script>

<template>
    <sl-header />
	<div class="wrapper">
		<main class="container" id="main">
			<div class="loading" v-if="!categories.length">
				<img src="/icon.svg" alt="loading icon" width="40">
				<span class="sr-only">Loading lists...</span>
			</div>
			<div v-if="error" class="error">
				{{ error }}
			</div>
			<template v-else>
				<sl-category
					v-for="category in categories"
					:category="category"
				/>
			</template>
		</main>	
	</div>
</template>

<style lang="scss">
@keyframes rotateloader {
	from {
		transform: rotate(0deg);
	}

	to {
		transform: rotate(359deg);
	}
}

.loading,
.error {
	margin-top: 150px;
    text-align: center;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
}

.loading {
	img {
		animation: rotateloader 1.5s infinite linear;
	}
}

</style>