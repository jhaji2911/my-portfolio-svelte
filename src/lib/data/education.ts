import Assets from './assets';
import type { Education } from '../types';

export const items: Array<Education> = [
	{
		degree: 'Bachelor degree of Information Technology',
		description: 'BS IT from Mumbai University',
		location: 'India',
		logo: Assets.Unknown,
		name: '',
		organization: 'PCACS',
		period: { from: new Date(2018, 0, 10), to: new Date(2021, 5, 1) },
		shortDescription: '',
		slug: 'education-item',
		subjects: ['C', 'Algorithm', 'Algebra', 'Python', 'C++', 'Java', 'English', 'JS', 'Embedded systems']
	},
];

export const title = 'Education';
