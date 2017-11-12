import "babel-polyfill";

const DIRECTION_LEFT_TO_RIGHT = 0;
const DIRECTION_TOP_TO_BOTTOM = 1;

export default class SpriteFont {
	static imageElement2Canvas(imageElement) {
		let canvas = document.createElement('canvas');
		canvas.width = imageElement.width;
		canvas.height = imageElement.height;
		let context = canvas.getContext('2d');
		context.drawImage(imageElement, 0, 0);
		return context;
	}

	static loadImageElement(src) {
		return new Promise((resolve, reject) => {
			if (src instanceof Image && src.complete) {
				resolve(src);
			}

			let image = new Image();
			image.onload = function() {
				resolve(image);
			};
			image.onerror = function() {
				reject(image);
			}
			image.setAttribute('src', src);
		});
	}

	static async load(spriteFont, rows, cols, fgColors, bgColors) {
		let imageElement = this.loadImageElement(spriteFont);
		let context = this.imageElement2Canvas(await imageElement);
		return new SpriteFont(await context, rows, cols, fgColors, bgColors);
	}

	static loadAll(spriteFonts, rows, cols, fgColors, bgColors) {
		let promises = spriteFonts.map((spritefont) => {
			return this.load(spritefont, rows, cols, fgColors, bgColors);
		});

		return Promise.all(promises);
	}

	constructor(context, rows, cols, bgColors, fgColors) {
		this._context = context;
		this._rows = rows;
		this._cols = cols;
		this._bgColors = bgColors;
		this._fgColors = fgColors;
	}

	getRows() {
		return this._rows;
	}

	getCols() {
		return this._cols;
	}

	getContext() {
		return this._context;
	}

	getWidth() {
		return this._context.canvas.width;
	}

	getHeight() {
		return this._context.canvas.height;
	}

	getBlockWidth() {
		return this.getWidth() / this._bgColors.length;
	}

	getBlockHeight() {
		return this.getHeight() / this._fgColors.length;
	}

	getCharacterWidth() {
		return this.getBlockWidth() / this._cols;
	}

	getCharacterHeight() {
		return this.getBlockHeight() / this._rows;
	}

	getDirection() {
		return DIRECTION_TOP_TO_BOTTOM;
	}

	getCharacterCoordinatesOnBlock(pos) {
		if (this.getDirection() === DIRECTION_LEFT_TO_RIGHT) {
			return [
				pos % this.getRows(),
				Math.floor(pos / this.getRows())
			];
		}

		return [
			Math.floor(pos / this.getCols()),
			pos % this.getCols()
		];
	}

	getCharacterCoordinatesOnSprite(pos, fgColor, bgColor) {
		let bgColorPos = this._bgColors.indexOf(bgColor);
		let fgColorPos = this._fgColors.indexOf(fgColor);
		let [x, y] = this.getCharacterCoordinatesOnBlock(pos);

		return [
			x + bgColorPos * this.getCols(),
			y + fgColorPos * this.getRows()
		];
	}

	getCharacterCoordinatesOnSpriteInPixels(pos, fgColor, bgColor) {
		let [x, y] = this.getCharacterCoordinatesOnSprite(pos, bgColor, fgColor);

		return [
			x * this.getCharacterWidth(),
			y * this.getCharacterHeight()
		];
	}
}
