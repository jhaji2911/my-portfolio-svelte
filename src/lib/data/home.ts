import { Platform } from '$lib/types';
import { getSkills } from './skills';

export const title = 'Home';

export const name = 'Nishant';

export const lastName = 'Jha';

export const description = `A skilled full-stack developer focused on complex backend challenges, known for crafting scalable, secure solutions. With expertise in JavaScript frameworks and Rust, they drive innovation and deliver practical, high-quality results through strong client and team collaboration.`;

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

export const skills = getSkills('js', 'nodejs', 'reactjs','vue', 'sass', 'ts', 'rust', 'svelte','react-native');
