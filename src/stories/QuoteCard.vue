<!--
QuoteCard.vue

Created by Giga on 14th of Nov 2022.
Copyright 2022 DigiSomni LLC.
-->

<script lang="ts">
import { defineComponent } from 'vue';
import { toSvg } from 'jdenticon';

export default defineComponent({
	name: 'QuoteCard',
	props: {
		quote: { type: String, required: true },
		image: { type: String, required: false },
		author: { type: String, required: false, default: 'Anonymous' },
		location: { type: String, required: false }
	},
	computed: {
		identicon () {
			if (this.image) {
				return this.image;
			} else {
				const iconSize = 40;
				return toSvg(this.author, iconSize).replace(` width="${iconSize}" height="${iconSize}"`, ' width="100%" height="100%"');
			}
		}
	}
});
</script>

<template>
	<div class="quoteCard">
		<div class="quoteMarks"></div>
		<div class="inner">
			<p>{{ $props.quote }}</p>
			<div class="bottom">
				<img v-if="image" class="image" :src="image" :alt="author">
				<div v-else class="image" role="img" v-html="identicon"></div>
				<p>{{ $props.author + ($props.location ? `, ${$props.location}` : '') }}</p>
			</div>
		</div>
	</div>
</template>

<style lang="scss" scoped>
.quoteCard {
	position: relative;
	display: flex;
	justify-content: center;
	align-items: center;
	width: clamp(250px, 90%, 500px);
	height: fit-content;
	margin: 25px 15px;
	transition: $anim_duration_short ease all;

	.quoteMarks {
		position: absolute;
		z-index: 1;
		inset: 0px;
		display: block;
		background: url('../assets/icons/quote.svg'), linear-gradient(60deg, $color_primary, $color_secondary);
		border-radius: $border_radius_large;
		transform: rotate(-2deg);
		transform-origin: 50% 50%;
		opacity: 0.4;
		transition: inherit;
		pointer-events: none;

		&::before,
		&::after {
			content: '';
			position: absolute;
			display: block;
			width: 2rem;
			height: 2rem;
			background: url('../assets/icons/quote.svg');
			transform-origin: center;
			filter: invert(1);
		}

		&::before {
			bottom: 1px;
			left: 6px;
			transform: rotateY(180deg);
		}

		&::after {
			top: 1px;
			right: 6px;
		}
	}

	&:hover .quoteMarks {
		box-shadow: 0px 10px 30px -10px #0031;
		transform: rotate(-9deg);
	}

	> .inner {
		position: relative;
		z-index: 2;
		inset: 0px;
		display: flex;
		flex-flow: column nowrap;
		justify-content: center;
		align-items: flex-start;
		gap: 16px;
		padding: 18px 25px 12px 25px;
		background-color: #fff;
		border-radius: $border_radius_large;
		box-shadow: 2px 4px 10px -7px #0009, 2px 4px 35px -12px #0023;

		> p {
			margin: 0px;
			color: black;
			font-size: 0.85rem;
			text-align: start;
		}

		> .bottom {
			display: flex;
			flex-flow: row nowrap;
			justify-content: center;
			align-items: center;
			align-self: flex-end;
			gap: 10px;
			font-size: 0.85rem;
			font-weight: bold;

			> .image {
				width: 2.9em;
				height: 2.9em;
			}

			> p {
				margin: 0px;
			}
		}
	}
}

.quoteCard:hover::after {
	transform: translate(-5px, -10px) rotateY(180deg) rotate(10deg);
}
</style>
