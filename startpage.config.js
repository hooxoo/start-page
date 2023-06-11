const defaultConfig = {
	username: "Excalith",
	theme: {
		backgroundColor: "#121317",
		windowColor: "#1e212b",
		glowColor: "#6b5cb157",
		white: "#e2e2e2",
		gray: "#97989d",
		black: "#16161e",
		red: "#ec6183",
		green: "#2ed8a2",
		yellow: "#e8b195",
		blue: "#2bc3de",
		cyan: "#62e0e2",
		magenta: "#e069aa",
		violet: "#d1aff8",
		orange: "#ff8800"
	},
	wallpaper: {
		url: "",
		easing: "ease-in-out",
		fadeIn: true,
		blur: true
	},
	terminal: {
		fixedHeight: true,
		windowGlow: true,
		textGlow: false
	},
	prompt: {
		ctrlC: true,
		placeholder: "command...",
		placeholderColor: "gray",
		userColor: "green",
		atColor: "gray",
		hostColor: "magenta",
		promptColor: "magenta",
		promptSymbol: "❯",
		caretColor: "green",
		selectionBg: "yellow",
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
		defaultColor: "white",
		hoverColor: "violet"
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
				name "Naver Search",
				url: "https://search.naver.com/search.naver?where=nexearch&sm=top_hty&fbm=0&ie=utf8&query={}"
			}
		]
	},
	sections: {
		list: [
			{
				title: "Community",
				color: "blue",
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
						name: "clien",
						url: "https://clien.net",
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
				color: "green",
				align: "left",
				links: [
					{
						name: "naver",
						url: "https://naver.com",
						icon: "mdi:syllabary-hangul",
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
					},
					{
						name: "torrent",
						url: "https://토렌트네임.com",
						icon: "mdi:monitor-share",
					}
				]
			},
			{
				title: "Entertainment",
				color: "red",
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
						icon: "mdi:rodent",
					},
					{
						name: "coupang-play",
						url: "https://www.coupangplay.com/home",
						icon: "mdi:motion-play-outline",
					},
					{
						name: "mma",
						url: "https://kktv365.com",
						icon: "mdi:mixed-martial-arts",
					}
				]
			},
			{
				title: "Keebs",
				color: "violet",
				align: "left",
				links: [
					{
						name: "swagkey",
						url: "https://smartstore.naver.com/swagkey",
						icon: "mdi:keyboard",
					},
					{
						name: "greenfield",
						url: "https://smartstore.naver.com/greenfield_",
						icon: "mdi:apple-keyboard-option",
					},
					{
						name: "monstargear",
						url: "https://smartstore.naver.com/monstarkorea",
						icon: "mdi:apple-keyboard-command",
					},
					{
						name: "letsget-it",
						url: "https://smartstore.naver.com/letsget1t",
						icon: "mdi:keyboard-caps",
					},
					{
						name: "saopao",
						url: "https://smartstore.naver.com/saopao",
						icon: "mdi:keyboard-variant",
					},
					{
						name: "monkeytype",
						url: "https://monkeytype.com",
						icon: "mdi:keyboard-esc",
					}
				]
			}
		]
	}
}

export default defaultConfig
