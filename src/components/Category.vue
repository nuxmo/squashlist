<script setup>
import { computed, ref } from 'vue';
import SlItem from './Item.vue'

const props = defineProps({
  	category: Object
})

const sortDown = ref(true)

const sortedItems = computed(() =>{
	return props.category.items.sort((a, b) => {
		if(sortDown.value) {
			return a.name > b.name ? 1 : -1
		} else {
			return a.name < b.name ? 1 : -1
		}
	})
})
</script>

<template>
	<div class="category">
		<h2>
			<font-awesome-icon :icon="`fa-solid fa-${ category.icon }`" class="icon"/>
			<span>{{ category.cat }}</span>
			<button @click="sortDown = !sortDown">
				<font-awesome-icon
					:icon="`fa-solid ${ sortDown ? 'fa-arrow-down-a-z' : 'fa-arrow-up-z-a' }`"
					:title="sortDown ? 'Sort Z to A' : 'Sort A to Z'"
					class="icon"
				/>
			</button>
		</h2>
		<div class="items-wrapper">
			<sl-item
				v-for="item in sortedItems"
				:item="item"
			/>
		</div>
	</div>
</template>
