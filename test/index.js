var assert = require('assert');
var SpriteFont = require('..');

require('jsdom-global')('', {
	resources: 'usable'
});

describe('spriteFont.js', function() {
	var spriteFont = null;
	const colors = [
		'#000000',
		'#0000ff',
		'#00ff00',
		'#00ffff',
		'#ff0000',
		'#ff00ff',
		'#ffff00',
		'#ffffff'
	];
	var spriteFontSrc = require('./spriteFontSrc');

	beforeEach(function(done) {
		SpriteFont.load(spriteFontSrc, {
			cols: 2,
			rows: 5,
			colors: colors
		}).then(_spriteFont => {
			spriteFont = _spriteFont;
			done();
		}, done);
	});

	describe('getCols()', function() {
		it('should return 2', function() {
			assert.strictEqual(spriteFont.getCols(), 2);
		});
	});

	describe('getRows()', function() {
		it('shold return 5', function() {
			assert.strictEqual(spriteFont.getRows(), 5);
		});
	});

	describe('getWidth()', function() {
		it('shold return 208', function() {
			assert.strictEqual(spriteFont.getWidth(), 208);
		});
	});

	describe('getHeight()', function() {
		it('shold return 640', function() {
			assert.strictEqual(spriteFont.getHeight(), 640);
		});
	});

	describe('getBlockHeight()', function() {
		it('shold return 80', function() {
			assert.strictEqual(spriteFont.getBlockHeight(), 80);
		});
	});

	describe('getBlockWidth()', function() {
		it('shold return 26', function() {
			assert.strictEqual(spriteFont.getBlockWidth(), 26);
		});
	});

	describe('getCharacterWidth()', function() {
		it('shold return 13', function() {
			assert.strictEqual(spriteFont.getCharacterWidth(), 13);
		});
	});

	describe('getCharacterHeight()', function() {
		it('shold return 16', function() {
			assert.strictEqual(spriteFont.getCharacterHeight(), 16);
		});
	});

	describe('getCharacterCoordinatesOnSprite()', function() {
		it('', function() {
			assert.deepEqual(spriteFont.getCharacterCoordinatesOnBlock(0), [
				0,
				0
			]);
			assert.deepEqual(spriteFont.getCharacterCoordinatesOnBlock(1), [
				0,
				1
			]);
		});
	});
});
