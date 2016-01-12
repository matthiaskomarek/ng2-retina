import {Component} from 'angular2/core';
import {NgRetina} from './retina-image';

@Component({
    selector: 'retina-image',
    template: `<img [ngRetina]="'img/angular-logo.png'" alt="">`,
	directives: [NgRetina]
})

export class RetinaImage {

}
