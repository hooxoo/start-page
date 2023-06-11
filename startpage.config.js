const config = {
	username: "hooxoo",
	search: {
		default: "https://google.com/search?q=",
		target: "_self"
	},
	prompt: {
		usercolor: "gray",
		atcolor: "white",
		hostcolor: "gray",
		promptcolor: "white",
		prompt: "❯",
		ctrlc: true
	},
	colors: {
		backgroundcolor: "#161616",
		windowcolor: "#262626",
		glowcolor: "",
		white: "#dde1e6",
		red: "#ee5396",
		pink: "#ff7eb6",
		blue: "#33b1ff",
		purple: "#be95ff",
		cyan: "#3ddbd9",
		gray: "#525252",
		black: "#262626"
	},
	commands: [
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
	],
	sections: [
		{
			title: "Community",
			color: "blue",
			links: [
				{
					name: "etoland",
					url: "https://etoland.co.kr",
					icon: "mdi:alpha-e-box-outline",
					target: "_self"
				},
				{
					name: "evape",
					url: "https://evape.kr",
					icon: "mdi:smoke",
					target: "_self"
				},
				{
					name: "discord",
					url: "https://discord.com/app",
					icon: "ic:baseline-discord",
					target: "_self"
				},
				{
					name: "reddit",
					url: "https://reddit.com",
					icon: "mdi:reddit",
					target: "_self"
				},
				{
					name: "clien",
					url: "https://clien.net",
					icon: "mdi:alpha-c-circle-outline",
					target: "_self"
				},
				{
					name: "windowsforum",
					url: "https://windowsforum.kr",
					icon: "mdi:microsoft-windows",
					target: "_self"
				}
			]
		},
		{
			title: "Search",
			color: "cyan",
			links: [
				{
					name: "naver",
					url: "https://naver.com",
					icon: "mdi:syllabary-hangul",
					target: "_self"
				},
				{
					name: "github",
					url: "https://github.com",
					icon: "mdi:github",
					target: "_self"
				},
				{
					name: "coupang",
					url: "https://coupang.com",
					icon: "mdi:cart",
					target: "_self"
				},
				{
					name: "torrent",
					url: "https://토렌트네임.com",
					icon: "mdi:monitor-share",
					target: "_self"
				}
			]
		},
		{
			title: "Entertainment",
			color: "red",
			links: [
				{
					name: "youtube",
					url: "https://youtube.com",
					icon: "mdi:youtube",
					target: "_self"
				},
				{
					name: "netflix",
					url: "https://netflix.com",
					icon: "mdi:netflix",
					target: "_self"
				},
				{
					name: "disney+",
					url: "https://www.disneyplus.com/ko-kr/home",
					icon: "mdi:rodent",
					target: "_self"
				},
				{
					name: "coupang-play",
					url: "https://www.coupangplay.com/home",
					icon: "mdi:motion-play-outline",
					target: "_self"
				},
				{
					name: "mma",
					url: "https://kktv365.com",
					icon: "mdi:mixed-martial-arts",
					target: "_self"
				}
			]
		},
		{
			title: "Keebs",
			color: "purple",
			links: [
				{
					name: "swagkey",
					url: "https://smartstore.naver.com/swagkey",
					icon: "mdi:keyboard",
					target: "_self"
				},
				{
					name: "greenfield",
					url: "https://smartstore.naver.com/greenfield_",
					icon: "mdi:apple-keyboard-option",
					target: "_self"
				},
				{
					name: "monstargear",
					url: "https://smartstore.naver.com/monstarkorea",
					icon: "mdi:apple-keyboard-command",
					target: "_self"
				},
				{
					name: "letsget-it",
					url: "https://smartstore.naver.com/letsget1t",
					icon: "mdi:keyboard-caps",
					target: "_self"
				},
				{
					name: "saopao",
					url: "https://smartstore.naver.com/saopao",
					icon: "mdi:keyboard-variant",
					target: "_self"
				},
				{
					name: "monkeytype",
					url: "https://monkeytype.com",
					icon: "mdi:keyboard-esc",
					target: "_self"
				}
			]
		}
	]
}

module.exports = config
