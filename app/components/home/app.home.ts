import { Component, View, NgFor, Inject } from 'angular2/angular2';
import { RouterLink, RouteParams } from 'angular2/router';

@Component({
	selector: 'home'
})
@View({
	directives: [RouterLink],
	template: '<h1>Home</h1>',
})


export class Home {}