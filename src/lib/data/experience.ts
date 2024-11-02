import Assets from './assets';
import { getSkills } from './skills';
import { ContractType, type Experience } from '../types';

export const items: Array<Experience> = [
	{
		slug: 'software-developer',
		company: 'Bluebenz Digitization',
		description: 'Crafted solutions and made impact on lives, while still having fun',
		contract: ContractType.FullTime,
		type: 'Software Development',
		location: 'Pune',
		period: { from: new Date('05/01/2021') },
		skills: getSkills('reactjs', 'ts', 'react-native', 'vue', 'nodejs'),
		name: 'Senior Software developer',
		color: 'blue',
		links: [{
			to: 'https://bluebenz.com/',
			label: 'bluebenz',
			newTab: true,
		}],
		logo: Assets.bluebenz,
		shortDescription: 'Crafted solutions and made impact on lives, while still having fun'
	},
	{
		slug: 'open-sourcer',
		company: 'Self-employed',
		description: 'Created some awesome tools and participated in PRs or feature requests',
		contract: ContractType.SelfEmployed,
		type: 'Software Development',
		location: 'Pune & Mumbai',
		period: { from: new Date('10/01/2020') },
		skills: getSkills('ts','svelte', 'rust' ,'nodejs', 'reactjs'),
		name: 'Open Source Developer',
		color: 'red',
		links: [{
				to: 'https://github.com/jhaji2911?tab=repositories',
				label: 'my work(well some of it is 🤥)',
				newTab: true,
			}],
		logo: Assets.Unknown,
		shortDescription: 'Created some awesome tools and participated in PRs or feature requests'
	},
	
];

export const title = 'Experience';
