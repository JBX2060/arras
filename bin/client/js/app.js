var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var app =
/******/function (modules) {
	// webpackBootstrap
	/******/ // The module cache
	/******/var installedModules = {};

	/******/ // The require function
	/******/function __webpack_require__(moduleId) {

		/******/ // Check if module is in cache
		/******/if (installedModules[moduleId])
			/******/return installedModules[moduleId].exports;

		/******/ // Create a new module (and put it into the cache)
		/******/var module = installedModules[moduleId] = {
			/******/exports: {},
			/******/id: moduleId,
			/******/loaded: false
			/******/ };

		/******/ // Execute the module function
		/******/modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

		/******/ // Flag the module as loaded
		/******/module.loaded = true;

		/******/ // Return the exports of the module
		/******/return module.exports;
		/******/
	}

	/******/ // expose the modules object (__webpack_modules__)
	/******/__webpack_require__.m = modules;

	/******/ // expose the module cache
	/******/__webpack_require__.c = installedModules;

	/******/ // __webpack_public_path__
	/******/__webpack_require__.p = "";

	/******/ // Load entry module and return exports
	/******/return __webpack_require__(0);
	/******/
}(
/************************************************************************/
/******/[
/* 0 */
/***/function (module, exports, __webpack_require__) {

	/*global require, console*/
	/*jshint -W097*/
	/*jshint browser: true*/
	"use strict";

	// Fundamental requires <3
	//var global = require('./lib/global');
	//var util = require('./lib/util');

	var dynamic = __webpack_require__(1);

	//imported manualy cause stuffs going wrong
	var global = {
		// Keys and other mathematical constants and some other shit
		KEY_ESC: 27,
		KEY_ENTER: 13,
		KEY_CHAT: 13,
		KEY_FIREFOOD: 119,
		KEY_SPLIT: 32,
		KEY_LEFT: 65,
		KEY_UP: 87,
		KEY_RIGHT: 68,
		KEY_DOWN: 83,
		KEY_LEFT_ARROW: 37,
		KEY_UP_ARROW: 38,
		KEY_RIGHT_ARROW: 39,
		KEY_DOWN_ARROW: 40,
		KEY_AUTO_SPIN: 67,
		KEY_AUTO_FIRE: 69,
		KEY_OVER_RIDE: 82,
		KEY_UPGRADE_ATK: 49,
		KEY_UPGRADE_HTL: 50,
		KEY_UPGRADE_SPD: 51,
		KEY_UPGRADE_STR: 52,
		KEY_UPGRADE_PEN: 53,
		KEY_UPGRADE_DAM: 54,
		KEY_UPGRADE_RLD: 55,
		KEY_UPGRADE_MOB: 56,
		KEY_UPGRADE_RGN: 57,
		KEY_UPGRADE_SHI: 48,
		KEY_MOUSE_0: 32,
		KEY_MOUSE_1: 86,
		KEY_MOUSE_2: 16,
		KEY_CHOOSE_1: 89,
		KEY_CHOOSE_2: 72,
		KEY_CHOOSE_3: 85,
		KEY_CHOOSE_4: 74,
		KEY_CHOOSE_5: 73,
		KEY_CHOOSE_6: 75,
		KEY_CHOOSE_7: 79,
		KEY_CHOOSE_8: 76,
		KEY_LEVEL_UP: 78,
		KEY_FUCK_YOU: 192,
		KEY_TESTBED: 66,
		KEY_TP: 71,
		KEY_BIGBOI: 77,
		KEY_BIGCHUNGUS: 88,

		// Canvas
		screenWidth: window.innerWidth,
		screenHeight: window.innerHeight,
		gameWidth: 0,
		gameHeight: 0,
		xoffset: -0,
		yoffset: -0,
		gameStart: false,
		disconnected: false,
		died: false,
		kicked: false,
		continuity: false,
		startPingTime: 0,
		toggleMassState: 0,
		backgroundColor: '#f2fbff',
		lineColor: '#000000'
	};

	var submitToLocalStorage = function submitToLocalStorage(name) {
		localStorage.setItem(name + 'Value', document.getElementById(name).value);
		localStorage.setItem(name + 'Checked', document.getElementById(name).checked);
		return false;
	};
	var retrieveFromLocalStorage = function retrieveFromLocalStorage(name) {
		document.getElementById(name).value = localStorage.getItem(name + 'Value');
		document.getElementById(name).checked = localStorage.getItem(name + 'Checked') === 'true';
		return false;
	};
	var handleLargeNumber = function handleLargeNumber(a) {
		var cullZeroes = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

		if (cullZeroes && a == 0) {
			return '';
		}

		if (a < Math.pow(10, 3)) {
			return '' + a.toFixed(0);
		}

		if (a < Math.pow(10, 6)) {
			return (a / Math.pow(10, 3)).toFixed(2) + "k";
		}

		if (a < Math.pow(10, 9)) {
			return (a / Math.pow(10, 6)).toFixed(2) + "m";
		}

		if (a < Math.pow(10, 12)) {
			return (a / Math.pow(10, 9)).toFixed(2) + "b";
		}

		if (a < Math.pow(10, 15)) {
			return (a / Math.pow(10, 12)).toFixed(2) + "t";
		}

		return (a / Math.pow(10, 15)).toFixed(2) + "q";
	};
	var timeForHumans = function timeForHumans(x) {
		// ought to be in seconds
		var seconds = x % 60;
		x /= 60;
		x = Math.floor(x);
		var minutes = x % 60;
		x /= 60;
		x = Math.floor(x);
		var hours = x % 24;
		x /= 24;
		x = Math.floor(x);
		var days = x;
		var y = '';

		function weh(z, text) {
			if (z) {
				y = y + (y === '' ? '' : ', ') + z + ' ' + text + (z > 1 ? 's' : '');
			}
		}
		weh(days, 'day');
		weh(hours, 'hour');
		weh(minutes, 'minute');
		weh(seconds, 'second');
		if (y === '') {
			y = 'less than a second';
		}
		return y;
	};
	var addArticle = function addArticle(string) {
		return (/[aeiouAEIOU]/.test(string[0]) ? 'an ' + string : 'a ' + string
		);
	};
	var formatLargeNumber = function formatLargeNumber(x) {
		return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
	};
	var pullJSON = function pullJSON(filename) {
		var request = new XMLHttpRequest();
		var url = "/json/" + filename + ".json?v=" + VERSION;
		// Set up the request
		console.log("Loading JSON from " + url);
		request.responseType = 'json';
		// Return a promise
		return new Promise(function (resolve, reject) {
			request.open('GET', url);
			request.onload = function () {
				resolve(request.response);
				console.log('JSON load complete.');
			};
			request.onerror = function () {
				reject(request.statusText);
				console.log('JSON load failed.');
				console.log(request.statusText);
			};
			request.send();
		});
	};

	//Get color
	var config = {
		graphical: {
			screenshotMode: false,
			borderChunk: 6,
			barChunk: 5,
			mininumBorderChunk: 3,
			deathBlurAmount: 3,
			darkBorders: false,
			fancyAnimations: true,
			colors: 'normal',
			pointy: true,
			fontSizeBoost: 1,
			neon: false
		},
		gui: {
			expectedMaxSkillLevel: 9
		},
		lag: {
			unresponsive: false,
			memory: 60
		}
	};
	var color = {};
	pullJSON('color').then(function (data) {
		return color = data;
	});

	// Color functions
	var mixColors = function () {
		/** https://gist.github.com/jedfoster/7939513 **/
		function d2h(d) {
			return d.toString(16);
		} // convert a decimal value to hex
		function h2d(h) {
			return parseInt(h, 16);
		} // convert a hex value to decimal 
		return function (color_2, color_1) {
			var weight = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0.5;

			if (weight === 1) return color_1;
			if (weight === 0) return color_2;
			var col = "#";
			for (var i = 1; i <= 6; i += 2) {
				// loop through each of the 3 hex pairs—red, green, and blue, skip the '#'
				var v1 = h2d(color_1.substr(i, 2)),

				// extract the current pairs
				v2 = h2d(color_2.substr(i, 2)),


				// combine the current pairs from each source color, according to the specified weight
				val = d2h(Math.floor(v2 + (v1 - v2) * weight));

				while (val.length < 2) {
					val = '0' + val;
				} // prepend a '0' if val results in a single digit        
				col += val; // concatenate val to our new color string
			}
			return col; // PROFIT!
		};
	}();

	function getColor(colorNumber) {
		switch (colorNumber) {
			case 0:
				return color.teal;
			case 1:
				return color.lgreen;
			case 2:
				return color.orange;
			case 3:
				return color.yellow;
			case 4:
				return color.lavender;
			case 5:
				return color.pink;
			case 6:
				return color.vlgrey;
			case 7:
				return color.lgrey;
			case 8:
				return color.guiwhite;
			case 9:
				return color.black;
			case 10:
				return color.blue;
			case 11:
				return color.green;
			case 12:
				return color.red;
			case 13:
				return color.gold;
			case 14:
				return color.purple;
			case 15:
				return color.magenta;
			case 16:
				return color.grey;
			case 17:
				return color.dgrey;
			case 18:
				return color.white;
			case 19:
				return color.guiblack;
			case 21:
				return '#1058D3';
			case 22:
				return '#8534E2';
			case 23:
				return '#FF1493';
			case 24:
				return '#FF4500';
			case 25:
				return '#EFC74B';
			case 26:
				return '#B9E87E';
			case 27:
				return '#EFC74B';
			case 28:
				return '#A00A00';
			case 29:
				return '#E7896D';
			case 30:
				return '#8D6ADF';

			default:
				return '#FF0000';
		}
	}

	function getColorDark(givenColor) {
		var dark = config.graphical.neon ? color.white : color.black;
		if (config.graphical.darkBorders) return dark;
		return mixColors(givenColor, dark, color.border);
	}

	function setColorBrightness(col, amt) {

		var usePound = false;

		if (col[0] == "#") {
			col = col.slice(1);
			usePound = true;
		}

		var num = parseInt(col, 16);

		var r = (num >> 16) + amt;

		if (r > 255) r = 255;else if (r < 0) r = 0;

		var b = (num >> 8 & 0x00FF) + amt;

		if (b > 255) b = 255;else if (b < 0) b = 0;

		var g = (num & 0x0000FF) + amt;

		if (g > 255) g = 255;else if (g < 0) g = 0;

		return (usePound ? "#" : "") + (g | b << 8 | r << 16).toString(16);
	}

	function getZoneColor(cell, real) {
		switch (cell) {
			case 'bas1':
				return color.blue;
			case 'bas2':
				return color.green;
			case 'bas3':
				return color.red;
			case 'bas4':
				return color.pink;
			case 'bas5':
				return color.gold;
			case 'bas6':
				return color.orange;
			case 'nest':
				return real ? color.purple : color.lavender;
			default:
				return real ? color.white : color.lgrey;
		}
	}

	function setColor(context, givenColor) {
		if (config.graphical.neon) {
			context.fillStyle = getColorDark(givenColor);
			context.strokeStyle = givenColor;
		} else {
			context.fillStyle = givenColor;
			context.strokeStyle = setColorBrightness(givenColor, -20);
		}
	}

	// Get mockups <3
	var mockups = [];
	pullJSON('mockups').then(function (data) {
		return mockups = data;
	});
	// Mockup functions
	function getEntityImageFromMockup(index) {
		var color = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : mockups[index].color;

		var mockup = mockups[index];
		return {
			time: 0,
			index: index,
			x: mockup.x,
			y: mockup.y,
			vx: 0,
			vy: 0,
			size: mockup.size,
			realSize: mockup.realSize,
			color: color,
			render: {
				status: {
					getFade: function getFade() {
						return 1;
					},
					getColor: function getColor() {
						return '#FFFFFF';
					},
					getBlend: function getBlend() {
						return 0;
					},
					health: {
						get: function get() {
							return 1;
						}
					},
					shield: {
						get: function get() {
							return 1;
						}
					}
				}
			},
			facing: mockup.facing,
			shape: mockup.shape,
			name: mockup.name,
			score: 0,
			tiggle: 0,
			layer: mockup.layer,
			guns: {
				length: mockup.guns.length,
				getPositions: function getPositions() {
					var a = [];
					mockup.guns.forEach(function () {
						return a.push(0);
					});
					return a;
				},
				update: function update() {}
			},
			turrets: mockup.turrets.map(function (t) {
				var o = getEntityImageFromMockup(t.index);
				o.realSize = o.realSize / o.size * mockup.size * t.sizeFactor;
				o.size = mockup.size * t.sizeFactor;
				o.angle = t.angle;
				o.offset = t.offset;
				o.direction = t.direction;
				o.facing = t.direction + t.angle;
				return o;
			})
		};
	}

	// Define clickable regions
	global.clickables = function () {
		var Region = function () {
			// Protected classes
			function Clickable() {
				var region = {
					x: 0,
					y: 0,
					w: 0,
					h: 0
				};
				var active = false;
				return {
					set: function set(x, y, w, h) {
						region.x = x;
						region.y = y;
						region.w = w;
						region.h = h;
						active = true;
					},
					check: function check(target) {
						var dx = Math.round(target.x - region.x);
						var dy = Math.round(target.y - region.y);
						return active && dx >= 0 && dy >= 0 && dx <= region.w && dy <= region.h;
					},
					hide: function hide() {
						active = false;
					}
				};
			}
			// Return the constructor
			return function (size) {
				// Define the region
				var data = [];
				for (var i = 0; i < size; i++) {
					data.push(Clickable());
				}
				// Return the region methods
				return {
					place: function place(index) {
						var _data$index;

						for (var _len3 = arguments.length, a = Array(_len3 > 1 ? _len3 - 1 : 0), _key = 1; _key < _len3; _key++) {
							a[_key - 1] = arguments[_key];
						}

						if (index >= data.length) {
							console.log(index);
							console.log(data);
							throw new Error('Trying to reference a clickable outside a region!');
						}
						(_data$index = data[index]).set.apply(_data$index, a);
					},
					hide: function hide() {
						var _iteratorNormalCompletion = true;
						var _didIteratorError = false;
						var _iteratorError = undefined;

						try {
							for (var _iterator = data[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
								var r = _step.value;

								r.hide();
							}
						} catch (err) {
							_didIteratorError = true;
							_iteratorError = err;
						} finally {
							try {
								if (!_iteratorNormalCompletion && _iterator.return) {
									_iterator.return();
								}
							} finally {
								if (_didIteratorError) {
									throw _iteratorError;
								}
							}
						}
					},
					check: function check(x) {
						return data.findIndex(function (r) {
							return r.check(x);
						});
					}
				};
			};
		}();
		return {
			stat: Region(10),
			upgrade: Region(8),
			hover: Region(1),
			skipUpgrades: Region(1)
		};
	}();
	global.statHover = false;
	global.upgradeHover = false;

	// Prepare stuff
	var player = { //Set up the player
		id: -1,
		x: global.screenWidth / 2,
		y: global.screenHeight / 2,
		vx: 0,
		vy: 0,
		renderx: global.screenWidth / 2,
		rendery: global.screenHeight / 2,
		renderv: 1,
		slip: 0,
		view: 1,
		time: 0,
		screenWidth: global.screenWidth,
		screenHeight: global.screenHeight,
		target: {
			x: global.screenWidth / 2,
			y: global.screenHeight / 2
		}
	};
	var entities = [],
	    users = [],
	    minimap = [],
	    upgradeSpin = 0,
	    messages = [],
	    messageFade = 0,
	    newMessage = 0,
	    metrics = {
		latency: 0,
		lag: 0,
		rendertime: 0,
		updatetime: 0,
		lastlag: 0,
		lastrender: 0,
		rendergap: 0,
		lastuplink: 0
	},
	    lastPing = 0,
	    renderTimes = 0,
	    updateTimes = 0,
	    target = {
		x: player.x,
		y: player.y
	},
	    roomSetup = [['norm']],
	    roomSpeed = 0;
	var _gui = {
		getStatNames: function getStatNames(num) {
			switch (num) {
				case 1:
					return ['Body Damage', 'Max Health', 'Bullet Speed', 'Bullet Health', 'Bullet Penetration', 'Bullet Damage', 'Engine Acceleration', 'Movement Speed', 'Shield Regeneration', 'Shield Capacity'];
				case 2:
					return ['Body Damage', 'Max Health', 'Drone Speed', 'Drone Health', 'Drone Penetration', 'Drone Damage', 'Respawn Rate', 'Movement Speed', 'Shield Regeneration', 'Shield Capacity'];
				case 3:
					return ['Body Damage', 'Max Health', 'Drone Speed', 'Drone Health', 'Drone Penetration', 'Drone Damage', 'Max Drone Count', 'Movement Speed', 'Shield Regeneration', 'Shield Capacity'];
				case 4:
					return ['Body Damage', 'Max Health', 'Swarm Speed', 'Swarm Health', 'Swarm Penetration', 'Swarm Damage', 'Reload', 'Movement Speed', 'Shield Regeneration', 'Shield Capacity'];
				case 5:
					return ['Body Damage', 'Max Health', 'Placement Speed', 'Trap Health', 'Trap Penetration', 'Trap Damage', 'Reload', 'Movement Speed', 'Shield Regeneration', 'Shield Capacity'];
				case 6:
					return ['Body Damage', 'Max Health', 'Weapon Speed', 'Weapon Health', 'Weapon Penetration', 'Weapon Damage', 'Reload', 'Movement Speed', 'Shield Regeneration', 'Shield Capacity'];
				default:
					return ['Body Damage', 'Max Health', 'Bullet Speed', 'Bullet Health', 'Bullet Penetration', 'Bullet Damage', 'Reload', 'Movement Speed', 'Shield Regeneration', 'Shield Capacity'];
			}
		},
		skills: [{
			amount: 0,
			color: 'purple',
			cap: 1,
			softcap: 1
		}, {
			amount: 0,
			color: 'pink',
			cap: 1,
			softcap: 1
		}, {
			amount: 0,
			color: 'blue',
			cap: 1,
			softcap: 1
		}, {
			amount: 0,
			color: 'lgreen',
			cap: 1,
			softcap: 1
		}, {
			amount: 0,
			color: 'red',
			cap: 1,
			softcap: 1
		}, {
			amount: 0,
			color: 'yellow',
			cap: 1,
			softcap: 1
		}, {
			amount: 0,
			color: 'green',
			cap: 1,
			softcap: 1
		}, {
			amount: 0,
			color: 'teal',
			cap: 1,
			softcap: 1
		}, {
			amount: 0,
			color: 'gold',
			cap: 1,
			softcap: 1
		}, {
			amount: 0,
			color: 'orange',
			cap: 1,
			softcap: 1
		}],
		points: 0,
		upgrades: [],
		playerid: -1,
		__s: function () {
			var truscore = 0;
			var levelscore = 0;
			var deduction = 0;
			var level = 0;
			var score = Smoothbar(0, 10);
			return {
				setScore: function setScore(s) {
					if (s) {
						score.set(s);
						if (deduction > score.get()) {
							level = 0;
							deduction = 0;
						}
					} else {
						score = Smoothbar(0, 10);
						level = 0;
					}
				},
				update: function update() {
					levelscore = Math.ceil(1.8 * Math.pow(level + 1, 1.8) - 2 * level + 1);
					if (score.get() - deduction >= levelscore) {
						deduction += levelscore;
						level += 1;
					}
				},
				getProgress: function getProgress() {
					return levelscore ? Math.min(1, Math.max(0, (score.get() - deduction) / levelscore)) : 0;
				},
				getScore: function getScore() {
					return score.get();
				},
				getLevel: function getLevel() {
					return level;
				}
			};
		}(),
		type: 0,
		fps: 0,
		color: 0,
		accel: 0,
		topspeed: 1
	};
	global.clearUpgrades = function () {
		_gui.upgrades = [];
	};
	// Build the leaderboard object
	var _leaderboard = function () {
		var entries = {};
		// Define a handler for a particular entry
		function Entry() {
			var name = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
			var bar = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
			var color = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;

			// The data
			var index = 0,
			    truscore = 0,
			    score = Smoothbar(0, 10);
			// These are the io functions
			return {
				update: function update(i, s) {
					index = i;
					score.set(s);
				},
				publish: function publish() {
					// Return the data package
					var ref = mockups[index];
					return {
						image: getEntityImageFromMockup(index, color),
						position: ref.position,
						barcolor: getColor(bar),
						label: name === '' ? ref.name : name + ' - ' + ref.name,
						score: score.get()
					};
				}
			};
		}
		// Return the leaderboard methods
		return {
			get: function get() {
				var out = [],
				    maxscore = 1;
				for (var e in entries) {
					if (!entries.hasOwnProperty(e)) continue;
					var data = entries[e].publish();
					out.push(data);
					if (data.score > maxscore) {
						maxscore = data.score;
					}
				}
				out.sort(function (a, b) {
					return b.score - a.score;
				});
				return {
					data: out,
					max: maxscore
				};
			},
			remove: function remove(index) {
				if (entries['_' + index] === undefined) {
					console.log('Warning: Asked to removed an unknown leaderboard entry.');
					return -1;
				}
				delete entries['_' + index];
			},
			add: function add(data) {
				var newentry = Entry(data.name, data.barcolor, data.color);
				newentry.update(data.index, data.score);
				entries['_' + data.id] = newentry;
			},
			update: function update(data) {
				if (entries['_' + data.id] === undefined) {
					console.log('Warning: Asked to update an unknown leaderboard entry.');
					return -1;
				}
				entries['_' + data.id].update(data.index, data.score);
			},
			purge: function purge() {
				entries = {};
			}
		};
	}();
	// The ratio finder
	var getRatio = function getRatio() {
		return Math.max(global.screenWidth / player.renderv, global.screenHeight / player.renderv / 9 * 16);
	};

	global.target = target;
	global.player = player;
	global.canUpgrade = false;
	global.canSkill = false;
	global.message = '';
	global.time = 0;

	// Window setup <3
	global.mobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent);
	var serverName = 'OVERsonic Servers';
	window.onload = function () {
		// Server name stuff
		document.getElementById('serverName').innerHTML = '<h4 class="nopadding">' + serverName + '</h4>';
		// Save forms
		retrieveFromLocalStorage('playerNameInput');
		retrieveFromLocalStorage('playerKeyInput');
		retrieveFromLocalStorage('optScreenshotMode');
		retrieveFromLocalStorage('optPredictive');
		retrieveFromLocalStorage('optFancy');
		retrieveFromLocalStorage('optColors');
		retrieveFromLocalStorage('optNoPointy');
		retrieveFromLocalStorage('optBorders');
		// Set default theme
		if (document.getElementById('optColors').value === '') {
			document.getElementById('optColors').value = 'normal';
		}
		if (document.getElementById('optBorders').value === '') {
			document.getElementById('optBorders').value = 'normal';
		}
		// Game start stuff
		document.getElementById('startButton').onclick = function () {
			return startGame();
		};
		document.onkeydown = function (e) {
			var key = e.which || e.keyCode;
			if (key === global.KEY_ENTER && (global.dead || !global.gameStart)) {
				startGame();
			}
		};
		// Resizing stuff
		window.addEventListener('resize', function () {
			player.screenWidth = c.width = global.screenWidth = window.innerWidth;
			player.screenHeight = c.height = global.screenHeight = window.innerHeight;
		});
	};

	// Prepare canvas stuff
	var Canvas = function () {
		function Canvas(params) {
			_classCallCheck(this, Canvas);

			this.directionLock = false;
			this.target = global.target;
			this.reenviar = true;
			this.socket = global.socket;
			this.directions = [];
			var self = this;

			this.cv = document.getElementById('gameCanvas');
			this.cv.width = global.screenWidth;
			this.cv.height = global.screenHeight;
			this.cv.addEventListener('mousemove', this.gameInput, false);
			this.cv.addEventListener('keydown', this.keyboardDown, false);
			this.cv.addEventListener('keyup', this.keyboardUp, false);
			this.cv.addEventListener("mousedown", this.mouseDown, false);
			this.cv.addEventListener("mouseup", this.mouseUp, false);
			this.cv.parent = self;
			global.canvas = this;
		}

		_createClass(Canvas, [{
			key: "keyboardDown",
			value: function keyboardDown(event) {
				switch (event.keyCode) {
					case 13:
						if (global.died) this.parent.socket.talk('s', global.playerName, 0);
						global.died = false;
						break; // Enter to respawn
					case global.KEY_UP_ARROW:
					case global.KEY_UP:
						this.parent.socket.cmd.set(0, true);
						break;
					case global.KEY_DOWN_ARROW:
					case global.KEY_DOWN:
						this.parent.socket.cmd.set(1, true);
						break;
					case global.KEY_LEFT_ARROW:
					case global.KEY_LEFT:
						this.parent.socket.cmd.set(2, true);
						break;
					case global.KEY_RIGHT_ARROW:
					case global.KEY_RIGHT:
						this.parent.socket.cmd.set(3, true);
						break;
					case global.KEY_MOUSE_0:
						this.parent.socket.cmd.set(4, true);
						break;
					case global.KEY_MOUSE_1:
						this.parent.socket.cmd.set(5, true);
						break;
					case global.KEY_MOUSE_2:
						this.parent.socket.cmd.set(6, true);
						break;
					case global.KEY_LEVEL_UP:
						this.parent.socket.talk('L');
						break;
					case global.KEY_FUCK_YOU:
						this.parent.socket.talk('0');
						break;
					case global.KEY_TP:
						this.parent.socket.talk('K');
						break;
					case global.KEY_FIREFOOD:
						this.parent.socket.talk('P');
						break;
					case global.KEY_TESTBED:
						this.parent.socket.talk('0');
						break;
					case global.KEY_BIGBOI:
						this.parent.socket.talk('B');
						break;
					case global.KEY_BIGCHUNGUS:
						this.parent.socket.talk('X');
						break;
				}
				if (!event.repeat) {
					switch (event.keyCode) {
						case global.KEY_AUTO_SPIN:
							this.parent.socket.talk('t', 0);
							break;
						case global.KEY_AUTO_FIRE:
							this.parent.socket.talk('t', 1);
							break;
						case global.KEY_OVER_RIDE:
							this.parent.socket.talk('t', 2);
							break;
					}
					if (global.canSkill) {
						switch (event.keyCode) {
							case global.KEY_UPGRADE_ATK:
								this.parent.socket.talk('x', 0);
								break;
							case global.KEY_UPGRADE_HTL:
								this.parent.socket.talk('x', 1);
								break;
							case global.KEY_UPGRADE_SPD:
								this.parent.socket.talk('x', 2);
								break;
							case global.KEY_UPGRADE_STR:
								this.parent.socket.talk('x', 3);
								break;
							case global.KEY_UPGRADE_PEN:
								this.parent.socket.talk('x', 4);
								break;
							case global.KEY_UPGRADE_DAM:
								this.parent.socket.talk('x', 5);
								break;
							case global.KEY_UPGRADE_RLD:
								this.parent.socket.talk('x', 6);
								break;
							case global.KEY_UPGRADE_MOB:
								this.parent.socket.talk('x', 7);
								break;
							case global.KEY_UPGRADE_RGN:
								this.parent.socket.talk('x', 8);
								break;
							case global.KEY_UPGRADE_SHI:
								this.parent.socket.talk('x', 9);
								break;
						}
					}
					if (global.canUpgrade) {
						switch (event.keyCode) {
							case global.KEY_CHOOSE_1:
								this.parent.socket.talk('U', 0);
								break;
							case global.KEY_CHOOSE_2:
								this.parent.socket.talk('U', 1);
								break;
							case global.KEY_CHOOSE_3:
								this.parent.socket.talk('U', 2);
								break;
							case global.KEY_CHOOSE_4:
								this.parent.socket.talk('U', 3);
								break;
							case global.KEY_CHOOSE_5:
								this.parent.socket.talk('U', 4);
								break;
							case global.KEY_CHOOSE_6:
								this.parent.socket.talk('U', 5);
								break;
							case global.KEY_CHOOSE_7:
								this.parent.socket.talk('U', 6);
								break;
							case global.KEY_CHOOSE_8:
								this.parent.socket.talk('U', 7);
								break;
						}
					}
				}
			}
		}, {
			key: "keyboardUp",
			value: function keyboardUp(event) {
				switch (event.keyCode) {
					case global.KEY_UP_ARROW:
					case global.KEY_UP:
						this.parent.socket.cmd.set(0, false);
						break;
					case global.KEY_DOWN_ARROW:
					case global.KEY_DOWN:
						this.parent.socket.cmd.set(1, false);
						break;
					case global.KEY_LEFT_ARROW:
					case global.KEY_LEFT:
						this.parent.socket.cmd.set(2, false);
						break;
					case global.KEY_RIGHT_ARROW:
					case global.KEY_RIGHT:
						this.parent.socket.cmd.set(3, false);
						break;
					case global.KEY_MOUSE_0:
						this.parent.socket.cmd.set(4, false);
						break;
					case global.KEY_MOUSE_1:
						this.parent.socket.cmd.set(5, false);
						break;
					case global.KEY_MOUSE_2:
						this.parent.socket.cmd.set(6, false);
						break;
				}
			}
		}, {
			key: "mouseDown",
			value: function mouseDown(mouse) {
				switch (mouse.button) {
					case 0:
						var mpos = {
							x: mouse.clientX,
							y: mouse.clientY
						};
						var statIndex = global.clickables.stat.check(mpos);
						if (statIndex !== -1) this.parent.socket.talk('x', statIndex);else if (global.clickables.skipUpgrades.check(mpos) !== -1) global.clearUpgrades();else {
							var upgradeIndex = global.clickables.upgrade.check(mpos);
							if (upgradeIndex !== -1) this.parent.socket.talk('U', upgradeIndex);else this.parent.socket.cmd.set(4, true);
						}
						break;
					case 1:
						this.parent.socket.cmd.set(5, true);
						break;
					case 2:
						this.parent.socket.cmd.set(6, true);
						break;
				}
			}
		}, {
			key: "mouseUp",
			value: function mouseUp(mouse) {
				switch (mouse.button) {
					case 0:
						this.parent.socket.cmd.set(4, false);
						break;
					case 1:
						this.parent.socket.cmd.set(5, false);
						break;
					case 2:
						this.parent.socket.cmd.set(6, false);
						break;
				}
			}
			// Mouse location (we send target information in the heartbeat)

		}, {
			key: "gameInput",
			value: function gameInput(mouse) {
				this.parent.target.x = mouse.clientX - this.width / 2;
				this.parent.target.y = mouse.clientY - this.height / 2;
				global.target = this.parent.target;
				global.statHover = global.clickables.hover.check({
					x: mouse.clientX,
					y: mouse.clientY
				}) === 0;
			}
		}]);

		return Canvas;
	}();
	window.canvas = new Canvas();
	var c = window.canvas.cv;
	var ctx = c.getContext('2d');
	var c2 = document.createElement('canvas');
	var ctx2 = c2.getContext('2d');
	ctx2.imageSmoothingEnabled = true;

	// Animation things
	function isInView(x, y, r) {
		var mid = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;

		var ratio = getRatio();
		r += config.graphical.borderChunk;
		if (mid) {
			ratio *= 2;
			return x > -global.screenWidth / ratio - r && x < global.screenWidth / ratio + r && y > -global.screenHeight / ratio - r && y < global.screenHeight / ratio + r;
		}
		return x > -r && x < global.screenWidth / ratio + r && y > -r && y < global.screenHeight / ratio + r;
	}

	function Smoothbar(value, speed) {
		var sharpness = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 3;

		var time = Date.now();
		var display = value;
		var oldvalue = value;
		return {
			set: function set(val) {
				if (value !== val) {
					oldvalue = display;
					value = val;
					time = Date.now();
				}
			},
			get: function get() {
				var timediff = (Date.now() - time) / 1000;
				display = timediff < speed ? oldvalue + (value - oldvalue) * Math.pow(timediff / speed, 1 / sharpness) : value;
				return display;
			}
		};
	}

	// Some stuff we need before we can set up the socket
	var sync = [];
	var clockDiff = 0;
	var serverStart = 0;
	var lag = function () {
		var lags = [];
		return {
			get: function get() {
				if (!lags.length) return 0;
				var sum = lags.reduce(function (a, b) {
					return a + b;
				});
				return sum / lags.length;
			},
			add: function add(l) {
				lags.push(l);
				if (lags.length > config.lag.memory) {
					lags.splice(0, 1);
				}
			}
		};
	}();
	var getNow = function getNow() {
		return Date.now() - clockDiff - serverStart;
	};
	var player = {
		vx: 0,
		vy: 0,
		lastvx: 0,
		lastvy: 0,
		renderx: player.x,
		rendery: player.y,
		lastx: player.x,
		lasty: player.y,
		target: window.canvas.target,
		name: '',
		lastUpdate: 0,
		time: 0
	};

	// Jumping the gun on motion
	var moveCompensation = function () {
		var xx = 0,
		    yy = 0,
		    vx = 0,
		    vy = 0;
		return {
			reset: function reset() {
				xx = 0;
				yy = 0;
			},
			get: function get() {
				if (config.lag.unresponsive) {
					return {
						x: 0,
						y: 0
					};
				}
				return {
					x: xx,
					y: yy
				};
			},
			iterate: function iterate(g) {
				if (global.died || global.gameStart) return 0;
				// Add motion
				var damp = _gui.accel / _gui.topSpeed,
				    len = Math.sqrt(g.x * g.x + g.y * g.y);
				vx += _gui.accel * g.x / len;
				vy += _gui.accel * g.y / len;
				// Dampen motion
				var motion = Math.sqrt(vx * vx + vy * vy);
				if (motion > 0 && damp) {
					var finalvelocity = motion / (damp / roomSpeed + 1);
					vx = finalvelocity * vx / motion;
					vy = finalvelocity * vy / motion;
				}
				xx += vx;
				yy += vy;
			}
		};
	}();

	// Prepare the websocket for definition
	var socketInit = function () {
		// Inital setup stuff
		window.WebSocket = window.WebSocket || window.MozWebSocket;
		var encode = function () {
			// unsigned 8-bit integer
			var arrUint8 = new Uint8Array(1);
			// unsigned 16-bit integer
			var arrUint16 = new Uint16Array(1);
			var charUint16 = new Uint8Array(arrUint16.buffer);
			// unsigned 32-bit integer
			var arrUint32 = new Uint32Array(1);
			var charUint32 = new Uint8Array(arrUint32.buffer);
			// 32-bit float
			var arrFloat32 = new Float32Array(1);
			var charFloat32 = new Uint8Array(arrFloat32.buffer);
			// build some useful internal functions
			var typeEncoder = function typeEncoder(type, number) {
				var output = '';
				switch (type) {
					case 'RawUint8':
						arrUint8[0] = number;
						return String.fromCharCode(arrUint8[0]);
					case 'RawUint16':
						arrUint16[0] = number;
						return String.fromCharCode(charUint16[0], charUint16[1]);
					case 'Uint8':
						arrUint8[0] = number;
						return '0' + String.fromCharCode(arrUint8[0]);
					case 'Uint16':
						arrUint16[0] = number;
						return '1' + String.fromCharCode(charUint16[0], charUint16[1]);
					case 'Uint32':
						arrUint32[0] = number;
						return '2' + String.fromCharCode(charUint32[0], charUint32[1], charUint32[2], charUint32[3]);
					case 'Sint8':
						arrUint8[0] = -1 - number;
						return '3' + String.fromCharCode(arrUint8[0]);
					case 'Sint16':
						arrUint16[0] = -1 - number;
						return '4' + String.fromCharCode(charUint16[0], charUint16[1]);
					case 'Sint32':
						arrUint32[0] = -1 - number;
						return '5' + String.fromCharCode(charUint32[0], charUint32[1], charUint32[2], charUint32[3]);
					case 'Float32':
						arrFloat32[0] = number;
						return '6' + String.fromCharCode(charFloat32[0], charFloat32[1], charFloat32[2], charFloat32[3]);
					case 'String8':
						return '7' + typeEncoder('RawUint16', number.length) + number;
					case 'String16':
						for (var i = 0, strLen = number.length; i < strLen; i++) {
							output += typeEncoder('RawUint16', number.charCodeAt(i));
						}
						return '8' + typeEncoder('RawUint16', output.length) + output;
					default:
						throw new Error('Unknown encoding type.');
				}
			};
			var findType = function findType(value) {
				if (typeof value === 'string') {
					for (var i = 0; i < value.length; i++) {
						if (value.charCodeAt(i) > 255) return 'String16';
					}
					return 'String8';
				}
				if (typeof value === 'boolean') return 'Uint8';
				if (typeof value !== 'number') {
					console.log(value);
					throw new Error('Unencodable data type');
				}
				if (value != Math.round(value)) return 'Float32';
				if (value < 0) {
					if (value >= -256) return 'Sint8';
					if (value >= -65535) return 'Sint16';
					if (value >= -4294967295) return 'Sint32';
				} else {
					if (value < 256) return 'Uint8';
					if (value < 65535) return 'Uint16';
					if (value < 4294967295) return 'Uint32';
				}
				return 'Float32';
			};
			// build the function
			return function (arr) {
				var verbose = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

				var output = arr.splice(0, 1)[0];
				if (typeof output !== 'string') throw new Error('No identification code!');
				var _iteratorNormalCompletion2 = true;
				var _didIteratorError2 = false;
				var _iteratorError2 = undefined;

				try {
					for (var _iterator2 = arr[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
						var value = _step2.value;

						output += typeEncoder(findType(value), value);
					}
				} catch (err) {
					_didIteratorError2 = true;
					_iteratorError2 = err;
				} finally {
					try {
						if (!_iteratorNormalCompletion2 && _iterator2.return) {
							_iterator2.return();
						}
					} finally {
						if (_didIteratorError2) {
							throw _iteratorError2;
						}
					}
				}

				;
				var len = output.length;
				var buffer = new ArrayBuffer(len);
				var integerView = new Uint8Array(buffer);
				for (var i = 0; i < len; i++) {
					integerView[i] = output.charCodeAt(i);
				}
				if (verbose) {
					console.log('OUTPUT: ' + integerView);
					console.log('RAW OUTPUT: ' + output);
					console.log('SIZE: ' + len);
				}
				return buffer;
			};
		}();

		var decode = function () {
			// unsigned 8-bit integer (none needed)
			// unsigned 16-bit integer
			var arrUint16 = new Uint16Array(1);
			var charUint16 = new Uint8Array(arrUint16.buffer);
			// unsigned 32-bit integer
			var arrUint32 = new Uint32Array(1);
			var charUint32 = new Uint8Array(arrUint32.buffer);
			// 32-bit float
			var arrFloat32 = new Float32Array(1);
			var charFloat32 = new Uint8Array(arrFloat32.buffer);
			// build a useful internal function
			var typeDecoder = function typeDecoder(str, type, offset) {
				switch (type) {
					case 'Uint8':
						return str.charCodeAt(offset++);
					case 'Uint16':
						for (var i = 0; i < 2; i++) {
							charUint16[i] = str.charCodeAt(offset++);
						}
						return arrUint16[0];
					case 'Uint32':
						for (var _i2 = 0; _i2 < 4; _i2++) {
							charUint32[_i2] = str.charCodeAt(offset++);
						}
						return arrUint32[0];
					case 'Sint8':
						return -1 - str.charCodeAt(offset++);
					case 'Sint16':
						for (var _i3 = 0; _i3 < 2; _i3++) {
							charUint16[_i3] = str.charCodeAt(offset++);
						}
						return -1 - arrUint16[0];
					case 'Sint32':
						for (var _i4 = 0; _i4 < 4; _i4++) {
							charUint32[_i4] = str.charCodeAt(offset++);
						}
						return -1 - arrUint32[0];
					case 'Float32':
						for (var _i5 = 0; _i5 < 4; _i5++) {
							charFloat32[_i5] = str.charCodeAt(offset++);
						}
						return arrFloat32[0];
					default:
						throw new Error('Unknown decoding type.');
				}
			};
			// actually decode it 
			return function (raw) {
				try {
					var intView = new Uint8Array(raw);
					var str = '';
					for (var i = 0, len = intView.length; i < len; i++) {
						str += String.fromCharCode(intView[i]);
					}
					var offset = 1;
					var output = [str.charAt(0)];
					while (offset < str.length) {
						switch (str[offset++]) {
							case '0':
								output.push(typeDecoder(str, 'Uint8', offset));
								offset++;
								break;
							case '1':
								output.push(typeDecoder(str, 'Uint16', offset));
								offset += 2;
								break;
							case '2':
								output.push(typeDecoder(str, 'Uint32', offset));
								offset += 4;
								break;
							case '3':
								output.push(typeDecoder(str, 'Sint8', offset));
								offset++;
								break;
							case '4':
								output.push(typeDecoder(str, 'Sint16', offset));
								offset += 2;
								break;
							case '5':
								output.push(typeDecoder(str, 'Sint32', offset));
								offset += 4;
								break;
							case '6':
								output.push(typeDecoder(str, 'Float32', offset));
								offset += 4;
								break;
							case '7':
								{
									// String8
									var _len4 = typeDecoder(str, 'Uint16', offset);offset += 2;
									output.push(str.slice(offset, offset + _len4));
									offset += _len4;
								}
								break;
							case '8':
								{
									// String16
									var _len5 = typeDecoder(str, 'Uint16', offset);offset += 2;
									var arr = str.slice(offset, offset + _len5);
									var buf = new Uint16Array(_len5 / 2);
									for (var _i6 = 0; _i6 < _len5; _i6 += 2) {
										buf[_i6 / 2] = typeDecoder(arr, 'Uint16', _i6);
									}
									output.push(String.fromCharCode.apply(null, buf));
									offset += _len5;
								}
								break;
							default:
								offset = str.length;
								throw new Error('Unknown decoding command. Decoding exited.');
						}
					}
					return output;
				} catch (err) {
					console.log(err);
					return -1;
				}
			};
		}();
		// This is what we use to figure out what the hell the server is telling us to look at
		var convert = function () {
			// Make a data crawler
			var get = function () {
				var index = 0,
				    crawlData = [];
				return {
					next: function next() {
						if (index >= crawlData.length) {
							console.log(crawlData);
							throw new Error('Trying to crawl past the end of the provided data!');
						} else {
							return crawlData[index++];
						}
					},
					set: function set(data) {
						crawlData = data;
						index = 0;
					}
				};
			}();
			// Return our handlers 
			return {
				begin: function begin(data) {
					return get.set(data);
				},
				// Make a data convertor
				data: function () {
					// Make a converter
					var process = function () {
						// Some status manager constructors
						var GunContainer = function () {
							function physics(g) {
								g.isUpdated = true;
								if (g.motion || g.position) {
									// Simulate recoil
									g.motion -= 0.2 * g.position;
									g.position += g.motion;
									if (g.position < 0) {
										// Bouncing off the back
										g.position = 0;
										g.motion = -g.motion;
									}
									if (g.motion > 0) {
										g.motion *= 0.5;
									}
								}
							}
							return function (n) {
								var a = [];
								for (var i = 0; i < n; i++) {
									a.push({
										motion: 0,
										position: 0,
										isUpdated: true
									});
								}
								return {
									getPositions: function getPositions() {
										return a.map(function (g) {
											return g.position;
										});
									},
									update: function update() {
										return a.forEach(physics);
									},
									fire: function fire(i, power) {
										if (a[i].isUpdated) a[i].motion += Math.sqrt(power) / 20;
										a[i].isUpdated = false;
									},
									length: a.length
								};
							};
						}();

						function Status() {
							var state = 'normal',
							    time = getNow();
							return {
								set: function set(val) {
									if (val !== state || state === 'injured') {
										if (state !== 'dying') time = getNow();
										state = val;
									}
								},
								getFade: function getFade() {
									return state === 'dying' || state === 'killed' ? 1 - Math.min(1, (getNow() - time) / 300) : 1;
								},
								getColor: function getColor() {
									return '#FFFFFF';
								},
								getBlend: function getBlend() {
									var o = state === 'normal' || state === 'dying' ? 0 : 1 - Math.min(1, (getNow() - time) / 80);
									if (getNow() - time > 500 && state === 'injured') {
										state = 'normal';
									}
									return o;
								}
							};
						}
						// Return our function
						return function () {
							var z = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

							var isNew = z.facing == null; // For whatever reason arguments.length is uglified poorly...
							// Figure out what kind of data we're looking at
							var type = get.next();
							// Handle it appropiately
							if (type & 0x01) {
								// issa turret
								z.facing = get.next();
								z.layer = get.next();
							} else {
								// issa something real
								z.interval = metrics.rendergap;
								z.id = get.next();
								// Determine if this is an new entity or if we already know about it
								var iii = entities.findIndex(function (x) {
									return x.id === z.id;
								});
								if (iii !== -1) {
									// remove it if needed (this way we'll only be left with the dead/unused entities)
									z = entities.splice(iii, 1)[0];
								}
								// Change the use of the variable
								isNew = iii === -1;
								// If it's not new, save the memory data
								if (!isNew) {
									z.render.draws = true; // yay!!
									z.render.lastx = z.x;
									z.render.lasty = z.y;
									z.render.lastvx = z.vx;
									z.render.lastvy = z.vy;
									z.render.lastf = z.facing;
									z.render.lastRender = player.time;
								}
								// Either way, keep pulling information
								z.index = get.next();
								z.x = get.next();
								z.y = get.next();
								z.vx = get.next();
								z.vy = get.next();
								z.size = get.next();
								z.facing = get.next();
								z.vfacing = get.next();
								z.twiggle = get.next();
								z.layer = get.next();
								z.color = get.next();
								// Update health, flagging as injured if needed
								if (isNew) {
									z.health = get.next() / 255;
									z.shield = get.next() / 255;
								} else {
									var hh = z.health,
									    ss = z.shield;
									z.health = get.next() / 255;
									z.shield = get.next() / 255;
									// Update stuff
									if (z.health < hh || z.shield < ss) {
										z.render.status.set('injured');
									} else if (z.render.status.getFade() !== 1) {
										// If it turns out that we thought it was dead and it wasn't
										z.render.status.set('normal');
									}
								}
								z.drawsHealth = !!(type & 0x02); // force to boolean
								z.alpha = get.next() / 255;
								// Nameplates
								if (type & 0x04) {
									// has a nameplate
									z.name = get.next();
									z.score = get.next();
								}
								z.nameplate = type & 0x04;
								// If it's new, give it rendering information
								if (isNew) {
									z.render = {
										draws: false,
										expandsWithDeath: z.drawsHealth,
										lastRender: player.time,
										x: z.x,
										y: z.y,
										lastx: z.x - metrics.rendergap * config.roomSpeed * (1000 / 120) * z.vx,
										lasty: z.y - metrics.rendergap * config.roomSpeed * (1000 / 120) * z.vy,
										lastvx: z.vx,
										lastvy: z.vy,
										lastf: z.facing,
										f: z.facing,
										h: z.health,
										s: z.shield,
										interval: metrics.rendergap,
										slip: 0,
										status: Status(),
										health: Smoothbar(z.health, 0.5, 5),
										shield: Smoothbar(z.shield, 0.5, 5)
									};
								}
								// Update the rendering healthbars
								z.render.health.set(z.health);
								z.render.shield.set(z.shield);
								// Figure out if the class changed (and if so, refresh the guns and turrets)
								if (!isNew && z.oldIndex !== z.index) isNew = true;
								z.oldIndex = z.index;
							}
							// If it needs to have a gun container made, make one
							var gunnumb = get.next();
							if (isNew) {
								z.guns = GunContainer(gunnumb);
							} else if (gunnumb !== z.guns.length) {
								throw new Error('Mismatch between data gun number and remembered gun number!');
							}
							// Decide if guns need to be fired one by one
							for (var i = 0; i < gunnumb; i++) {
								var time = get.next(),
								    power = get.next();
								if (time > player.lastUpdate - metrics.rendergap) {
									// shoot it
									z.guns.fire(i, power);
								}
							}
							// Update turrets
							var turnumb = get.next();
							if (turnumb) {
								var b = 1;
							}
							if (isNew) {
								z.turrets = [];
								for (var _i7 = 0; _i7 < turnumb; _i7++) {
									z.turrets.push(process());
								}
							} else {
								if (z.turrets.length !== turnumb) {
									throw new Error('Mismatch between data turret number and remembered turret number!');
								}
								z.turrets.forEach(function (tur) {
									tur = process(tur);
								});
							}
							// Return our monsterous creation
							return z;
						};
					}();
					// And this is the function we return that crawls some given data and reports it
					return function () {
						// Set up the output thingy+
						var output = [];
						// Get the number of entities and work through them
						for (var i = 0, len = get.next(); i < len; i++) {
							output.push(process());
						}
						// Handle the dead/leftover entities
						var _iteratorNormalCompletion3 = true;
						var _didIteratorError3 = false;
						var _iteratorError3 = undefined;

						try {
							for (var _iterator3 = entities[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
								var e = _step3.value;

								// Kill them
								e.render.status.set(e.health === 1 ? 'dying' : 'killed');
								// And only push them if they're not entirely dead and still visible
								if (e.render.status.getFade() !== 0 && isInView(e.render.x - player.renderx, e.render.y - player.rendery, e.size, true)) {
									output.push(e);
								} else {
									if (e.render.textobjs != null) e.render.textobjs.forEach(function (o) {
										return o.remove();
									});
								}
							}
						} catch (err) {
							_didIteratorError3 = true;
							_iteratorError3 = err;
						} finally {
							try {
								if (!_iteratorNormalCompletion3 && _iterator3.return) {
									_iterator3.return();
								}
							} finally {
								if (_didIteratorError3) {
									throw _iteratorError3;
								}
							}
						}

						;
						// Save the new entities list
						entities = output;
						entities.sort(function (a, b) {
							var sort = a.layer - b.layer;
							if (!sort) sort = b.id - a.id;
							if (!sort) throw new Error('tha fuq is up now');
							return sort;
						});
					};
				}(),
				// Define our gui convertor
				gui: function gui() {
					var index = get.next(),


					// Translate the encoded index
					indices = {
						topspeed: index & 0x0100,
						accel: index & 0x0080,
						skills: index & 0x0040,
						statsdata: index & 0x0020,
						upgrades: index & 0x0010,
						points: index & 0x0008,
						score: index & 0x0004,
						label: index & 0x0002,
						fps: index & 0x0001
					};
					// Operate only on the values provided
					if (indices.fps) {
						_gui.fps = get.next();
					}
					if (indices.label) {
						_gui.type = get.next();
						_gui.color = get.next();
						_gui.playerid = get.next();
					}
					if (indices.score) {
						_gui.__s.setScore(get.next());
					}
					if (indices.points) {
						_gui.points = get.next();
					}
					if (indices.upgrades) {
						_gui.upgrades = [];
						for (var i = 0, len = get.next(); i < len; i++) {
							_gui.upgrades.push(get.next());
						}
					}
					if (indices.statsdata) {
						for (var _i8 = 9; _i8 >= 0; _i8--) {
							_gui.skills[_i8].name = get.next();
							_gui.skills[_i8].cap = get.next();
							_gui.skills[_i8].softcap = get.next();
						}
					}
					if (indices.skills) {
						var skk = parseInt(get.next(), 36).toString(16);
						skk = '0000000000'.substr(skk.length) + skk;
						_gui.skills[0].amount = parseInt(skk.slice(0, 1), 16);
						_gui.skills[1].amount = parseInt(skk.slice(1, 2), 16);
						_gui.skills[2].amount = parseInt(skk.slice(2, 3), 16);
						_gui.skills[3].amount = parseInt(skk.slice(3, 4), 16);
						_gui.skills[4].amount = parseInt(skk.slice(4, 5), 16);
						_gui.skills[5].amount = parseInt(skk.slice(5, 6), 16);
						_gui.skills[6].amount = parseInt(skk.slice(6, 7), 16);
						_gui.skills[7].amount = parseInt(skk.slice(7, 8), 16);
						_gui.skills[8].amount = parseInt(skk.slice(8, 9), 16);
						_gui.skills[9].amount = parseInt(skk.slice(9, 10), 16);
					}
					if (indices.accel) {
						_gui.accel = get.next();
					}
					if (indices.topspeed) {
						_gui.topspeed = get.next();
					}
				},
				// Make a minimap convertor
				minimap: function () {
					var loop = function () {
						// A test function
						function challenge(value, challenger) {
							return value[0] === challenger[0] && value[1] === challenger[1] && value[2] === challenger[2];
						}
						// The loop function definition
						return function () {
							// Pull the update order
							var type = get.next(),
							    x = get.next() * global.gameWidth / 255,
							    y = get.next() * global.gameHeight / 255,
							    color = get.next();
							// Fufill the order
							switch (type) {
								case -1:
									{
										// removal
										var index = minimap.findIndex(function (e) {
											return challenge(e, [x, y, color]);
										});
										if (index === -1) {
											console.log('Warning: Remove request for a minimap node we were not aware of.');
										} else {
											minimap.splice(index, 1);
										}
									}
									break;
								case 1:
									{
										//insertion
										minimap.push([x, y, color]);
									}
									break;
								default:
									console.log('Unknown minimap update request.');
							}
						};
					}();
					// The update function
					return function () {
						for (var i = 0, len = get.next(); i < len; i++) {
							loop();
						}
					};
				}(),
				// Define our leaderboard convertor
				leaderboard: function leaderboard() {
					var whoopswedesynced = false;
					// First crawl the remove orders
					var first = get.next();
					if (first === -1) {
						// o shit its a full refresh, nuke it and start over
						_leaderboard.purge();
					} else {
						// Remove things normally
						for (var i = 0, len = first; i < len; i++) {
							_leaderboard.remove(get.next());
						}
					}
					// Then do the next things
					for (var _i9 = 0, _len6 = get.next(); _i9 < _len6; _i9++) {
						var next = get.next();
						if (next < 0) {
							// It's an add index!
							var toadd = {
								id: -next,
								score: get.next(),
								index: get.next(),
								name: get.next(),
								color: get.next(),
								barcolor: get.next()
							};
							_leaderboard.add(toadd);
						} else {
							// It's an update index!
							var w = _leaderboard.update({
								id: next,
								score: get.next(),
								index: get.next()
							});
							if (w === -1) whoopswedesynced = true;
						}
					}
					return whoopswedesynced;
				}
			};
		}();
		// The initialization function (this is returned)
		return function (port) {
			console.log("trying to connect to server");
			var socket = new WebSocket('wss://' + window.location.hostname + ':' + port);
			console.log("Socket opened");
			// Set up our socket
			socket.binaryType = 'arraybuffer';
			socket.open = false;
			// Handle commands
			socket.cmd = function () {
				var flag = false;
				var commands = [false, // up
				false, // down
				false, // left
				false, // right
				false, // lmb
				false, // mmb
				false, // rmb 
				false];
				return {
					set: function set(index, value) {
						if (commands[index] !== value) {
							commands[index] = value;
							flag = true;
						}
					},
					talk: function talk() {
						flag = false;
						var o = 0;
						for (var i = 0; i < 8; i++) {
							if (commands[i]) o += Math.pow(2, i);
						}
						var ratio = getRatio();
						socket.talk('C', Math.round(window.canvas.target.x / ratio), Math.round(window.canvas.target.y / ratio), o);
					},
					check: function check() {
						return flag;
					},
					getMotion: function getMotion() {
						return {
							x: commands[3] - commands[2],
							y: commands[1] - commands[0]
						};
					}
				};
			}();
			// Learn how to talk
			socket.talk = function () {
				for (var _len7 = arguments.length, message = Array(_len7), _key2 = 0; _key2 < _len7; _key2++) {
					message[_key2] = arguments[_key2];
				}

				// Make sure the socket is open before we do anything
				if (!socket.open) return 1;
				socket.send(encode(message));
			};
			// Websocket functions for when stuff happens
			// This is for when the socket first opens
			socket.onopen = function socketOpen() {
				socket.open = true;
				global.message = 'That token is invalid, expired, or already in use on this server. Please try another one!';
				socket.talk('k', global.playerKey);
				console.log('Token submitted to the server for validation.');
				// define a pinging function
				socket.ping = function (payload) {
					socket.talk('p', payload);
				};
				console.log(socket.ping, global.socket, global.socket.ping);
				socket.commandCycle = setInterval(function () {
					if (socket.cmd.check()) socket.cmd.talk();
				});
			};
			// Handle incoming messages
			socket.onmessage = function socketMessage(message) {
				// Make sure it looks legit.
				var m = decode(message.data);
				if (m === -1) {
					throw new Error('Malformed packet.');
				}
				// Decide how to interpret it
				switch (m.splice(0, 1)[0]) {
					case 'w':
						{
							// welcome to the game
							if (m[0]) {
								// Ask to spawn                    
								console.log('The server has welcomed us to the game room. Sending spawn request.');
								socket.talk('s', global.playerName, 1);
								global.message = '';
							}
						}
						break;
					case 'R':
						{
							// room setup
							global.gameWidth = m[0];
							global.gameHeight = m[1];
							roomSetup = JSON.parse(m[2]);
							serverStart = JSON.parse(m[3]);
							config.roomSpeed = m[4];
							console.log('Room data recieved. Commencing syncing process.');
							// Start the syncing process
							socket.talk('S', getNow());
						}
						break;
					case 'c':
						{
							// force camera move
							player.renderx = player.x = m[0];
							player.rendery = player.y = m[1];
							player.renderv = player.view = m[2];
							console.log('Camera moved!');
						}
						break;
					case 'S':
						{
							// clock syncing
							var clientTime = m[0],
							    serverTime = m[1],
							    laten = (getNow() - clientTime) / 2,
							    delta = getNow() - laten - serverTime;
							// Add the datapoint to the syncing data
							sync.push({
								delta: delta,
								latency: laten
							});
							// Do it again a couple times
							if (sync.length < 10) {
								// Wait a bit just to space things out
								setTimeout(function () {
									socket.talk('S', getNow());
								}, 10);
								global.message = "Tip: Beware of safety. - " + sync.length + "/10...";
							} else {
								// Calculate the clock error
								sync.sort(function (e, f) {
									return e.latency - f.latency;
								});
								var median = sync[Math.floor(sync.length / 2)].latency;
								var sd = 0,
								    sum = 0,
								    valid = 0;
								var _iteratorNormalCompletion4 = true;
								var _didIteratorError4 = false;
								var _iteratorError4 = undefined;

								try {
									for (var _iterator4 = sync[Symbol.iterator](), _step4; !(_iteratorNormalCompletion4 = (_step4 = _iterator4.next()).done); _iteratorNormalCompletion4 = true) {
										var e = _step4.value;

										sd += Math.pow(e.latency - median, 2);
									}
								} catch (err) {
									_didIteratorError4 = true;
									_iteratorError4 = err;
								} finally {
									try {
										if (!_iteratorNormalCompletion4 && _iterator4.return) {
											_iterator4.return();
										}
									} finally {
										if (_didIteratorError4) {
											throw _iteratorError4;
										}
									}
								}

								;
								sd = Math.sqrt(sd / sync.length);
								var _iteratorNormalCompletion5 = true;
								var _didIteratorError5 = false;
								var _iteratorError5 = undefined;

								try {
									for (var _iterator5 = sync[Symbol.iterator](), _step5; !(_iteratorNormalCompletion5 = (_step5 = _iterator5.next()).done); _iteratorNormalCompletion5 = true) {
										var e = _step5.value;

										if (Math.abs(e.latency - median) < sd) {
											sum += e.delta;
											valid++;
										}
									}
								} catch (err) {
									_didIteratorError5 = true;
									_iteratorError5 = err;
								} finally {
									try {
										if (!_iteratorNormalCompletion5 && _iterator5.return) {
											_iterator5.return();
										}
									} finally {
										if (_didIteratorError5) {
											throw _iteratorError5;
										}
									}
								}

								;
								clockDiff = Math.round(sum / valid);
								// Start the game
								console.log(sync);
								console.log('Syncing complete, calculated clock difference ' + clockDiff + 'ms. Beginning game.');
								global.gameStart = true;
								global.message = '';
							}
						}
						break;
					case 'm':
						{
							// message
							messages.push({
								text: m[0],
								status: 2,
								alpha: 0,
								time: Date.now()
							});
						}
						break;
					case 'u':
						{
							// uplink
							// Pull the camera info
							var camtime = m[0],
							    camx = m[1],
							    camy = m[2],
							    camfov = m[3],
							    camvx = m[4],
							    camvy = m[5],


							// We'll have to do protocol decoding on the remaining data
							theshit = m.slice(6);
							// Process the data
							if (camtime > player.lastUpdate) {
								// Don't accept out-of-date information. 
								// Time shenanigans
								lag.add(getNow() - camtime);
								player.time = camtime + lag.get();
								metrics.rendergap = camtime - player.lastUpdate;
								if (metrics.rendergap <= 0) {
									console.log('yo some bullshit is up wtf');
								}
								player.lastUpdate = camtime;
								// Convert the gui and entities
								convert.begin(theshit);
								convert.gui();
								convert.data();
								// Save old physics values
								player.lastx = player.x;
								player.lasty = player.y;
								player.lastvx = player.vx;
								player.lastvy = player.vy;
								// Get new physics values
								player.x = camx;
								player.y = camy;
								player.vx = global.died ? 0 : camvx;
								player.vy = global.died ? 0 : camvy;
								// Figure out where we're rendering if we don't yet know
								if (isNaN(player.renderx)) {
									player.renderx = player.x;
								}
								if (isNaN(player.rendery)) {
									player.rendery = player.y;
								}
								moveCompensation.reset();
								// Fov stuff
								player.view = camfov;
								if (isNaN(player.renderv) || player.renderv === 0) {
									player.renderv = 2000;
								}
								// Metrics
								metrics.lastlag = metrics.lag;
								metrics.lastuplink = getNow();
							} else {
								console.log("Old data! Last given time: " + player.time + "; offered packet timestamp: " + camtime + ".");
							}
							// Send the downlink and the target
							socket.talk('d', Math.max(player.lastUpdate, camtime));
							socket.cmd.talk();
							updateTimes++; // metrics                                        
						}
						break;
					case 'b':
						{
							// broadcasted minimap
							convert.begin(m);
							convert.minimap();
							if (convert.leaderboard()) {
								// Request an update because of desync
								socket.talk('z');
							}
						}
						break;
					case 'p':
						{
							// ping
							metrics.latency = global.time - m[0];
						}
						break;
					case 'F':
						{
							// to pay respects
							global.finalScore = Smoothbar(0, 4);global.finalScore.set(m[0]);
							global.finalLifetime = Smoothbar(0, 5);global.finalLifetime.set(m[1]);
							global.finalKills = [Smoothbar(0, 3), Smoothbar(0, 4.5), Smoothbar(0, 2.5)];
							global.finalKills[0].set(m[2]);global.finalKills[1].set(m[3]);global.finalKills[2].set(m[4]);
							global.finalKillers = [];
							for (var i = 0; i < m[5]; i++) {
								global.finalKillers.push(m[6 + i]);
							}
							global.died = true;
							window.onbeforeunload = function () {
								return false;
							};
						}
						break;
					case 'K':
						{
							// kicked
							window.onbeforeunload = function () {
								return false;
							};
						}
						break;
					default:
						throw new Error('Unknown message index.');
				}
			};
			// Handle closing 
			socket.onclose = function socketClose() {
				socket.open = false;
				global.disconnected = true;
				clearInterval(socket.commandCycle);
				window.onbeforeunload = function () {
					return false;
				};
				console.log('Socket closed.');
			};
			// Notify about errors
			socket.onerror = function socketError(error) {
				console.log('WebSocket error: ' + error);
				var weberror = error;
				global.message = 'Socket error. Maybe another server will work.';
			};
			// Gift it to the rest of the world
			return socket;
		};
	}();

	// This starts the game and sets up the websocket
	function startGame() {
		console.log("trying to start game");
		// Get options
		submitToLocalStorage('optScreenshotMode');
		config.graphical.screenshotMode = document.getElementById('optScreenshotMode').checked;
		submitToLocalStorage('optFancy');
		config.graphical.pointy = !document.getElementById('optNoPointy').checked;
		submitToLocalStorage('optNoPointy');
		config.graphical.fancyAnimations = !document.getElementById('optFancy').checked;
		submitToLocalStorage('optPredictive');
		config.lag.unresponsive = document.getElementById('optPredictive').checked;
		submitToLocalStorage('optBorders');
		switch (document.getElementById('optBorders').value) {
			case 'normal':
				config.graphical.darkBorders = config.graphical.neon = false;
				break;
			case 'dark':
				config.graphical.darkBorders = true;
				config.graphical.neon = false;
				break;
			case 'glass':
				config.graphical.darkBorders = false;
				config.graphical.neon = true;
				break;
			case 'neon':
				config.graphical.darkBorders = config.graphical.neon = true;
				break;
		}
		submitToLocalStorage('optColors');
		var a = document.getElementById('optColors').value;
		color = color[a === '' ? 'normal' : a];
		// Other more important stuff
		var playerNameInput = document.getElementById('playerNameInput');
		var playerKeyInput = document.getElementById('playerKeyInput');
		// Name and keys
		submitToLocalStorage('playerNameInput');
		submitToLocalStorage('playerKeyInput');
		global.playerName = player.name = playerNameInput.value;
		global.playerKey = playerKeyInput.value.replace(/(<([^>]+)>)/ig, '').substring(0, 64);
		console.log("Loaded info from local stroage");
		// Change the screen
		global.screenWidth = window.innerWidth;
		global.screenHeight = window.innerHeight;
		document.getElementById('startMenuWrapper').style.maxHeight = '0px';
		document.getElementById('gameAreaWrapper').style.opacity = 1;
		console.log("Changed the screen");
		// Set up the socket
		if (!global.socket) {
			global.socket = socketInit('');
		}
		console.log("tried opening a socket.....");
		console.log(global.socket);
		if (!global.animLoopHandle) {
			animloop();
		}
		window.canvas.socket = global.socket;
		minimap = [];
		setInterval(function () {
			return moveCompensation.iterate(global.socket.cmd.getMotion());
		}, 1000 / 120);
		document.getElementById('gameCanvas').focus();
		window.onbeforeunload = function () {
			return true;
		};
	}

	// Background clearing
	function clearScreen(clearColor, alpha) {
		ctx.fillStyle = clearColor;
		ctx.globalAlpha = alpha;
		ctx.fillRect(0, 0, global.screenWidth, global.screenHeight);
		ctx.globalAlpha = 1;
	}

	// Text functions
	var measureText = function () {
		var div = document.createElement('div');
		document.body.appendChild(div);
		return function (text, fontSize) {
			var twod = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

			fontSize += config.graphical.fontSizeBoost;
			var w, h;
			div.style.font = 'bold ' + fontSize + 'px Segoe UI';
			div.style.padding = '0';
			div.style.margin = '0';
			div.style.position = 'absolute';
			div.style.visibility = 'hidden';
			div.innerHTML = text;
			w = div.clientWidth;
			h = div.clientHeight;
			return twod ? {
				width: w,
				height: h
			} : w;
		};
	}();
	var TextObj = function () {
		// A thing
		var floppy = function floppy() {
			var value = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;

			var flagged = true;
			// Methods
			return {
				update: function update(newValue) {
					var eh = false;
					if (value == null) {
						eh = true;
					} else {
						if ((typeof newValue === "undefined" ? "undefined" : _typeof(newValue)) != (typeof value === "undefined" ? "undefined" : _typeof(value))) {
							eh = true;
						}
						// Decide what to do based on what type it is
						switch (typeof newValue === "undefined" ? "undefined" : _typeof(newValue)) {
							case 'number':
							case 'string':
								{
									if (newValue !== value) {
										eh = true;
									}
								}
								break;
							case 'object':
								{
									if (Array.isArray(newValue)) {
										if (newValue.length !== value.length) {
											eh = true;
										} else {
											for (var i = 0, len = newValue.length; i < len; i++) {
												if (newValue[i] !== value[i]) eh = true;
											}
										}
										break;
									}
								} // jshint ignore:line
							default:
								console.log(newValue);
								throw new Error('Unsupported type for a floppyvar!');
						}
					}
					// Update if neeeded
					if (eh) {
						flagged = true;
						value = newValue;
					}
				},
				publish: function publish() {
					return value;
				},
				check: function check() {
					if (flagged) {
						flagged = false;
						return true;
					}
					return false;
				}
			};
		};
		// An index
		var index = 0;
		return function () {
			var textcanvas = document.createElement('canvas');
			var canvasId = 'textCanvasNo' + index++;
			textcanvas.setAttribute('id', canvasId);
			var tctx = textcanvas.getContext('2d');
			tctx.imageSmoothingEnabled = false;
			// Init stuff
			var floppies = [floppy(''), floppy(0), floppy(0), floppy(1), floppy('#FF0000'), floppy('left')];
			var vals = floppies.map(function (f) {
				return f.publish();
			});
			var xx = 0;
			var yy = 0;
			return {
				draw: function draw(text, x, y, size, fill) {
					var align = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : 'left';
					var center = arguments.length > 6 && arguments[6] !== undefined ? arguments[6] : false;
					var fade = arguments.length > 7 && arguments[7] !== undefined ? arguments[7] : 1;

					size += config.graphical.fontSizeBoost;
					// Update stuff
					floppies[0].update(text);
					floppies[1].update(x);
					floppies[2].update(y);
					floppies[3].update(size);
					floppies[4].update(fill);
					floppies[5].update(align);
					// Check stuff
					if (floppies.some(function (f) {
						return f.check();
					})) {
						// Get text dimensions and resize/reset the canvas
						var offset = Math.max(3, size / 5);
						var dim = measureText(text, size - config.graphical.fontSizeBoost, true);
						tctx.canvas.height = dim.height + 2 * offset;
						tctx.canvas.width = dim.width + 2 * offset;
						// Redraw it
						switch (align) {
							case 'left':
							case 'start':
								xx = offset;
								break;
							case 'center':
								xx = tctx.canvas.width / 2;
								break;
							case 'right':
							case 'end':
								xx = tctx.canvas.width - offset;
								break;
						}
						yy = tctx.canvas.height / 2;
						// Draw it
						tctx.lineWidth = offset;
						tctx.font = 'bold ' + size + 'px Segoe UI';
						tctx.textAlign = align;
						tctx.textBaseline = 'middle';
						tctx.strokeStyle = color.black;
						tctx.fillStyle = fill;
						tctx.lineCap = 'round';
						tctx.lineJoin = 'round';
						tctx.strokeText(text, xx, yy);
						tctx.fillText(text, xx, yy);
					}
					// Draw the cached text
					ctx.save();
					ctx.imageSmoothingEnabled = false;
					ctx.drawImage(tctx.canvas, x - xx, y - yy * (1.05 + !center * 0.45));
					ctx.restore();
				},
				remove: function remove() {
					var element = document.getElementById(canvasId);
					if (element != null) element.parentNode.removeChild(element);
				}
			};
		};
	}();

	// Gui drawing functions
	function drawGuiRect(x, y, length, height) {
		var stroke = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : false;

		switch (stroke) {
			case true:
				ctx.strokeRect(x, y, length, height);
				break;
			case false:
				ctx.fillRect(x, y, length, height);
				break;
		}
	}

	function drawGuiLine(x1, y1, x2, y2) {
		ctx.beginPath();
		ctx.lineTo(Math.round(x1) + 0.5, Math.round(y1) + 0.5);
		ctx.lineTo(Math.round(x2) + 0.5, Math.round(y2) + 0.5);
		ctx.closePath();
		ctx.stroke();
	}

	function drawBar(x1, x2, y, width, color) {
		ctx.beginPath();
		ctx.lineTo(x1, y);
		ctx.lineTo(x2, y);
		ctx.lineWidth = width;
		ctx.strokeStyle = color;
		ctx.closePath();
		ctx.stroke();
	}

	// Entity drawing (this is a function that makes a function)
	var drawEntity = function () {
		// Sub-drawing functions
		function drawPoly(context, centerX, centerY, radius, sides) {
			var angle = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : 0;
			var fill = arguments.length > 6 && arguments[6] !== undefined ? arguments[6] : true;

			angle += sides % 2 ? 0 : Math.PI / sides;
			// Start drawing
			context.beginPath();
			if (!sides) {
				// Circle
				context.arc(centerX, centerY, radius, 0, 2 * Math.PI);
			} else if (sides < 0) {
				// Star
				if (config.graphical.pointy) context.lineJoin = 'miter';
				var dip = 1 - 6 / sides / sides;
				sides = -sides;
				context.moveTo(centerX + radius * Math.cos(angle), centerY + radius * Math.sin(angle));
				for (var i = 0; i < sides; i++) {
					var theta = (i + 1) / sides * 2 * Math.PI;
					var htheta = (i + 0.5) / sides * 2 * Math.PI;
					var c = {
						x: centerX + radius * dip * Math.cos(htheta + angle),
						y: centerY + radius * dip * Math.sin(htheta + angle)
					};
					var p = {
						x: centerX + radius * Math.cos(theta + angle),
						y: centerY + radius * Math.sin(theta + angle)
					};
					context.quadraticCurveTo(c.x, c.y, p.x, p.y);
				}
			} else if (sides > 1769) {
				// Star
				if (config.graphical.pointy) context.lineJoin = 'miter';
				var _dip = 1;
				sides = 1769;
				context.moveTo(centerX + radius * Math.cos(angle), centerY + radius * Math.sin(angle));
				for (var _i10 = 0; _i10 < 4; _i10++) {
					var theta = (_i10 + 1) / 3 * 2 * Math.PI;
					var htheta = (_i10 + 0.5) / 4 * 2 * Math.PI;
					var c = {
						x: centerX + radius * _dip * Math.cos(htheta + angle),
						y: centerY + radius * _dip * Math.sin(htheta + angle)
					};
					var p = {
						x: centerX + radius * Math.cos(theta + angle),
						y: centerY + radius * Math.sin(theta + angle)
					};
					context.quadraticCurveTo(c.x, c.y, p.x, p.y);
				}
			} else if (sides > 0) {
				// Polygon
				for (var _i11 = 0; _i11 < sides; _i11++) {
					var _theta = _i11 / sides * 2 * Math.PI;
					var x = centerX + radius * Math.cos(_theta + angle);
					var y = centerY + radius * Math.sin(_theta + angle);
					context.lineTo(x, y);
				}
			}
			context.closePath();
			context.stroke();
			if (fill) {
				context.fill();
			}
			context.lineJoin = 'round';
		}

		function drawTrapezoid(context, x, y, length, height, aspect, angle) {
			var h = [];
			h = aspect > 0 ? [height * aspect, height] : [height, -height * aspect];
			var r = [Math.atan2(h[0], length), Math.atan2(h[1], length)];
			var l = [Math.sqrt(length * length + h[0] * h[0]), Math.sqrt(length * length + h[1] * h[1])];

			context.beginPath();
			context.lineTo(x + l[0] * Math.cos(angle + r[0]), y + l[0] * Math.sin(angle + r[0]));
			context.lineTo(x + l[1] * Math.cos(angle + Math.PI - r[1]), y + l[1] * Math.sin(angle + Math.PI - r[1]));
			context.lineTo(x + l[1] * Math.cos(angle + Math.PI + r[1]), y + l[1] * Math.sin(angle + Math.PI + r[1]));
			context.lineTo(x + l[0] * Math.cos(angle - r[0]), y + l[0] * Math.sin(angle - r[0]));
			context.closePath();
			context.stroke();
			context.fill();
		}
		// The big drawing function
		return function (x, y, instance, ratio) {
			var alpha = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 1;
			var scale = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : 1;
			var rot = arguments.length > 6 && arguments[6] !== undefined ? arguments[6] : 0;
			var turretsObeyRot = arguments.length > 7 && arguments[7] !== undefined ? arguments[7] : false;
			var assignedContext = arguments.length > 8 && arguments[8] !== undefined ? arguments[8] : false;
			var turretInfo = arguments.length > 9 && arguments[9] !== undefined ? arguments[9] : false;
			var render = arguments.length > 10 && arguments[10] !== undefined ? arguments[10] : instance.render;

			var context = assignedContext ? assignedContext : ctx,
			    death = turretInfo ? 1 : render.status.getFade(),
			    fade = (turretInfo ? 1 : render.status.getFade()) * alpha,
			    drawSize = scale * ratio * instance.size,
			    m = mockups[instance.index],
			    xx = x,
			    yy = y,
			    source = turretInfo === false ? instance : turretInfo;
			if (render.expandsWithDeath) drawSize *= 1 + 0.5 * (1 - death);
			if (config.graphical.fancyAnimations && assignedContext != ctx2 && fade !== 1 || !config.graphical.fancyAnimations && fade < 0.05) {
				context = ctx2;
				context.canvas.width = context.canvas.height = drawSize * m.position.axis + ratio * 20;
				xx = context.canvas.width / 2 - drawSize * m.position.axis * m.position.middle.x * Math.cos(rot) / 4;
				yy = context.canvas.height / 2 - drawSize * m.position.axis * m.position.middle.x * Math.sin(rot) / 4;
			}
			context.lineCap = 'round';
			context.lineJoin = 'round';
			// Draw turrets beneath us
			if (source.turrets.length === m.turrets.length) {
				for (var i = 0; i < m.turrets.length; i++) {
					var t = m.turrets[i];
					if (t.layer === 0) {
						var ang = t.direction + t.angle + rot,
						    len = t.offset * drawSize;
						drawEntity(xx + len * Math.cos(ang), yy + len * Math.sin(ang), t, ratio, 1, drawSize / ratio / t.size * t.sizeFactor, source.turrets[i].facing + turretsObeyRot * rot, turretsObeyRot, context, source.turrets[i], render);
					}
				}
			} else {
				throw new Error("Mismatch turret number with mockup.");
			}
			// Draw guns  
			source.guns.update();
			context.lineWidth = Math.max(config.graphical.mininumBorderChunk, ratio * config.graphical.borderChunk);
			setColor(context, mixColors(color.grey, render.status.getColor(), render.status.getBlend()));
			if (source.guns.length === m.guns.length) {
				var positions = source.guns.getPositions();
				for (var _i12 = 0; _i12 < m.guns.length; _i12++) {
					var g = m.guns[_i12],
					    position = positions[_i12] / (g.aspect === 1 ? 2 : 1),
					    gx = g.offset * Math.cos(g.direction + g.angle + rot) + (g.length / 2 - position) * Math.cos(g.angle + rot),
					    gy = g.offset * Math.sin(g.direction + g.angle + rot) + (g.length / 2 - position) * Math.sin(g.angle + rot);
					drawTrapezoid(context, xx + drawSize * gx, yy + drawSize * gy, drawSize * (g.length / 2 - (g.aspect === 1 ? position * 2 : 0)), drawSize * g.width / 2, g.aspect, g.angle + rot);
				}
			} else {
				throw new Error("Mismatch gun number with mockup.");
			}
			// Draw body
			context.globalAlpha = 1;
			setColor(context, mixColors(getColor(instance.color), render.status.getColor(), render.status.getBlend()));
			drawPoly(context, xx, yy, drawSize / m.size * m.realSize, m.shape, rot);
			// Draw turrets above us
			if (source.turrets.length === m.turrets.length) {
				for (var _i13 = 0; _i13 < m.turrets.length; _i13++) {
					var _t = m.turrets[_i13];
					if (_t.layer === 1) {
						var _ang = _t.direction + _t.angle + rot,
						    _len8 = _t.offset * drawSize;
						drawEntity(xx + _len8 * Math.cos(_ang), yy + _len8 * Math.sin(_ang), _t, ratio, 1, drawSize / ratio / _t.size * _t.sizeFactor, source.turrets[_i13].facing + turretsObeyRot * rot, turretsObeyRot, context, source.turrets[_i13], render);
					}
				}
			} else {
				throw new Error("Mismatch turret number with mockup.");
			}
			if (assignedContext == false && context != ctx) {
				ctx.save();
				ctx.globalAlpha = fade;
				ctx.imageSmoothingEnabled = false;
				//ctx.globalCompositeOperation = "overlay";
				ctx.filter = 'blur(' + Math.round(config.graphical.deathBlurAmount - config.graphical.deathBlurAmount * fade) + 'px)';
				ctx.drawImage(context.canvas, x - xx, y - yy);
				ctx.restore();
				//ctx.globalCompositeOperation = "source-over";
			}
		};
	}();

	function drawHealth(x, y, instance, ratio, alpha) {
		var fade = instance.render.status.getFade();
		fade *= fade;
		ctx.globalAlpha = fade;
		// Draw health bar
		ctx.globalAlpha = Math.pow(instance.render.status.getFade(), 2);
		var size = instance.size * ratio;
		var m = mockups[instance.index];
		var realSize = size / m.size * m.realSize;
		// Draw health
		if (instance.drawsHealth) {
			var health = instance.render.health.get();
			var shield = instance.render.shield.get();
			if (health < 1 || shield < 1) {
				var yy = y + 1.1 * realSize + 15;
				ctx.globalAlpha = alpha * alpha * fade;
				drawBar(x - size, x + size, yy, 3 + config.graphical.barChunk, color.black);
				drawBar(x - size, x - size + 2 * size * health, yy, 3, color.lgreen);
				if (shield) {
					ctx.globalAlpha = (0.3 + shield * 0.3) * alpha * alpha * fade;
					drawBar(x - size, x - size + 2 * size * shield, yy, 3, color.teal);
					ctx.globalAlpha = 1;
				}
			}
		}
		// Draw label
		if (instance.nameplate && instance.id !== _gui.playerid) {
			if (instance.render.textobjs == null) instance.render.textobjs = [TextObj(), TextObj()];
			ctx.globalAlpha = alpha;
			if (instance.name !== "\0") {
				instance.render.textobjs[0].draw(instance.name, x, y - realSize - 30, 16, color.guiwhite, 'center');
				instance.render.textobjs[1].draw(handleLargeNumber(instance.score, true), x, y - realSize - 16, 8, color.guiwhite, 'center');
			} else {
				instance.render.textobjs[0].draw(x, y - realSize - 30, 16, color.lavender, 'center');
				instance.render.textobjs[1].draw(x, y - realSize - 16, 8, color.lavender, 'center');
			}
			ctx.globalAlpha = 1;
		}
	}

	// Start animation
	window.requestAnimFrame = function () {
		return window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.msRequestAnimationFrame || function (callback) {
			window.setTimeout(callback, 1000 / 120);
		};
	}();
	window.cancelAnimFrame = function () {
		return window.cancelAnimationFrame || window.mozCancelAnimationFrame;
	}();

	// Drawing states
	var gameDraw = function () {
		var statMenu = Smoothbar(0, 0.7, 1.5);
		var upgradeMenu = Smoothbar(0, 2, 3);
		// Define the graph constructor
		function graph() {
			var data = [];
			return function (point, x, y, w, h, col) {
				// Add point and push off old ones
				data.push(point);
				while (data.length > w) {
					data.splice(0, 1);
				}
				// Get scale
				var min = Math.min.apply(Math, data),
				    max = Math.max.apply(Math, data),
				    range = max - min;
				// Draw zero
				if (max > 0 && min < 0) {
					drawBar(x, x + w, y + h * max / range, 2, color.guiwhite);
				}
				// Draw points
				ctx.beginPath();
				var i = -1;
				var _iteratorNormalCompletion6 = true;
				var _didIteratorError6 = false;
				var _iteratorError6 = undefined;

				try {
					for (var _iterator6 = data[Symbol.iterator](), _step6; !(_iteratorNormalCompletion6 = (_step6 = _iterator6.next()).done); _iteratorNormalCompletion6 = true) {
						var p = _step6.value;

						if (!++i) {
							ctx.moveTo(x, y + h * (max - p) / range);
						} else {
							ctx.lineTo(x + i, y + h * (max - p) / range);
						}
					}
				} catch (err) {
					_didIteratorError6 = true;
					_iteratorError6 = err;
				} finally {
					try {
						if (!_iteratorNormalCompletion6 && _iterator6.return) {
							_iterator6.return();
						}
					} finally {
						if (_didIteratorError6) {
							throw _iteratorError6;
						}
					}
				}

				;
				ctx.lineWidth = 1;
				ctx.strokeStyle = col;
				ctx.stroke();
			};
		}
		// Lag compensation functions
		var compensation = function () {
			// Protected functions
			function interpolate(p1, p2, v1, v2, ts, tt) {
				var k = Math.cos((1 + tt) * Math.PI);
				return 0.5 * (((1 + tt) * v1 + p1) * (k + 1) + (-tt * v2 + p2) * (1 - k));
			}

			function extrapolate(p1, p2, v1, v2, ts, tt) {
				return p2 + (p2 - p1) * tt; /*v2 + 0.5 * tt * (v2 - v1) * ts*/
			}
			// Useful thing
			function angleDifference(sourceA, targetA) {
				var mod = function mod(a, n) {
					return (a % n + n) % n;
				};
				var a = targetA - sourceA;
				return mod(a + Math.PI, 2 * Math.PI) - Math.PI;
			}
			// Constructor
			return function () {
				// Protected vars
				var timediff = 0,
				    t = 0,
				    tt = 0,
				    ts = 0;
				// Methods
				return {
					set: function set() {
						var time = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : player.time;
						var interval = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : metrics.rendergap;

						t = Math.max(getNow() - time - 80, -interval);
						if (t > 150 && t < 1000) {
							t = 150;
						}
						if (t > 1000) {
							t = 1000 * 1000 * Math.sin(t / 1000 - 1) / t + 1000;
						}
						tt = t / interval;
						ts = config.roomSpeed * 30 * t / 1000;
					},
					predict: function predict(p1, p2, v1, v2) {
						return t >= 0 ? extrapolate(p1, p2, v1, v2, ts, tt) : interpolate(p1, p2, v1, v2, ts, tt);
					},
					predictFacing: function predictFacing(f1, f2) {
						return f1 + (1 + tt) * angleDifference(f1, f2);
					},
					getPrediction: function getPrediction() {
						return t;
					}
				};
			};
		}();
		// Make graphs
		var timingGraph = graph(),
		    lagGraph = graph(),
		    gapGraph = graph();
		// The skill bar dividers
		var ska = function () {
			function make(x) {
				return Math.log(4 * x + 1) / Math.log(5);
			}
			var a = [];
			for (var i = 0; i < config.gui.expectedMaxSkillLevel * 2; i++) {
				a.push(make(i / config.gui.expectedMaxSkillLevel));
			}
			// The actual lookup function
			return function (x) {
				return a[x];
			};
		}();
		// Text objects
		var text = {
			skillNames: [TextObj(), TextObj(), TextObj(), TextObj(), TextObj(), TextObj(), TextObj(), TextObj(), TextObj(), TextObj()],
			skillKeys: [TextObj(), TextObj(), TextObj(), TextObj(), TextObj(), TextObj(), TextObj(), TextObj(), TextObj(), TextObj()],
			skillValues: [TextObj(), TextObj(), TextObj(), TextObj(), TextObj(), TextObj(), TextObj(), TextObj(), TextObj(), TextObj()],
			skillPoints: TextObj(),
			score: TextObj(),
			name: TextObj(),
			class: TextObj(),
			debug: [TextObj(), TextObj(), TextObj(), TextObj(), TextObj(), TextObj(), TextObj()],
			lbtitle: TextObj(),
			leaderboard: [TextObj(), TextObj(), TextObj(), TextObj(), TextObj(), TextObj(), TextObj(), TextObj(), TextObj(), TextObj()],
			upgradeNames: [TextObj(), TextObj(), TextObj(), TextObj(), TextObj(), TextObj(), TextObj(), TextObj()],
			upgradeKeys: [TextObj(), TextObj(), TextObj(), TextObj(), TextObj(), TextObj(), TextObj(), TextObj()],
			skipUpgrades: TextObj()
		};
		// The drawing loop
		return function (ratio) {
			//lag.set();
			var GRAPHDATA = 0;
			// Prep stuff
			renderTimes++;

			var px = void 0,
			    py = void 0;{
				// Move the camera
				var motion = compensation();
				motion.set();
				var smear = {
					x: 0,
					y: 0
				}; // moveCompensation.get();
				GRAPHDATA = motion.getPrediction();
				// Don't move the camera if you're dead. This helps with jitter issues
				player.renderx = motion.predict(player.lastx, player.x, player.lastvx, player.vx) + smear.x;
				player.rendery = motion.predict(player.lasty, player.y, player.lastvy, player.vy) + smear.y;
				//player.renderx += (desiredx - player.renderx) / 5;
				//player.rendery += (desiredy - player.rendery) / 5;
				px = ratio * player.renderx;
				py = ratio * player.rendery;
			}

			{
				// Clear the background + draw grid 
				clearScreen(color.white, 1);
				clearScreen(color.guiblack, 0.1);

				var W = roomSetup[0].length,
				    H = roomSetup.length,
				    i = 0;
				var _iteratorNormalCompletion7 = true;
				var _didIteratorError7 = false;
				var _iteratorError7 = undefined;

				try {
					for (var _iterator7 = roomSetup[Symbol.iterator](), _step7; !(_iteratorNormalCompletion7 = (_step7 = _iterator7.next()).done); _iteratorNormalCompletion7 = true) {
						var row = _step7.value;

						var j = 0;
						var _iteratorNormalCompletion8 = true;
						var _didIteratorError8 = false;
						var _iteratorError8 = undefined;

						try {
							for (var _iterator8 = row[Symbol.iterator](), _step8; !(_iteratorNormalCompletion8 = (_step8 = _iterator8.next()).done); _iteratorNormalCompletion8 = true) {
								var cell = _step8.value;

								var left = Math.max(0, ratio * j * global.gameWidth / W - px + global.screenWidth / 2),
								    top = Math.max(0, ratio * i * global.gameHeight / H - py + global.screenHeight / 2),
								    right = Math.min(global.screenWidth, ratio * (j + 1) * global.gameWidth / W - px + global.screenWidth / 2),
								    bottom = Math.min(global.screenHeight, ratio * (i + 1) * global.gameHeight / H - py + global.screenHeight / 2);
								ctx.globalAlpha = 1;
								ctx.fillStyle = config.graphical.screenshotMode ? color.guiwhite : color.white;
								ctx.fillRect(left, top, right - left, bottom - top);
								ctx.globalAlpha = 0.3;
								ctx.fillStyle = config.graphical.screenshotMode ? color.guiwhite : getZoneColor(cell, true);
								ctx.fillRect(left, top, right - left, bottom - top);
								j++;
							}
						} catch (err) {
							_didIteratorError8 = true;
							_iteratorError8 = err;
						} finally {
							try {
								if (!_iteratorNormalCompletion8 && _iterator8.return) {
									_iterator8.return();
								}
							} finally {
								if (_didIteratorError8) {
									throw _iteratorError8;
								}
							}
						}

						;
						i++;
					}
				} catch (err) {
					_didIteratorError7 = true;
					_iteratorError7 = err;
				} finally {
					try {
						if (!_iteratorNormalCompletion7 && _iterator7.return) {
							_iterator7.return();
						}
					} finally {
						if (_didIteratorError7) {
							throw _iteratorError7;
						}
					}
				}

				;
				ctx.lineWidth = 1;
				ctx.strokeStyle = config.graphical.screenshotMode ? color.guiwhite : color.guiblack;
				ctx.globalAlpha = 0.04;
				ctx.beginPath();
				var gridsize = 30 * ratio;
				for (var x = (global.screenWidth / 2 - px) % gridsize; x < global.screenWidth; x += gridsize) {
					ctx.moveTo(x, 0);
					ctx.lineTo(x, global.screenHeight);
				}
				for (var y = (global.screenHeight / 2 - py) % gridsize; y < global.screenHeight; y += gridsize) {
					ctx.moveTo(0, y);
					ctx.lineTo(global.screenWidth, y);
				}
				ctx.stroke();
				ctx.globalAlpha = 1;
			}

			{
				// Draw things 
				/*
    entities.forEach(function entitydrawingloop(instance) {
        if (!instance.render.draws) {
            return 1;
        }
        let motion = compensation();
        if (instance.render.status.getFade() === 1) {
            motion.set();
        } else {
            motion.set(instance.render.lastRender, instance.render.interval);
        }
        instance.render.x = motion.predict(instance.render.lastx, instance.x, instance.render.lastvx, instance.vx);
        instance.render.y = motion.predict(instance.render.lasty, instance.y, instance.render.lastvy, instance.vy);
        instance.render.f = (instance.id === gui.playerid && !instance.twiggle) ?
            Math.atan2(target.y, target.x) :
            motion.predictFacing(instance.render.lastf, instance.facing);
        let x = (instance.id === gui.playerid) ? 0 : ratio * instance.render.x - px,
            y = (instance.id === gui.playerid) ? 0 : ratio * instance.render.y - py;
        x += global.screenWidth / 2;
        y += global.screenHeight / 2;
        drawEntity(x, y, instance, ratio, instance.alpha, 1.1, instance.render.f);
    });
    */
				var entitydrawingloop = function entitydrawingloop(instance) {
					if (!instance.render.draws) {
						return 1;
					}
					/*
     let motion = compensation();
     if (instance.render.status.getFade() === 1) {
         motion.set();
     } else {
         motion.set(instance.render.lastRender, instance.render.interval);
     }
     instance.render.x = motion.predict(instance.render.lastx, instance.x, instance.render.lastvx, instance.vx);
     instance.render.y = motion.predict(instance.render.lasty, instance.y, instance.render.lastvy, instance.vy);
     instance.render.f = (instance.id === gui.playerid && !instance.twiggle) ?
         Math.atan2(target.y, target.x) :
         motion.predictFacing(instance.render.lastf, instance.facing);
     let x = (instance.id === gui.playerid) ? 0 : ratio * instance.render.x - px,
         y = (instance.id === gui.playerid) ? 0 : ratio * instance.render.y - py;
     x += global.screenWidth / 2;
     y += global.screenHeight / 2;
     drawEntity(x, y, instance, ratio, instance.alpha, 1.1, instance.render.f);
     */
				};

				var _iteratorNormalCompletion9 = true;
				var _didIteratorError9 = false;
				var _iteratorError9 = undefined;

				try {

					for (var _iterator9 = entities[Symbol.iterator](), _step9; !(_iteratorNormalCompletion9 = (_step9 = _iterator9.next()).done); _iteratorNormalCompletion9 = true) {
						var instance = _step9.value;

						entitydrawingloop(instance);
					}
				} catch (err) {
					_didIteratorError9 = true;
					_iteratorError9 = err;
				} finally {
					try {
						if (!_iteratorNormalCompletion9 && _iterator9.return) {
							_iterator9.return();
						}
					} finally {
						if (_didIteratorError9) {
							throw _iteratorError9;
						}
					}
				}

				if (!config.graphical.screenshotMode) {
					/*
     entities.forEach(function entityhealthdrawingloop(instance) {
         let x = (instance.id === gui.playerid) ? 0 : ratio * instance.render.x - px,
             y = (instance.id === gui.playerid) ? 0 : ratio * instance.render.y - py;
         x += global.screenWidth / 2;
         y += global.screenHeight / 2;
         drawHealth(x, y, instance, ratio, instance.alpha);
     });
     */
					var entityhealthdrawingloop = function entityhealthdrawingloop(instance) {
						var x = instance.id === _gui.playerid ? 0 : ratio * instance.render.x - px,
						    y = instance.id === _gui.playerid ? 0 : ratio * instance.render.y - py;
						x += global.screenWidth / 2;
						y += global.screenHeight / 2;
						drawHealth(x, y, instance, ratio, instance.alpha);
					};

					var _iteratorNormalCompletion10 = true;
					var _didIteratorError10 = false;
					var _iteratorError10 = undefined;

					try {

						for (var _iterator10 = entities[Symbol.iterator](), _step10; !(_iteratorNormalCompletion10 = (_step10 = _iterator10.next()).done); _iteratorNormalCompletion10 = true) {
							var instance = _step10.value;

							entityhealthdrawingloop(instance);
						}
					} catch (err) {
						_didIteratorError10 = true;
						_iteratorError10 = err;
					} finally {
						try {
							if (!_iteratorNormalCompletion10 && _iterator10.return) {
								_iterator10.return();
							}
						} finally {
							if (_didIteratorError10) {
								throw _iteratorError10;
							}
						}
					}
				}
			}

			// Draw GUI       
			var alcoveSize = 200 / Math.max(global.screenWidth, global.screenHeight * 16 / 9);
			var spacing = 20;
			_gui.__s.update();
			var lb = _leaderboard.get();
			var max = lb.max;

			{
				// Draw messages
				var vspacing = 4;
				var len = 0;
				var height = 18;
				var _x28 = global.screenWidth / 2;
				var _y = spacing;
				// Draw each message
				for (var _i14 = messages.length - 1; _i14 >= 0; _i14--) {
					var msg = messages[_i14],
					    txt = msg.text,
					    _text = txt; //txt[0].toUpperCase() + txt.substring(1);  
					// Give it a textobj if it doesn't have one
					if (msg.textobj == null) msg.textobj = TextObj();
					if (msg.len == null) msg.len = measureText(_text, height - 4);
					// Draw the background
					ctx.globalAlpha = 0.5 * msg.alpha;
					drawBar(_x28 - msg.len / 2, _x28 + msg.len / 2, _y + height / 2, height, color.black);
					// Draw the text
					ctx.globalAlpha = Math.min(1, msg.alpha);
					msg.textobj.draw(_text, _x28, _y + height / 2, height - 4, color.guiwhite, 'center', true);
					// Iterate and move
					_y += vspacing + height;
					if (msg.status > 1) {
						_y -= (vspacing + height) * (1 - Math.sqrt(msg.alpha));
					}
					if (msg.status > 1) {
						msg.status -= 0.05;
						msg.alpha += 0.05;
					} else if (_i14 === 0 && (messages.length > 5 || Date.now() - msg.time > 10000)) {
						msg.status -= 0.05;
						msg.alpha -= 0.05;
						// Remove
						if (msg.alpha <= 0) {
							messages[0].textobj.remove();
							messages.splice(0, 1);
						}
					}
				}
				ctx.globalAlpha = 1;
			}

			{
				// Draw skill bars
				global.canSkill = !!_gui.points;
				statMenu.set(0 + (global.canSkill || global.died || global.statHover));
				global.clickables.stat.hide();

				var _vspacing = 4;
				var _height = 15;
				var gap = 35;
				var _len9 = alcoveSize * global.screenWidth; // The 30 is for the value modifiers
				var save = _len9;
				var _x29 = -spacing - 2 * _len9 + statMenu.get() * (2 * spacing + 2 * _len9);
				var _y2 = global.screenHeight - spacing - _height;
				var ticker = 11;
				var namedata = _gui.getStatNames(mockups[_gui.type].statnames || -1);
				_gui.skills.forEach(function drawASkillBar(skill) {
					// Individual skill bars 
					ticker--;
					var name = namedata[ticker - 1],
					    level = skill.amount,
					    col = color[skill.color],
					    cap = skill.softcap,
					    maxLevel = skill.cap;
					if (cap) {
						_len9 = save;
						var _max = config.gui.expectedMaxSkillLevel,
						    extension = cap > _max,
						    blocking = cap < maxLevel;
						if (extension) {
							_max = cap;
						}
						drawBar(_x29 + _height / 2, _x29 - _height / 2 + _len9 * ska(cap), _y2 + _height / 2, _height - 3 + config.graphical.barChunk, color.black);
						drawBar(_x29 + _height / 2, _x29 + _height / 2 + (_len9 - gap) * ska(cap), _y2 + _height / 2, _height - 3, color.grey);
						drawBar(_x29 + _height / 2, _x29 + _height / 2 + (_len9 - gap) * ska(level), _y2 + _height / 2, _height - 3.5, col);
						// Blocked-off area
						if (blocking) {
							ctx.lineWidth = 1;
							ctx.strokeStyle = color.grey;
							for (var _j2 = cap + 1; _j2 < _max; _j2++) {
								drawGuiLine(_x29 + (_len9 - gap) * ska(_j2), _y2 + 1.5, _x29 + (_len9 - gap) * ska(_j2), _y2 - 3 + _height);
							}
						}
						// Vertical dividers
						ctx.strokeStyle = color.black;
						ctx.lineWidth = 1;
						for (var _j3 = 1; _j3 < level + 1; _j3++) {
							drawGuiLine(_x29 + (_len9 - gap) * ska(_j3), _y2 + 1.5, _x29 + (_len9 - gap) * ska(_j3), _y2 - 3 + _height);
						}
						// Skill name
						_len9 = save * ska(_max);
						var textcolor = level == maxLevel ? col : !_gui.points || cap !== maxLevel && level == cap ? color.grey : color.guiwhite;
						text.skillNames[ticker - 1].draw(name, Math.round(_x29 + _len9 / 2) + 0.5, _y2 + _height / 2, _height - 5, textcolor, 'center', true);
						// Skill key
						text.skillKeys[ticker - 1].draw('[' + ticker % 10 + ']', Math.round(_x29 + _len9 - _height * 0.25) - 1.5, _y2 + _height / 2, _height - 5, textcolor, 'right', true);
						if (textcolor === color.guiwhite) {
							// If it's active
							global.clickables.stat.place(ticker - 1, _x29, _y2, _len9, _height);
						}
						// Skill value
						if (level) {
							text.skillValues[ticker - 1].draw(textcolor === col ? 'MAX' : '+' + level, Math.round(_x29 + _len9 + 4) + 0.5, _y2 + _height / 2, _height - 5, col, 'left', true);
						}
						// Move on 
						_y2 -= _height + _vspacing;
					}
				});
				global.clickables.hover.place(0, 0, _y2, 0.8 * _len9, 0.8 * (global.screenHeight - _y2));
				if (_gui.points !== 0) {
					// Draw skillpoints to spend
					text.skillPoints.draw('x' + _gui.points, Math.round(_x29 + _len9 - 2) + 0.5, Math.round(_y2 + _height - 4) + 0.5, 20, color.guiwhite, 'right');
				}
			}

			{
				// Draw name, exp and score bar
				var _vspacing2 = 4;
				var _len10 = 1.65 * alcoveSize * global.screenWidth;
				var _height2 = 25;
				var _x30 = (global.screenWidth - _len10) / 2;
				var _y3 = global.screenHeight - spacing - _height2;

				ctx.lineWidth = 1;
				// Handle exp
				// Draw the exp bar
				drawBar(_x30, _x30 + _len10, _y3 + _height2 / 2, _height2 - 3 + config.graphical.barChunk, color.black);
				drawBar(_x30, _x30 + _len10, _y3 + _height2 / 2, _height2 - 3, color.grey);
				drawBar(_x30, _x30 + _len10 * _gui.__s.getProgress(), _y3 + _height2 / 2, _height2 - 3.5, color.gold);
				// Draw the class type
				text.class.draw('Level ' + _gui.__s.getLevel() + ' ' + mockups[_gui.type].name, _x30 + _len10 / 2, _y3 + _height2 / 2, _height2 - 4, color.guiwhite, 'center', true);
				_height2 = 14;
				_y3 -= _height2 + _vspacing2;
				// Draw the %-of-leader bar
				drawBar(_x30 + _len10 * 0.1, _x30 + _len10 * 0.9, _y3 + _height2 / 2, _height2 - 3 + config.graphical.barChunk, color.black);
				drawBar(_x30 + _len10 * 0.1, _x30 + _len10 * 0.9, _y3 + _height2 / 2, _height2 - 3, color.grey);
				drawBar(_x30 + _len10 * 0.1, _x30 + _len10 * (0.1 + 0.8 * (max ? Math.min(1, _gui.__s.getScore() / max) : 1)), _y3 + _height2 / 2, _height2 - 3.5, color.green);
				// Draw the score
				text.score.draw('Score: ' + handleLargeNumber(_gui.__s.getScore()), _x30 + _len10 / 2, _y3 + _height2 / 2, _height2 - 2, color.guiwhite, 'center', true);
				// Draw the name
				ctx.lineWidth = 4;
				text.name.draw(player.name, Math.round(_x30 + _len10 / 2) + 0.5, Math.round(_y3 - 10 - _vspacing2) + 0.5, 32, color.guiwhite, 'center');
			}

			{
				// Draw minimap and FPS monitors
				var _len11 = alcoveSize * global.screenWidth;
				var _height3 = _len11;
				var _x31 = global.screenWidth - _len11 - spacing;
				var _y4 = global.screenHeight - _height3 - spacing;

				ctx.globalAlpha = 0.5;
				var _W = roomSetup[0].length,
				    _H = roomSetup.length,
				    _i15 = 0;
				var _iteratorNormalCompletion11 = true;
				var _didIteratorError11 = false;
				var _iteratorError11 = undefined;

				try {
					for (var _iterator11 = roomSetup[Symbol.iterator](), _step11; !(_iteratorNormalCompletion11 = (_step11 = _iterator11.next()).done); _iteratorNormalCompletion11 = true) {
						var row = _step11.value;

						var _j4 = 0;
						var _iteratorNormalCompletion13 = true;
						var _didIteratorError13 = false;
						var _iteratorError13 = undefined;

						try {
							for (var _iterator13 = row[Symbol.iterator](), _step13; !(_iteratorNormalCompletion13 = (_step13 = _iterator13.next()).done); _iteratorNormalCompletion13 = true) {
								var cell = _step13.value;

								ctx.fillStyle = getZoneColor(cell, false);
								drawGuiRect(_x31 + _j4++ * _len11 / _W, _y4 + _i15 * _height3 / _H, _len11 / _W, _height3 / _H);
							}
						} catch (err) {
							_didIteratorError13 = true;
							_iteratorError13 = err;
						} finally {
							try {
								if (!_iteratorNormalCompletion13 && _iterator13.return) {
									_iterator13.return();
								}
							} finally {
								if (_didIteratorError13) {
									throw _iteratorError13;
								}
							}
						}

						;
						_i15++;
					}
				} catch (err) {
					_didIteratorError11 = true;
					_iteratorError11 = err;
				} finally {
					try {
						if (!_iteratorNormalCompletion11 && _iterator11.return) {
							_iterator11.return();
						}
					} finally {
						if (_didIteratorError11) {
							throw _iteratorError11;
						}
					}
				}

				;
				ctx.fillStyle = color.grey;
				drawGuiRect(_x31, _y4, _len11, _height3);
				var _iteratorNormalCompletion12 = true;
				var _didIteratorError12 = false;
				var _iteratorError12 = undefined;

				try {
					for (var _iterator12 = minimap[Symbol.iterator](), _step12; !(_iteratorNormalCompletion12 = (_step12 = _iterator12.next()).done); _iteratorNormalCompletion12 = true) {
						var o = _step12.value;

						if (o[2] === 17) {
							ctx.fillStyle = mixColors(getColor(o[2]), color.black, 0.5);
							ctx.globalAlpha = 0.8;
							drawGuiRect(_x31 + o[0] / global.gameWidth * _len11, _y4 + o[1] / global.gameHeight * _height3, 1, 1);
						} else {
							ctx.strokeStyle = mixColors(getColor(o[2]), color.black, 0.5);
							ctx.lineWidth = 1;
							ctx.globalAlpha = 1;
							drawGuiRect(_x31 + o[0] / global.gameWidth * _len11 - 1, _y4 + o[1] / global.gameWidth * _height3 - 1, 3, 3, true);
							ctx.lineWidth = 3;
						}
					}
				} catch (err) {
					_didIteratorError12 = true;
					_iteratorError12 = err;
				} finally {
					try {
						if (!_iteratorNormalCompletion12 && _iterator12.return) {
							_iterator12.return();
						}
					} finally {
						if (_didIteratorError12) {
							throw _iteratorError12;
						}
					}
				}

				;
				ctx.globalAlpha = 1;
				ctx.lineWidth = 1;
				ctx.strokeStyle = color.black;
				drawGuiRect( // My position
				_x31 + player.x / global.gameWidth * _len11 - 1, _y4 + player.y / global.gameWidth * _height3 - 1, 3, 3, true);
				ctx.lineWidth = 3;
				ctx.fillStyle = color.black;
				drawGuiRect(_x31, _y4, _len11, _height3, true); // Border

				drawGuiRect(_x31, _y4 - 40, _len11, 30);
				lagGraph(lag.get(), _x31, _y4 - 40, _len11, 30, color.teal);
				gapGraph(metrics.rendergap, _x31, _y4 - 40, _len11, 30, color.pink);
				timingGraph(GRAPHDATA, _x31, _y4 - 40, _len11, 30, color.yellow);
				// Text
				text.debug[5].draw('Prediction: ' + Math.round(GRAPHDATA) + 'ms', _x31 + _len11, _y4 - 50 - 5 * 14, 10, color.guiwhite, 'right');
				text.debug[4].draw('Update Rate: ' + metrics.updatetime + 'Hz', _x31 + _len11, _y4 - 50 - 4 * 14, 10, color.guiwhite, 'right');
				text.debug[3].draw('Latency: ' + metrics.latency + 'ms', _x31 + _len11, _y4 - 50 - 3 * 14, 10, color.guiwhite, 'right');
				text.debug[2].draw('Client FPS: ' + metrics.rendertime, _x31 + _len11, _y4 - 50 - 2 * 14, 10, color.guiwhite, 'right');
				text.debug[1].draw('Server Speed: ' + (100 * _gui.fps).toFixed(2) + '%' + (_gui.fps === 1 ? '' : ' OVERLOADED!'), _x31 + _len11, _y4 - 50 - 1 * 14, 10, _gui.fps === 1 ? color.guiwhite : color.orange, 'right');
				text.debug[0].draw(serverName, _x31 + _len11, _y4 - 50, 10, color.guiwhite, 'right');
			}

			{
				// Draw leaderboard
				var _vspacing3 = 4;
				var _len12 = alcoveSize * global.screenWidth;
				var _height4 = 14;
				var _x32 = global.screenWidth - _len12 - spacing;
				var _y5 = spacing + _height4 + 7;
				text.lbtitle.draw('Leaderboard:', Math.round(_x32 + _len12 / 2) + 0.5, Math.round(_y5 - 6) + 0.5, _height4 + 4, color.guiwhite, 'center');
				var _i16 = 0;
				var _iteratorNormalCompletion14 = true;
				var _didIteratorError14 = false;
				var _iteratorError14 = undefined;

				try {
					for (var _iterator14 = lb.data[Symbol.iterator](), _step14; !(_iteratorNormalCompletion14 = (_step14 = _iterator14.next()).done); _iteratorNormalCompletion14 = true) {
						var entry = _step14.value;

						drawBar(_x32, _x32 + _len12, _y5 + _height4 / 2, _height4 - 3 + config.graphical.barChunk, color.black);
						drawBar(_x32, _x32 + _len12, _y5 + _height4 / 2, _height4 - 3, color.grey);
						var shift = Math.min(1, entry.score / max);
						drawBar(_x32, _x32 + _len12 * shift, _y5 + _height4 / 2, _height4 - 3.5, entry.barcolor);
						// Leadboard name + score 
						text.leaderboard[_i16++].draw(entry.label + ': ' + handleLargeNumber(Math.round(entry.score)), _x32 + _len12 / 2, _y5 + _height4 / 2, _height4 - 5, color.guiwhite, 'center', true);
						// Mini-image
						var scale = _height4 / entry.position.axis,
						    xx = _x32 - 1.5 * _height4 - scale * entry.position.middle.x * 0.707,
						    yy = _y5 + 0.5 * _height4 + scale * entry.position.middle.x * 0.707;
						drawEntity(xx, yy, entry.image, 1 / scale, 1, scale * scale / entry.image.size, -Math.PI / 4, true);
						// Move down
						_y5 += _vspacing3 + _height4;
					}
				} catch (err) {
					_didIteratorError14 = true;
					_iteratorError14 = err;
				} finally {
					try {
						if (!_iteratorNormalCompletion14 && _iterator14.return) {
							_iterator14.return();
						}
					} finally {
						if (_didIteratorError14) {
							throw _iteratorError14;
						}
					}
				}

				;
			}

			{
				// Draw upgrade menu
				upgradeMenu.set(0 + (global.canUpgrade || global.upgradeHover));
				var glide = upgradeMenu.get();
				global.clickables.upgrade.hide();
				if (_gui.upgrades.length > 0) {
					global.canUpgrade = true;
					var getClassUpgradeKey = function getClassUpgradeKey(number) {
						switch (number) {
							case 0:
								return 'y';
							case 1:
								return 'h';
							case 2:
								return 'u';
							case 3:
								return 'j';
							case 4:
								return 'i';
							case 5:
								return 'k';
							case 6:
								return 'o';
							case 7:
								return 'l';
						}
					};
					var internalSpacing = 8;
					var _len13 = alcoveSize * global.screenWidth / 2 * 1;
					var _height5 = _len13;
					var _x33 = glide * 2 * spacing - spacing;
					var _y6 = spacing;
					var xo = _x33;
					var xxx = 0;
					var yo = _y6;
					var _ticker = 0;
					upgradeSpin += 0.01;
					var colorIndex = 10;
					var _i17 = 0;
					_gui.upgrades.forEach(function drawAnUpgrade(model) {
						if (_y6 > yo) yo = _y6;
						xxx = _x33;
						global.clickables.upgrade.place(_i17++, _x33, _y6, _len13, _height5);
						// Draw box
						ctx.globalAlpha = 0.5;
						ctx.fillStyle = getColor(colorIndex);
						drawGuiRect(_x33, _y6, _len13, _height5);
						ctx.globalAlpha = 0.1;
						ctx.fillStyle = getColor(-10 + colorIndex++);
						if (colorIndex === 14) colorIndex = 21;
						drawGuiRect(_x33, _y6, _len13, _height5 * 0.6);
						ctx.fillStyle = color.black;
						drawGuiRect(_x33, _y6 + _height5 * 0.6, _len13, _height5 * 0.4);
						ctx.globalAlpha = 1;
						// Find offset location with rotation
						var picture = getEntityImageFromMockup(model, _gui.color),
						    position = mockups[model].position,
						    scale = 0.6 * _len13 / position.axis,
						    xx = _x33 + 0.5 * _len13 - scale * position.middle.x * Math.cos(upgradeSpin),
						    yy = _y6 + 0.5 * _height5 - scale * position.middle.x * Math.sin(upgradeSpin);
						drawEntity(xx, yy, picture, 1, 1, scale / picture.size, upgradeSpin, true);
						// Tank name
						text.upgradeNames[_i17 - 1].draw(picture.name, _x33 + 0.9 * _len13 / 2, _y6 + _height5 - 6, _height5 / 8 - 3, color.guiwhite, 'center');
						// Upgrade key
						text.upgradeKeys[_i17 - 1].draw('[' + getClassUpgradeKey(_ticker) + ']', _x33 + _len13 - 4, _y6 + _height5 - 6, _height5 / 8 - 3, color.guiwhite, 'right');
						ctx.strokeStyle = color.black;
						ctx.globalAlpha = 1;
						ctx.lineWidth = 3;
						drawGuiRect(_x33, _y6, _len13, _height5, true); // Border
						if (_ticker++ % 2) {
							_y6 -= _height5 + internalSpacing;
							_x33 += glide * (_len13 + internalSpacing);
						} else {
							_y6 += _height5 + internalSpacing;
						}
					});
					// Draw box
					var h = 14,
					    _msg = "Ignore",
					    m = measureText(_msg, h - 3) + 10;
					var _xx = xo + (xxx + _len13 + internalSpacing - xo) / 2,
					    _yy = yo + _height5 + internalSpacing;
					drawBar(_xx - m / 2, _xx + m / 2, _yy + h / 2, h + config.graphical.barChunk, color.black);
					drawBar(_xx - m / 2, _xx + m / 2, _yy + h / 2, h, color.white);
					text.skipUpgrades.draw(_msg, _xx, _yy + h / 2, h - 2, color.guiwhite, 'center', true);
					global.clickables.skipUpgrades.place(0, _xx - m / 2, _yy, m, h);
				} else {
					global.canUpgrade = false;
					global.clickables.upgrade.hide();
					global.clickables.skipUpgrades.hide();
				}
			}

			metrics.lastrender = getNow();
		};
	}();

	var gameDrawDead = function () {
		var text = {
			taunt: TextObj(),
			level: TextObj(),
			score: TextObj(),
			time: TextObj(),
			kills: TextObj(),
			death: TextObj(),
			playagain: TextObj()
		};
		var getKills = function getKills() {
			var finalKills = [Math.round(global.finalKills[0].get()), Math.round(global.finalKills[1].get()), Math.round(global.finalKills[2].get())];
			var b = finalKills[0] + 0.5 * finalKills[1] + 3 * finalKills[2];
			return (b === 0 ? '🌼' : b < 4 ? '🎯' : b < 8 ? '💥' : b < 15 ? '💢' : b < 25 ? '🔥' : b < 50 ? '💣' : b < 75 ? '👺' : b < 100 ? '🌶️' : '💯') + (finalKills[0] || finalKills[1] || finalKills[2] ? ' ' + (finalKills[0] ? finalKills[0] + ' kills' : '') + (finalKills[0] && finalKills[1] ? ' and ' : '') + (finalKills[1] ? finalKills[1] + ' assists' : '') + ((finalKills[0] || finalKills[1]) && finalKills[2] ? ' and ' : '') + (finalKills[2] ? finalKills[2] + ' visitors defeated' : '') : 'You have stopped being alive.') + '.';
		};
		var getDeath = function getDeath() {
			var txt = '';
			if (global.finalKillers.length) {
				txt = '🔪 oh no! he died to';
				global.finalKillers.forEach(function (e) {
					txt += ' ' + addArticle(mockups[e].name) + ' and';
				});
				txt = txt.slice(0, -4) + '.';
			} else {
				txt += 'CONGRATULATIONS! You commited suicide!';
			}
			return txt;
		};
		return function () {
			clearScreen(color.black, 0.25);
			var x = global.screenWidth / 2,
			    y = global.screenHeight / 2 - 50;
			var picture = getEntityImageFromMockup(_gui.type, _gui.color),
			    len = 140,
			    position = mockups[_gui.type].position,
			    scale = len / position.axis,
			    xx = global.screenWidth / 2 - scale * position.middle.x * 0.707,
			    yy = global.screenHeight / 2 - 35 + scale * position.middle.x * 0.707;
			drawEntity(xx - 190 - len / 2, yy - 10, picture, 1.5, 1, 0.5 * scale / picture.realSize, -Math.PI / 4, true);
			text.taunt.draw('YOU DEEEEAD SONNAYBOYYYYYYY', x, y - 80, 11, color.guiwhite, 'center');
			text.level.draw('n-level = ' + _gui.__s.getLevel() + ' ' + mockups[_gui.type].name + '.', x - 170, y - 30, 24, color.guiwhite);
			text.score.draw('The Grand total is: ' + formatLargeNumber(Math.round(global.finalScore.get())), x - 170, y + 25, 50, color.guiwhite);
			text.time.draw('Existed for ' + timeForHumans(Math.round(global.finalLifetime.get())) + '.', x - 170, y + 55, 16, color.guiwhite);
			text.kills.draw(getKills(), x - 170, y + 77, 16, color.guiwhite);
			text.death.draw(getDeath(), x - 170, y + 99, 16, color.guiwhite);
			text.playagain.draw('Press enter to play again!', x, y + 125, 16, color.guiwhite, 'center');
		};
	}();

	var gameDrawBeforeStart = function () {
		var text = {
			connecting: TextObj(),
			message: TextObj()
		};
		return function () {
			clearScreen(color.white, 0.5);
			text.connecting.draw('Server initilizing...', global.screenWidth / 2, global.screenHeight / 2, 30, color.guiwhite, 'center');
			text.message.draw(global.message, global.screenWidth / 2, global.screenHeight / 2 + 30, 15, color.lgreen, 'center');
		};
	}();

	var gameDrawDisconnected = function () {
		var text = {
			disconnected: TextObj(),
			message: TextObj()
		};
		return function () {
			clearScreen(mixColors(color.red, color.guiblack, 0.3), 0.25);
			text.disconnected.draw('bitconnec', global.screenWidth / 2, global.screenHeight / 2, 30, color.guiwhite, 'center');
			text.message.draw(global.message, global.screenWidth / 2, global.screenHeight / 2 + 30, 15, color.orange, 'center');
		};
	}();

	// The main function
	var fps;
	function animloop() {
		global.animLoopHandle = window.requestAnimFrame(animloop);
		player.renderv += (player.view - player.renderv) / 120;
		var ratio = config.graphical.screenshotMode ? 2 : getRatio();
		// Set the drawing style
		ctx.lineCap = 'round';
		ctx.lineJoin = 'round';
		ctx.filter = 'none';
		// Draw the game
		if (global.gameStart && !global.disconnected) {
			global.time = getNow();
			if (global.time - lastPing > 1000) {
				// Latency
				// Do ping.
				global.socket.ping(global.time);
				lastPing = global.time;
				// Do rendering speed.
				metrics.rendertime = renderTimes;
				renderTimes = 0;
				// Do update rate.
				metrics.updatetime = updateTimes;
				updateTimes = 0;
			}
			metrics.lag = global.time - player.time;
		}
		if (global.gameStart) {
			gameDraw(ratio);
		} else if (!global.disconnected) {
			gameDrawBeforeStart();
		}
		if (global.died) {
			gameDrawDead();
		}
		if (global.disconnected) {
			gameDrawDisconnected();
		}
	}

	/***/
},
/* 1 */
/***/function (module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_RESULT__; // Generated by CoffeeScript 1.7.1
	(function () {
		var Color,
		    DecomposedMatrix,
		    DecomposedMatrix2D,
		    InterpolableArray,
		    InterpolableColor,
		    InterpolableNumber,
		    InterpolableObject,
		    InterpolableString,
		    Matrix,
		    Matrix2D,
		    Set,
		    Vector,
		    addTimeout,
		    addUnitsToNumberInterpolables,
		    animationTick,
		    animations,
		    animationsTimeouts,
		    applyDefaults,
		    applyFrame,
		    applyProperties,
		    baseSVG,
		    cacheFn,
		    cancelTimeout,
		    clone,
		    createInterpolable,
		    defaultValueForKey,
		    degProperties,
		    dynamics,
		    getCurrentProperties,
		    interpolate,
		    isDocumentVisible,
		    isSVGElement,
		    lastTime,
		    leftDelayForTimeout,
		    makeArrayFn,
		    observeVisibilityChange,
		    parseProperties,
		    prefixFor,
		    propertyWithPrefix,
		    pxProperties,
		    rAF,
		    roundf,
		    runLoopPaused,
		    runLoopRunning,
		    _runLoopTick,
		    setRealTimeout,
		    slow,
		    slowRatio,
		    startAnimation,
		    startRunLoop,
		    svgProperties,
		    timeBeforeVisibilityChange,
		    timeoutLastId,
		    timeouts,
		    toDashed,
		    transformProperties,
		    transformValueForProperty,
		    unitForProperty,
		    __bind = function __bind(fn, me) {
			return function () {
				return fn.apply(me, arguments);
			};
		};

		isDocumentVisible = function isDocumentVisible() {
			return document.visibilityState === "visible" || dynamics.tests != null;
		};

		observeVisibilityChange = function () {
			var fns;
			fns = [];
			if (typeof document !== "undefined" && document !== null) {
				document.addEventListener("visibilitychange", function () {
					var fn, _i, _len, _results;
					_results = [];
					for (_i = 0, _len = fns.length; _i < _len; _i++) {
						fn = fns[_i];
						_results.push(fn(isDocumentVisible()));
					}
					return _results;
				});
			}
			return function (fn) {
				return fns.push(fn);
			};
		}();

		clone = function clone(o) {
			var k, newO, v;
			newO = {};
			for (k in o) {
				v = o[k];
				newO[k] = v;
			}
			return newO;
		};

		cacheFn = function cacheFn(func) {
			var data;
			data = {};
			return function () {
				var k, key, result, _i, _len;
				key = "";
				for (_i = 0, _len = arguments.length; _i < _len; _i++) {
					k = arguments[_i];
					key += k.toString() + ",";
				}
				result = data[key];
				if (!result) {
					data[key] = result = func.apply(this, arguments);
				}
				return result;
			};
		};

		makeArrayFn = function makeArrayFn(fn) {
			return function (el) {
				var args, i, res;
				if (el instanceof Array || el instanceof NodeList || el instanceof HTMLCollection) {
					res = function () {
						var _i, _ref, _results;
						_results = [];
						for (i = _i = 0, _ref = el.length; 0 <= _ref ? _i < _ref : _i > _ref; i = 0 <= _ref ? ++_i : --_i) {
							args = Array.prototype.slice.call(arguments, 1);
							args.splice(0, 0, el[i]);
							_results.push(fn.apply(this, args));
						}
						return _results;
					}.apply(this, arguments);
					return res;
				}
				return fn.apply(this, arguments);
			};
		};

		applyDefaults = function applyDefaults(options, defaults) {
			var k, v, _results;
			_results = [];
			for (k in defaults) {
				v = defaults[k];
				_results.push(options[k] != null ? options[k] : options[k] = v);
			}
			return _results;
		};

		applyFrame = function applyFrame(el, properties) {
			var k, v, _results;
			if (el.style != null) {
				return applyProperties(el, properties);
			} else {
				_results = [];
				for (k in properties) {
					v = properties[k];
					_results.push(el[k] = v.format());
				}
				return _results;
			}
		};

		applyProperties = function applyProperties(el, properties) {
			var isSVG, k, matrix, transforms, v;
			properties = parseProperties(properties);
			transforms = [];
			isSVG = isSVGElement(el);
			for (k in properties) {
				v = properties[k];
				if (transformProperties.contains(k)) {
					transforms.push([k, v]);
				} else {
					if (v.format != null) {
						v = v.format();
					}
					if (typeof v === 'number') {
						v = "" + v + unitForProperty(k, v);
					}
					if (el.hasAttribute != null && el.hasAttribute(k)) {
						el.setAttribute(k, v);
					} else if (el.style != null) {
						el.style[propertyWithPrefix(k)] = v;
					}
					if (k in el) {
						el[k] = v;
					}
				}
			}
			if (transforms.length > 0) {
				if (isSVG) {
					matrix = new Matrix2D();
					matrix.applyProperties(transforms);
					return el.setAttribute("transform", matrix.decompose().format());
				} else {
					v = transforms.map(function (transform) {
						return transformValueForProperty(transform[0], transform[1]);
					}).join(" ");
					return el.style[propertyWithPrefix("transform")] = v;
				}
			}
		};

		isSVGElement = function isSVGElement(el) {
			var _ref, _ref1;
			if (typeof SVGElement !== "undefined" && SVGElement !== null && typeof SVGSVGElement !== "undefined" && SVGSVGElement !== null) {
				return el instanceof SVGElement && !(el instanceof SVGSVGElement);
			} else {
				return (_ref = (_ref1 = dynamics.tests) != null ? typeof _ref1.isSVG === "function" ? _ref1.isSVG(el) : void 0 : void 0) != null ? _ref : false;
			}
		};

		roundf = function roundf(v, decimal) {
			var d;
			d = Math.pow(10, decimal);
			return Math.round(v * d) / d;
		};

		Set = function () {
			function Set(array) {
				var v, _i, _len;
				this.obj = {};
				for (_i = 0, _len = array.length; _i < _len; _i++) {
					v = array[_i];
					this.obj[v] = 1;
				}
			}

			Set.prototype.contains = function (v) {
				return this.obj[v] === 1;
			};

			return Set;
		}();

		toDashed = function toDashed(str) {
			return str.replace(/([A-Z])/g, function ($1) {
				return "-" + $1.toLowerCase();
			});
		};

		pxProperties = new Set('marginTop,marginLeft,marginBottom,marginRight,paddingTop,paddingLeft,paddingBottom,paddingRight,top,left,bottom,right,translateX,translateY,translateZ,perspectiveX,perspectiveY,perspectiveZ,width,height,maxWidth,maxHeight,minWidth,minHeight,borderRadius'.split(','));

		degProperties = new Set('rotate,rotateX,rotateY,rotateZ,skew,skewX,skewY,skewZ'.split(','));

		transformProperties = new Set('translate,translateX,translateY,translateZ,scale,scaleX,scaleY,scaleZ,rotate,rotateX,rotateY,rotateZ,rotateC,rotateCX,rotateCY,skew,skewX,skewY,skewZ,perspective'.split(','));

		svgProperties = new Set('accent-height,ascent,azimuth,baseFrequency,baseline-shift,bias,cx,cy,d,diffuseConstant,divisor,dx,dy,elevation,filterRes,fx,fy,gradientTransform,height,k1,k2,k3,k4,kernelMatrix,kernelUnitLength,letter-spacing,limitingConeAngle,markerHeight,markerWidth,numOctaves,order,overline-position,overline-thickness,pathLength,points,pointsAtX,pointsAtY,pointsAtZ,r,radius,rx,ry,seed,specularConstant,specularExponent,stdDeviation,stop-color,stop-opacity,strikethrough-position,strikethrough-thickness,surfaceScale,target,targetX,targetY,transform,underline-position,underline-thickness,viewBox,width,x,x1,x2,y,y1,y2,z'.split(','));

		unitForProperty = function unitForProperty(k, v) {
			if (typeof v !== 'number') {
				return '';
			}
			if (pxProperties.contains(k)) {
				return 'px';
			} else if (degProperties.contains(k)) {
				return 'deg';
			}
			return '';
		};

		transformValueForProperty = function transformValueForProperty(k, v) {
			var match, unit;
			match = ("" + v).match(/^([0-9.-]*)([^0-9]*)$/);
			if (match != null) {
				v = match[1];
				unit = match[2];
			} else {
				v = parseFloat(v);
			}
			v = roundf(parseFloat(v), 10);
			if (unit == null || unit === "") {
				unit = unitForProperty(k, v);
			}
			return "" + k + "(" + v + unit + ")";
		};

		parseProperties = function parseProperties(properties) {
			var axis, match, parsed, property, value, _i, _len, _ref;
			parsed = {};
			for (property in properties) {
				value = properties[property];
				if (transformProperties.contains(property)) {
					match = property.match(/(translate|rotateC|rotate|skew|scale|perspective)(X|Y|Z|)/);
					if (match && match[2].length > 0) {
						parsed[property] = value;
					} else {
						_ref = ['X', 'Y', 'Z'];
						for (_i = 0, _len = _ref.length; _i < _len; _i++) {
							axis = _ref[_i];
							parsed[match[1] + axis] = value;
						}
					}
				} else {
					parsed[property] = value;
				}
			}
			return parsed;
		};

		defaultValueForKey = function defaultValueForKey(key) {
			var v;
			v = key === 'opacity' ? 1 : 0;
			return "" + v + unitForProperty(key, v);
		};

		getCurrentProperties = function getCurrentProperties(el, keys) {
			var isSVG, key, matrix, properties, style, v, _i, _j, _len, _len1, _ref;
			properties = {};
			isSVG = isSVGElement(el);
			if (el.style != null) {
				style = window.getComputedStyle(el, null);
				for (_i = 0, _len = keys.length; _i < _len; _i++) {
					key = keys[_i];
					if (transformProperties.contains(key)) {
						if (properties['transform'] == null) {
							if (isSVG) {
								matrix = new Matrix2D((_ref = el.transform.baseVal.consolidate()) != null ? _ref.matrix : void 0);
							} else {
								matrix = Matrix.fromTransform(style[propertyWithPrefix('transform')]);
							}
							properties['transform'] = matrix.decompose();
						}
					} else {
						if (el.hasAttribute != null && el.hasAttribute(key)) {
							v = el.getAttribute(key);
						} else if (key in el) {
							v = el[key];
						} else {
							v = style[key];
						}
						if ((v == null || key === 'd') && svgProperties.contains(key)) {
							v = el.getAttribute(key);
						}
						if (v === "" || v == null) {
							v = defaultValueForKey(key);
						}
						properties[key] = createInterpolable(v);
					}
				}
			} else {
				for (_j = 0, _len1 = keys.length; _j < _len1; _j++) {
					key = keys[_j];
					properties[key] = createInterpolable(el[key]);
				}
			}
			addUnitsToNumberInterpolables(el, properties);
			return properties;
		};

		addUnitsToNumberInterpolables = function addUnitsToNumberInterpolables(el, properties) {
			var interpolable, k;
			for (k in properties) {
				interpolable = properties[k];
				if (interpolable instanceof InterpolableNumber && el.style != null && k in el.style) {
					interpolable = new InterpolableString([interpolable, unitForProperty(k, 0)]);
				}
				properties[k] = interpolable;
			}
			return properties;
		};

		createInterpolable = function createInterpolable(value) {
			var interpolable, klass, klasses, _i, _len;
			klasses = [InterpolableArray, InterpolableObject, InterpolableNumber, InterpolableString];
			for (_i = 0, _len = klasses.length; _i < _len; _i++) {
				klass = klasses[_i];
				interpolable = klass.create(value);
				if (interpolable != null) {
					return interpolable;
				}
			}
			return null;
		};

		InterpolableString = function () {
			function InterpolableString(parts) {
				this.parts = parts;
				this.format = __bind(this.format, this);
				this.interpolate = __bind(this.interpolate, this);
			}

			InterpolableString.prototype.interpolate = function (endInterpolable, t) {
				var end, i, newParts, start, _i, _ref;
				start = this.parts;
				end = endInterpolable.parts;
				newParts = [];
				for (i = _i = 0, _ref = Math.min(start.length, end.length); 0 <= _ref ? _i < _ref : _i > _ref; i = 0 <= _ref ? ++_i : --_i) {
					if (start[i].interpolate != null) {
						newParts.push(start[i].interpolate(end[i], t));
					} else {
						newParts.push(start[i]);
					}
				}
				return new InterpolableString(newParts);
			};

			InterpolableString.prototype.format = function () {
				var parts;
				parts = this.parts.map(function (val) {
					if (val.format != null) {
						return val.format();
					} else {
						return val;
					}
				});
				return parts.join('');
			};

			InterpolableString.create = function (value) {
				var index, match, matches, parts, re, type, types, _i, _j, _len, _len1;
				value = "" + value;
				matches = [];
				types = [{
					re: /(#[a-f\d]{3,6})/ig,
					klass: InterpolableColor,
					parse: function parse(v) {
						return v;
					}
				}, {
					re: /(rgba?\([0-9.]*, ?[0-9.]*, ?[0-9.]*(?:, ?[0-9.]*)?\))/ig,
					klass: InterpolableColor,
					parse: function parse(v) {
						return v;
					}
				}, {
					re: /([-+]?[\d.]+)/ig,
					klass: InterpolableNumber,
					parse: parseFloat
				}];
				for (_i = 0, _len = types.length; _i < _len; _i++) {
					type = types[_i];
					re = type.re;
					while (match = re.exec(value)) {
						matches.push({
							index: match.index,
							length: match[1].length,
							interpolable: type.klass.create(type.parse(match[1]))
						});
					}
				}
				matches = matches.sort(function (a, b) {
					if (a.index > b.index) {
						return 1;
					} else {
						return -1;
					}
				});
				parts = [];
				index = 0;
				for (_j = 0, _len1 = matches.length; _j < _len1; _j++) {
					match = matches[_j];
					if (match.index < index) {
						continue;
					}
					if (match.index > index) {
						parts.push(value.substring(index, match.index));
					}
					parts.push(match.interpolable);
					index = match.index + match.length;
				}
				if (index < value.length) {
					parts.push(value.substring(index));
				}
				return new InterpolableString(parts);
			};

			return InterpolableString;
		}();

		InterpolableObject = function () {
			function InterpolableObject(obj) {
				this.format = __bind(this.format, this);
				this.interpolate = __bind(this.interpolate, this);
				this.obj = obj;
			}

			InterpolableObject.prototype.interpolate = function (endInterpolable, t) {
				var end, k, newObj, start, v;
				start = this.obj;
				end = endInterpolable.obj;
				newObj = {};
				for (k in start) {
					v = start[k];
					if (v.interpolate != null) {
						newObj[k] = v.interpolate(end[k], t);
					} else {
						newObj[k] = v;
					}
				}
				return new InterpolableObject(newObj);
			};

			InterpolableObject.prototype.format = function () {
				return this.obj;
			};

			InterpolableObject.create = function (value) {
				var k, obj, v;
				if (value instanceof Object) {
					obj = {};
					for (k in value) {
						v = value[k];
						obj[k] = createInterpolable(v);
					}
					return new InterpolableObject(obj);
				}
				return null;
			};

			return InterpolableObject;
		}();

		InterpolableNumber = function () {
			function InterpolableNumber(value) {
				this.format = __bind(this.format, this);
				this.interpolate = __bind(this.interpolate, this);
				this.value = parseFloat(value);
			}

			InterpolableNumber.prototype.interpolate = function (endInterpolable, t) {
				var end, start;
				start = this.value;
				end = endInterpolable.value;
				return new InterpolableNumber((end - start) * t + start);
			};

			InterpolableNumber.prototype.format = function () {
				return roundf(this.value, 5);
			};

			InterpolableNumber.create = function (value) {
				if (typeof value === 'number') {
					return new InterpolableNumber(value);
				}
				return null;
			};

			return InterpolableNumber;
		}();

		InterpolableArray = function () {
			function InterpolableArray(values) {
				this.values = values;
				this.format = __bind(this.format, this);
				this.interpolate = __bind(this.interpolate, this);
			}

			InterpolableArray.prototype.interpolate = function (endInterpolable, t) {
				var end, i, newValues, start, _i, _ref;
				start = this.values;
				end = endInterpolable.values;
				newValues = [];
				for (i = _i = 0, _ref = Math.min(start.length, end.length); 0 <= _ref ? _i < _ref : _i > _ref; i = 0 <= _ref ? ++_i : --_i) {
					if (start[i].interpolate != null) {
						newValues.push(start[i].interpolate(end[i], t));
					} else {
						newValues.push(start[i]);
					}
				}
				return new InterpolableArray(newValues);
			};

			InterpolableArray.prototype.format = function () {
				return this.values.map(function (val) {
					if (val.format != null) {
						return val.format();
					} else {
						return val;
					}
				});
			};

			InterpolableArray.createFromArray = function (arr) {
				var values;
				values = arr.map(function (val) {
					return createInterpolable(val) || val;
				});
				values = values.filter(function (val) {
					return val != null;
				});
				return new InterpolableArray(values);
			};

			InterpolableArray.create = function (value) {
				if (value instanceof Array) {
					return InterpolableArray.createFromArray(value);
				}
				return null;
			};

			return InterpolableArray;
		}();

		Color = function () {
			function Color(rgb, format) {
				this.rgb = rgb != null ? rgb : {};
				this.format = format;
				this.toRgba = __bind(this.toRgba, this);
				this.toRgb = __bind(this.toRgb, this);
				this.toHex = __bind(this.toHex, this);
			}

			Color.fromHex = function (hex) {
				var hex3, result;
				hex3 = hex.match(/^#([a-f\d]{1})([a-f\d]{1})([a-f\d]{1})$/i);
				if (hex3 != null) {
					hex = "#" + hex3[1] + hex3[1] + hex3[2] + hex3[2] + hex3[3] + hex3[3];
				}
				result = hex.match(/^#([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i);
				if (result != null) {
					return new Color({
						r: parseInt(result[1], 16),
						g: parseInt(result[2], 16),
						b: parseInt(result[3], 16),
						a: 1
					}, "hex");
				}
				return null;
			};

			Color.fromRgb = function (rgb) {
				var match, _ref;
				match = rgb.match(/^rgba?\(([0-9.]*), ?([0-9.]*), ?([0-9.]*)(?:, ?([0-9.]*))?\)$/);
				if (match != null) {
					return new Color({
						r: parseFloat(match[1]),
						g: parseFloat(match[2]),
						b: parseFloat(match[3]),
						a: parseFloat((_ref = match[4]) != null ? _ref : 1)
					}, match[4] != null ? "rgba" : "rgb");
				}
				return null;
			};

			Color.componentToHex = function (c) {
				var hex;
				hex = c.toString(16);
				if (hex.length === 1) {
					return "0" + hex;
				} else {
					return hex;
				}
			};

			Color.prototype.toHex = function () {
				return "#" + Color.componentToHex(this.rgb.r) + Color.componentToHex(this.rgb.g) + Color.componentToHex(this.rgb.b);
			};

			Color.prototype.toRgb = function () {
				return "rgb(" + this.rgb.r + ", " + this.rgb.g + ", " + this.rgb.b + ")";
			};

			Color.prototype.toRgba = function () {
				return "rgba(" + this.rgb.r + ", " + this.rgb.g + ", " + this.rgb.b + ", " + this.rgb.a + ")";
			};

			return Color;
		}();

		InterpolableColor = function () {
			function InterpolableColor(color) {
				this.color = color;
				this.format = __bind(this.format, this);
				this.interpolate = __bind(this.interpolate, this);
			}

			InterpolableColor.prototype.interpolate = function (endInterpolable, t) {
				var end, k, rgb, start, v, _i, _len, _ref;
				start = this.color;
				end = endInterpolable.color;
				rgb = {};
				_ref = ['r', 'g', 'b'];
				for (_i = 0, _len = _ref.length; _i < _len; _i++) {
					k = _ref[_i];
					v = Math.round((end.rgb[k] - start.rgb[k]) * t + start.rgb[k]);
					rgb[k] = Math.min(255, Math.max(0, v));
				}
				k = "a";
				v = roundf((end.rgb[k] - start.rgb[k]) * t + start.rgb[k], 5);
				rgb[k] = Math.min(1, Math.max(0, v));
				return new InterpolableColor(new Color(rgb, end.format));
			};

			InterpolableColor.prototype.format = function () {
				if (this.color.format === "hex") {
					return this.color.toHex();
				} else if (this.color.format === "rgb") {
					return this.color.toRgb();
				} else if (this.color.format === "rgba") {
					return this.color.toRgba();
				}
			};

			InterpolableColor.create = function (value) {
				var color;
				if (typeof value !== "string") {
					return;
				}
				color = Color.fromHex(value) || Color.fromRgb(value);
				if (color != null) {
					return new InterpolableColor(color);
				}
				return null;
			};

			return InterpolableColor;
		}();

		DecomposedMatrix2D = function () {
			function DecomposedMatrix2D(props) {
				this.props = props;
				this.applyRotateCenter = __bind(this.applyRotateCenter, this);
				this.format = __bind(this.format, this);
				this.interpolate = __bind(this.interpolate, this);
			}

			DecomposedMatrix2D.prototype.interpolate = function (endMatrix, t) {
				var i, k, newProps, _i, _j, _k, _l, _len, _len1, _ref, _ref1, _ref2;
				newProps = {};
				_ref = ['translate', 'scale', 'rotate'];
				for (_i = 0, _len = _ref.length; _i < _len; _i++) {
					k = _ref[_i];
					newProps[k] = [];
					for (i = _j = 0, _ref1 = this.props[k].length; 0 <= _ref1 ? _j < _ref1 : _j > _ref1; i = 0 <= _ref1 ? ++_j : --_j) {
						newProps[k][i] = (endMatrix.props[k][i] - this.props[k][i]) * t + this.props[k][i];
					}
				}
				for (i = _k = 1; _k <= 2; i = ++_k) {
					newProps['rotate'][i] = endMatrix.props['rotate'][i];
				}
				_ref2 = ['skew'];
				for (_l = 0, _len1 = _ref2.length; _l < _len1; _l++) {
					k = _ref2[_l];
					newProps[k] = (endMatrix.props[k] - this.props[k]) * t + this.props[k];
				}
				return new DecomposedMatrix2D(newProps);
			};

			DecomposedMatrix2D.prototype.format = function () {
				return "translate(" + this.props.translate.join(',') + ") rotate(" + this.props.rotate.join(',') + ") skewX(" + this.props.skew + ") scale(" + this.props.scale.join(',') + ")";
			};

			DecomposedMatrix2D.prototype.applyRotateCenter = function (rotateC) {
				var i, m, m2d, negativeTranslate, _i, _results;
				m = baseSVG.createSVGMatrix();
				m = m.translate(rotateC[0], rotateC[1]);
				m = m.rotate(this.props.rotate[0]);
				m = m.translate(-rotateC[0], -rotateC[1]);
				m2d = new Matrix2D(m);
				negativeTranslate = m2d.decompose().props.translate;
				_results = [];
				for (i = _i = 0; _i <= 1; i = ++_i) {
					_results.push(this.props.translate[i] -= negativeTranslate[i]);
				}
				return _results;
			};

			return DecomposedMatrix2D;
		}();

		baseSVG = typeof document !== "undefined" && document !== null ? document.createElementNS("http://www.w3.org/2000/svg", "svg") : void 0;

		Matrix2D = function () {
			function Matrix2D(m) {
				this.m = m;
				this.applyProperties = __bind(this.applyProperties, this);
				this.decompose = __bind(this.decompose, this);
				if (!this.m) {
					this.m = baseSVG.createSVGMatrix();
				}
			}

			Matrix2D.prototype.decompose = function () {
				var kx, ky, kz, r0, r1;
				r0 = new Vector([this.m.a, this.m.b]);
				r1 = new Vector([this.m.c, this.m.d]);
				kx = r0.length();
				kz = r0.dot(r1);
				r0 = r0.normalize();
				ky = r1.combine(r0, 1, -kz).length();
				return new DecomposedMatrix2D({
					translate: [this.m.e, this.m.f],
					rotate: [Math.atan2(this.m.b, this.m.a) * 180 / Math.PI, this.rotateCX, this.rotateCY],
					scale: [kx, ky],
					skew: kz / ky * 180 / Math.PI
				});
			};

			Matrix2D.prototype.applyProperties = function (properties) {
				var hash, k, props, v, _i, _len, _ref, _ref1;
				hash = {};
				for (_i = 0, _len = properties.length; _i < _len; _i++) {
					props = properties[_i];
					hash[props[0]] = props[1];
				}
				for (k in hash) {
					v = hash[k];
					if (k === "translateX") {
						this.m = this.m.translate(v, 0);
					} else if (k === "translateY") {
						this.m = this.m.translate(0, v);
					} else if (k === "scaleX") {
						this.m = this.m.scaleNonUniform(v, 1);
					} else if (k === "scaleY") {
						this.m = this.m.scaleNonUniform(1, v);
					} else if (k === "rotateZ") {
						this.m = this.m.rotate(v);
					} else if (k === "skewX") {
						this.m = this.m.skewX(v);
					} else if (k === "skewY") {
						this.m = this.m.skewY(v);
					}
				}
				this.rotateCX = (_ref = hash.rotateCX) != null ? _ref : 0;
				return this.rotateCY = (_ref1 = hash.rotateCY) != null ? _ref1 : 0;
			};

			return Matrix2D;
		}();

		Vector = function () {
			function Vector(els) {
				this.els = els;
				this.combine = __bind(this.combine, this);
				this.normalize = __bind(this.normalize, this);
				this.length = __bind(this.length, this);
				this.cross = __bind(this.cross, this);
				this.dot = __bind(this.dot, this);
				this.e = __bind(this.e, this);
			}

			Vector.prototype.e = function (i) {
				if (i < 1 || i > this.els.length) {
					return null;
				} else {
					return this.els[i - 1];
				}
			};

			Vector.prototype.dot = function (vector) {
				var V, n, product;
				V = vector.els || vector;
				product = 0;
				n = this.els.length;
				if (n !== V.length) {
					return null;
				}
				n += 1;
				while (--n) {
					product += this.els[n - 1] * V[n - 1];
				}
				return product;
			};

			Vector.prototype.cross = function (vector) {
				var A, B;
				B = vector.els || vector;
				if (this.els.length !== 3 || B.length !== 3) {
					return null;
				}
				A = this.els;
				return new Vector([A[1] * B[2] - A[2] * B[1], A[2] * B[0] - A[0] * B[2], A[0] * B[1] - A[1] * B[0]]);
			};

			Vector.prototype.length = function () {
				var a, e, _i, _len, _ref;
				a = 0;
				_ref = this.els;
				for (_i = 0, _len = _ref.length; _i < _len; _i++) {
					e = _ref[_i];
					a += Math.pow(e, 2);
				}
				return Math.sqrt(a);
			};

			Vector.prototype.normalize = function () {
				var e, i, length, newElements, _ref;
				length = this.length();
				newElements = [];
				_ref = this.els;
				for (i in _ref) {
					e = _ref[i];
					newElements[i] = e / length;
				}
				return new Vector(newElements);
			};

			Vector.prototype.combine = function (b, ascl, bscl) {
				var i, result, _i, _ref;
				result = [];
				for (i = _i = 0, _ref = this.els.length; 0 <= _ref ? _i < _ref : _i > _ref; i = 0 <= _ref ? ++_i : --_i) {
					result[i] = ascl * this.els[i] + bscl * b.els[i];
				}
				return new Vector(result);
			};

			return Vector;
		}();

		DecomposedMatrix = function () {
			function DecomposedMatrix() {
				this.toMatrix = __bind(this.toMatrix, this);
				this.format = __bind(this.format, this);
				this.interpolate = __bind(this.interpolate, this);
			}

			DecomposedMatrix.prototype.interpolate = function (decomposedB, t, only) {
				var angle, decomposed, decomposedA, i, invscale, invth, k, qa, qb, scale, th, _i, _j, _k, _l, _len, _ref, _ref1;
				if (only == null) {
					only = null;
				}
				decomposedA = this;
				decomposed = new DecomposedMatrix();
				_ref = ['translate', 'scale', 'skew', 'perspective'];
				for (_i = 0, _len = _ref.length; _i < _len; _i++) {
					k = _ref[_i];
					decomposed[k] = [];
					for (i = _j = 0, _ref1 = decomposedA[k].length - 1; 0 <= _ref1 ? _j <= _ref1 : _j >= _ref1; i = 0 <= _ref1 ? ++_j : --_j) {
						if (only == null || only.indexOf(k) > -1 || only.indexOf("" + k + ['x', 'y', 'z'][i]) > -1) {
							decomposed[k][i] = (decomposedB[k][i] - decomposedA[k][i]) * t + decomposedA[k][i];
						} else {
							decomposed[k][i] = decomposedA[k][i];
						}
					}
				}
				if (only == null || only.indexOf('rotate') !== -1) {
					qa = decomposedA.quaternion;
					qb = decomposedB.quaternion;
					angle = qa[0] * qb[0] + qa[1] * qb[1] + qa[2] * qb[2] + qa[3] * qb[3];
					if (angle < 0.0) {
						for (i = _k = 0; _k <= 3; i = ++_k) {
							qa[i] = -qa[i];
						}
						angle = -angle;
					}
					if (angle + 1.0 > .05) {
						if (1.0 - angle >= .05) {
							th = Math.acos(angle);
							invth = 1.0 / Math.sin(th);
							scale = Math.sin(th * (1.0 - t)) * invth;
							invscale = Math.sin(th * t) * invth;
						} else {
							scale = 1.0 - t;
							invscale = t;
						}
					} else {
						qb[0] = -qa[1];
						qb[1] = qa[0];
						qb[2] = -qa[3];
						qb[3] = qa[2];
						scale = Math.sin(piDouble * (.5 - t));
						invscale = Math.sin(piDouble * t);
					}
					decomposed.quaternion = [];
					for (i = _l = 0; _l <= 3; i = ++_l) {
						decomposed.quaternion[i] = qa[i] * scale + qb[i] * invscale;
					}
				} else {
					decomposed.quaternion = decomposedA.quaternion;
				}
				return decomposed;
			};

			DecomposedMatrix.prototype.format = function () {
				return this.toMatrix().toString();
			};

			DecomposedMatrix.prototype.toMatrix = function () {
				var decomposedMatrix, i, j, match, matrix, quaternion, skew, temp, w, x, y, z, _i, _j, _k, _l;
				decomposedMatrix = this;
				matrix = Matrix.I(4);
				for (i = _i = 0; _i <= 3; i = ++_i) {
					matrix.els[i][3] = decomposedMatrix.perspective[i];
				}
				quaternion = decomposedMatrix.quaternion;
				x = quaternion[0];
				y = quaternion[1];
				z = quaternion[2];
				w = quaternion[3];
				skew = decomposedMatrix.skew;
				match = [[1, 0], [2, 0], [2, 1]];
				for (i = _j = 2; _j >= 0; i = --_j) {
					if (skew[i]) {
						temp = Matrix.I(4);
						temp.els[match[i][0]][match[i][1]] = skew[i];
						matrix = matrix.multiply(temp);
					}
				}
				matrix = matrix.multiply(new Matrix([[1 - 2 * (y * y + z * z), 2 * (x * y - z * w), 2 * (x * z + y * w), 0], [2 * (x * y + z * w), 1 - 2 * (x * x + z * z), 2 * (y * z - x * w), 0], [2 * (x * z - y * w), 2 * (y * z + x * w), 1 - 2 * (x * x + y * y), 0], [0, 0, 0, 1]]));
				for (i = _k = 0; _k <= 2; i = ++_k) {
					for (j = _l = 0; _l <= 2; j = ++_l) {
						matrix.els[i][j] *= decomposedMatrix.scale[i];
					}
					matrix.els[3][i] = decomposedMatrix.translate[i];
				}
				return matrix;
			};

			return DecomposedMatrix;
		}();

		Matrix = function () {
			function Matrix(els) {
				this.els = els;
				this.toString = __bind(this.toString, this);
				this.decompose = __bind(this.decompose, this);
				this.inverse = __bind(this.inverse, this);
				this.augment = __bind(this.augment, this);
				this.toRightTriangular = __bind(this.toRightTriangular, this);
				this.transpose = __bind(this.transpose, this);
				this.multiply = __bind(this.multiply, this);
				this.dup = __bind(this.dup, this);
				this.e = __bind(this.e, this);
			}

			Matrix.prototype.e = function (i, j) {
				if (i < 1 || i > this.els.length || j < 1 || j > this.els[0].length) {
					return null;
				}
				return this.els[i - 1][j - 1];
			};

			Matrix.prototype.dup = function () {
				return new Matrix(this.els);
			};

			Matrix.prototype.multiply = function (matrix) {
				var M, c, cols, elements, i, j, ki, kj, nc, ni, nj, returnVector, sum;
				returnVector = matrix.modulus ? true : false;
				M = matrix.els || matrix;
				if (typeof M[0][0] === 'undefined') {
					M = new Matrix(M).els;
				}
				ni = this.els.length;
				ki = ni;
				kj = M[0].length;
				cols = this.els[0].length;
				elements = [];
				ni += 1;
				while (--ni) {
					i = ki - ni;
					elements[i] = [];
					nj = kj;
					nj += 1;
					while (--nj) {
						j = kj - nj;
						sum = 0;
						nc = cols;
						nc += 1;
						while (--nc) {
							c = cols - nc;
							sum += this.els[i][c] * M[c][j];
						}
						elements[i][j] = sum;
					}
				}
				M = new Matrix(elements);
				if (returnVector) {
					return M.col(1);
				} else {
					return M;
				}
			};

			Matrix.prototype.transpose = function () {
				var cols, elements, i, j, ni, nj, rows;
				rows = this.els.length;
				cols = this.els[0].length;
				elements = [];
				ni = cols;
				ni += 1;
				while (--ni) {
					i = cols - ni;
					elements[i] = [];
					nj = rows;
					nj += 1;
					while (--nj) {
						j = rows - nj;
						elements[i][j] = this.els[j][i];
					}
				}
				return new Matrix(elements);
			};

			Matrix.prototype.toRightTriangular = function () {
				var M, els, i, j, k, kp, multiplier, n, np, p, _i, _j, _ref, _ref1;
				M = this.dup();
				n = this.els.length;
				k = n;
				kp = this.els[0].length;
				while (--n) {
					i = k - n;
					if (M.els[i][i] === 0) {
						for (j = _i = _ref = i + 1; _ref <= k ? _i < k : _i > k; j = _ref <= k ? ++_i : --_i) {
							if (M.els[j][i] !== 0) {
								els = [];
								np = kp;
								np += 1;
								while (--np) {
									p = kp - np;
									els.push(M.els[i][p] + M.els[j][p]);
								}
								M.els[i] = els;
								break;
							}
						}
					}
					if (M.els[i][i] !== 0) {
						for (j = _j = _ref1 = i + 1; _ref1 <= k ? _j < k : _j > k; j = _ref1 <= k ? ++_j : --_j) {
							multiplier = M.els[j][i] / M.els[i][i];
							els = [];
							np = kp;
							np += 1;
							while (--np) {
								p = kp - np;
								els.push(p <= i ? 0 : M.els[j][p] - M.els[i][p] * multiplier);
							}
							M.els[j] = els;
						}
					}
				}
				return M;
			};

			Matrix.prototype.augment = function (matrix) {
				var M, T, cols, i, j, ki, kj, ni, nj;
				M = matrix.els || matrix;
				if (typeof M[0][0] === 'undefined') {
					M = new Matrix(M).els;
				}
				T = this.dup();
				cols = T.els[0].length;
				ni = T.els.length;
				ki = ni;
				kj = M[0].length;
				if (ni !== M.length) {
					return null;
				}
				ni += 1;
				while (--ni) {
					i = ki - ni;
					nj = kj;
					nj += 1;
					while (--nj) {
						j = kj - nj;
						T.els[i][cols + j] = M[i][j];
					}
				}
				return T;
			};

			Matrix.prototype.inverse = function () {
				var M, divisor, els, i, inverse_elements, j, ki, kp, new_element, ni, np, p, _i;
				ni = this.els.length;
				ki = ni;
				M = this.augment(Matrix.I(ni)).toRightTriangular();
				kp = M.els[0].length;
				inverse_elements = [];
				ni += 1;
				while (--ni) {
					i = ni - 1;
					els = [];
					np = kp;
					inverse_elements[i] = [];
					divisor = M.els[i][i];
					np += 1;
					while (--np) {
						p = kp - np;
						new_element = M.els[i][p] / divisor;
						els.push(new_element);
						if (p >= ki) {
							inverse_elements[i].push(new_element);
						}
					}
					M.els[i] = els;
					for (j = _i = 0; 0 <= i ? _i < i : _i > i; j = 0 <= i ? ++_i : --_i) {
						els = [];
						np = kp;
						np += 1;
						while (--np) {
							p = kp - np;
							els.push(M.els[j][p] - M.els[i][p] * M.els[j][i]);
						}
						M.els[j] = els;
					}
				}
				return new Matrix(inverse_elements);
			};

			Matrix.I = function (n) {
				var els, i, j, k, nj;
				els = [];
				k = n;
				n += 1;
				while (--n) {
					i = k - n;
					els[i] = [];
					nj = k;
					nj += 1;
					while (--nj) {
						j = k - nj;
						els[i][j] = i === j ? 1 : 0;
					}
				}
				return new Matrix(els);
			};

			Matrix.prototype.decompose = function () {
				var els, i, inversePerspectiveMatrix, j, k, matrix, pdum3, perspective, perspectiveMatrix, quaternion, result, rightHandSide, rotate, row, rowElement, s, scale, skew, t, translate, transposedInversePerspectiveMatrix, type, typeKey, v, w, x, y, z, _i, _j, _k, _l, _m, _n, _o, _p, _q, _r;
				matrix = this;
				translate = [];
				scale = [];
				skew = [];
				quaternion = [];
				perspective = [];
				els = [];
				for (i = _i = 0; _i <= 3; i = ++_i) {
					els[i] = [];
					for (j = _j = 0; _j <= 3; j = ++_j) {
						els[i][j] = matrix.els[i][j];
					}
				}
				if (els[3][3] === 0) {
					return false;
				}
				for (i = _k = 0; _k <= 3; i = ++_k) {
					for (j = _l = 0; _l <= 3; j = ++_l) {
						els[i][j] /= els[3][3];
					}
				}
				perspectiveMatrix = matrix.dup();
				for (i = _m = 0; _m <= 2; i = ++_m) {
					perspectiveMatrix.els[i][3] = 0;
				}
				perspectiveMatrix.els[3][3] = 1;
				if (els[0][3] !== 0 || els[1][3] !== 0 || els[2][3] !== 0) {
					rightHandSide = new Vector(els.slice(0, 4)[3]);
					inversePerspectiveMatrix = perspectiveMatrix.inverse();
					transposedInversePerspectiveMatrix = inversePerspectiveMatrix.transpose();
					perspective = transposedInversePerspectiveMatrix.multiply(rightHandSide).els;
					for (i = _n = 0; _n <= 2; i = ++_n) {
						els[i][3] = 0;
					}
					els[3][3] = 1;
				} else {
					perspective = [0, 0, 0, 1];
				}
				for (i = _o = 0; _o <= 2; i = ++_o) {
					translate[i] = els[3][i];
					els[3][i] = 0;
				}
				row = [];
				for (i = _p = 0; _p <= 2; i = ++_p) {
					row[i] = new Vector(els[i].slice(0, 3));
				}
				scale[0] = row[0].length();
				row[0] = row[0].normalize();
				skew[0] = row[0].dot(row[1]);
				row[1] = row[1].combine(row[0], 1.0, -skew[0]);
				scale[1] = row[1].length();
				row[1] = row[1].normalize();
				skew[0] /= scale[1];
				skew[1] = row[0].dot(row[2]);
				row[2] = row[2].combine(row[0], 1.0, -skew[1]);
				skew[2] = row[1].dot(row[2]);
				row[2] = row[2].combine(row[1], 1.0, -skew[2]);
				scale[2] = row[2].length();
				row[2] = row[2].normalize();
				skew[1] /= scale[2];
				skew[2] /= scale[2];
				pdum3 = row[1].cross(row[2]);
				if (row[0].dot(pdum3) < 0) {
					for (i = _q = 0; _q <= 2; i = ++_q) {
						scale[i] *= -1;
						for (j = _r = 0; _r <= 2; j = ++_r) {
							row[i].els[j] *= -1;
						}
					}
				}
				rowElement = function rowElement(index, elementIndex) {
					return row[index].els[elementIndex];
				};
				rotate = [];
				rotate[1] = Math.asin(-rowElement(0, 2));
				if (Math.cos(rotate[1]) !== 0) {
					rotate[0] = Math.atan2(rowElement(1, 2), rowElement(2, 2));
					rotate[2] = Math.atan2(rowElement(0, 1), rowElement(0, 0));
				} else {
					rotate[0] = Math.atan2(-rowElement(2, 0), rowElement(1, 1));
					rotate[1] = 0;
				}
				t = rowElement(0, 0) + rowElement(1, 1) + rowElement(2, 2) + 1.0;
				if (t > 1e-4) {
					s = 0.5 / Math.sqrt(t);
					w = 0.25 / s;
					x = (rowElement(2, 1) - rowElement(1, 2)) * s;
					y = (rowElement(0, 2) - rowElement(2, 0)) * s;
					z = (rowElement(1, 0) - rowElement(0, 1)) * s;
				} else if (rowElement(0, 0) > rowElement(1, 1) && rowElement(0, 0) > rowElement(2, 2)) {
					s = Math.sqrt(1.0 + rowElement(0, 0) - rowElement(1, 1) - rowElement(2, 2)) * 2.0;
					x = 0.25 * s;
					y = (rowElement(0, 1) + rowElement(1, 0)) / s;
					z = (rowElement(0, 2) + rowElement(2, 0)) / s;
					w = (rowElement(2, 1) - rowElement(1, 2)) / s;
				} else if (rowElement(1, 1) > rowElement(2, 2)) {
					s = Math.sqrt(1.0 + rowElement(1, 1) - rowElement(0, 0) - rowElement(2, 2)) * 2.0;
					x = (rowElement(0, 1) + rowElement(1, 0)) / s;
					y = 0.25 * s;
					z = (rowElement(1, 2) + rowElement(2, 1)) / s;
					w = (rowElement(0, 2) - rowElement(2, 0)) / s;
				} else {
					s = Math.sqrt(1.0 + rowElement(2, 2) - rowElement(0, 0) - rowElement(1, 1)) * 2.0;
					x = (rowElement(0, 2) + rowElement(2, 0)) / s;
					y = (rowElement(1, 2) + rowElement(2, 1)) / s;
					z = 0.25 * s;
					w = (rowElement(1, 0) - rowElement(0, 1)) / s;
				}
				quaternion = [x, y, z, w];
				result = new DecomposedMatrix();
				result.translate = translate;
				result.scale = scale;
				result.skew = skew;
				result.quaternion = quaternion;
				result.perspective = perspective;
				result.rotate = rotate;
				for (typeKey in result) {
					type = result[typeKey];
					for (k in type) {
						v = type[k];
						if (isNaN(v)) {
							type[k] = 0;
						}
					}
				}
				return result;
			};

			Matrix.prototype.toString = function () {
				var i, j, str, _i, _j;
				str = 'matrix3d(';
				for (i = _i = 0; _i <= 3; i = ++_i) {
					for (j = _j = 0; _j <= 3; j = ++_j) {
						str += roundf(this.els[i][j], 10);
						if (!(i === 3 && j === 3)) {
							str += ',';
						}
					}
				}
				str += ')';
				return str;
			};

			Matrix.matrixForTransform = cacheFn(function (transform) {
				var matrixEl, result, style, _ref, _ref1, _ref2;
				matrixEl = document.createElement('div');
				matrixEl.style.position = 'absolute';
				matrixEl.style.visibility = 'hidden';
				matrixEl.style[propertyWithPrefix("transform")] = transform;
				document.body.appendChild(matrixEl);
				style = window.getComputedStyle(matrixEl, null);
				result = (_ref = (_ref1 = style.transform) != null ? _ref1 : style[propertyWithPrefix("transform")]) != null ? _ref : (_ref2 = dynamics.tests) != null ? _ref2.matrixForTransform(transform) : void 0;
				document.body.removeChild(matrixEl);
				return result;
			});

			Matrix.fromTransform = function (transform) {
				var digits, elements, i, match, matrixElements, _i;
				match = transform != null ? transform.match(/matrix3?d?\(([-0-9,e \.]*)\)/) : void 0;
				if (match) {
					digits = match[1].split(',');
					digits = digits.map(parseFloat);
					if (digits.length === 6) {
						elements = [digits[0], digits[1], 0, 0, digits[2], digits[3], 0, 0, 0, 0, 1, 0, digits[4], digits[5], 0, 1];
					} else {
						elements = digits;
					}
				} else {
					elements = [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1];
				}
				matrixElements = [];
				for (i = _i = 0; _i <= 3; i = ++_i) {
					matrixElements.push(elements.slice(i * 4, i * 4 + 4));
				}
				return new Matrix(matrixElements);
			};

			return Matrix;
		}();

		prefixFor = cacheFn(function (property) {
			var k, prefix, prop, propArray, propertyName, _i, _j, _len, _len1, _ref;
			if (document.body.style[property] !== void 0) {
				return '';
			}
			propArray = property.split('-');
			propertyName = "";
			for (_i = 0, _len = propArray.length; _i < _len; _i++) {
				prop = propArray[_i];
				propertyName += prop.substring(0, 1).toUpperCase() + prop.substring(1);
			}
			_ref = ["Webkit", "Moz", "ms"];
			for (_j = 0, _len1 = _ref.length; _j < _len1; _j++) {
				prefix = _ref[_j];
				k = prefix + propertyName;
				if (document.body.style[k] !== void 0) {
					return prefix;
				}
			}
			return '';
		});

		propertyWithPrefix = cacheFn(function (property) {
			var prefix;
			prefix = prefixFor(property);
			if (prefix === 'Moz') {
				return "" + prefix + (property.substring(0, 1).toUpperCase() + property.substring(1));
			}
			if (prefix !== '') {
				return "-" + prefix.toLowerCase() + "-" + toDashed(property);
			}
			return toDashed(property);
		});

		rAF = typeof window !== "undefined" && window !== null ? window.requestAnimationFrame : void 0;

		animations = [];

		animationsTimeouts = [];

		slow = false;

		slowRatio = 1;

		if (typeof window !== "undefined" && window !== null) {
			window.addEventListener('keyup', function (e) {
				if (e.keyCode === 68 && e.shiftKey && e.ctrlKey) {
					return dynamics.toggleSlow();
				}
			});
		}

		if (rAF == null) {
			lastTime = 0;
			rAF = function rAF(callback) {
				var currTime, id, timeToCall;
				currTime = Date.now();
				timeToCall = Math.max(0, 16 - (currTime - lastTime));
				id = window.setTimeout(function () {
					return callback(currTime + timeToCall);
				}, timeToCall);
				lastTime = currTime + timeToCall;
				return id;
			};
		}

		runLoopRunning = false;

		runLoopPaused = false;

		startRunLoop = function startRunLoop() {
			if (!runLoopRunning) {
				runLoopRunning = true;
				return rAF(_runLoopTick);
			}
		};

		_runLoopTick = function runLoopTick(t) {
			var animation, toRemoveAnimations, _i, _len;
			if (runLoopPaused) {
				rAF(_runLoopTick);
				return;
			}
			toRemoveAnimations = [];
			for (_i = 0, _len = animations.length; _i < _len; _i++) {
				animation = animations[_i];
				if (!animationTick(t, animation)) {
					toRemoveAnimations.push(animation);
				}
			}
			animations = animations.filter(function (animation) {
				return toRemoveAnimations.indexOf(animation) === -1;
			});
			if (animations.length === 0) {
				return runLoopRunning = false;
			} else {
				return rAF(_runLoopTick);
			}
		};

		animationTick = function animationTick(t, animation) {
			var key, properties, property, tt, y, _base, _base1, _ref;
			if (animation.tStart == null) {
				animation.tStart = t;
			}
			tt = (t - animation.tStart) / animation.options.duration;
			y = animation.curve(tt);
			properties = {};
			if (tt >= 1) {
				if (animation.curve.returnsToSelf) {
					properties = animation.properties.start;
				} else {
					properties = animation.properties.end;
				}
			} else {
				_ref = animation.properties.start;
				for (key in _ref) {
					property = _ref[key];
					properties[key] = interpolate(property, animation.properties.end[key], y);
				}
			}
			applyFrame(animation.el, properties);
			if (typeof (_base = animation.options).change === "function") {
				_base.change(animation.el, Math.min(1, tt));
			}
			if (tt >= 1) {
				if (typeof (_base1 = animation.options).complete === "function") {
					_base1.complete(animation.el);
				}
			}
			return tt < 1;
		};

		interpolate = function interpolate(start, end, y) {
			if (start != null && start.interpolate != null) {
				return start.interpolate(end, y);
			}
			return null;
		};

		startAnimation = function startAnimation(el, properties, options, timeoutId) {
			var endProperties, isSVG, k, matrix, startProperties, transforms, v;
			if (timeoutId != null) {
				animationsTimeouts = animationsTimeouts.filter(function (timeout) {
					return timeout.id !== timeoutId;
				});
			}
			dynamics.stop(el, {
				timeout: false
			});
			if (!options.animated) {
				dynamics.css(el, properties);
				if (typeof options.complete === "function") {
					options.complete(this);
				}
				return;
			}
			startProperties = getCurrentProperties(el, Object.keys(properties));
			properties = parseProperties(properties);
			endProperties = {};
			transforms = [];
			for (k in properties) {
				v = properties[k];
				if (el.style != null && transformProperties.contains(k)) {
					transforms.push([k, v]);
				} else {
					endProperties[k] = createInterpolable(v);
				}
			}
			if (transforms.length > 0) {
				isSVG = isSVGElement(el);
				if (isSVG) {
					matrix = new Matrix2D();
					matrix.applyProperties(transforms);
				} else {
					v = transforms.map(function (transform) {
						return transformValueForProperty(transform[0], transform[1]);
					}).join(" ");
					matrix = Matrix.fromTransform(Matrix.matrixForTransform(v));
				}
				endProperties['transform'] = matrix.decompose();
				if (isSVG) {
					startProperties.transform.applyRotateCenter([endProperties.transform.props.rotate[1], endProperties.transform.props.rotate[2]]);
				}
			}
			addUnitsToNumberInterpolables(el, endProperties);
			animations.push({
				el: el,
				properties: {
					start: startProperties,
					end: endProperties
				},
				options: options,
				curve: options.type.call(options.type, options)
			});
			return startRunLoop();
		};

		timeouts = [];

		timeoutLastId = 0;

		setRealTimeout = function setRealTimeout(timeout) {
			if (!isDocumentVisible()) {
				return;
			}
			return rAF(function () {
				if (timeouts.indexOf(timeout) === -1) {
					return;
				}
				return timeout.realTimeoutId = setTimeout(function () {
					timeout.fn();
					return cancelTimeout(timeout.id);
				}, timeout.delay);
			});
		};

		addTimeout = function addTimeout(fn, delay) {
			var timeout;
			timeoutLastId += 1;
			timeout = {
				id: timeoutLastId,
				tStart: Date.now(),
				fn: fn,
				delay: delay,
				originalDelay: delay
			};
			setRealTimeout(timeout);
			timeouts.push(timeout);
			return timeoutLastId;
		};

		cancelTimeout = function cancelTimeout(id) {
			return timeouts = timeouts.filter(function (timeout) {
				if (timeout.id === id && timeout.realTimeoutId) {
					clearTimeout(timeout.realTimeoutId);
				}
				return timeout.id !== id;
			});
		};

		leftDelayForTimeout = function leftDelayForTimeout(time, timeout) {
			var consumedDelay;
			if (time != null) {
				consumedDelay = time - timeout.tStart;
				return timeout.originalDelay - consumedDelay;
			} else {
				return timeout.originalDelay;
			}
		};

		if (typeof window !== "undefined" && window !== null) {
			window.addEventListener('unload', function () {});
		}

		timeBeforeVisibilityChange = null;

		observeVisibilityChange(function (visible) {
			var animation, difference, timeout, _i, _j, _k, _len, _len1, _len2, _results;
			runLoopPaused = !visible;
			if (!visible) {
				timeBeforeVisibilityChange = Date.now();
				_results = [];
				for (_i = 0, _len = timeouts.length; _i < _len; _i++) {
					timeout = timeouts[_i];
					_results.push(clearTimeout(timeout.realTimeoutId));
				}
				return _results;
			} else {
				if (runLoopRunning) {
					difference = Date.now() - timeBeforeVisibilityChange;
					for (_j = 0, _len1 = animations.length; _j < _len1; _j++) {
						animation = animations[_j];
						if (animation.tStart != null) {
							animation.tStart += difference;
						}
					}
				}
				for (_k = 0, _len2 = timeouts.length; _k < _len2; _k++) {
					timeout = timeouts[_k];
					timeout.delay = leftDelayForTimeout(timeBeforeVisibilityChange, timeout);
					setRealTimeout(timeout);
				}
				return timeBeforeVisibilityChange = null;
			}
		});

		dynamics = {};

		dynamics.linear = function () {
			return function (t) {
				return t;
			};
		};

		dynamics.spring = function (options) {
			var A1, A2, decal, frequency, friction, s;
			if (options == null) {
				options = {};
			}
			applyDefaults(options, dynamics.spring.defaults);
			frequency = Math.max(1, options.frequency / 20);
			friction = Math.pow(20, options.friction / 100);
			s = options.anticipationSize / 1000;
			decal = Math.max(0, s);
			A1 = function A1(t) {
				var M, a, b, x0, x1;
				M = 0.8;
				x0 = s / (1 - s);
				x1 = 0;
				b = (x0 - M * x1) / (x0 - x1);
				a = (M - b) / x0;
				return a * t * options.anticipationStrength / 100 + b;
			};
			A2 = function A2(t) {
				return Math.pow(friction / 10, -t) * (1 - t);
			};
			return function (t) {
				var A, At, a, angle, b, frictionT, y0, yS;
				frictionT = t / (1 - s) - s / (1 - s);
				if (t < s) {
					yS = s / (1 - s) - s / (1 - s);
					y0 = 0 / (1 - s) - s / (1 - s);
					b = Math.acos(1 / A1(yS));
					a = (Math.acos(1 / A1(y0)) - b) / (frequency * -s);
					A = A1;
				} else {
					A = A2;
					b = 0;
					a = 1;
				}
				At = A(frictionT);
				angle = frequency * (t - s) * a + b;
				return 1 - At * Math.cos(angle);
			};
		};

		dynamics.bounce = function (options) {
			var A, fn, frequency, friction;
			if (options == null) {
				options = {};
			}
			applyDefaults(options, dynamics.bounce.defaults);
			frequency = Math.max(1, options.frequency / 20);
			friction = Math.pow(20, options.friction / 100);
			A = function A(t) {
				return Math.pow(friction / 10, -t) * (1 - t);
			};
			fn = function fn(t) {
				var At, a, angle, b;
				b = -3.14 / 2;
				a = 1;
				At = A(t);
				angle = frequency * t * a + b;
				return At * Math.cos(angle);
			};
			fn.returnsToSelf = true;
			return fn;
		};

		dynamics.gravity = function (options) {
			var L, bounciness, curves, elasticity, fn, getPointInCurve, gravity;
			if (options == null) {
				options = {};
			}
			applyDefaults(options, dynamics.gravity.defaults);
			bounciness = Math.min(options.bounciness / 1250, 0.8);
			elasticity = options.elasticity / 1000;
			gravity = 100;
			curves = [];
			L = function () {
				var b, curve;
				b = Math.sqrt(2 / gravity);
				curve = {
					a: -b,
					b: b,
					H: 1
				};
				if (options.returnsToSelf) {
					curve.a = 0;
					curve.b = curve.b * 2;
				}
				while (curve.H > 0.001) {
					L = curve.b - curve.a;
					curve = {
						a: curve.b,
						b: curve.b + L * bounciness,
						H: curve.H * bounciness * bounciness
					};
				}
				return curve.b;
			}();
			getPointInCurve = function getPointInCurve(a, b, H, t) {
				var c, t2;
				L = b - a;
				t2 = 2 / L * t - 1 - a * 2 / L;
				c = t2 * t2 * H - H + 1;
				if (options.returnsToSelf) {
					c = 1 - c;
				}
				return c;
			};
			(function () {
				var L2, b, curve, _results;
				b = Math.sqrt(2 / (gravity * L * L));
				curve = {
					a: -b,
					b: b,
					H: 1
				};
				if (options.returnsToSelf) {
					curve.a = 0;
					curve.b = curve.b * 2;
				}
				curves.push(curve);
				L2 = L;
				_results = [];
				while (curve.b < 1 && curve.H > 0.001) {
					L2 = curve.b - curve.a;
					curve = {
						a: curve.b,
						b: curve.b + L2 * bounciness,
						H: curve.H * elasticity
					};
					_results.push(curves.push(curve));
				}
				return _results;
			})();
			fn = function fn(t) {
				var curve, i, v;
				i = 0;
				curve = curves[i];
				while (!(t >= curve.a && t <= curve.b)) {
					i += 1;
					curve = curves[i];
					if (!curve) {
						break;
					}
				}
				if (!curve) {
					v = options.returnsToSelf ? 0 : 1;
				} else {
					v = getPointInCurve(curve.a, curve.b, curve.H, t);
				}
				return v;
			};
			fn.returnsToSelf = options.returnsToSelf;
			return fn;
		};

		dynamics.forceWithGravity = function (options) {
			if (options == null) {
				options = {};
			}
			applyDefaults(options, dynamics.forceWithGravity.defaults);
			options.returnsToSelf = true;
			return dynamics.gravity(options);
		};

		dynamics.bezier = function () {
			var Bezier, Bezier_, yForX;
			Bezier_ = function Bezier_(t, p0, p1, p2, p3) {
				return Math.pow(1 - t, 3) * p0 + 3 * Math.pow(1 - t, 2) * t * p1 + 3 * (1 - t) * Math.pow(t, 2) * p2 + Math.pow(t, 3) * p3;
			};
			Bezier = function Bezier(t, p0, p1, p2, p3) {
				return {
					x: Bezier_(t, p0.x, p1.x, p2.x, p3.x),
					y: Bezier_(t, p0.y, p1.y, p2.y, p3.y)
				};
			};
			yForX = function yForX(xTarget, Bs, returnsToSelf) {
				var B, aB, i, lower, percent, upper, x, xTolerance, _i, _len;
				B = null;
				for (_i = 0, _len = Bs.length; _i < _len; _i++) {
					aB = Bs[_i];
					if (xTarget >= aB(0).x && xTarget <= aB(1).x) {
						B = aB;
					}
					if (B !== null) {
						break;
					}
				}
				if (!B) {
					if (returnsToSelf) {
						return 0;
					} else {
						return 1;
					}
				}
				xTolerance = 0.0001;
				lower = 0;
				upper = 1;
				percent = (upper + lower) / 2;
				x = B(percent).x;
				i = 0;
				while (Math.abs(xTarget - x) > xTolerance && i < 100) {
					if (xTarget > x) {
						lower = percent;
					} else {
						upper = percent;
					}
					percent = (upper + lower) / 2;
					x = B(percent).x;
					i += 1;
				}
				return B(percent).y;
			};
			return function (options) {
				var Bs, fn, points;
				if (options == null) {
					options = {};
				}
				points = options.points;
				Bs = function () {
					var i, k, _fn;
					Bs = [];
					_fn = function _fn(pointA, pointB) {
						var B2;
						B2 = function B2(t) {
							return Bezier(t, pointA, pointA.cp[pointA.cp.length - 1], pointB.cp[0], pointB);
						};
						return Bs.push(B2);
					};
					for (i in points) {
						k = parseInt(i);
						if (k >= points.length - 1) {
							break;
						}
						_fn(points[k], points[k + 1]);
					}
					return Bs;
				}();
				fn = function fn(t) {
					if (t === 0) {
						return 0;
					} else if (t === 1) {
						return 1;
					} else {
						return yForX(t, Bs, this.returnsToSelf);
					}
				};
				fn.returnsToSelf = points[points.length - 1].y === 0;
				return fn;
			};
		}();

		dynamics.easeInOut = function (options) {
			var friction, _ref;
			if (options == null) {
				options = {};
			}
			friction = (_ref = options.friction) != null ? _ref : dynamics.easeInOut.defaults.friction;
			return dynamics.bezier({
				points: [{
					x: 0,
					y: 0,
					cp: [{
						x: 0.92 - friction / 1000,
						y: 0
					}]
				}, {
					x: 1,
					y: 1,
					cp: [{
						x: 0.08 + friction / 1000,
						y: 1
					}]
				}]
			});
		};

		dynamics.easeIn = function (options) {
			var friction, _ref;
			if (options == null) {
				options = {};
			}
			friction = (_ref = options.friction) != null ? _ref : dynamics.easeIn.defaults.friction;
			return dynamics.bezier({
				points: [{
					x: 0,
					y: 0,
					cp: [{
						x: 0.92 - friction / 1000,
						y: 0
					}]
				}, {
					x: 1,
					y: 1,
					cp: [{
						x: 1,
						y: 1
					}]
				}]
			});
		};

		dynamics.easeOut = function (options) {
			var friction, _ref;
			if (options == null) {
				options = {};
			}
			friction = (_ref = options.friction) != null ? _ref : dynamics.easeOut.defaults.friction;
			return dynamics.bezier({
				points: [{
					x: 0,
					y: 0,
					cp: [{
						x: 0,
						y: 0
					}]
				}, {
					x: 1,
					y: 1,
					cp: [{
						x: 0.08 + friction / 1000,
						y: 1
					}]
				}]
			});
		};

		dynamics.spring.defaults = {
			frequency: 300,
			friction: 200,
			anticipationSize: 0,
			anticipationStrength: 0
		};

		dynamics.bounce.defaults = {
			frequency: 300,
			friction: 200
		};

		dynamics.forceWithGravity.defaults = dynamics.gravity.defaults = {
			bounciness: 400,
			elasticity: 200
		};

		dynamics.easeInOut.defaults = dynamics.easeIn.defaults = dynamics.easeOut.defaults = {
			friction: 500
		};

		dynamics.css = makeArrayFn(function (el, properties) {
			return applyProperties(el, properties, true);
		});

		dynamics.animate = makeArrayFn(function (el, properties, options) {
			var id;
			if (options == null) {
				options = {};
			}
			options = clone(options);
			applyDefaults(options, {
				type: dynamics.easeInOut,
				duration: 1000,
				delay: 0,
				animated: true
			});
			options.duration = Math.max(0, options.duration * slowRatio);
			options.delay = Math.max(0, options.delay);
			if (options.delay === 0) {
				return startAnimation(el, properties, options);
			} else {
				id = dynamics.setTimeout(function () {
					return startAnimation(el, properties, options, id);
				}, options.delay);
				return animationsTimeouts.push({
					id: id,
					el: el
				});
			}
		});

		dynamics.stop = makeArrayFn(function (el, options) {
			if (options == null) {
				options = {};
			}
			if (options.timeout == null) {
				options.timeout = true;
			}
			if (options.timeout) {
				animationsTimeouts = animationsTimeouts.filter(function (timeout) {
					if (timeout.el === el && (options.filter == null || options.filter(timeout))) {
						dynamics.clearTimeout(timeout.id);
						return false;
					}
					return true;
				});
			}
			return animations = animations.filter(function (animation) {
				return animation.el !== el;
			});
		});

		dynamics.setTimeout = function (fn, delay) {
			return addTimeout(fn, delay * slowRatio);
		};

		dynamics.clearTimeout = function (id) {
			return cancelTimeout(id);
		};

		dynamics.toggleSlow = function () {
			slow = !slow;
			if (slow) {
				slowRatio = 3;
			} else {
				slowRatio = 1;
			}
			return typeof console !== "undefined" && console !== null ? typeof console.log === "function" ? console.log("dynamics.js: slow animations " + (slow ? "enabled" : "disabled")) : void 0 : void 0;
		};

		if ((typeof module === "undefined" ? "undefined" : _typeof(module)) === "object" && _typeof(module.exports) === "object") {
			module.exports = dynamics;
		} else if (true) {
			!(__WEBPACK_AMD_DEFINE_RESULT__ = function () {
				return dynamics;
			}.call(exports, __webpack_require__, exports, module), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
		} else {
			window.dynamics = dynamics;
		}
	}).call(this);

	/***/
}]
/******/);