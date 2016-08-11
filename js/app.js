var initialCats = [
	{
		clickCount: 0,
		name : 'Tabby',
		imgSrc : 'img/0.jpg',
		imgAttribution : 'imgAttributionURL',
		nickNames : ['Tab', 'Tibbers']
	},
	{
		clickCount: 0,
		name : 'Tiger',
		imgSrc : 'img/1.jpg',
		imgAttribution : 'imgAttributionURL',
		nickNames : ['Tigger', 'Tony']
	},
	{
		clickCount: 0,
		name : 'Scaredy',
		imgSrc : 'img/2.jpg',
		imgAttribution : 'imgAttributionURL',
		nickNames : ['cat', 'paprika']
	},
	{
		clickCount: 0,
		name : 'Shadow',
		imgSrc : 'img/3.jpg',
		imgAttribution : 'imgAttributionURL',
		nickNames: ['Invisible', 'other cat']
	},
	{
		clickCount: 0,
		name : 'Sleepy',
		imgSrc : 'img/4.jpg',
		imgAttribution : 'imgAttributionURL',
		nickNames: ['zzzz', 'nap']
	},
]


var Cat = function(data){

	this.clickCount = ko.observable(data.clickCount);
	this.name = ko.observable(data.name);
	this.imgSrc = ko.observable(data.imgSrc);
	this.imgAttribution = ko.observable(data.imgAttribution);
	this.catLevel = ko.observableArray(['Newborn', 'Baby', 
		'Toddler', 
		'Child', 'Teen', 'Young Adult', 'Grownup']);
	this.nickNames = ko.observableArray(data.nickNames);

	

	this.leveler = function(){
		this.catLevel() = this.clickCount % 10
	}

	this.catLevelUp = ko.computed(function() {
		var local = Math.floor(this.clickCount() / 10);
		return this.catLevel()[local];
	}, this);
};

var viewModel = function(){
	var self = this;

	this.catList = ko.observableArray([]);

	initialCats.forEach(function(catItem){
		self.catList.push(new Cat(catItem));
	})

	this.currentCat = ko.observable(this.catList()[0]);

	this.incrementCounter = function(){
		this.clickCount(this.clickCount() + 1);
		///this.clickCount = this.clickCount + 1;
	
	};

	this.setCat = function(){
		console.log(this);
		self.currentCat(this);
	};

}; 




ko.applyBindings(new viewModel());