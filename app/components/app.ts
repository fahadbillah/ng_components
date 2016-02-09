import { Component } from 'angular2/core';

// import { Home } from './home/app.home';
// import { Profile } from './profile/app.profile';

@Component({
	selector: 'app',
	template: '<h1>Welcome</h1>'
})

// @View({
	// })

export class App {
	title: string;
	constructor() {
		this.title = 'App title';
	}
}
