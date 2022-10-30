<script setup>
defineProps({
  	item: Object
})
</script>

<template>
	<div class="item">
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
.item {
	background: rgba(255, 255, 255, 0.9);
	padding: 10px;
	margin-bottom: 20px;
	border-radius: 5px;;
}
</style>
