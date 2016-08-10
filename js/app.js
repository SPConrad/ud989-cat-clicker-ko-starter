var viewModel = function(){

	this.clickCount = ko.observable(0);
	this.name = ko.observable('Tabby');
	this.imgSrc = ko.observable('img/1.jpg');
	this.imgAttribution = ko.observable('imgAttributionURL');
	this.catLevel = ko.observableArray(['Newborn', 'Baby', 'Toddler', 
		'Child', 'Teen', 'Young Adult', 'Grownup']);

	this.incrementCounter = function(){
		this.clickCount(this.clickCount() + 1);
		///this.clickCount = this.clickCount + 1;
	};

	this.leveler = function(){
		this.catLevel() = this.clickCount % 10
	}

	this.catLevelUp = ko.computed(function() {
		var local = Math.floor(this.clickCount() / 10);
		return this.catLevel()[local];
	}, this);


}



ko.applyBindings(new viewModel());