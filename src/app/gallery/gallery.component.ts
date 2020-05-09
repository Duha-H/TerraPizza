import { Component, OnInit, AfterViewInit, ViewChild, ElementRef } from '@angular/core';

@Component({
	selector: 'app-gallery',
	templateUrl: './gallery.component.html',
	styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements AfterViewInit {

	constructor() { }

	@ViewChild('previewimages', {static: false}) images: ElementRef;

	ngAfterViewInit() {
		
	}

	setGridLayout() {
		const imageList = this.images['imageDiv'].nativeElement;
		imageList.className = 'carousel-grid';
	}

	setScrollLayout() {
		const imageList = this.images['imageDiv'].nativeElement;
		imageList.className = 'carousel-scroll';
	}

}
