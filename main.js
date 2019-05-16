new Vue({
	el: '#app',
	data: {
		names: [
			'Nick Annen',
			'Ryan Apellanes',
			'Corey Aubuchon',
			'JJ Bannasch',
			'Drew Bear',
			'Grace Benguerel',
			'Hilary Berryhill',
			'Brayden Beverage',
			'Cassie Blench',
			'Gerald Briones',
			'Jason Patio',
			'Corey Burkhart',
			'Caitlin Byrne',
			'Marcus Cass',
			'Chelsey DeBalsi',
			'Michelle Do',
			'Chris Dyer',
			'Taylor Elliot',
			'Ashley Fejtek',
			'Alex Fitzpatrick',
			'Anna Fleming',
			'Susana Flores',
			'Lauren Forbes',
			'Henry Fortier',
			'Lindsey Frank',
			'Travis Frazier',
			'Sean Glass',
			'Connor Gold',
			'Ben Greene',
			'Derek Hanley',
			'Allyson Helms',
			'Paul Hughes',
			'Joshua Jacobs',
			'Adam Jung',
			'Joseph Kampman',
			'Flo Katzenbach',
			'Sally Kay',
			'Brendon Keeley',
			'Kelsey Lancaster',
			'Andrew Laskey',
			'James Lawrence',
			'Daniel Lerman',
			'Elena Leupp',
			'Faith Lewis',
			'Melissa Lopez',
			'John Lostaglio',
			'Edgar Martinez',
			'Ryan Moua',
			'Lauren Naughton',
			'Jake Ory',
			'Joe Pena',
			'Ian Phillips',
			'Alex Pierson',
			'Christina Postma',
			'Leanne Pratt',
			'Lindsay Romanelli',
			'Lindsay Salls',
			'Riane Sanchez',
			'David Alvarez',
			'Brandon Sarver',
			'Taylor Smith',
			'Ian Springer',
			'Brandon Stables',
			'Jeremy VanDerpluym',
			'Brian Van Voorst',
			'Camille Vazquez',
			'Josh Vervack',
			'Kyle Villeneuve',
			'Rachel Waldron',
			'Courtney Wall',
			'Sam Webb',
			'David Williams',
			'Laura Wusthoff',
			'Dax Young',
			'Alicia Zilka',
			'Dave Myers',
			'Nina Huang',
			'Vladamir Skok'
		],
		personOne: '',
		personTwo: '',
		personThree: '',
		personFour: '',
		personFive: '',
		personSix: ''
	},
	methods: {
		generateNames: function() {
			Array.prototype.shuffle = function() {
				var input = this;

				for (var i = input.length - 1; i >= 0; i--) {
					var randomIndex = Math.floor(Math.random() * (i + 1));
					var itemAtIndex = input[randomIndex];

					input[randomIndex] = input[i];
					input[i] = itemAtIndex;
				}
				return input;
			};
			this.names.shuffle();
			this.personOne = this.names[0];
			this.personTwo = this.names[1];
			this.personThree = this.names[2];
			this.personFour = this.names[3];
			this.personFive = this.names[4];
			this.personSix = this.names[5];
		}
	}
});
