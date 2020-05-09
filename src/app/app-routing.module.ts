import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { GalleryComponent } from './gallery/gallery.component';


const routes: Routes = [
	{ path: '', component: HomeComponent },
	{ path: 'gallery', component: GalleryComponent },
	{ path: 'about', component: AboutComponent },
	{ path: 'about#what', component: AboutComponent },
	{ path: 'about#how', component: AboutComponent },
	{ path: 'about#tech', component: AboutComponent }
];

@NgModule({
	imports: [RouterModule.forRoot(routes, {
		anchorScrolling: 'enabled'
	})],
	exports: [RouterModule]
})
export class AppRoutingModule { }
