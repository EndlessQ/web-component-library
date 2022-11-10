import NewsCard from './NewsCard.vue';

export default {
	title: 'General/NewsCard',
	component: NewsCard,
	parameters: {
		layout: 'fullscreen'
	}
};

const Template = (args) => ({
	components: { NewsCard },
	setup () {
		return { ...args };
	},
	template: `
		<NewsCard
			:title="title"
			:author="author"
			:date="date"
			:image="image"
			:link="link"
		>Ea reprehenderit quis sint aliqua laborum ex laboris aliquip nostrud cillum amet labore occaecat tempor. Esse adipisicing veniam consectetur adipisicing fugiat duis magna elit ullamco eu ipsum.</NewsCard>
	`
});

export const Basic = Template.bind({});
Basic.args = {
	title: 'Vircadia',
	author: '',
	date: '',
	image: '',
	link: ''
};

export const WithAuthorAndDate = Template.bind({});
WithAuthorAndDate.args = {
	title: 'Vircadia',
	author: 'Jane Doe',
	date: '2022-11-09',
	image: '',
	link: ''
};

export const WithImageAndLink = Template.bind({});
WithImageAndLink.args = {
	title: 'Raindance',
	author: 'Giga Byte',
	date: '',
	image: 'https://wilderzone.live/assets/images/maps/raindance-1.webp',
	link: 'https://tribes.fandom.com/wiki/Raindance'
};
