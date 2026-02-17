export const profile = {
	fullName: 'Yuhan Liu',
	title: 'MSc Student',
	institute: 'University of Copenhagen',
	author_name: 'Yuhan Liu', // Author name to be highlighted in the papers section
	description: 'I am currently a master student majoring in Computer Science. My academic interests include LLM agents, Bayesian reasoning, and Human-Computer interaction. My lifelong dream is to create something that contributes positively to making the world a better place.',
	research_areas: [
		// { title: 'Physics', description: 'Brief description of the research interest', field: 'physics' },
		{
			title: 'LLM Agents & Bayesian Reasoning',
			description: 'Use PGM and Bayesian Reasoning to boost LLM agents' reasoning',
			field: 'Computer Science'
		},
		{
			title: 'HCI',
			description: 'Investigate the relationship between human beings and computers',
			field: 'Computer Science & Design'
		}
	],
}

// Set equal to an empty string to hide the icon that you don't want to display
export const social = {
	email: 'wcj883@alumni.ku.dk',
	linkedin: 'https://www.linkedin.com/in/yuhan-liu-10b65a344/',
	x: 'https://x.com/YuhanLiuConnect',
	github: 'https://github.com/yhn-liu',
	gitlab: '',
	scholar: 'https://scholar.google.com/citations?user=YKDrnY0AAAAJ&hl=zh-TW',
	inspire: '',
	arxiv: '',
}

export const template = {
	website_url: 'https://yuhanliu.space', // Astro needs to know your site’s deployed URL to generate a sitemap. It must start with http:// or https://
	menu_left: false,
	transitions: true,
	lightTheme: 'light', // Select one of the Daisy UI Themes or create your own
	darkTheme: 'dark', // Select one of the Daisy UI Themes or create your own
	excerptLength: 200,
	postPerPage: 5,
    base: '' // Repository name starting with /
}

export const seo = {
	default_title: "Yuhan Liu's Homepage",
	default_description: 'Yuhan Liu is an CS Master Student at KU.',
	default_image: '/images/astro-academia.png',
}
