<script setup>
import SlItem from './Item.vue'
defineProps({
  	category: Object
})
</script>

<template>
	<div class="category">
		<h2>
			<font-awesome-icon :icon="`fa-solid fa-${ category.icon }`" />
			{{ category.cat }}
		</h2>
		<div class="items-wrapper">
			<sl-item
				v-for="item in category.items"
				:item="item"
			/>
		</div>
	</div>
</template>

<style scoped lang="scss">
h2 {
	font-size: 0.9rem;
	text-align: center;
	text-transform: capitalize;
	color: white;
	background: #444;
	margin: 0 20px 0 0;
	border-radius: 5px 5px 0 0;
	padding: 10px 15px;
}

.items-wrapper {
	width: 300px;
	margin-right: 20px;
	background: rgba(255, 255, 255, 0.5);
	padding: 20px 20px 0;
	border-radius: 0 0 0 30px;
	max-height: calc(100% - 50px);
    overflow: auto;
}
</style>
