import PopLink from './PopLink.vue';

export default {
	title: 'General/PopLink',
	component: PopLink,
	parameters: {
		layout: 'fullscreen'
	}
};

const Template = (args) => ({
	components: { PopLink },
	setup () {
		return { ...args };
	},
	template: `
		<PopLink
			:link="link"
			:title="title"
			v-model:pop="pop"

			:style="{
				margin: '30px'
			}"
		/>
	`
});

export const Basic = Template.bind({});
Basic.args = {
	link: '',
	title: 'Vircadia',
	pop: false
};
