import LetterArt from './LetterArt.vue';

export default {
	title: 'General/LetterArt',
	component: LetterArt,
	parameters: {
		layout: 'fullscreen'
	}
};

const Template = (args) => ({
	components: { LetterArt },
	setup () {
		return { ...args };
	},
	template: `
		<LetterArt
			:text="text"
			:image="image"
			:words="words"
			:letters="letters"
			:transition="transition"
		/>
	`
});

const TemplateGradient = (args) => ({
	components: { LetterArt },
	setup () {
		return { ...args };
	},
	template: `
		<LetterArt
			:text="text"
			:image="image"
			:words="words"
			:letters="letters"
			:transition="transition"
			style="
				color: #0000;
				background-image: linear-gradient(90deg, #0c71c3, #8300e9, #0c71c3);
				background-size: 200% 100%;
				-webkit-background-clip: text;
				background-clip: text;
			"
		/>
	`
});

export const Vircadia = TemplateGradient.bind({});
Vircadia.args = {
	text: 'Vircadia',
	words: ['vircadia'],
	transition: true
};

export const Error404 = Template.bind({});
Error404.args = {
	text: '404',
	words: ['vircadia'],
	letters: '0404040404',
	transition: false
};

export const LogoImage = Template.bind({});
LogoImage.args = {
	image: 'https://fonts.gstatic.com/s/i/short-term/release/materialsymbolsoutlined/favorite/default/48px.svg',
	words: ['vircadia'],
	letters: '0404040404',
	transition: false
};
