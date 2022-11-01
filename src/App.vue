<script setup>
import SlHeader from './components/Header.vue'
import SlCategory from './components/Category.vue'
import categories from './categories'
</script>

<template>
    <sl-header />
	<div class="wrapper">
		<main class="container" id="main">
			<sl-category
				v-for="category in categories"
				:category="category"
			/>
		</main>	
	</div>
</template>
