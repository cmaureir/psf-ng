import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: '',
			logo : {
				dark: './src/assets/dark-psf-logo.png',
				light: './src/assets/light-psf-logo.png',
				replaceTitle: true,
			},
			customCss: [
				'./src/styles/custom_colors.css',
			],
			social: {
				github: 'https://github.com/withastro/starlight',
				'x.com': 'https://x.com/ThePSF',
				linkedin: 'https://www.linkedin.com/company/thepsf/',
				mastodon: 'https://fosstodon.org/@ThePSF',
				youtube: 'https://www.youtube.com/channel/UCUAVDPguRzqHySnZw64CcOg',
				github: 'https://github.com/psf',
				discord: 'https://discord.com/invite/yr4GUpCdgW',
			},
			sidebar: [
				{
					label: 'The PSF',
					items: [
						{ slug: 'psf/about' },
						{ slug: 'psf/mission' },
						{ slug: 'psf/board' },
						{ slug: 'psf/records/staff' },
						{ slug: 'psf/annual-report' },
						//{ slug: 'psf/annual-report/2022' },
						//{ slug: 'psf/annual-report/2023' },
						//{ slug: 'psf/annual-report/2019' },
						//{ slug: 'psf/annual-report/2020' },
						//{ slug: 'psf/annual-report/2021' },
						//{ slug: 'psf/annual-report/2018' },
						{ slug: 'psf/fiscal-sponsorees' },
						{ slug: 'psf/records' },
						{ slug: 'psf/about/legal-and-policies' },
						{ slug: 'psf/faq' },
					],
				},
				{
					label: 'Sponsorship',
					items : [
						{ slug: 'psf/sponsorship' },
						{ slug: 'psf/sponsors' },
						{ slug: 'sponsors/application' },
					],
				},
				{
					label: 'Membership',
					items : [
						{ slug: 'psf/membership' },
						{ slug: 'psf/membership-faq' },
						{ slug: 'nominations/elections' },
						{ slug: 'psf/fellows-roster' },
					],
				},
				{
					label: 'Donate',
					items : [
						{ slug: 'psf/donations' },
						{ slug: 'psf/membership/supporting' },
						{ slug: 'psf/donations/matching-gifts' },
					],
				},
				{
					label: 'Volunteer',
					items : [
						{ slug: 'psf/volunteer' },
						{ slug: 'psf/workgroups' },
						{ slug: 'psf/volunteer/pycon' },
					],
				},
				{
					label: 'Grants',
					items : [
						{ slug: 'psf/grants' },
						{ slug: 'psf/grants/faq' },
					],
				},
				{
					label: 'News & Community',
					items : [
						{ slug: 'psf/news-and-community' },
						{ slug: 'psf/newsletter' },
						// psf/conduct

					],
				},
			],
		}),
	],
});

						//{ slug: 'psf/diversity' },
						//{ slug: 'psf/videos' },
						//{ slug: 'psf/get-involved' },
						//{ slug: 'psf/trademarks' },
						//{ slug: 'psf/community-stories' },
						//{ slug: 'psf/grants/free-resources' },
						//{ slug: 'psf/trademarks/pycon' },
						//{ slug: 'psf/paymentoptions' },
						//{ slug: 'psf/fellows' },
						//{ slug: 'psf/trademarks-faq' },
						//{ slug: 'psf/bylaws' },
						//{ slug: 'psf/sponsorship-new' },
						//{ slug: 'psf/records/board/minutes' },
						//{ slug: 'psf/records/board/policies/conflict' },
						//{ slug: 'psf/records/board/policies/whistleblower' },
						//{ slug: 'psf/records/board/policies/email' },
						//{ slug: 'psf/records/board/resolutions' },
						//{ slug: 'psf/donations/2021-q4-drive' },
