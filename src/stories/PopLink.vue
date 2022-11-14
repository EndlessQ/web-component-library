<!--
PopLink.vue

Created by Giga on the 9th of Nov 2022.
Copyright 2022 DigiSomni LLC.
-->

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
	name: 'PopLink',
	props: {
		href: { type: String, required: false },
		title: { type: String, required: false },
		pop: { type: Boolean } // Used as a positive-edge trigger for the "pop" animation.
	},
	emits: ['update:pop']
});
</script>

<template>
	<a
		:href="href"
		target="_blank"
		class="popLink"
		:class="{ pop }"
		@animationend="$emit('update:pop', false)"
	>
		<q-btn
			round
			fab-mini
			color="$color_lightpink"
			icon="launch"
			:title="title"
		/>
	</a>
</template>

<style lang="scss" scoped>
.popLink {
	all: unset;
	position: relative;
	display: flex;
	justify-content: center;
	align-items: center;
	width: min-content;
	height: min-content;
	background-color: $color_lightpink;
	border-radius: 50%;

	&::before {
		content: "";
		position: absolute;
		display: block;
		width: 0%;
		height: 0%;
		background-color: $color_lightpink;
		border-radius: 50%;
		opacity: 0.5;
	}

	&.pop::before {
		animation: popLinkPop $anim_duration_medium linear forwards;
	}
}

@keyframes popLinkPop {
	0%   {
		width: 50%;
		height: 50%;
		opacity: 0.7;
	}
	100% {
		width: 160%;
		height: 160%;
		opacity: 0;
	}
}
</style>
