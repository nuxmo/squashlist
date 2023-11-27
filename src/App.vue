<script setup>
import { ref, unref, onMounted } from 'vue'

import SlHeader from './components/Header.vue'
import SlFooter from './components/Footer.vue'
import SlCategory from './components/Category.vue'

import { initializeApp } from 'firebase/app'
import { getDatabase, ref as fbRef, set, child, get } from 'firebase/database'
import fbConfig from './configs/firebase.config'

// Firebase
const app = initializeApp(fbConfig)
const db = getDatabase(app)
const dbRef = fbRef(db)

const categories = ref([])
const error = ref('')

const visits =  ref(0)
const token = '*K^3j3YCB80cjijCxNg9JC2AlWyXBZh*zlcbaAilqL2YGx8q9CHcj5dJ$UgFcGooPV*lD5kpkOQswP4zcH$7GB6&ZifR009NFid'

onMounted(() => {
	getData()
	if(import.meta.env.VITE_DEV || document.location.search.includes('no-stats')) return
	updateVisits()
})

const getData = () => {

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

const updateVisits = () => {

	get(child(dbRef, 'visits'))
	.then((snapshot) => {
		if (snapshot.exists()) {
			visits.value = snapshot.val().data
			visits.value++
			setVisits()
		} else {
			console.log("No data available")
		}
	})
	.catch((err) => {
		console.log(err)
	})

}

const setVisits = () => {

	set(
		fbRef(db, `/visits/`),
		{
			data: unref(visits),
			token
		},
		(err) => {
			if(err) {
				console.log(err)
			}
		}
	)
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
    <sl-footer />
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
