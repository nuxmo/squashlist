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

<style scoped lang="scss">
.wrapper {
	line-height: 1.5;
}

.container {
	display: flex;
	column-gap: 20px;
	padding: 20px;
    background: url('./bg.jpg') no-repeat;
    background-size: cover;
	overflow: auto;
	max-height: calc(100vh - 80px)
}
</style>
