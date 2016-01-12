import {Directive, ElementRef, Renderer, Input} from 'angular2/core';
import {Http, HTTP_PROVIDERS} from 'angular2/http';

@Directive({
    selector: '[ngRetina]',
	providers: [HTTP_PROVIDERS]
})

export class NgRetina {
	@Input('ngRetina') imgUrl: string;

	constructor(private el: ElementRef, private renderer: Renderer, private http: Http) { }

	ngOnInit() {
		if (this._isRetina()) {
			// check for retina image
			this._checkRetinaImage('@2x')
				.then(() => {
					var retinaUrl = this._getRetinaUrl(this.imgUrl, '@2x');
					this.renderer.setElementAttribute(this.el, 'src', retinaUrl);
				})
				.catch(() => {
					this.renderer.setElementAttribute(this.el, 'src', this.imgUrl);
				});
		} else {
			this.renderer.setElementAttribute(this.el, 'src', this.imgUrl);
		}
	}

	private _checkRetinaImage(infix: string): any {
		var retinaUrl = this._getRetinaUrl(this.imgUrl, infix);
		console.log(retinaUrl);
		return this.http.head(retinaUrl).toPromise();
	}

	private _isRetina(): boolean {
		var mediaQuery = '(-webkit-min-device-pixel-ratio: 1.5), ' +
			'(min--moz-device-pixel-ratio: 1.5), ' +
			'(-o-min-device-pixel-ratio: 3/2), ' +
			'(min-resolution: 1.5dppx)';
		if (window.devicePixelRatio > 1) {
			return true;
		}

		return (window.matchMedia && window.matchMedia(mediaQuery).matches);
	}

	private _getRetinaUrl(url: string, infix: string): string {
		var pathParts = url.split('/');
		var file = pathParts.pop();
		var fileParts = file.split('.');

		if (fileParts.length < 2)
			return url + infix;
		fileParts[fileParts.length - 2] += infix;
		pathParts.push(fileParts.join('.'));
		return pathParts.join('/');
	}
}
