<script setup>
import SlItem from './Item.vue'
defineProps({
  	category: Object
})
</script>

<template>
	<div class="item">
		<div>
			<font-awesome-icon :icon="`fa-solid fa-${ category.icon }`" />
			{{ category.cat }}
		</div>
		<sl-item
			v-for="item in category.items"
			:item="item"
		/>
	</div>
</template>

<style scoped lang="scss">
.item {
	max-width: 300px
}
</style>
