module.exports = {
	stories: [
		'../src/**/*.stories.mdx',
		'../src/**/*.stories.@(js|jsx|ts|tsx)'
	],
	addons: [
		'@storybook/addon-links',
		'@storybook/addon-essentials',
		'@storybook/addon-interactions',
		{
			name: 'storybook-addon-sass-postcss',
			options: {
				rule: {
					test: /\.(scss|sass)$/i,
				},
				sassLoaderOptions: {
					additionalData: `
						$color_primary: #0C71C3;
						$color_secondary: #8300E9;
						$color_secondary_light: #9271F6;
						$color_intermediate: #4739D6;
						$color_accent: #01BDFF;

						$color_logo_blue: #01BDFF;
						$color_logo_violet: #8C1AFF;

						$color_lightblue: #1776D2;
						$color_darkblue: #001A29;
						$color_lightpink: #DE3985;
						$color_almost_white: #F5F5F5;
						$color_almost_black: #202020;
						$color_glass_white: #FFFFFF20;

						$anim_duration_fast: 0.1s;
						$anim_duration_short: 0.2s;
						$anim_duration_standard: 0.5s;
						$anim_duration_medium: 0.7s;
						$anim_duration_long: 2s;
						$anim_duration_longer: 4.5s;

						$border_radius_tiny: 3px;
						$border_radius_small: 5px;
						$border_radius_medium: 7px;
						$border_radius_large: 12px;
						$border_radius_larger: 20px;
					`
				}
			},
		},
	],
	framework: '@storybook/vue3',
	core: {
		disableTelemetry: true
	}
}
