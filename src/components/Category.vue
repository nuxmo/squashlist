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
