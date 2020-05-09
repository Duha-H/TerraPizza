import { Component, OnInit, Inject, AfterViewInit, ElementRef, ViewChild } from '@angular/core';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

	seed = '';
	generatedText = '';
	isLoading = false;
	textGenerated = false;
	displayVideo = false;
	displayPlayButton = false;

	constructor(@Inject(DOCUMENT) private document: Document) { }

	ngOnInit() {

	}


	generateText() {
		this.generatedText = 'Functionality not yet implemeted.';
		this.textGenerated = true;
		
	}

	toggleVideoDisplay() {
		this.displayVideo = !this.displayVideo;
		let body = this.document.getElementsByName('body');
		console.log(body);
	}

	toggleButtonDisplay() {
		this.displayPlayButton = !this.displayPlayButton;
	}

}
