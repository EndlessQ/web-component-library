<!--
TopNotification.vue
A small notification bar that appears at the top of the webpage.

Created by Giga on the 4th of Nov 2022.
Copyright 2022 DigiSomni LLC.
-->

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
	name: 'TopNotification',
	props: {
		color: { type: String, required: false },
		icon: { type: String, required: false },
		href: { type: String, required: false },
		transition: { type: Boolean }
	}
});
</script>

<template>
	<component
		:is="$props.href ? 'a' : 'div'"
		:href="$props.href"
		class="topNotification"
		:class="{ transition: $props.transition }"
	>
		<div
			class="inner"
			:style="{ backgroundColor: $props.color }"
		>
			<q-icon
				v-if="$props.icon"
				:name="$props.icon"
				color="white"
				size="xs"
			/>
			<p
				class="text-caption q-ma-none"
			>
				<slot></slot>
			</p>
		</div>
	</component>
</template>

<style lang="scss" scoped>
.topNotification {
	all: unset;
	position: fixed;
	z-index: 8;
	top: 5px;
	display: block;
	width: 100%;
	height: 1.75rem;
	box-sizing: border-box;
	padding: 0px 10px;
	color: #fff;
	text-decoration: none;
	text-align: center;

	&.transition {
		transform: translateY(-100%);
		opacity: 0;
		animation: fadeInDown $anim_duration_short ease 1s forwards;

		@keyframes fadeInDown {
			0%   {
				transform: translateY(-100%);
				opacity: 0;
			}
			100% {
				transform: translateY(0%);
				opacity: 1;
			}
		}
	}

	> .inner {
		display: flex;
		flex-flow: row nowrap;
		justify-content: center;
		align-items: center;
		gap: 1.6ch;
		width: 100%;
		height: 100%;
		background-color: $color_primary;
		border-radius: $border_radius_small;
	}
}
</style>
