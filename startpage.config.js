const defaultConfig = {
	username: "hooxoo",
	theme: {
		backgroundColor: "#161616",
		windowColor: "#161616",
		glowColor: "#3d46687d",
		white: "#f2f4f8",
		gray: "#525252",
		black: "#262626",
		red: "#ee5396",
		green: "#a7c080",
		yellow: "#dbbc7f",
		blue: "#7fbbb3",
		cyan: "#83c092",
		magenta: "#ff7eb6",
		violet: "#be95ff",
		orange: "#e69875"
	},
	wallpaper: {
		url: "",
		easing: "ease-in-out",
		fadeIn: true,
		blur: true
	},
	terminal: {
		fixedHeight: true,
		windowGlow: false,
		textGlow: false
	},
	prompt: {
		ctrlC: true,
		placeholder: "command...",
		placeholderColor: "gray",
		userColor: "gray",
		atColor: "white",
		hostColor: "gray",
		promptColor: "red",
		promptSymbol: "❯",
		caretColor: "white",
		selectionBg: "red",
		selectionFg: "black"
	},
	fetch: {
		timeFormat: "HH:mm",
		dateFormat: "DD/MM/YYYY",
		titleColor: "yellow",
		image: "icon.svg",
		data: [
			"Time: {time}",
			"Date: {date}",
			"{seperator}",
			"OS: {osName} {osVersion}",
			"Browser: {browser} {browserVersion}",
			"Engine: {engineName}",
			"{seperator}",
			"{colors}"
		]
	},
	urlLaunch: {
		target: "_self",
		defaultColor: "gray",
		hoverColor: "red"
	},
	search: {
		default: "https://google.com/search?q=",
		target: "_self",
		shortcutRegex: "([A-Za-z0-9]+) (.*)",
		shortcuts: [
			{
				alias: "g",
				name: "Google Search",
				url: "https://google.com/search?q={}"
			},
			{
				alias: "n",
				name: "Naver Search",
				url: "https://search.naver.com/search.naver?where=nexearch&sm=top_hty&fbm=0&ie=utf8&query={}"
			}
		]
	},
	sections: {
		list: [
			{
				title: "Community",
				color: "white",
				align: "left",
				links: [
					{
						name: "etoland",
						url: "https://etoland.co.kr",
						icon: "mdi:alpha-e-box-outline",
					},
					{
						name: "evape",
						url: "https://evape.kr",
						icon: "mdi:smoke",
					},
					{
						name: "discord",
						url: "https://discord.com/app",
						icon: "ic:baseline-discord",
					},
					{
						name: "reddit",
						url: "https://reddit.com",
						icon: "mdi:reddit",
					},
					{
						name: "damoang",
						url: "https://damoang.net/",
						icon: "mdi:alpha-c-circle-outline",
					},
					{
						name: "windowsforum",
						url: "https://windowsforum.kr",
						icon: "mdi:microsoft-windows",
					}
				]
			},
			{
				title: "Search",
				color: "white",
				align: "left",
				links: [
					{
						name: "naver",
						url: "https://naver.com",
						icon: "mdi:syllabary-hangul",
					},
					{
						name: "icloud",
						url: "https://www.icloud.com",
						icon: "mdi:apple-icloud",
					},
					{
						name: "github",
						url: "https://github.com",
						icon: "mdi:github",
					},
					{
						name: "coupang",
						url: "https://coupang.com",
						icon: "mdi:cart",
					}
				]
			},
			{
				title: "Keebs",
				color: "white",
				align: "left",
				links: [
					{
						name: "swagkey",
						url: "https://smartstore.naver.com/swagkey",
						icon: "mdi:keyboard",
					},
					{
						name: "geonworks",
						url: "https://smartstore.naver.com/geonlab",
						icon: "mdi:keyboard-esc",
					},
					{
						name: "monstargear",
						url: "https://smartstore.naver.com/monstarkorea",
						icon: "mdi:apple-keyboard-command",
					},
					{
						name: "greenfield",
						url: "https://smartstore.naver.com/greenfield_",
						icon: "mdi:apple-keyboard-option",
					},
					{
						name: "letsget-it",
						url: "https://smartstore.naver.com/letsget1t",
						icon: "mdi:keyboard-caps",
					},
					{
						name: "monkeytype",
						url: "https://monkeytype.com",
						icon: "mdi:keyboard-variant",
					}
				]
			},
			{
				title: "Entertainment",
				color: "white",
				align: "left",
				links: [
					{
						name: "youtube",
						url: "https://youtube.com",
						icon: "mdi:youtube",
					},
					{
						name: "netflix",
						url: "https://netflix.com",
						icon: "mdi:netflix",
					},
					{
						name: "disney+",
						url: "https://www.disneyplus.com/ko-kr/home",
						icon: "mdi:video-vintage",
					},
					{
						name: "coupang-play",
						url: "https://www.coupangplay.com/home",
						icon: "mdi:motion-play-outline",
					},
					{
						name: "tv-room",
						url: "https://xn--jt2bx0hu7u.com/",
						icon: "mdi:tv-box",
					},
					{
						name: "mma",
						url: "https://kktv05.com",
						icon: "mdi:mixed-martial-arts",
					}
				]
			}
		]
	}
}

export default defaultConfig
