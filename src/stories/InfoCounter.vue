<!--
InfoCounter.vue

Created by Giga on 10th of Nov 2022.
Copyright 2022 DigiSomni LLC.
-->

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
	name: 'InfoCounter',
	props: {
		name: { type: String, required: false },
		duration: { type: Number, required: false, default: 3 },
		start: { type: Number, required: true },
		end: { type: Number, required: true },
		prefix: { type: String, required: false },
		suffix: { type: String, required: false }
	},
	data () {
		return {
			intervalIDs: [] as number[],
			count: this.start
		};
	},
	methods: {
		clearIntervals (): void {
			this.intervalIDs.forEach((id) => {
				window.clearInterval(id);
			});
		}
	},
	mounted () {
		new IntersectionObserver((entries) => {
			entries.forEach((entry) => {
				// If the counter element is visible in the viewport, start counting.
				if (entry.isIntersecting) {
					let time = 0;
					this.intervalIDs.push(window.setInterval(() => {
						time += 25;
						const timeEnd = this.duration * 1000; // Duration in seconds.
						if (time >= timeEnd) {
							this.clearIntervals();
						}
						// Map the counter range to the time range.
						this.count = Math.ceil(time / timeEnd * (this.end - this.start) + this.start);
					}, 25));
				} else { // Reset the counter.
					this.clearIntervals();
					this.count = this.start;
				}
			});
		}).observe(this.$refs.counterElement as HTMLDivElement);
	}
});
</script>

<template>
	<div class="infoCounter" ref="counterElement">
		<p>{{ prefix }}{{ count }}{{ suffix }}</p>
		<p>{{ name }}</p>
	</div>
</template>

<style lang="scss" scoped>
.infoCounter {
	position: relative;
	display: flex;
	flex-flow: column nowrap;
	justify-content: center;
	align-items: center;
	padding: 10px;
	font-size: 1rem;

	> p {
		margin: 0px;
		text-align: center;

		&:nth-child(1) {
			font-size: 2.6em;
		}
	}
}
</style>
