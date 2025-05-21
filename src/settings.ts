export const profile = {
	fullName: 'Yuhan Liu',
	title: 'UG Student',
	institute: 'Southern University of Science and Technology',
	author_name: 'Yuhan Liu', // Author name to be highlighted in the papers section
	description: 'I am currently a senior student majoring in Computer Science and Engineering. My academic interests include Human-Computer Interaction and Computational Creativity. Additionally, music is a passion of mine, particularly songwriting and playing the electric guitar. My lifelong dream is to create something that contributes positively to making the world a better place.',
	research_areas: [
		// { title: 'Physics', description: 'Brief description of the research interest', field: 'physics' },
		{
			title: 'HCI',
			description: 'Investigate the relationship between human beings and computers',
			field: 'Computer Science & Design'
		},
		{
			title: 'AI Ethics',
			description: 'Study the ethical implications and responsible development of AI',
			field: 'Computer Science'
		}
	],
}

// Set equal to an empty string to hide the icon that you don't want to display
export const social = {
	email: '12111811@mail.sustech.edu.cn',
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
	default_description: 'Yuhan Liu is an undergraduate CS Student at SUSTech.',
	default_image: '/images/astro-academia.png',
}
