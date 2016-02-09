import { Component, View, NgFor, Inject } from 'angular2/angular2';
import { RouterLink, RouteParams } from 'angular2/router';

@Component({
	selector: 'profile',
})
@View({
	directives: [RouterLink],
	template: '	<h1>Hello MR. Fahad.</h1>	'
})


export class Profile {}