<script setup>
defineProps({
  	item: Object
})

const negPos = Math.random() < 0.5 ? '-' : ''
const css = {
	degrees: `${ negPos }${ Math.random() / 1.5 }deg`,
	position: `${ negPos }${ Math.random() * 3 }px`
}
</script>

<template>
	<a :href="item.url" class="item">
		<p>
			{{ item.name }}
			<font-awesome-icon
				v-if="item.paid"
				icon="fa-solid fa-money-bills"
				class="money-icon"
				title="Paid service"
			/>
		</p>
		<p class="desc">{{ item.desc }}</p>
	</a>
</template>

<style scoped lang="scss">
.item {
	transform: rotate(v-bind('css.degrees'));
	right: v-bind('css.position');
}
</style>
