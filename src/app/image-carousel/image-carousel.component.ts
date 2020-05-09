import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';

@Component({
    selector: 'app-image-carousel',
    templateUrl: './image-carousel.component.html',
    styleUrls: ['./image-carousel.component.css']
})
export class ImageCarouselComponent implements AfterViewInit {

	imageURLs: string[];
	@ViewChild('images', {static: false}) imageDiv;
	
	constructor() {
		this.imageURLs = [];
		this.loadImages();
	}

    ngAfterViewInit() {
	}
	
	loadImages() {
		const baseFolder = './assets/screenshots/';
		for(let i = 0; i < 10; i++) {
			this.imageURLs[i] = baseFolder + 'screenshot' + (i + 1) + '.png';
		}
	}

	setGridLayout() {

	}

}
