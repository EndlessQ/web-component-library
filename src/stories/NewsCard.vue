<!--
NewsCard.vue

Created by Giga on the 9th of Nov 2022.
Copyright 2022 DigiSomni LLC.
-->

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
	name: 'NewsCard',
	props: {
		title: String,
		author: String,
		date: String,
		image: String,
		link: String
	}
});
</script>

<template>
	<div class="newsCard">
		<div class="inner">
			<div class="image">
				<img v-if="image" :src="image" draggable="false" loading="lazy" alt="">
			</div>
			<div class="content">
				<h3>{{ title }}</h3>
				<p>
					<time :datetime="date" style="margin: 0px;font-size: 0.9em;">{{ date }}</time>
					<span v-if="date && author"> • </span>
					<span>{{ author }}</span>
				</p>
				<p>
					<slot></slot>
				</p>
				<a
					v-if="link"
					:href="link"
					target="_blank"
					class="link"
				>
					<q-btn
						round
						fab-mini
						color="$color_lightpink"
						icon="launch"
						title="More information"
					/>
				</a>
			</div>
		</div>
	</div>
</template>

<style lang="scss" scoped>
.newsCard {
	display: flex;
	flex-direction: row;
	justify-content: center;
	align-items: center;
	width: clamp(200px, 100%, 650px);
	padding: 10px 40px 0px 10px;
	transition: $anim_duration_short ease all;

	> .inner {
		position: relative;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		width: 100%;
		transition: inherit;

		&::before {
			content: "";
			position: absolute;
			z-index: 0;
			top: 30px;
			left: 30px;
			display: block;
			width: 100%;
			height: 100%;
			background-color: #FFFFFF10;
			border-radius: $border_radius_large;
			box-shadow: 0px 10px 30px -10px #0031;
			transition: inherit;
			pointer-events: none;
		}

		> .image {
			z-index: 1;
			display: block;
			align-self: flex-start;
			width: max(270px, calc(100% - 100px));
			height: 250px;
			background: linear-gradient(90deg, $color_primary, $color_secondary);
			border-radius: $border_radius_large;
			box-shadow: 2px 4px 10px -7px #0009, 2px 4px 35px -12px #0023;
			transition: inherit;

			img {
				width: 100%;
				height: 100%;
				object-fit: cover;
				border-radius: inherit;
			}
		}

		> .content {
			position: relative;
			z-index: 2;
			display: flex;
			flex-direction: column;
			justify-content: flex-start;
			align-items: flex-start;
			align-self: flex-end;
			width: max(290px, 80%);
			min-height: 12rem;
			margin-top: -150px;
			margin-left: auto;
			padding: 15px 20px 25px 25px;
			text-align: left;
			background-color: white;
			border-radius: $border_radius_large;
			box-shadow: 2px 4px 10px -7px #0002, 2px 4px 35px -12px #0023;
			transition: inherit;

			> h3 {
				width: 100%;
				margin: unset;
				text-overflow: ellipsis;
				white-space: nowrap;
				overflow: hidden;
			}

			> p {
				margin-bottom: 0px;
			}

			> .link {
				all: unset;
				position: absolute;
				z-index: 2;
				top: -20px;
				right: 20px;
				display: flex;
				justify-content: center;
				align-items: center;
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
			}
		}
	}

	&:hover {
		> .inner::before {
			top: 7px;
			left: 7px;
			background-color: #FFFFFF30;
		}

		> .inner > .content {
			transform: translate(7px, 15px);

			> .link::before {
				animation: newsCardLinkPop $anim_duration_medium linear forwards;
			}
		}
	}
}
@keyframes newsCardLinkPop {
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
