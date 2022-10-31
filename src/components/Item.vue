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
				class="icon"
				title="Paid service"
			/>
		</p>
		<p class="desc">{{ item.desc }}</p>
	</a>
</template>

<style scoped lang="scss">
.item {
	display: block;
	background: rgba(255, 255, 255, 0.9);
	padding: 10px;
	margin-bottom: 20px;
	border-radius: 5px;
	transform: rotate(v-bind('css.degrees'));
	right: v-bind('css.position');
	position: relative;
	box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.3);
}

p {
	color: #444;
	text-decoration: none;
	margin: 0;

	&:not(.desc) {
		color: rgb(74, 74, 222);
		margin: 0 0 10px 0;
	}
}

a {
	text-decoration: none;
}

.icon {
	float: right;
}

</style>
