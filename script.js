(function() {
	var amsterdam = [


		// Home


		{
			title: 'Waking up',
			image: 'home_wakeup',
			desc: "This is what i see when i wake up each day. A bit of sky, some pidgeons, and the terra-cotta roof of the neighbour's building. This is looking into the inner courtyard of the 1920's era housing block, known then as a 'garden village': a sort of utopian vision for a patch of garden and nature surrounded by apartments. The garden was all eventually split up and people put fences up; I guess expecting a hundred houses to share one big garden was a bit too hopeful. Everyone gets along well with the current setup though. You can also see my pillow.",
			next: 'Get outta bed'
		},
		{
			title: 'My living room',
			image: 'home_living_room',
			desc: "Ah, Reem is already awake. I love drinking coffee together in the morning, we discuss all sorts of topics. There's a eucalyptus branch here being used as an ad-hoc christmas tree.",
			next: 'Get some coffee',
		},
		{
			title: 'Coffee and the Amsterdam School',
			image: 'home_coffee',
			desc: "Grey skies again. I sit over the heater by the window and absorb whatever rays of sun make it through the clouds. Outside you can see a fine 1930's building, this style is known as the 'Amsterdam School' of architecture. We'll see some more of this in a bit.",
			next: 'Head to the exit',
		},
		{
			title: "it's stairs",
			image: 'home_stairs',
			desc: "Some prette steep stairs. It's good exercise coming up and down. Above is a skylight, so there's always a soothing glow here.",
			next: 'climb down',
		},
		{
			title: 'arcane device',
			image: 'home_opener',
			desc: "The front door still has the original electric opener from 1929. They really built some good stuff back then. It's encrusted with rust, dust, and little hairs.",
			next: 'gross. open the door',
		},
		{
			title: 'Sassenheimstraat',
			image: 'home_street_view',
			desc: "I step onto Sassenheimstraat, in the Hoofddorppleinbuurt. It's a quiet street, which is not very common in Amsterdam.",
			next: 'grab the bike',
		},
		{
			title: 'My Bike',
			image: 'home_bike',
			desc: "Everyone here has a bike, or two. The city treats bikes as top priority, so getting anywhere is safe and easy. The only threat comes from the scooters and delivery guys who bike like crazy.",
			next: "enough chit-chat, let's ride",
		},


		// Hoofddorp

		{
			title: '',
			image: 'hoofddorp_road',
			desc: "As you can see, this neighbourhood was designed to be totally harmonious. All the colors and styles match.",
			next: 'ok, sure',
		},
		{
			title: '',
			image: 'hoofddorp_guerilla_garden',
			desc: "Here you can see some guerilla gardening, typical of dutch neighbourhoods. Any patch of dirt will be taken care of by some resident, just to make things nice. People here really care for the common areas.",
			next: 'very nice, move along',
		},
		{
			title: 'Canal Furniture',
			image: 'hoofddorp_canalside_furniture',
			desc: "Another example: furniture and plants added to this nice spot on the canal. In the summer the sidewalks are treated as an extensions of your living room, and people will sit right in the way so that you have to go around them, and say hello.",
			next: 'sounds nice',
		},
		{
			title: 'Hoofddorppleinbuurt Bridge',
			image: 'hoofddorp_bridge_counterweight',
			desc: "Here is the big bridge into Hoofddorppleinbuurt, It's pretty busy. Somehow though, even when traffic is crazy, the bikes, cars, people, and boats flow very efficiently. The city design here is incredible.",
			next: 'cross it',
		},
		{
			title: 'Crossing...',
			image: 'hoofddorp_look_right',
			desc: "Everytime I cross a bridge i like to look over the water.",
			next: 'be careful though',
		},
		{
			title: 'Hildo Krop',
			image: 'hoofddorp_seal_sculpture',
			desc: "There's a sculpture at the edge of the bridge. It's a seal head, with a ship hidden behind. Created by Hildo Krop, known as the Sculptor of Amsterdam. You can see his work all over the city, built into bridges and buildings.",
			next: 'move along',
		},
		{
			title: 'Bike bridge',
			image: 'hoofddorp_bike_bridge',
			desc: "here's another mind-blowing thing: a bridge dedicated to bikes and people. I'm still getting used to a culture that treats the simple cyclist so highly.",
			next: "yes, yes. what's next?",
		},
		{
			title: 'Some color in the grey',
			image: 'hoofddorp_typical_dutch',
			desc: "A pretty common sight here, people wearing very bright colors to offset the greyness of it all.",
			next: 'isn\'t that vondelpark up ahead?',
		},
		{
			title: 'moss',
			image: 'vondel_low_wall_detail',
			desc: "before we head to vondel, I want to mention the moss, which grows on absolutely everything. It gives the world a green tint.",
			next: 'ok, I don\'t care about moss, nick',
		},
		{
			title: 'Vondelpark',
			image: 'vondel_path',
			desc: "I commute through here pretty often, the trees are tilted due to the sandy soil and wet weather. Everyone's here to walk with a friend, or jog, or whatever. It's a nice atmosphere.",
			next: 'Do the trees ever fall over?',
		},
		{
			title: 'Yep',
			image: 'vondel_tilted_tree',
			desc: "Sometimes the trees tip right over. This one has been like this for years.",
			next: 'ok',
		},
		{
			title: 'the bull',
			image: 'vondel_bull',
			desc: "every time I pass this sculpture from Picasso, I think how cool art can be. It can really make everyone's day a bit nicer. And it creates some connection with that modernist history.",
			next: 'do go on',
		},
		{
			title: 'A bird',
			image: 'vondelpark_bird',
			desc: "it\'s a bird.",
			next: 'bird bird bird',
		},
		{
			title: 'Leidseplein',
			image: 'leidseplein_monster',
			desc: "another design by Mister Krop. This is the Leidseplein bridge, sort of the main entrance to the city center. I've got to get to work so I'll leave you here to explore on your own. The center is nice these days, since corona has cleared out all the tourists. Normally I wouldn't set foot in there, it's way too crowded. Enjoy!",
			next: "Begin again",
		},
	];


	const getPage = page => {
		const frame = amsterdam[page];
		
		const {title, desc, next, image} = frame;
		const last = page >= amsterdam.length - 1;
		const nextPage = last ? 0
			: parseInt(page, 10) + 1;



		 return `
			<h1>${title}</h1>
			<img src="./photos/${image}.jpeg"/>
			<p>${desc}</p>
			<button>
				<a href="index.html?page=${nextPage}">${next}</a>
			</button>
		`;
	}


	var init = () => {
		const urlParams = new URLSearchParams(window.location.search);
		const page = urlParams.get('page') || 0;

		document.body.innerHTML = getPage(page);
	}

	window.onload = init

})()
