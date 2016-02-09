import { Component, View, ngFor } from 'angular2/core';

@Component({
	selector: 'search-selector'
})

@View({
	template: '<input type="text" class="form-control" placeholder="Search here" #key (keyup)="doSearch(key.value)" ><ul class="list-group"><li class="list-group-item" *ngFor="#r of result">{{r}}</li></ul>'
})

export class SearchSelect {
	search: string = '';
	items: string[] = ['apple', 'windows', 'android'];
	result: string[];
	timeout: any;
	doSearch(key){
		// filter(fn: (item: T) => boolean) : T[];
		this.result = [];
		clearTimeout(this.timeout);
		this.timeout = setTimeout(() => {
			console.log(key);
			for (var item in this.items)
			{ 

				if (this.items[item] == key) {
					console.log(this.items[item]);
					this.result.push(this.items[item]);
				}
			}
		}, 500);
	}
};