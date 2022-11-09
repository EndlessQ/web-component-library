import TopNotification from './TopNotification.vue';

export default {
	title: 'General/TopNotification',
	component: TopNotification,
	parameters: {
		// More on Story layout: https://storybook.js.org/docs/vue/configure/story-layout
		layout: 'fullscreen'
	}
};

const Template = (args) => ({
	// Components used in your story `template` are defined in the `components` object
	components: { TopNotification },
	// The story's `args` need to be mapped into the template through the `setup()` method
	setup () {
		// Story args can be spread into the returned object
		return { ...args };
	},
	// Then, the spread values can be accessed directly in the template
	template: '<TopNotification :color="color" :icon="icon">Welcome to Vircadia!</TopNotification>'
});

export const Variation1 = Template.bind({});
Variation1.args = {
	icon: 'favorite'
};

export const Variation2 = Template.bind({});
Variation2.args = {
	color: '#03f',
	transition: true
};

export const Variation3 = Template.bind({});
Variation3.args = {
	color: '#c53434',
	href: 'https://vircadia.com/',
	transition: true
};
