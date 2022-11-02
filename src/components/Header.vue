<script setup>
import { nextTick, ref, unref, watch, onMounted } from 'vue'
import { initializeApp } from 'firebase/app'
import { getDatabase, ref as fbRef, set } from 'firebase/database'

// Suggestion form
const formWrapper = ref(null)
const formOpen = ref(false)
const form = ref({
	name: '',
	url: '',
	desc: ''
})
const nameInput = ref(null)
const btnDisabled = ref(true)
const apiError = ref(false)
const submitSuccess = ref(false)

const showForm = () => {
	formOpen.value = true
	form.value = {
		name: '',
		url: '',
		desc: ''
	}
	btnDisabled.value = true
	apiError.value = false
	submitSuccess.value = false
}

watch(
	formOpen,
	formOpen => {
		if(formOpen) {
			nextTick(() => nameInput.value.focus())
		}
	}
)

watch(
	form,
	form => {
		if(form.name && form.url) {
			btnDisabled.value = false
		} else {
			btnDisabled.value = true
		}
	},
	{
		deep: true
	}
)

// Firebase
const fbConfig = {
	apiKey: "AIzaSyAafPKtLoc5BfiqN-j9AGJLlkIcEbJE3rw",
	authDomain: "squash-list.firebaseapp.com",
	databaseURL: "https://squash-list-default-rtdb.firebaseio.com",
	projectId: "squash-list",
	storageBucket: "squash-list.appspot.com",
	messagingSenderId: "537914321064",
	appId: "1:537914321064:web:6df5523c5fc9d1c9b83a9d"
}
const app = initializeApp(fbConfig)
const db = getDatabase(app)

const submitSuggestion = () => {
	
	btnDisabled.value = true

	set(
		fbRef(db, `/suggest/item-${ Math.floor(Date.now() * Math.random()) }`),
		unref(form),
		(error) => {
			if(error) {
				apiError = true
			} else {
				submitSuccess = true
			}
		}
	)
	.then(() => submitSuccess.value = true)
	.catch(() => apiError.value = true)
}

onMounted(() => {
	// Detect touch events to close the off-canvas form
	let touchstartX = 0
	let touchendX = 0

	const handleSwipe = () => {
		// Swiped right
		if(touchendX > (touchstartX + 100)) formOpen.value = false
	}

	formWrapper.value.addEventListener('touchstart', e => {
		touchstartX = e.changedTouches[0].screenX
	})

	formWrapper.value.addEventListener('touchend', e => {
		touchendX = e.changedTouches[0].screenX
		handleSwipe()
	})

	// Add event listener to handle pressing escape key to close the form
	document.addEventListener('keydown', (e) => {

		if(e.code === 'Escape') {
			formOpen.value = false
		}

	})
})

</script>

<template>
	<header class="header">
		<div class="skip">
			<a class="sr-only sr-only-focusable" href="#main">
				Skip to content
			</a>
		</div>
		<div class="logo-wrapper">
			<img src="/sl-logo.svg"
				class="logo"
				alt="Squashlist logo"
				width="172"
				height="24"
			/>
		</div>
		<div class="suggest">
			<button @click="showForm">
				<span class="tooltip">Suggest item</span>
				<font-awesome-icon
					icon="fa-solid fa-circle-plus"
					class="icon"
				/>
			</button>
			<div>
				<div
					v-if="formOpen"
					class="form-bg"
					@click="formOpen = false"
				>
				</div>

				<div
					:class="[
						'form',
						{ open: formOpen }
					]"
					ref="formWrapper"
				>
					<h2 class="form-title">
						<span>Suggest item</span>
						<button
							class="close-icon"
							@click="formOpen = false"
						>
							<font-awesome-icon
								icon="fa-solid fa-xmark"
							/>
							<span class="sr-only">Close</span>
						</button>
					</h2>

					<div v-if="apiError" class="error">
						<font-awesome-icon
							icon="fa-solid fa-face-frown"
							class="icon"
						/>
						<div>Unable to submit</div>
					</div>

					<div v-else-if="submitSuccess" class="success">
						<font-awesome-icon
							icon="fa-solid fa-face-smile"
							class="icon"
						/>
						<div>Thanks for making a suggestion!</div>
					</div>

					<template v-else>
						<p>Suggest an item to be included in the Squash List</p>
						<form @submit.prevent="submitSuggestion">
							<label>
								<span>Name <span class="required">*</span></span>
								<input
									v-model="form.name"
									type="text"
									name="name"
									required
									ref="nameInput"
								>
							</label>
							<label>
								<span>URL <span class="required">*</span></span>
								<input
									v-model="form.url"
									type="text"
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
							<button
								type="submit"
								:disabled="btnDisabled"
							>
								Submit
							</button>
						</form>

					</template>
				</div>
			</div>
		</div>
		<h1 class="sr-only">Squash sites, apps, &amp; resources</h1>
	</header>
</template>