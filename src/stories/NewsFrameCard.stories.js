import NewsFrameCard from './NewsFrameCard.vue';

export default {
	title: 'General/NewsFrameCard',
	component: NewsFrameCard,
	parameters: {
		layout: 'fullscreen'
	}
};

const Template = (args) => ({
	components: { NewsFrameCard },
	setup () {
		return { ...args };
	},
	template: `
		<NewsFrameCard
			:title="title"
			:subtitle="subtitle"
			:image="image"
			:link="link"
		>
			Esse qui incididunt reprehenderit occaecat nulla adipisicing qui dolor do magna commodo ullamco voluptate pariatur. Ut incididunt voluptate reprehenderit ut non id minim id eiusmod magna dolore.
		</NewsFrameCard>
	`
});

export const Basic = Template.bind({});
Basic.args = {
	title: 'Vircadia',
	subtitle: 'The coolest metaverse platform 😎.',
	image: '',
	link: ''
};

export const WithImageAndLink = Template.bind({});
WithImageAndLink.args = {
	title: 'Raindance',
	subtitle: 'Orbitals are fun.',
	image: 'https://wilderzone.live/assets/images/maps/raindance-1.webp',
	link: 'https://tribes.fandom.com/wiki/Raindance'
};
