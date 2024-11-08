import Assets from './assets';
import { getSkills } from './skills';
import type { Project } from '../types';

export const items: Array<Project> = [
	{
		slug: 'ai-resume-analyzer',
		color: '#5e95e3',
		description: `Created the app from scratch starting from orchestrating the architecture, frontend and backend, developed APIs to persist generated data. Designed Schema for backend structure. Created a cutting-edge proof of concept using local LLMs with LangChain in Node.js for custom tasks without added costs.`,
		shortDescription: `Cutting-edge proof of concept using local LLMs with LangChain in Node.js for custom tasks.`,
		links: [{ to: 'https://github.com/jhaji2911/AI-resume-analyzer', label: 'GitHub' }],
		logo: Assets.NodeJs,
		name: 'AI Resume Analyzer',
		period: {
			from: new Date(2024, 0), // Start date in 2024
		},
		skills: getSkills('nodejs', 'ts', 'reactjs'),
		type: 'Full stack app'
	},
	{
		slug: 'arthfc-loan-app',
		color: '#8e44ad',
		description: `Created the entire app and website from scratch with React Native and ReactJS, added end-to-end encryption for security, implemented a reusable structure for ad hoc changes, and ensured type-safety in the API layer to handle backend changes seamlessly.`,
		shortDescription: `Complete mobile and web app development with security and flexibility.`,
		links: [],
		logo: Assets.ReactNative,
		name: 'ARTHFC Loan Mobile and Web App',
		period: {
			from: new Date(2023, 0), // Start date in 2023
		},
		skills: getSkills('react-native', 'reactjs', 'zustand', 'react-query'),
		type: 'Mobile and Web App'
	},
	{
		slug: 'bentley-learning-management-system',
		color: '#3498db',
		description: `Developed a robust learning management system for architectural software. Designed custom components, enhanced system resilience with multi-instance software, provided long-term support, and conducted R&D on AI/ML add-ons.`,
		shortDescription: `Learning management system with resilient architecture and AI/ML add-ons.`,
		links: [],
		logo: Assets.Unknown,
		name: 'Bentley Learning Management System',
		period: {
			from: new Date(2021, 0), // Start date in 2021
			to: new Date(2023, 11), // End date in 2023
		},
		skills: getSkills('nextjs', 'react', 'react-native', 'nodejs'),
		type: 'Full stack app'
	},
	{
		slug: 'terril-bridgemarc-healthcare-frontend',
		color: '#e67e22',
		description: `Developed custom components for healthcare, ensured frontend security and compliance, mentored team members, and structured the solution for performance and security.`,
		shortDescription: `Secure frontend solution with a focus on healthcare industry standards.`,
		links: [],
		logo: Assets.ReactJs,
		name: 'Terril Bridgemarc Healthcare Frontend',
		period: {
			from: new Date(2023, 0), // Start date in 2023
		},
		skills: getSkills('nextjs', 'react'),
		type: 'Frontend'
	},
	{
		slug: 'txtsmarter-secure-app',
		color: '#9b59b6',
		description: `Developed an end-to-end encrypted application with transaction safety, resolved critical bugs, collaborated across domains, and built highly scalable frontend and backend microservices.`,
		shortDescription: `End-to-end encrypted, transaction-safe app with a scalable architecture.`,
		links: [],
		logo: Assets.VueJs,
		name: 'txtSmarter Secure Application',
		period: {
			from: new Date(2023, 0), // Start date in 2023
		},
		skills: getSkills('vue', 'nodejs'),
		type: 'Full stack app'
	},
	{
		slug: 'logitech-data-interface',
		color: '#2ecc71',
		description: `Translated complex business requirements, designed interfaces for large data volumes, implemented caching, streamlined processes with stakeholders, and revamped UI and backend for usability.`,
		shortDescription: `Advanced data processing interface with caching and enhanced usability.`,
		links: [],
		logo: Assets.VueJs,
		name: 'Logitech Data Interface',
		period: {
			from: new Date(2023, 0), // Start date in 2023
		},
		skills: getSkills('vue', 'moleculer', 'nodejs'),
		type: 'Full stack app'
	}
];

export const title = 'Projects';