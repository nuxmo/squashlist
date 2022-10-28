<script setup>
import { ref } from 'vue'

import SlHeader from './components/Header.vue'
import SlCategory from './components/Category.vue'

const categories = ref([
	'watch',
	'training',
	'news',
	'reviews',
	'shops',
	'community'
])

</script>

<template>
    <sl-header></sl-header>
    <template
      v-for="category in categories"
    >
		<sl-category
			:category="category"
		/>
    </template>
</template>

<style scoped>

</style>
