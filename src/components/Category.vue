<script setup>
import SlItem from './Item.vue'
defineProps({
  	category: Object
})
</script>

<template>
	<div class="category">
		<h2>
			<font-awesome-icon :icon="`fa-solid fa-${ category.icon }`" class="icon"/>{{ category.cat }}
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
	font-size: 1.2rem;
	text-transform: capitalize;
	color: white;
	background: #444;
	margin: 0;
	border-radius: 5px 5px 0 0;
	padding: 10px 20px;

	.icon {
		margin-right: 5px;
	}
}

.items-wrapper {
	width: 300px;
	background: rgba(188, 188, 188, .98);
	padding: 20px 20px 0 20px;
	border-radius: 0 0 5px 5px;
	max-height: calc(100% - 50px);
    overflow: auto;
}
</style>
