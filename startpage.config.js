const defaultConfig = {
	username: "hooxoo",
	theme: {
		backgroundColor: "#18181a",
		windowColor: "#18181a",
		glowColor: "#3d46687d",
		white: "#fffff2",
		gray: "#949494",
		black: "#212121",
		red: "#e4609b",
		green: "#a7c080",
		yellow: "#dbbc7f",
		blue: "#7fbbb3",
		cyan: "#83c092",
		magenta: "#e69875",
		violet: "#d699b6",
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
		userColor: "white",
		atColor: "red",
		hostColor: "gray",
		promptColor: "white",
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
		hoverColor: "white"
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
				color: "red",
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
				color: "red",
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
						name: "snapdrop",
						url: "https://www.snapdrop.net",
						icon: "mdi:share-variant",
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
						url: "https://토렌트큐큐.net",
						icon: "mdi:monitor-share",
					}
				]
			},
			{
				title: "Keebs",
				color: "red",
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
			}
		]
	}
}

export default defaultConfig
