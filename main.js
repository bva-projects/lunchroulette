new Vue({
	el: '#app',
	data: {
		url:
			'https://script.google.com/macros/s/AKfycbzfaP-qXdHXAHEFHKPDH6MvNlPGI_JVjxfGrYrL66u3sGvR-rd4/exec',
		personOne: '',
		personTwo: '',
		personThree: '',
		personFour: '',
		personFive: '',
		personSix: '',
		names: []
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
			this.personOne = this.names[0].id;
			this.personTwo = this.names[1].id;
			this.personThree = this.names[2].id;
			this.personFour = this.names[3].id;
			this.personFive = this.names[4].id;
			this.personSix = this.names[5].id;
		}
	},
	created() {
		axios
			.get(this.url)
			.then(response => {
				// JSON responses are automatically parsed.
				this.names = response.data.user;
			})
			.catch(e => {
				this.errors.push(e);
			});
	}
});
