<script setup>
import { ref } from 'vue'

const form = ref({
	name: '',
	url: '',
	desc: ''
})

const modal = ref({
	active: false
})

</script>

<template>
	<div class="header">
		<div class="skip">
			<a class="sr-only sr-only-focusable" href="#main">
				Skip to content
			</a>
		</div>
		<div class="logo-wrapper">
			<img src="/sl-logo.svg" class="logo" alt="Squashlist logo" />
		</div>
		<div class="suggest">
			<button @click="modal.active = true">
				<span class="tooltip">Suggest item</span>
				<font-awesome-icon
					icon="fa-solid fa-circle-plus"
					class="icon"
				/>
			</button>
			<Teleport to="body">
				<template v-if="modal.active">
					<div
						class="modal-bg"
						@click="modal.active = false"
					>
					</div>

					<div class="modal">
						<h2 class="modal-title">
							<font-awesome-icon :icon="`fa-solid fa-circle-plus`" class="icon"/>Suggest an item for Squash List</h2>
						<form @submit.prevent="submitItem">
							<label>
								<span>Name <span class="required">*</span></span>
								<input
									v-model="form.name"
									type="text"
									name="name"
									required
								>
							</label>
							<label>
								<span>URL <span class="required">*</span></span>
								<input
									v-model="form.url"
									type="url"
									name="url"
									required
								>
							</label>
							<label>
								<span>Description</span>
								<input
									v-model="form.desc"
									type="text"
									name="desc"
								>
							</label>
						</form>
					</div>
				</template>
			</Teleport>
		</div>
	</div>
	<h1 class="sr-only">Squash sites, apps, &amp; resources</h1>
</template>

<style scoped lang="scss">
.header {
	height: 60px;
	display: flex;
	align-items: center;
	justify-content: center;
	background: white;

	.logo-wrapper {
		flex-grow: 1;
		display: flex;
		justify-content: center;
	}

	.logo {
		margin: 20px 0 8px;
	}
	
	.skip, .suggest {
		flex-basis: 50px;
	}

	.suggest {
		display: flex;
		justify-content: center;
		align-items: center;
		
		button {
			background: none;
			padding: 0;
			margin: 0;
			border: 0;
			cursor: pointer;
			position: relative;

			.tooltip {
				transition: opacity 0.3s;
				opacity: 0;
				position: absolute;
				right: 3px;
				top: -3px;
				white-space: nowrap;
				padding: 5px 24px 6px 5px;
				border-radius: 3px;
			}

			.icon {
				font-size: 1.2rem;
				position: relative;
				z-index: 2;
			}

			&:focus,
			&:active,
			&:hover {
				.tooltip {
					opacity: 1;
				}
			}
		}
	}

	.skip {
		position: relative;
		a {
			position: absolute;
			top: 10px;
			left: 10px;
		}
	}
}

.modal-bg {
	background: rgba(0, 0, 0, 0.8);
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	display: flex;
    align-items: center;
    justify-items: center;
}

.modal {
	background: white;
    width: 500px;
    height: 300px;
    margin: 0 auto;
    border-radius: 5px;
	overflow: hidden;
}

.modal-title {
	margin: 0;
    padding: 10px 20px;
    background: #444;
    color: white;
	font-size: 1.2rem;

	.icon {
		margin-right: 5px;
	}
}

.required {
	color: #fc4040
}
</style>
