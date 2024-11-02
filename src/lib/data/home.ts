import { Platform } from '$lib/types';
import { getSkills } from './skills';

export const title = 'Home';

export const name = 'Nishant';

export const lastName = 'Jha';

export const description =
	`A seasoned full-stack developer with a passion for solving complex
backend problems. With extensive experience in various JavaScript
frameworks and Rust, I excel in creating scalable, efficient, and secure
solutions. As a team lead, I collaborate with clients and partners to
craft practical solutions that blend innovation with excellence`;

export const links: Array<{ platform: Platform; link: string }> = [
	{ platform: Platform.GitHub, link: 'https://github.com/jhaji2911' },
	{
		platform: Platform.Linkedin,
		link: 'https://www.linkedin.com/in/nishant-jha-29112000/'
	},
	{
		platform: Platform.X,
		link: 'https://x.com/nonishantjha/'
	},
	{
		platform: Platform.StackOverflow,
		link: 'https://stackoverflow.com/users/14529843/nishant-jha'
	},
	{
		platform: Platform.Email,
		link: 'jhanishant2000@gmail.com'
	},
	{
		platform: Platform.Youtube,
		link: 'https://www.youtube.com/channel/UCrEfVEpnuhHJWDC2_54jDNg'
	},
];

export const skills = getSkills('js', 'nodejs', 'reactjs','vue', 'sass', 'ts', 'rust', 'svelte');
