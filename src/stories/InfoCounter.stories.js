import InfoCounter from './InfoCounter.vue';

export default {
	title: 'General/InfoCounter',
	component: InfoCounter,
	parameters: {
		layout: 'fullscreen'
	}
};

const Template = (args) => ({
	components: { InfoCounter },
	setup () {
		return { ...args };
	},
	template: `
		<InfoCounter
			:name="name"
			:duration="duration"
			:start="start"
			:end="end"
			:prefix="prefix"
			:suffix="suffix"
		/>
	`
});

export const Earnings = Template.bind({});
Earnings.args = {
	name: 'Earnings',
	duration: 1,
	start: 0,
	end: 50,
	prefix: '$',
	suffix: ''
};

export const Players = Template.bind({});
Players.args = {
	name: 'Players',
	duration: 2,
	start: 0,
	end: 400,
	prefix: '',
	suffix: '+'
};
