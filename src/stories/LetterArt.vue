<!--
LetterArt.vue
Code adapted from the "LetterCrap" library to display text made from ASCII art.
https://github.com/nate-parrott/lettercrap

Created by Giga on the 8th of Nov 2022.
Copyright 2022 DigiSomni LLC.
-->

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
	name: 'LetterArt',
	props: {
		text: { type: String, required: false, default: 'hello' },
		words: { type: Array, required: false, default: () => { return [] as string[]; } },
		letters: { type: String, required: false, default: '0101010101' },
		transition: { type: Boolean }
	},
	data () {
		return {
			charWidth: 15,
			charHeight: 20,
			updateInterval: 150,
			likelihoodOfReplacingWord: 0.05,
			likelihoodOfChangingExistingText: 0.1,
			image: {} as HTMLImageElement,
			textContent: ''
		};
	},
	computed: {
		width (): string {
			return `${this.charWidth * this.$props.text.length}ch`;
		},
		height (): string {
			return `${this.charWidth * this.$props.text.length}ch`;
		}
	},
	methods: {
		initImage () {
			this.image = new Image();
			this.image.onload = () => this.render(null);
			this.image.src = this.createImageURL();
			console.log('imageURL:', this.image.src);
			this.image.crossOrigin = 'anonymous';
		},
		randomChoice (x: string | string[]): string {
			return x[Math.floor(Math.random() * x.length)];
		},
		createImageURL () {
			const canvas = document.createElement('canvas');
			const context = canvas.getContext('2d') as CanvasRenderingContext2D;
			const fontSize = 20;
			context.font = `${fontSize}px monospace`; // The font size needs to be set before...
			canvas.width = context.measureText(this.$props.text).width + 2;
			canvas.height = fontSize + 4;
			console.log(canvas.width, canvas.height);
			context.font = `${fontSize}px monospace`; // ...and after setting the canvas width & height.
			context.fillText(this.$props.text, 1, fontSize - 2);
			return canvas.toDataURL();
		},
		getTextContentWithImageAtSize (existingText: string, words: string[], letters: string) {
			existingText = existingText ? existingText.replace(/\r?\n|\r/g, '') : '';
			const shouldReplaceExisting = () => !existingText || Math.random() < this.likelihoodOfChangingExistingText;

			const canvas = document.createElement('canvas');
			const context = canvas.getContext('2d') as CanvasRenderingContext2D;
			canvas.width = Math.floor(this.charWidth * this.$props.text.length);
			canvas.height = Math.floor(this.charHeight);
			context.drawImage(this.image, 0, 0, canvas.width, canvas.height);
			const data = context.getImageData(0, 0, canvas.width, canvas.height);
			let chars = '';
			let startOfFilledInSequence = 0 as number | null;
			let i = 0;
			for (let y = 0; y < data.height; y++) {
				for (let x = 0; x < data.width; x++) {
					const black = data.data[i * 4] < 120;
					const transparent = data.data[i * 4 + 3] < 50;
					if (black && !transparent) {
						if (startOfFilledInSequence === null) startOfFilledInSequence = i;
						chars += shouldReplaceExisting() ? this.randomChoice(letters) : existingText[i];

						if (words.length > 0 && Math.random() < this.likelihoodOfReplacingWord && shouldReplaceExisting()) {
							const word = this.randomChoice(words);
							if (i + 1 - startOfFilledInSequence >= word.length) {
								chars = chars.substring(0, chars.length - word.length) + word;
							}
						}
					} else {
						chars += ' ';
						startOfFilledInSequence = null;
					}
					i++;
				}
				chars += '\n';
				startOfFilledInSequence = null;
			}
			return chars;
		},
		render (prev: string | null) {
			const textCondition = prev && true; // Is the text still the same size.
			const text = this.getTextContentWithImageAtSize(
				textCondition ? prev : '',
				this.$props.words as string[],
				this.$props.letters
			);

			this.textContent = text;
			window.setTimeout(() => {
				this.render(text);
			}, this.updateInterval);
		}
	},
	mounted () {
		this.initImage();
	}
});
</script>

<template>
	<div
		class="letterArt"
		:style="{ width }"
	>{{ textContent }}</div>
</template>

<style lang="scss" scoped>
.letterArt {
	display: block;
	width: 100%;
	box-sizing: border-box;
	padding: 0;
	color: inherit;
	font-family: monospace;
	font-size: 10px;
	line-height: 10px;
	white-space: pre;
	overflow: hidden;
}
</style>
