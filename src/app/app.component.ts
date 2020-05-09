import { Component } from '@angular/core';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})

export class AppComponent {


	title = 'Terra Pizza - CPS643 Virtual Reality';
	name = 'temp';
	displayMenuLinks = false;

	toggleMenuDisplay() {
		this.displayMenuLinks = !this.displayMenuLinks;
	}
	
}
