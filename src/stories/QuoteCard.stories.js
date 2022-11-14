import QuoteCard from './QuoteCard.vue';

export default {
	title: 'General/QuoteCard',
	component: QuoteCard,
	parameters: {
		layout: 'fullscreen'
	}
};

const Template = (args) => ({
	components: { QuoteCard },
	setup () {
		return { ...args };
	},
	template: `
		<QuoteCard
			:quote="quote"
			:image="image"
			:author="author"
			:location="location"
		/>
	`
});

export const Basic = Template.bind({});
Basic.args = {
	quote: 'Eu enim quis ex id incididunt ipsum. Irure Lorem amet exercitation voluptate nisi consequat. Esse voluptate ullamco laborum consectetur minim enim elit quis consequat fugiat ea. Voluptate do sint irure labore cupidatat culpa labore culpa.',
	image: '',
	author: 'Giga',
	location: 'New Zealand'
};
