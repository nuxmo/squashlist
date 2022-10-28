<script setup>
defineProps({
  	category: String
})
</script>

<template>
	<div>
		{{ category }}
	</div>
</template>

<style scoped lang="scss">
.header {
	display: flex;
	align-items: center;
	justify-content: center;

	.logo {
		margin: 20px;
	}
}
</style>
