import ImageButton from './ImageButton.vue';

export default {
	title: 'General/ImageButton',
	component: ImageButton,
	parameters: {
		layout: 'fullscreen'
	}
};

const Template = (args) => ({
	components: { ImageButton },
	setup () {
		return { ...args };
	},
	template: `
		<ImageButton
			:name="name"
			:href="href"
			:image="image"
			:icon="icon"
			:prefix="prefix"
			:suffix="suffix"
		/>
	`
});

export const VircadiaLink = Template.bind({});
VircadiaLink.args = {
	name: 'Vircadia',
	href: 'https://vircadia.com/',
	image: 'https://vircadia.com/img/vircadia-icon.cb324bfd.svg',
	icon: ''
};

export const WindowsButton = Template.bind({});
WindowsButton.args = {
	name: 'Windows',
	href: '',
	image: 'https://vircadia.com/img/windows_logo.185bdec9.svg',
	icon: ''
};

export const IconLink = Template.bind({});
IconLink.args = {
	name: 'Material Icons',
	href: 'https://fonts.google.com/icons?icon.set=Material+Icons',
	image: '',
	icon: 'favorite'
};
