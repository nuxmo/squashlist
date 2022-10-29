<script setup>
import SlHeader from './components/Header.vue'
import SlCategory from './components/Category.vue'
import categories from './categories'
</script>

<template>
    <sl-header />
    <div class="container">
		<sl-category
			v-for="category in categories"
			:category="category"
		/>
    </div>
</template>

<style scoped>
.container {
	display: flex;
}
</style>
