<!--
ImageButton.vue

Created by Giga on 10th of Nov 2022.
Copyright 2022 DigiSomni LLC.
-->

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
	name: 'ImageButton',
	props: {
		name: { type: String, required: false },
		href: { type: String, required: false },
		image: { type: String, required: false },
		icon: { type: String, required: false }
	}
});
</script>

<template>
	<component
		:is="href ? 'a' : 'div'"
		:href="href"
		class="imageButton"
	>
		<!-- Prioritise image, fallback to icon. -->
		<img v-if="image" :src="image" draggable="false" width="90" height="90" loading="eager" alt="">
		<q-icon v-else :name="icon" size="90px" />
		<p>{{ name }}</p>
	</component>
</template>

<style lang="scss" scoped>
.imageButton {
	all: unset;
	display: flex;
	flex-flow: column nowrap;
	justify-content: center;
	align-items: center;
	text-align: center;
	padding-top: 0.5rem;
	transform: translateY(0rem);
	transition: $anim_duration_standard ease transform;
	cursor: pointer;

	&:hover {
		transform: translateY(-0.5rem);
	}
}
</style>
