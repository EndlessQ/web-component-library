<!--
NewsFrameCard.vue

Created by Giga on 14th of Nov 2022.
Copyright 2022 DigiSomni LLC.
-->

<script lang="ts">
import { defineComponent } from 'vue';
import PopLink from './PopLink.vue';
import DefaultImage from '../assets/branding/1920_bar.webp';

export default defineComponent({
	name: 'NewsFrameCard',
	props: {
		title: { type: String, required: true },
		subtitle: { type: String, required: false },
		image: { type: String, required: false },
		link: { type: String, required: false }
	},
	components: {
		PopLink
	},
	data () {
		return {
			DefaultImage,
			linkPop: false
		};
	}
});
</script>

<template>
	<div class="newsFrameCard" @mouseenter="linkPop = true">
		<div class="inner">
			<div class="top">
				<div class="image" :style="{ backgroundImage: `url(${image || DefaultImage})` }" role="img"></div>
				<p>
					<slot>{{ subtitle }}</slot>
				</p>
			</div>
			<div class="bottom">
				<div>
					<h2 :title="title">{{ title }}</h2>
					<p :title="subtitle">{{ subtitle }}</p>
				</div>
				<PopLink
					v-if="link"
					:link="link"
					title="More information"
					v-model:pop="linkPop"
				/>
			</div>
		</div>
	</div>
</template>

<style lang="scss" scoped>
.newsFrameCard {
	position: relative;
	display: flex;
	flex-flow: column nowrap;
	justify-content: center;
	align-items: center;
	width: clamp(250px, 80%, 450px);
	height: 350px;
	margin: 10px;
	padding: 10px;
	border-radius: $border_radius_large;
	transition: $anim_duration_short ease all;

	&::before {
		content: '';
		position: absolute;
		top: 30px;
		left: 30px;
		display: block;
		width: 100%;
		height: 100%;
		background-color: #fff2;
		border-radius: $border_radius_large;
		box-shadow: 2px 4px 10px -7px #0009, 2px 4px 35px -12px #0023;
		transition: inherit;
		pointer-events: none;
	}

	&:hover::before {
		top: 0px;
		left: 0px;
		background-color: white;
	}

	> .inner {
		position: relative;
		display: flex;
		flex-flow: column nowrap;
		justify-content: center;
		align-items: center;
		width: 100%;
		height: 100%;
		transition: inherit;

		> .top {
			position: relative;
			display: flex;
			flex-flow: column nowrap;
			justify-content: center;
			align-items: center;
			width: 100%;
			height: 85%;
			padding: 10px;
			color: white;
			background-color: $color_intermediate;
			border-radius: $border_radius_large;
			box-shadow: 2px 4px 10px -7px #0009, 2px 4px 35px -12px #0023;
			transform: rotateY(0deg);
			transform-origin: 50% 50%;
			transform-style: preserve-3d;
			transition: $anim_duration_short * 2 ease all;

			> .image {
				position: absolute;
				display: block;
				width: 100%;
				height: 100%;
				object-fit: cover;
				background-position: center;
				background-repeat: no-repeat;
				background-size: cover;
				border-radius: inherit;
				transform: translate3d(0px, 0px, 1px);
				transform-origin: 50% 50%;
			}

			p {
				text-align: center;
				transform: translate3d(0px, 0px, -1px) rotateY(180deg);
				transform-origin: 50% 50%;
			}
		}

		> .bottom {
			position: relative;
			display: flex;
			flex-flow: row nowrap;
			justify-content: space-between;
			align-items: center;
			width: 100%;
			padding: 10px;
			padding-left: 0px;
			margin-left: 50px;
			transform: translateY(10px);
			transition: inherit;

			> div {
				display: flex;
				flex-flow: column nowrap;
				justify-content: space-between;
				align-items: flex-start;
				width: 100%;
				padding: 0px 10px;
				overflow: hidden;
			}

			h2 {
				max-width: 100%;
				margin: 0px;
				font-size: 1.5rem;
				font-weight: 500;
				line-height: 2.5rem;
				text-overflow: ellipsis;
				white-space: nowrap;
				overflow: hidden;
			}

			p {
				max-width: 100%;
				margin: 0px;
				text-overflow: ellipsis;
				white-space: nowrap;
				overflow: hidden;
			}
		}
	}

	&:hover > .inner {
		> .top {
			background-image: unset !important;
			border-radius: $border_radius_medium;
			box-shadow: 2px 4px 10px -7px #0000, 2px 4px 35px -12px #0020;
			transform: rotateY(180deg);
		}

		> .bottom {
			margin-left: -10px;
			transform: translateY(0px);
		}
	}
}
</style>
