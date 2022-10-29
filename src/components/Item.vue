<script setup>
defineProps({
  	item: Object
})
</script>

<template>
	<div>
		<a :href="item.url">
			{{ item.name }}
		</a>
		<p>{{ item.desc }}</p>
		<font-awesome-icon
			v-if="item.paid"
			icon="fa-solid fa-money-bill-wave"
		/>
	</div>
</template>

<style scoped lang="scss">

</style>
