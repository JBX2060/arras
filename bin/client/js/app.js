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

	var vel = __webpack_require__(1);

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

						for (var _len = arguments.length, a = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
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
						for (var _i = 0; _i < 4; _i++) {
							charUint32[_i] = str.charCodeAt(offset++);
						}
						return arrUint32[0];
					case 'Sint8':
						return -1 - str.charCodeAt(offset++);
					case 'Sint16':
						for (var _i2 = 0; _i2 < 2; _i2++) {
							charUint16[_i2] = str.charCodeAt(offset++);
						}
						return -1 - arrUint16[0];
					case 'Sint32':
						for (var _i3 = 0; _i3 < 4; _i3++) {
							charUint32[_i3] = str.charCodeAt(offset++);
						}
						return -1 - arrUint32[0];
					case 'Float32':
						for (var _i4 = 0; _i4 < 4; _i4++) {
							charFloat32[_i4] = str.charCodeAt(offset++);
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
									var _len2 = typeDecoder(str, 'Uint16', offset);offset += 2;
									output.push(str.slice(offset, offset + _len2));
									offset += _len2;
								}
								break;
							case '8':
								{
									// String16
									var _len3 = typeDecoder(str, 'Uint16', offset);offset += 2;
									var arr = str.slice(offset, offset + _len3);
									var buf = new Uint16Array(_len3 / 2);
									for (var _i5 = 0; _i5 < _len3; _i5 += 2) {
										buf[_i5 / 2] = typeDecoder(arr, 'Uint16', _i5);
									}
									output.push(String.fromCharCode.apply(null, buf));
									offset += _len3;
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
								for (var _i6 = 0; _i6 < turnumb; _i6++) {
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
						for (var _i7 = 9; _i7 >= 0; _i7--) {
							_gui.skills[_i7].name = get.next();
							_gui.skills[_i7].cap = get.next();
							_gui.skills[_i7].softcap = get.next();
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
					for (var _i8 = 0, _len4 = get.next(); _i8 < _len4; _i8++) {
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
				for (var _len5 = arguments.length, message = Array(_len5), _key2 = 0; _key2 < _len5; _key2++) {
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
				for (var _i9 = 0; _i9 < 4; _i9++) {
					var theta = (_i9 + 1) / 3 * 2 * Math.PI;
					var htheta = (_i9 + 0.5) / 4 * 2 * Math.PI;
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
				for (var _i10 = 0; _i10 < sides; _i10++) {
					var _theta = _i10 / sides * 2 * Math.PI;
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
				for (var _i11 = 0; _i11 < m.guns.length; _i11++) {
					var g = m.guns[_i11],
					    position = positions[_i11] / (g.aspect === 1 ? 2 : 1),
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
				for (var _i12 = 0; _i12 < m.turrets.length; _i12++) {
					var _t2 = m.turrets[_i12];
					if (_t2.layer === 1) {
						var _ang = _t2.direction + _t2.angle + rot,
						    _len6 = _t2.offset * drawSize;
						drawEntity(xx + _len6 * Math.cos(_ang), yy + _len6 * Math.sin(_ang), _t2, ratio, 1, drawSize / ratio / _t2.size * _t2.sizeFactor, source.turrets[_i12].facing + turretsObeyRot * rot, turretsObeyRot, context, source.turrets[_i12], render);
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
					//let motion = compensation();
					//if (instance.render.status.getFade() === 1) {
					//    motion.set();
					//} else {
					//    motion.set(instance.render.lastRender, instance.render.interval);
					//}
					//instance.render.x = motion.predict(instance.render.lastx, instance.x, instance.render.lastvx, instance.vx);
					//instance.render.y = motion.predict(instance.render.lasty, instance.y, instance.render.lastvy, instance.vy);
					instance.render.x = instance.x;
					instance.render.y = instance.y;
					//instance.render.f = (instance.id === gui.playerid && !instance.twiggle) ?
					//    Math.atan2(target.y, target.x) :
					//    motion.predictFacing(instance.render.lastf, instance.facing);
					var x = instance.id === _gui.playerid ? 0 : ratio * instance.render.x - px,
					    y = instance.id === _gui.playerid ? 0 : ratio * instance.render.y - py;
					x += global.screenWidth / 2;
					y += global.screenHeight / 2;
					drawEntity(x, y, instance, ratio, instance.alpha, 1.1, instance.render.f);
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
				for (var _i13 = messages.length - 1; _i13 >= 0; _i13--) {
					var msg = messages[_i13],
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
					} else if (_i13 === 0 && (messages.length > 5 || Date.now() - msg.time > 10000)) {
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
				var _len7 = alcoveSize * global.screenWidth; // The 30 is for the value modifiers
				var save = _len7;
				var _x29 = -spacing - 2 * _len7 + statMenu.get() * (2 * spacing + 2 * _len7);
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
						_len7 = save;
						var _max = config.gui.expectedMaxSkillLevel,
						    extension = cap > _max,
						    blocking = cap < maxLevel;
						if (extension) {
							_max = cap;
						}
						drawBar(_x29 + _height / 2, _x29 - _height / 2 + _len7 * ska(cap), _y2 + _height / 2, _height - 3 + config.graphical.barChunk, color.black);
						drawBar(_x29 + _height / 2, _x29 + _height / 2 + (_len7 - gap) * ska(cap), _y2 + _height / 2, _height - 3, color.grey);
						drawBar(_x29 + _height / 2, _x29 + _height / 2 + (_len7 - gap) * ska(level), _y2 + _height / 2, _height - 3.5, col);
						// Blocked-off area
						if (blocking) {
							ctx.lineWidth = 1;
							ctx.strokeStyle = color.grey;
							for (var _j = cap + 1; _j < _max; _j++) {
								drawGuiLine(_x29 + (_len7 - gap) * ska(_j), _y2 + 1.5, _x29 + (_len7 - gap) * ska(_j), _y2 - 3 + _height);
							}
						}
						// Vertical dividers
						ctx.strokeStyle = color.black;
						ctx.lineWidth = 1;
						for (var _j2 = 1; _j2 < level + 1; _j2++) {
							drawGuiLine(_x29 + (_len7 - gap) * ska(_j2), _y2 + 1.5, _x29 + (_len7 - gap) * ska(_j2), _y2 - 3 + _height);
						}
						// Skill name
						_len7 = save * ska(_max);
						var textcolor = level == maxLevel ? col : !_gui.points || cap !== maxLevel && level == cap ? color.grey : color.guiwhite;
						text.skillNames[ticker - 1].draw(name, Math.round(_x29 + _len7 / 2) + 0.5, _y2 + _height / 2, _height - 5, textcolor, 'center', true);
						// Skill key
						text.skillKeys[ticker - 1].draw('[' + ticker % 10 + ']', Math.round(_x29 + _len7 - _height * 0.25) - 1.5, _y2 + _height / 2, _height - 5, textcolor, 'right', true);
						if (textcolor === color.guiwhite) {
							// If it's active
							global.clickables.stat.place(ticker - 1, _x29, _y2, _len7, _height);
						}
						// Skill value
						if (level) {
							text.skillValues[ticker - 1].draw(textcolor === col ? 'MAX' : '+' + level, Math.round(_x29 + _len7 + 4) + 0.5, _y2 + _height / 2, _height - 5, col, 'left', true);
						}
						// Move on 
						_y2 -= _height + _vspacing;
					}
				});
				global.clickables.hover.place(0, 0, _y2, 0.8 * _len7, 0.8 * (global.screenHeight - _y2));
				if (_gui.points !== 0) {
					// Draw skillpoints to spend
					text.skillPoints.draw('x' + _gui.points, Math.round(_x29 + _len7 - 2) + 0.5, Math.round(_y2 + _height - 4) + 0.5, 20, color.guiwhite, 'right');
				}
			}

			{
				// Draw name, exp and score bar
				var _vspacing2 = 4;
				var _len8 = 1.65 * alcoveSize * global.screenWidth;
				var _height2 = 25;
				var _x30 = (global.screenWidth - _len8) / 2;
				var _y3 = global.screenHeight - spacing - _height2;

				ctx.lineWidth = 1;
				// Handle exp
				// Draw the exp bar
				drawBar(_x30, _x30 + _len8, _y3 + _height2 / 2, _height2 - 3 + config.graphical.barChunk, color.black);
				drawBar(_x30, _x30 + _len8, _y3 + _height2 / 2, _height2 - 3, color.grey);
				drawBar(_x30, _x30 + _len8 * _gui.__s.getProgress(), _y3 + _height2 / 2, _height2 - 3.5, color.gold);
				// Draw the class type
				text.class.draw('Level ' + _gui.__s.getLevel() + ' ' + mockups[_gui.type].name, _x30 + _len8 / 2, _y3 + _height2 / 2, _height2 - 4, color.guiwhite, 'center', true);
				_height2 = 14;
				_y3 -= _height2 + _vspacing2;
				// Draw the %-of-leader bar
				drawBar(_x30 + _len8 * 0.1, _x30 + _len8 * 0.9, _y3 + _height2 / 2, _height2 - 3 + config.graphical.barChunk, color.black);
				drawBar(_x30 + _len8 * 0.1, _x30 + _len8 * 0.9, _y3 + _height2 / 2, _height2 - 3, color.grey);
				drawBar(_x30 + _len8 * 0.1, _x30 + _len8 * (0.1 + 0.8 * (max ? Math.min(1, _gui.__s.getScore() / max) : 1)), _y3 + _height2 / 2, _height2 - 3.5, color.green);
				// Draw the score
				text.score.draw('Score: ' + handleLargeNumber(_gui.__s.getScore()), _x30 + _len8 / 2, _y3 + _height2 / 2, _height2 - 2, color.guiwhite, 'center', true);
				// Draw the name
				ctx.lineWidth = 4;
				text.name.draw(player.name, Math.round(_x30 + _len8 / 2) + 0.5, Math.round(_y3 - 10 - _vspacing2) + 0.5, 32, color.guiwhite, 'center');
			}

			{
				// Draw minimap and FPS monitors
				var _len9 = alcoveSize * global.screenWidth;
				var _height3 = _len9;
				var _x31 = global.screenWidth - _len9 - spacing;
				var _y4 = global.screenHeight - _height3 - spacing;

				ctx.globalAlpha = 0.5;
				var _W = roomSetup[0].length,
				    _H = roomSetup.length,
				    _i14 = 0;
				var _iteratorNormalCompletion11 = true;
				var _didIteratorError11 = false;
				var _iteratorError11 = undefined;

				try {
					for (var _iterator11 = roomSetup[Symbol.iterator](), _step11; !(_iteratorNormalCompletion11 = (_step11 = _iterator11.next()).done); _iteratorNormalCompletion11 = true) {
						var row = _step11.value;

						var _j3 = 0;
						var _iteratorNormalCompletion13 = true;
						var _didIteratorError13 = false;
						var _iteratorError13 = undefined;

						try {
							for (var _iterator13 = row[Symbol.iterator](), _step13; !(_iteratorNormalCompletion13 = (_step13 = _iterator13.next()).done); _iteratorNormalCompletion13 = true) {
								var cell = _step13.value;

								ctx.fillStyle = getZoneColor(cell, false);
								drawGuiRect(_x31 + _j3++ * _len9 / _W, _y4 + _i14 * _height3 / _H, _len9 / _W, _height3 / _H);
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
						_i14++;
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
				drawGuiRect(_x31, _y4, _len9, _height3);
				var _iteratorNormalCompletion12 = true;
				var _didIteratorError12 = false;
				var _iteratorError12 = undefined;

				try {
					for (var _iterator12 = minimap[Symbol.iterator](), _step12; !(_iteratorNormalCompletion12 = (_step12 = _iterator12.next()).done); _iteratorNormalCompletion12 = true) {
						var o = _step12.value;

						if (o[2] === 17) {
							ctx.fillStyle = mixColors(getColor(o[2]), color.black, 0.5);
							ctx.globalAlpha = 0.8;
							drawGuiRect(_x31 + o[0] / global.gameWidth * _len9, _y4 + o[1] / global.gameHeight * _height3, 1, 1);
						} else {
							ctx.strokeStyle = mixColors(getColor(o[2]), color.black, 0.5);
							ctx.lineWidth = 1;
							ctx.globalAlpha = 1;
							drawGuiRect(_x31 + o[0] / global.gameWidth * _len9 - 1, _y4 + o[1] / global.gameWidth * _height3 - 1, 3, 3, true);
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
				_x31 + player.x / global.gameWidth * _len9 - 1, _y4 + player.y / global.gameWidth * _height3 - 1, 3, 3, true);
				ctx.lineWidth = 3;
				ctx.fillStyle = color.black;
				drawGuiRect(_x31, _y4, _len9, _height3, true); // Border

				drawGuiRect(_x31, _y4 - 40, _len9, 30);
				lagGraph(lag.get(), _x31, _y4 - 40, _len9, 30, color.teal);
				gapGraph(metrics.rendergap, _x31, _y4 - 40, _len9, 30, color.pink);
				timingGraph(GRAPHDATA, _x31, _y4 - 40, _len9, 30, color.yellow);
				// Text
				text.debug[5].draw('Prediction: ' + Math.round(GRAPHDATA) + 'ms', _x31 + _len9, _y4 - 50 - 5 * 14, 10, color.guiwhite, 'right');
				text.debug[4].draw('Update Rate: ' + metrics.updatetime + 'Hz', _x31 + _len9, _y4 - 50 - 4 * 14, 10, color.guiwhite, 'right');
				text.debug[3].draw('Latency: ' + metrics.latency + 'ms', _x31 + _len9, _y4 - 50 - 3 * 14, 10, color.guiwhite, 'right');
				text.debug[2].draw('Client FPS: ' + metrics.rendertime, _x31 + _len9, _y4 - 50 - 2 * 14, 10, color.guiwhite, 'right');
				text.debug[1].draw('Server Speed: ' + (100 * _gui.fps).toFixed(2) + '%' + (_gui.fps === 1 ? '' : ' OVERLOADED!'), _x31 + _len9, _y4 - 50 - 1 * 14, 10, _gui.fps === 1 ? color.guiwhite : color.orange, 'right');
				text.debug[0].draw(serverName, _x31 + _len9, _y4 - 50, 10, color.guiwhite, 'right');
			}

			{
				// Draw leaderboard
				var _vspacing3 = 4;
				var _len10 = alcoveSize * global.screenWidth;
				var _height4 = 14;
				var _x32 = global.screenWidth - _len10 - spacing;
				var _y5 = spacing + _height4 + 7;
				text.lbtitle.draw('Leaderboard:', Math.round(_x32 + _len10 / 2) + 0.5, Math.round(_y5 - 6) + 0.5, _height4 + 4, color.guiwhite, 'center');
				var _i15 = 0;
				var _iteratorNormalCompletion14 = true;
				var _didIteratorError14 = false;
				var _iteratorError14 = undefined;

				try {
					for (var _iterator14 = lb.data[Symbol.iterator](), _step14; !(_iteratorNormalCompletion14 = (_step14 = _iterator14.next()).done); _iteratorNormalCompletion14 = true) {
						var entry = _step14.value;

						drawBar(_x32, _x32 + _len10, _y5 + _height4 / 2, _height4 - 3 + config.graphical.barChunk, color.black);
						drawBar(_x32, _x32 + _len10, _y5 + _height4 / 2, _height4 - 3, color.grey);
						var shift = Math.min(1, entry.score / max);
						drawBar(_x32, _x32 + _len10 * shift, _y5 + _height4 / 2, _height4 - 3.5, entry.barcolor);
						// Leadboard name + score 
						text.leaderboard[_i15++].draw(entry.label + ': ' + handleLargeNumber(Math.round(entry.score)), _x32 + _len10 / 2, _y5 + _height4 / 2, _height4 - 5, color.guiwhite, 'center', true);
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
					var _len11 = alcoveSize * global.screenWidth / 2 * 1;
					var _height5 = _len11;
					var _x33 = glide * 2 * spacing - spacing;
					var _y6 = spacing;
					var xo = _x33;
					var xxx = 0;
					var yo = _y6;
					var _ticker = 0;
					upgradeSpin += 0.01;
					var colorIndex = 10;
					var _i16 = 0;
					_gui.upgrades.forEach(function drawAnUpgrade(model) {
						if (_y6 > yo) yo = _y6;
						xxx = _x33;
						global.clickables.upgrade.place(_i16++, _x33, _y6, _len11, _height5);
						// Draw box
						ctx.globalAlpha = 0.5;
						ctx.fillStyle = getColor(colorIndex);
						drawGuiRect(_x33, _y6, _len11, _height5);
						ctx.globalAlpha = 0.1;
						ctx.fillStyle = getColor(-10 + colorIndex++);
						if (colorIndex === 14) colorIndex = 21;
						drawGuiRect(_x33, _y6, _len11, _height5 * 0.6);
						ctx.fillStyle = color.black;
						drawGuiRect(_x33, _y6 + _height5 * 0.6, _len11, _height5 * 0.4);
						ctx.globalAlpha = 1;
						// Find offset location with rotation
						var picture = getEntityImageFromMockup(model, _gui.color),
						    position = mockups[model].position,
						    scale = 0.6 * _len11 / position.axis,
						    xx = _x33 + 0.5 * _len11 - scale * position.middle.x * Math.cos(upgradeSpin),
						    yy = _y6 + 0.5 * _height5 - scale * position.middle.x * Math.sin(upgradeSpin);
						drawEntity(xx, yy, picture, 1, 1, scale / picture.size, upgradeSpin, true);
						// Tank name
						text.upgradeNames[_i16 - 1].draw(picture.name, _x33 + 0.9 * _len11 / 2, _y6 + _height5 - 6, _height5 / 8 - 3, color.guiwhite, 'center');
						// Upgrade key
						text.upgradeKeys[_i16 - 1].draw('[' + getClassUpgradeKey(_ticker) + ']', _x33 + _len11 - 4, _y6 + _height5 - 6, _height5 / 8 - 3, color.guiwhite, 'right');
						ctx.strokeStyle = color.black;
						ctx.globalAlpha = 1;
						ctx.lineWidth = 3;
						drawGuiRect(_x33, _y6, _len11, _height5, true); // Border
						if (_ticker++ % 2) {
							_y6 -= _height5 + internalSpacing;
							_x33 += glide * (_len11 + internalSpacing);
						} else {
							_y6 += _height5 + internalSpacing;
						}
					});
					// Draw box
					var h = 14,
					    _msg = "Ignore",
					    m = measureText(_msg, h - 3) + 10;
					var _xx = xo + (xxx + _len11 + internalSpacing - xo) / 2,
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

	/**
  * velocity-animate (C) 2014-2017 Julian Shapiro.
  *
  * Licensed under the MIT license. See LICENSE file in the project root for details.
  */
	!function (e, t) {
		true ? module.exports = t() : "function" == typeof define && define.amd ? define(t) : e.Velocity = t();
	}(this, function () {
		"use strict";
		var e = "function" == typeof Symbol && "symbol" == _typeof(Symbol.iterator) ? function (e) {
			return typeof e === "undefined" ? "undefined" : _typeof(e);
		} : function (e) {
			return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e === "undefined" ? "undefined" : _typeof(e);
		},
		    t = function t(e, _t3) {
			if (!(e instanceof _t3)) throw new TypeError("Cannot call a class as a function");
		},
		    n = function () {
			function e(e, t) {
				for (var n = 0; n < t.length; n++) {
					var r = t[n];r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
				}
			}return function (t, n, r) {
				return n && e(t.prototype, n), r && e(t, r), t;
			};
		}(),
		    r = function r(e, t, n) {
			return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
		};function i(e) {
			return !0 === e || !1 === e;
		}function o(e) {
			return "[object Function]" === Object.prototype.toString.call(e);
		}function a(e) {
			return !(!e || !e.nodeType);
		}function l(e) {
			return "number" == typeof e;
		}function s(t) {
			if (!t || "object" !== (void 0 === t ? "undefined" : e(t)) || t.nodeType || "[object Object]" !== Object.prototype.toString.call(t)) return !1;var n = Object.getPrototypeOf(t);return !n || n.hasOwnProperty("constructor") && n.constructor === Object;
		}function u(e) {
			return "string" == typeof e;
		}function c(e) {
			return e && l(e.length) && o(e.velocity);
		}function f(e) {
			return e && e !== window && l(e.length) && !u(e) && !o(e) && !a(e) && (0 === e.length || a(e[0]));
		}function d(e) {
			return Array.prototype.slice.call(e, 0);
		}function v(e, t, n, r) {
			e && Object.defineProperty(e, t, { configurable: !r, writable: !r, value: n });
		}function p() {
			for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) {
				t[n] = arguments[n];
			}var r = !0,
			    i = !1,
			    o = void 0;try {
				for (var a, l = arguments[Symbol.iterator](); !(r = (a = l.next()).done); r = !0) {
					var s = a.value;if (void 0 !== s && s == s) return s;
				}
			} catch (e) {
				i = !0, o = e;
			} finally {
				try {
					!r && l.return && l.return();
				} finally {
					if (i) throw o;
				}
			}
		}var y = Date.now ? Date.now : function () {
			return new Date().getTime();
		};function g(e, t) {
			e instanceof Element && (e.classList ? e.classList.remove(t) : e.className = e.className.replace(new RegExp("(^|\\s)" + t + "(\\s|$)", "gi"), " "));
		}var h = {};function m(e, t) {
			var n,
			    r,
			    i = e[0],
			    a = e[1];u(i) ? o(a) ? h[i] && (n = h, r = i, !Object.prototype.propertyIsEnumerable.call(n, r)) ? console.warn("VelocityJS: Trying to override internal 'registerAction' callback", i) : !0 === t ? v(h, i, a) : h[i] = a : console.warn("VelocityJS: Trying to set 'registerAction' callback to an invalid value:", i, a) : console.warn("VelocityJS: Trying to set 'registerAction' name to an invalid value:", i);
		}m(["registerAction", m], !0);var w = 400,
		    b = { fast: 200, normal: 400, slow: 600 },
		    S = {};function x(e) {
			var t = e[0],
			    n = e[1];u(t) ? o(n) ? S[t] ? console.warn("VelocityJS: Trying to override 'registerEasing' callback", t) : S[t] = n : console.warn("VelocityJS: Trying to set 'registerEasing' callback to an invalid value:", t, n) : console.warn("VelocityJS: Trying to set 'registerEasing' name to an invalid value:", t);
		}function k(e, t, n, r) {
			return t + e * (n - t);
		}function O(e) {
			return Math.min(Math.max(e, 0), 1);
		}function E(e, t) {
			return 1 - 3 * t + 3 * e;
		}function _(e, t) {
			return 3 * t - 6 * e;
		}function T(e) {
			return 3 * e;
		}function M(e, t, n) {
			return ((E(t, n) * e + _(t, n)) * e + T(t)) * e;
		}function V(e, t, n) {
			return 3 * E(t, n) * e * e + 2 * _(t, n) * e + T(t);
		}function q(e, t, n, r) {
			var i = 4,
			    o = .001,
			    a = 1e-7,
			    l = 10,
			    s = 11,
			    u = 1 / (s - 1),
			    c = "Float32Array" in window;if (4 === arguments.length) {
				for (var f = 0; f < 4; ++f) {
					if ("number" != typeof arguments[f] || isNaN(arguments[f]) || !isFinite(arguments[f])) return;
				}e = O(e), n = O(n);var d = c ? new Float32Array(s) : new Array(s),
				    v = !1,
				    p = "generateBezier(" + [e, t, n, r] + ")",
				    y = function y(i, o, a, l) {
					return v || h(), 0 === i ? o : 1 === i ? a : e === t && n === r ? o + i * (a - o) : o + M(g(i), t, r) * (a - o);
				};return y.getControlPoints = function () {
					return [{ x: e, y: t }, { x: n, y: r }];
				}, y.toString = function () {
					return p;
				}, y;
			}function g(t) {
				for (var r = s - 1, c = 0, f = 1; f !== r && d[f] <= t; ++f) {
					c += u;
				}var v = c + (t - d[--f]) / (d[f + 1] - d[f]) * u,
				    p = V(v, e, n);return p >= o ? function (t, r) {
					for (var o = 0; o < i; ++o) {
						var a = V(r, e, n);if (0 === a) return r;r -= (M(r, e, n) - t) / a;
					}return r;
				}(t, v) : 0 === p ? v : function (t, r, i) {
					var o = void 0,
					    s = void 0,
					    u = 0;do {
						(o = M(s = r + (i - r) / 2, e, n) - t) > 0 ? i = s : r = s;
					} while (Math.abs(o) > a && ++u < l);return s;
				}(t, c, c + u);
			}function h() {
				v = !0, e === t && n === r || function () {
					for (var t = 0; t < s; ++t) {
						d[t] = M(t * u, e, n);
					}
				}();
			}
		}m(["registerEasing", x], !0), x(["linear", k]), x(["swing", function (e, t, n) {
			return t + (.5 - Math.cos(e * Math.PI) / 2) * (n - t);
		}]), x(["spring", function (e, t, n) {
			return t + (1 - Math.cos(4.5 * e * Math.PI) * Math.exp(6 * -e)) * (n - t);
		}]);var N = q(.42, 0, 1, 1),
		    A = q(0, 0, .58, 1),
		    L = q(.42, 0, .58, 1);function J(e) {
			return -e.tension * e.x - e.friction * e.v;
		}function I(e, t, n) {
			var r = { x: e.x + n.dx * t, v: e.v + n.dv * t, tension: e.tension, friction: e.friction };return { dx: r.v, dv: J(r) };
		}function j(e, t) {
			var n = { dx: e.v, dv: J(e) },
			    r = I(e, .5 * t, n),
			    i = I(e, .5 * t, r),
			    o = I(e, t, i),
			    a = 1 / 6 * (n.dx + 2 * (r.dx + i.dx) + o.dx),
			    l = 1 / 6 * (n.dv + 2 * (r.dv + i.dv) + o.dv);return e.x = e.x + a * t, e.v = e.v + l * t, e;
		}x(["ease", q(.25, .1, .25, 1)]), x(["easeIn", N]), x(["ease-in", N]), x(["easeOut", A]), x(["ease-out", A]), x(["easeInOut", L]), x(["ease-in-out", L]), x(["easeInSine", q(.47, 0, .745, .715)]), x(["easeOutSine", q(.39, .575, .565, 1)]), x(["easeInOutSine", q(.445, .05, .55, .95)]), x(["easeInQuad", q(.55, .085, .68, .53)]), x(["easeOutQuad", q(.25, .46, .45, .94)]), x(["easeInOutQuad", q(.455, .03, .515, .955)]), x(["easeInCubic", q(.55, .055, .675, .19)]), x(["easeOutCubic", q(.215, .61, .355, 1)]), x(["easeInOutCubic", q(.645, .045, .355, 1)]), x(["easeInQuart", q(.895, .03, .685, .22)]), x(["easeOutQuart", q(.165, .84, .44, 1)]), x(["easeInOutQuart", q(.77, 0, .175, 1)]), x(["easeInQuint", q(.755, .05, .855, .06)]), x(["easeOutQuint", q(.23, 1, .32, 1)]), x(["easeInOutQuint", q(.86, 0, .07, 1)]), x(["easeInExpo", q(.95, .05, .795, .035)]), x(["easeOutExpo", q(.19, 1, .22, 1)]), x(["easeInOutExpo", q(1, 0, 0, 1)]), x(["easeInCirc", q(.6, .04, .98, .335)]), x(["easeOutCirc", q(.075, .82, .165, 1)]), x(["easeInOutCirc", q(.785, .135, .15, .86)]);var C = {};function P(e, t) {
			return l(e) ? e : u(e) ? b[e.toLowerCase()] || parseFloat(e.replace("ms", "").replace("s", "000")) : null == t ? void 0 : P(t);
		}function F(e) {
			if (i(e)) return e;null != e && console.warn("VelocityJS: Trying to set 'cache' to an invalid value:", e);
		}function H(e) {
			if (o(e)) return e;null != e && console.warn("VelocityJS: Trying to set 'begin' to an invalid value:", e);
		}function R(e, t) {
			if (o(e)) return e;null == e || t || console.warn("VelocityJS: Trying to set 'complete' to an invalid value:", e);
		}function z(e) {
			var t = P(e);if (!isNaN(t)) return t;null != e && console.error("VelocityJS: Trying to set 'delay' to an invalid value:", e);
		}function W(e, t) {
			var n = P(e);if (!isNaN(n) && n >= 0) return n;null == e || t || console.error("VelocityJS: Trying to set 'duration' to an invalid value:", e);
		}function B(e, t, n) {
			if (u(e)) return S[e];if (o(e)) return e;if (Array.isArray(e)) {
				if (1 === e.length) return r = e[0], C[r] || (C[r] = function (e, t, n) {
					return 0 === e ? t : 1 === e ? n : t + Math.round(e * r) * (1 / r) * (n - t);
				});if (2 === e.length) return function e(t, n, r) {
					var i = { x: -1, v: 0, tension: parseFloat(t) || 500, friction: parseFloat(n) || 20 },
					    o = [0],
					    a = null != r,
					    l = 0,
					    s = void 0,
					    u = void 0;for (s = a ? (l = e(i.tension, i.friction)) / r * .016 : .016; u = j(u || i, s), o.push(1 + u.x), l += 16, Math.abs(u.x) > 1e-4 && Math.abs(u.v) > 1e-4;) {}return a ? function (e, t, n) {
						return 0 === e ? t : 1 === e ? n : t + o[Math.floor(e * (o.length - 1))] * (n - t);
					} : l;
				}(e[0], e[1], t);if (4 === e.length) return q.apply(null, e) || !1;
			}var r;null == e || n || console.error("VelocityJS: Trying to set 'easing' to an invalid value:", e);
		}function $(e) {
			if (!1 === e) return 0;var t = parseInt(e, 10);if (!isNaN(t) && t >= 0) return Math.min(t, 60);null != e && console.warn("VelocityJS: Trying to set 'fpsLimit' to an invalid value:", e);
		}function G(e) {
			switch (e) {case !1:
					return 0;case !0:
					return !0;default:
					var t = parseInt(e, 10);if (!isNaN(t) && t >= 0) return t;}null != e && console.warn("VelocityJS: Trying to set 'loop' to an invalid value:", e);
		}function Q(e, t) {
			if (!1 === e || u(e)) return e;null == e || t || console.warn("VelocityJS: Trying to set 'queue' to an invalid value:", e);
		}function D(e) {
			switch (e) {case !1:
					return 0;case !0:
					return !0;default:
					var t = parseInt(e, 10);if (!isNaN(t) && t >= 0) return t;}null != e && console.warn("VelocityJS: Trying to set 'repeat' to an invalid value:", e);
		}function U(e) {
			if (l(e)) return e;null != e && console.error("VelocityJS: Trying to set 'speed' to an invalid value:", e);
		}function Z(e) {
			if (i(e)) return e;null != e && console.error("VelocityJS: Trying to set 'sync' to an invalid value:", e);
		}var Y = void 0,
		    X = void 0,
		    K = void 0,
		    ee = void 0,
		    te = void 0,
		    ne = void 0,
		    re = void 0,
		    ie = void 0,
		    oe = void 0,
		    ae = void 0,
		    le = void 0,
		    se = void 0,
		    ue = void 0,
		    ce = void 0,
		    fe = void 0,
		    de = void 0,
		    ve = function () {
			function e() {
				t(this, e);
			}return n(e, null, [{ key: "reset", value: function value() {
					Y = !0, X = void 0, K = void 0, ee = 0, te = w, ne = B("swing", w), re = 60, ie = 0, ae = 980 / 60, le = !0, se = !0, ue = "", ce = 0, fe = 1, de = !0;
				} }, { key: "cache", get: function get() {
					return Y;
				}, set: function set(e) {
					void 0 !== (e = F(e)) && (Y = e);
				} }, { key: "begin", get: function get() {
					return X;
				}, set: function set(e) {
					void 0 !== (e = H(e)) && (X = e);
				} }, { key: "complete", get: function get() {
					return K;
				}, set: function set(e) {
					void 0 !== (e = R(e)) && (K = e);
				} }, { key: "delay", get: function get() {
					return ee;
				}, set: function set(e) {
					void 0 !== (e = z(e)) && (ee = e);
				} }, { key: "duration", get: function get() {
					return te;
				}, set: function set(e) {
					void 0 !== (e = W(e)) && (te = e);
				} }, { key: "easing", get: function get() {
					return ne;
				}, set: function set(e) {
					void 0 !== (e = B(e, te)) && (ne = e);
				} }, { key: "fpsLimit", get: function get() {
					return re;
				}, set: function set(e) {
					void 0 !== (e = $(e)) && (re = e, ae = 980 / e);
				} }, { key: "loop", get: function get() {
					return ie;
				}, set: function set(e) {
					void 0 !== (e = G(e)) && (ie = e);
				} }, { key: "mobileHA", get: function get() {
					return oe;
				}, set: function set(e) {
					i(e) && (oe = e);
				} }, { key: "minFrameTime", get: function get() {
					return ae;
				} }, { key: "promise", get: function get() {
					return le;
				}, set: function set(e) {
					void 0 !== (e = function (e) {
						if (i(e)) return e;null != e && console.warn("VelocityJS: Trying to set 'promise' to an invalid value:", e);
					}(e)) && (le = e);
				} }, { key: "promiseRejectEmpty", get: function get() {
					return se;
				}, set: function set(e) {
					void 0 !== (e = function (e) {
						if (i(e)) return e;null != e && console.warn("VelocityJS: Trying to set 'promiseRejectEmpty' to an invalid value:", e);
					}(e)) && (se = e);
				} }, { key: "queue", get: function get() {
					return ue;
				}, set: function set(e) {
					void 0 !== (e = Q(e)) && (ue = e);
				} }, { key: "repeat", get: function get() {
					return ce;
				}, set: function set(e) {
					void 0 !== (e = D(e)) && (ce = e);
				} }, { key: "repeatAgain", get: function get() {
					return ce;
				} }, { key: "speed", get: function get() {
					return fe;
				}, set: function set(e) {
					void 0 !== (e = U(e)) && (fe = e);
				} }, { key: "sync", get: function get() {
					return de;
				}, set: function set(e) {
					void 0 !== (e = Z(e)) && (de = e);
				} }]), e;
		}();Object.freeze(ve), ve.reset();var pe = [],
		    ye = {},
		    ge = new Set(),
		    he = [],
		    me = new Map(),
		    we = "velocityData";function be(e) {
			var t = e[we];if (t) return t;for (var n = e.ownerDocument.defaultView, r = 0, i = 0; i < he.length; i++) {
				var o = he[i];u(o) ? e instanceof n[o] && (r |= 1 << i) : e instanceof o && (r |= 1 << i);
			}var a = { types: r, count: 0, computedStyle: null, cache: {}, queueList: {}, lastAnimationList: {}, lastFinishList: {}, window: n };return Object.defineProperty(e, we, { value: a }), a;
		}var Se = window && window === window.window,
		    xe = Se && void 0 !== window.pageYOffset,
		    ke = { isClient: Se, isMobile: Se && /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent), isGingerbread: Se && /Android 2\.3\.[3-7]/i.test(navigator.userAgent), prefixElement: Se && document.createElement("div"), windowScrollAnchor: xe, scrollAnchor: xe ? window : !Se || document.documentElement || document.body.parentNode || document.body, scrollPropertyLeft: xe ? "pageXOffset" : "scrollLeft", scrollPropertyTop: xe ? "pageYOffset" : "scrollTop", className: "velocity-animating", isTicking: !1, first: void 0, last: void 0, firstNew: void 0 };function Oe(e) {
			var t = ke.last;e._prev = t, e._next = void 0, t ? t._next = e : ke.first = e, ke.last = e, ke.firstNew || (ke.firstNew = e);var n = e.element;be(n).count++ || function (e, t) {
				e instanceof Element && (e.classList ? e.classList.add(t) : (g(e, t), e.className += (e.className.length ? " " : "") + t));
			}(n, ke.className);
		}function Ee(e, t, n) {
			var r = be(e);if (!1 !== n && (r.lastAnimationList[n] = t), !1 === n) Oe(t);else {
				u(n) || (n = "");var i = r.queueList[n];if (i) {
					for (; i._next;) {
						i = i._next;
					}i._next = t, t._prev = i;
				} else null === i ? r.queueList[n] = t : (r.queueList[n] = null, Oe(t));
			}
		}function _e(e) {
			var t = e._next,
			    n = e._prev,
			    r = null == e.queue ? e.options.queue : e.queue;(ke.firstNew === e && (ke.firstNew = t), ke.first === e ? ke.first = t : n && (n._next = t), ke.last === e ? ke.last = n : t && (t._prev = n), r) && be(e.element) && (e._next = e._prev = void 0);
		}var Te = {};function Me(e) {
			var t = e.options,
			    n = p(e.queue, t.queue),
			    r = p(e.loop, t.loop, ve.loop),
			    i = p(e.repeat, t.repeat, ve.repeat),
			    o = 8 & e._flags;if (o || !r && !i) {
				var a = e.element,
				    l = be(a);if (--l.count || o || g(a, ke.className), t && ++t._completed === t._total) {
					!o && t.complete && (!function (e) {
						var t = e.complete || e.options.complete;if (t) try {
							var n = e.elements;t.call(n, n, e);
						} catch (e) {
							setTimeout(function () {
								throw e;
							}, 1);
						}
					}(e), t.complete = null);var s = t._resolver;s && (s(e.elements), delete t._resolver);
				}!1 !== n && (o || (l.lastFinishList[n] = e.timeStart + p(e.duration, t.duration, ve.duration)), function (e, t, n) {
					if (!1 !== t) {
						u(t) || (t = "");var r = be(e),
						    i = r.queueList[t];i ? (r.queueList[t] = i._next || null, n || Oe(i)) : null === i && delete r.queueList[t];
					}
				}(a, n)), _e(e);
			} else i && !0 !== i ? e.repeat = i - 1 : r && !0 !== r && (e.loop = r - 1, e.repeat = p(e.repeatAgain, t.repeatAgain, ve.repeatAgain)), r && (e._flags ^= 64), !1 !== n && (be(e.element).lastFinishList[n] = e.timeStart + p(e.duration, t.duration, ve.duration)), e.timeStart = e.ellapsedTime = e.percentComplete = 0, e._flags &= -5;
		}function Ve(e) {
			var t = e[0],
			    n = e[1],
			    r = e[2];if ((!u(t) || window[t] instanceof Object) && (u(t) || t instanceof Object)) {
				if (u(n)) {
					if (o(r)) {
						var i = he.indexOf(t),
						    a = 3;if (i < 0 && !u(t)) if (me.has(t)) i = he.indexOf(me.get(t));else for (var l in window) {
							if (window[l] === t) {
								(i = he.indexOf(l)) < 0 && (i = he.push(l) - 1, pe[i] = {}, me.set(t, l));break;
							}
						}if (i < 0 && (i = he.push(t) - 1, pe[i] = {}), pe[i][n] = r, u(e[a])) {
							var s = e[a++],
							    c = ye[s];c || (c = ye[s] = []), c.push(r);
						}!1 === e[a] && ge.add(n);
					} else console.warn("VelocityJS: Trying to set 'registerNormalization' callback to an invalid value:", n, r);
				} else console.warn("VelocityJS: Trying to set 'registerNormalization' name to an invalid value:", n);
			} else console.warn("VelocityJS: Trying to set 'registerNormalization' constructor to an invalid value:", t);
		}function qe(e) {
			var t = e[0],
			    n = e[1],
			    r = he.indexOf(t);if (r < 0 && !u(t)) if (me.has(t)) r = he.indexOf(me.get(t));else for (var i in window) {
				if (window[i] === t) {
					r = he.indexOf(i);break;
				}
			}return r >= 0 && pe[r].hasOwnProperty(n);
		}function Ne(e, t) {
			for (var n = be(e), r = void 0, i = he.length - 1, o = n.types; !r && i >= 0; i--) {
				o & 1 << i && (r = pe[i][t]);
			}return r;
		}function Ae(e, t, n, r) {
			var i = ge.has(t),
			    o = !i && be(e);(i || o && o.cache[t] !== n) && (i || (o.cache[t] = n || void 0), (r = r || Ne(e, t)) && r(e, n), Dt.debug >= 2 && console.info('Set "' + t + '": "' + n + '"', e));
		}m(["registerNormalization", Ve]), m(["hasNormalization", qe]);var Le = {};function Je(e) {
			var t = Le[e];return t || (Le[e] = e.replace(/-([a-z])/g, function (e, t) {
				return t.toUpperCase();
			}));
		}var Ie = /#([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})/gi,
		    je = /#([a-f\d])([a-f\d])([a-f\d])/gi,
		    Ce = /(rgba?\(\s*)?(\b[a-z]+\b)/g,
		    Pe = /rgb(a?)\(([^\)]+)\)/gi,
		    Fe = /\s+/g,
		    He = {};function Re(e, t, n, r) {
			return "rgba(" + parseInt(t, 16) + "," + parseInt(n, 16) + "," + parseInt(r, 16) + ",1)";
		}function ze(e) {
			return e.replace(Ie, Re).replace(je, function (e, t, n, r) {
				return Re(0, t + t, n + n, r + r);
			}).replace(Ce, function (e, t, n) {
				return He[n] ? (t || "rgba(") + He[n] + (t ? "" : ",1)") : e;
			}).replace(Pe, function (e, t, n) {
				return "rgba(" + n.replace(Fe, "") + (t ? "" : ",1") + ")";
			});
		}function We(e, t, n) {
			if ("border-box" === Ge(e, "boxSizing").toString().toLowerCase() === n) {
				var r = "width" === t ? ["Left", "Right"] : ["Top", "Bottom"],
				    i = ["padding" + r[0], "padding" + r[1], "border" + r[0] + "Width", "border" + r[1] + "Width"],
				    o = 0,
				    a = !0,
				    l = !1,
				    s = void 0;try {
					for (var u, c = i[Symbol.iterator](); !(a = (u = c.next()).done); a = !0) {
						var f = u.value,
						    d = parseFloat(Ge(e, f));isNaN(d) || (o += d);
					}
				} catch (e) {
					l = !0, s = e;
				} finally {
					try {
						!a && c.return && c.return();
					} finally {
						if (l) throw s;
					}
				}return n ? -o : o;
			}return 0;
		}function Be(e, t) {
			return e.getBoundingClientRect()[t] + We(e, t, !0) + "px";
		}function $e(e, t) {
			var n = be(e),
			    r = n.computedStyle ? n.computedStyle : n.window.getComputedStyle(e, null),
			    i = 0;if (n.computedStyle || (n.computedStyle = r), "none" === r.display) switch (t) {case "width":case "height":
					return Ae(e, "display", "auto"), i = Be(e, t), Ae(e, "display", "none"), String(i);}if ((i = r[t]) || (i = e.style[t]), "auto" === i) switch (t) {case "width":case "height":
					i = Be(e, t);break;case "top":case "left":case "right":case "bottom":
					var o = Ge(e, "position");if ("fixed" === o || "absolute" === o) {
						i = e.getBoundingClientRect[t] + "px";break;
					}default:
					i = "0px";}return i ? String(i) : "";
		}function Ge(e, t, n, r) {
			var i = be(e),
			    o = void 0;return ge.has(t) && (r = !0), !r && i && null != i.cache[t] ? o = i.cache[t] : (n = n || Ne(e, t)) && (o = n(e), i && (i.cache[t] = o)), Dt.debug >= 2 && console.info('Get "' + t + '": "' + o + '"', e), o;
		}var Qe = /^#([A-f\d]{3}){1,2}$/i,
		    De = { function: function _function(e, t, n, r, i, o) {
				return e.call(t, r, n.length, i);
			}, number: function number(e, t, n, r, i, o) {
				return String(e) + function (e) {
					for (var t in ye) {
						if (ye[t].includes(e)) return t;
					}return "";
				}(o.fn);
			}, string: function string(e, t, n, r, i, o) {
				return ze(e);
			}, undefined: function undefined(e, t, n, r, i, o) {
				return ze(Ge(t, i, o.fn) || "");
			} };function Ue(t, n) {
			var r = t.tweens = Object.create(null),
			    i = t.elements,
			    a = t.element,
			    s = i.indexOf(a),
			    c = be(a),
			    f = p(t.queue, t.options.queue),
			    d = p(t.options.duration, ve.duration);for (var v in n) {
				if (n.hasOwnProperty(v)) {
					var y = Je(v),
					    g = Ne(a, y),
					    h = n[v];if (!g && "tween" !== y) {
						Dt.debug && console.log('Skipping "' + v + '" due to a lack of browser support.');continue;
					}if (null == h) {
						Dt.debug && console.log('Skipping "' + v + '" due to no value supplied.');continue;
					}var m = r[y] = {},
					    w = void 0,
					    b = void 0;if (m.fn = g, o(h) && (h = h.call(a, s, i.length, i)), Array.isArray(h)) {
						var x = h[1],
						    k = h[2];w = h[0], u(x) && (/^[\d-]/.test(x) || Qe.test(x)) || o(x) || l(x) ? b = x : u(x) && S[x] || Array.isArray(x) ? (m.easing = B(x, d), b = k) : b = x || k;
					} else w = h;m.end = De[void 0 === w ? "undefined" : e(w)](w, a, i, s, y, m), null == b && !1 !== f && void 0 !== c.queueList[f] || (m.start = De[void 0 === b ? "undefined" : e(b)](b, a, i, s, y, m), Ke(y, m, d));
				}
			}
		}var Ze = /((?:[+\-*/]=)?(?:[+-]?\d*\.\d+|[+-]?\d+)[a-z%]*|(?:.(?!$|[+-]?\d|[+\-*/]=[+-]?\d))+.|.)/g,
		    Ye = /^([+\-*/]=)?([+-]?\d*\.\d+|[+-]?\d+)(.*)$/;function Xe(e, t) {
			for (var n = e.length, r = [], i = [], o = void 0, a = 0; a < n; a++) {
				if (!u(e[a])) return;"" === e[a] ? r[a] = [""] : r[a] = d(e[a].match(Ze)), i[a] = 0, o = o || r[a].length > 1;
			}for (var l = [], s = l.pattern = [], c = function c(e) {
				if (u(s[s.length - 1])) s[s.length - 1] += e;else if (e) {
					s.push(e);for (var t = 0; t < n; t++) {
						l[t].push(null);
					}
				}
			}, f = function f() {
				if (!(o || s.length > 1)) {
					for (var r = "display" === t, i = "visibility" === t, a = 0; a < n; a++) {
						var u = e[a];l[a][0] = u, l[a].easing = B(r && "none" === u || i && "hidden" === u || !r && !i ? "at-end" : "at-start", 400);
					}return s[0] = !1, l;
				}
			}, v = !0, p = 0; p < n; p++) {
				l[p] = [];
			}for (; v;) {
				for (var y = [], g = [], h = void 0, m = !1, w = !1, b = 0; b < n; b++) {
					var S = i[b]++,
					    x = r[b][S];if (!x) {
						if (b) return;for (; b < n; b++) {
							var k = i[b]++;if (r[b][k]) return f();
						}v = !1;break;
					}var O = x.match(Ye);if (O) {
						if (h) return f();var E = parseFloat(O[2]),
						    _ = O[3],
						    T = O[1] ? O[1][0] + _ : void 0,
						    M = T || _;E && !g.includes(M) && g.push(M), _ || (E ? w = !0 : m = !0), y[b] = T ? [E, M, !0] : [E, M];
					} else {
						if (y.length) return f();if (h) {
							if (h !== x) return f();
						} else h = x;
					}
				}if (h) c(h);else if (g.length) if (2 === g.length && m && !w && g.splice(g[0] ? 1 : 0, 1), 1 === g.length) {
					var V = g[0];switch (V[0]) {case "+":case "-":case "*":case "/":
							return void (t && console.error('Velocity: The first property must not contain a relative function "' + t + '":', e));}s.push(!1);for (var q = 0; q < n; q++) {
						l[q].push(y[q][0]);
					}c(V);
				} else {
					c("calc(");for (var N = s.length - 1, A = 0; A < g.length; A++) {
						var L = g[A],
						    J = L[0],
						    I = "*" === J || "/" === J,
						    j = I || "+" === J || "-" === J;I && (s[N] += "(", c(")")), A && c(" " + (j ? J : "+") + " "), s.push(!1);for (var C = 0; C < n; C++) {
							var P = y[C],
							    F = P[1] === L ? P[0] : 3 === P.length ? l[C - 1][l[C - 1].length - 1] : I ? 1 : 0;l[C].push(F);
						}c(j ? L.substring(1) : L);
					}c(")");
				}
			}for (var H = 0, R = 0; H < s.length; H++) {
				var z = s[H];u(z) ? R && z.indexOf(",") >= 0 ? R++ : z.indexOf("rgb") >= 0 && (R = 1) : R && (R < 4 ? s[H] = !0 : R = 0);
			}return l;
		}function Ke(e, t, n, r) {
			var i = t.start,
			    o = t.end;if (u(o) && u(i)) {
				var a = Xe([i, o], e);if (!a && r) {
					var l = i.match(/\d\.?\d*/g) || ["0"],
					    s = l.length,
					    c = 0;a = Xe([o.replace(/\d+\.?\d*/g, function () {
						return l[c++ % s];
					}), o], e);
				}if (a) switch (Dt.debug && console.log("Velocity: Sequence found:", a), a[0].percent = 0, a[1].percent = 1, t.sequence = a, t.easing) {case S["at-start"]:case S.during:case S["at-end"]:
						a[0].easing = a[1].easing = t.easing;}
			}
		}function et(e) {
			if (ke.firstNew === e && (ke.firstNew = e._next), !(1 & e._flags)) {
				var t = e.element,
				    n = e.tweens;p(e.options.duration, ve.duration);for (var r in n) {
					var i = n[r];if (null == i.start) {
						var o = Ge(e.element, r);u(o) ? (i.start = ze(o), Ke(r, i, 0, !0)) : Array.isArray(o) || console.warn("bad type", i, r, o);
					}Dt.debug && console.log('tweensContainer "' + r + '": ' + JSON.stringify(i), t);
				}e._flags |= 1;
			}
		}function tt(e) {
			var t = e.begin || e.options.begin;if (t) try {
				var n = e.elements;t.call(n, n, e);
			} catch (e) {
				setTimeout(function () {
					throw e;
				}, 1);
			}
		}function nt(e) {
			var t = e.progress || e.options.progress;if (t) try {
				var n = e.elements,
				    r = e.percentComplete,
				    i = e.options,
				    o = e.tween;t.call(n, n, r, Math.max(0, e.timeStart + (null != e.duration ? e.duration : null != i.duration ? i.duration : ve.duration) - dt), void 0 !== o ? o : String(100 * r), e);
			} catch (e) {
				setTimeout(function () {
					throw e;
				}, 1);
			}
		}function rt() {
			var e = !0,
			    t = !1,
			    n = void 0;try {
				for (var r, i = at[Symbol.iterator](); !(e = (r = i.next()).done); e = !0) {
					nt(r.value);
				}
			} catch (e) {
				t = !0, n = e;
			} finally {
				try {
					!e && i.return && i.return();
				} finally {
					if (t) throw n;
				}
			}at.clear();var o = !0,
			    a = !1,
			    l = void 0;try {
				for (var s, u = ot[Symbol.iterator](); !(o = (s = u.next()).done); o = !0) {
					Me(s.value);
				}
			} catch (e) {
				a = !0, l = e;
			} finally {
				try {
					!o && u.return && u.return();
				} finally {
					if (a) throw l;
				}
			}ot.clear();
		}var it = 1e3 / 60,
		    ot = new Set(),
		    at = new Set(),
		    lt = function () {
			var e = window.performance || {};if ("function" != typeof e.now) {
				var t = e.timing && e.timing.navigationStart ? e.timing.navigationStart : y();e.now = function () {
					return y() - t;
				};
			}return e;
		}(),
		    st = function st(e) {
			return setTimeout(e, Math.max(0, it - (lt.now() - dt)));
		},
		    ut = window.requestAnimationFrame || st,
		    ct = void 0,
		    ft = void 0,
		    dt = 0;try {
			(ft = new Worker(URL.createObjectURL(new Blob(["(" + function () {
				var e = this,
				    t = void 0;this.onmessage = function (n) {
					switch (n.data) {case !0:
							t || (t = setInterval(function () {
								e.postMessage(!0);
							}, 1e3 / 30));break;case !1:
							t && (clearInterval(t), t = 0);break;default:
							e.postMessage(n.data);}
				};
			} + ")()"])))).onmessage = function (e) {
				!0 === e.data ? vt() : rt();
			}, ke.isMobile || void 0 === document.hidden || document.addEventListener("visibilitychange", function () {
				ft.postMessage(ke.isTicking && document.hidden);
			});
		} catch (e) {}function vt(e) {
			if (!ct) {
				if (ct = !0, !1 !== e) {
					var t = lt.now(),
					    n = dt ? t - dt : it,
					    r = ve.speed,
					    i = ve.easing,
					    o = ve.duration,
					    a = void 0,
					    l = void 0;if (n >= ve.minFrameTime || !dt) {
						for (dt = t; ke.firstNew;) {
							et(ke.firstNew);
						}for (a = ke.first; a && a !== ke.firstNew; a = a._next) {
							var s = a.element,
							    u = be(s);if (s.parentNode && u) {
								var c = a.options,
								    f = a._flags,
								    d = a.timeStart;if (!d) {
									var v = null != a.queue ? a.queue : c.queue;d = t - n, !1 !== v && (d = Math.max(d, u.lastFinishList[v] || 0)), a.timeStart = d;
								}16 & f ? a.timeStart += n : 2 & f || (a._flags |= 2, c._ready++);
							} else _e(a);
						}for (a = ke.first; a && a !== ke.firstNew; a = l) {
							var p = a._flags;if (l = a._next, 2 & p && !(16 & p)) {
								var y = a.options;if (32 & p && y._ready < y._total) a.timeStart += n;else {
									var g = null != a.speed ? a.speed : null != y.speed ? y.speed : r,
									    h = a.timeStart;if (!(4 & p)) {
										var m = null != a.delay ? a.delay : y.delay;if (m) {
											if (h + m / g > t) continue;a.timeStart = h += m / (m > 0 ? g : 1);
										}a._flags |= 4, 0 == y._started++ && (y._first = a, y.begin && (tt(a), y.begin = void 0));
									}1 !== g && (a.timeStart = h += Math.min(n, t - h) * (1 - g));var w = null != a.easing ? a.easing : null != y.easing ? y.easing : i,
									    b = a.ellapsedTime = t - h,
									    S = null != a.duration ? a.duration : null != y.duration ? y.duration : o,
									    x = a.percentComplete = Dt.mock ? 1 : Math.min(b / S, 1),
									    O = a.tweens,
									    E = 64 & p;for (var _ in (a.progress || y._first === a && y.progress) && at.add(a), 1 === x && ot.add(a), O) {
										var T = O[_],
										    M = T.sequence,
										    V = M.pattern,
										    q = "",
										    N = 0;if (V) {
											for (var A = (T.easing || w)(x, 0, 1, _), L = 0, J = 0; J < M.length - 1; J++) {
												M[J].percent < A && (L = J);
											}for (var I = M[L], j = M[L + 1] || I, C = (x - I.percent) / (j.percent - I.percent), P = j.easing || k; N < V.length; N++) {
												var F = I[N];if (null == F) q += V[N];else {
													var H = j[N];if (F === H) q += F;else {
														var R = P(E ? 1 - C : C, F, H, _);q += !0 === V[N] ? Math.round(R) : R;
													}
												}
											}"tween" !== _ ? (1 === x && q.startsWith("calc(0 + ") && (q = q.replace(/^calc\(0[^\d]* \+ ([^\(\)]+)\)$/, "$1")), Ae(a.element, _, q, T.fn)) : a.tween = q;
										} else console.warn("VelocityJS: Missing pattern:", _, JSON.stringify(T[_])), delete O[_];
									}
								}
							}
						}(at.size || ot.size) && (document.hidden ? ft ? ft.postMessage("") : setTimeout(rt, 1) : rt());
					}
				}ke.first ? (ke.isTicking = !0, document.hidden ? ft ? !1 === e && ft.postMessage(!0) : st(vt) : ut(vt)) : (ke.isTicking = !1, dt = 0, document.hidden && ft && ft.postMessage(!1)), ct = !1;
			}
		}function pt(e, t, n) {
			if (et(e), void 0 === t || t === p(e.queue, e.options.queue, n)) {
				if (!(4 & e._flags)) {
					var r = e.options;0 == r._started++ && (r._first = e, r.begin && (tt(e), r.begin = void 0)), e._flags |= 4;
				}for (var i in e.tweens) {
					var o = e.tweens[i],
					    a = o.sequence,
					    l = a.pattern,
					    s = "",
					    u = 0;if (l) for (var c = a[a.length - 1]; u < l.length; u++) {
						var f = c[u];s += null == f ? l[u] : f;
					}Ae(e.element, i, s, o.fn);
				}Me(e);
			}
		}m(["finish", function (e, t, n) {
			var r = Q(e[0], !0),
			    i = ve.queue,
			    o = !0 === e[void 0 === r ? 0 : 1];if (c(t) && t.velocity.animations) {
				var a = !0,
				    l = !1,
				    s = void 0;try {
					for (var u, f = t.velocity.animations[Symbol.iterator](); !(a = (u = f.next()).done); a = !0) {
						pt(u.value, r, i);
					}
				} catch (e) {
					l = !0, s = e;
				} finally {
					try {
						!a && f.return && f.return();
					} finally {
						if (l) throw s;
					}
				}
			} else {
				for (; ke.firstNew;) {
					et(ke.firstNew);
				}for (var d, v = ke.first; v && (o || v !== ke.firstNew); v = d || ke.firstNew) {
					d = v._next, t && !t.includes(v.element) || pt(v, r, i);
				}
			}n && (c(t) && t.velocity.animations && t.then ? t.then(n._resolver) : n._resolver(t));
		}], !0);var yt = { isExpanded: 1, isReady: 2, isStarted: 4, isStopped: 8, isPaused: 16, isSync: 32, isReverse: 64 };function gt(e, t, n, r) {
			void 0 !== t && t !== p(e.queue, e.options.queue, n) || (r ? e._flags |= 16 : e._flags &= -17);
		}function ht(e, t, n, r) {
			var i = 0 === r.indexOf("pause"),
			    o = "false" !== (r.indexOf(".") >= 0 ? r.replace(/^.*\./, "") : void 0) && Q(e[0]),
			    a = ve.queue;if (c(t) && t.velocity.animations) {
				var l = !0,
				    s = !1,
				    u = void 0;try {
					for (var f, d = t.velocity.animations[Symbol.iterator](); !(l = (f = d.next()).done); l = !0) {
						gt(f.value, o, a, i);
					}
				} catch (e) {
					s = !0, u = e;
				} finally {
					try {
						!l && d.return && d.return();
					} finally {
						if (s) throw u;
					}
				}
			} else for (var v = ke.first; v;) {
				t && !t.includes(v.element) || gt(v, o, a, i), v = v._next;
			}n && (c(t) && t.velocity.animations && t.then ? t.then(n._resolver) : n._resolver(t));
		}function mt(t, n, r, i) {
			var o = t[0],
			    a = t[1];if (!o) return console.warn("VelocityJS: Cannot access a non-existant property!"), null;if (void 0 === a && !s(o)) {
				if (Array.isArray(o)) {
					if (1 === n.length) {
						var f = {},
						    d = !0,
						    v = !1,
						    p = void 0;try {
							for (var y, g = o[Symbol.iterator](); !(d = (y = g.next()).done); d = !0) {
								var h = y.value;f[h] = ze(Ge(n[0], h));
							}
						} catch (e) {
							v = !0, p = e;
						} finally {
							try {
								!d && g.return && g.return();
							} finally {
								if (v) throw p;
							}
						}return f;
					}var m = [],
					    w = !0,
					    b = !1,
					    S = void 0;try {
						for (var x, k = n[Symbol.iterator](); !(w = (x = k.next()).done); w = !0) {
							var O = x.value,
							    E = {},
							    _ = !0,
							    T = !1,
							    M = void 0;try {
								for (var V, q = o[Symbol.iterator](); !(_ = (V = q.next()).done); _ = !0) {
									var N = V.value;E[N] = ze(Ge(O, N));
								}
							} catch (e) {
								T = !0, M = e;
							} finally {
								try {
									!_ && q.return && q.return();
								} finally {
									if (T) throw M;
								}
							}m.push(E);
						}
					} catch (e) {
						b = !0, S = e;
					} finally {
						try {
							!w && k.return && k.return();
						} finally {
							if (b) throw S;
						}
					}return m;
				}if (1 === n.length) return ze(Ge(n[0], o));var A = [],
				    L = !0,
				    J = !1,
				    I = void 0;try {
					for (var j, C = n[Symbol.iterator](); !(L = (j = C.next()).done); L = !0) {
						var P = j.value;A.push(ze(Ge(P, o)));
					}
				} catch (e) {
					J = !0, I = e;
				} finally {
					try {
						!L && C.return && C.return();
					} finally {
						if (J) throw I;
					}
				}return A;
			}var F = [];if (s(o)) {
				for (var H in o) {
					if (o.hasOwnProperty(H)) {
						var R = !0,
						    z = !1,
						    W = void 0;try {
							for (var B, $ = n[Symbol.iterator](); !(R = (B = $.next()).done); R = !0) {
								var G = B.value,
								    Q = o[H];u(Q) || l(Q) ? Ae(G, H, o[H]) : (F.push('Cannot set a property "' + H + '" to an unknown type: ' + (void 0 === Q ? "undefined" : e(Q))), console.warn('VelocityJS: Cannot set a property "' + H + '" to an unknown type:', Q));
							}
						} catch (e) {
							z = !0, W = e;
						} finally {
							try {
								!R && $.return && $.return();
							} finally {
								if (z) throw W;
							}
						}
					}
				}
			} else if (u(a) || l(a)) {
				var D = !0,
				    U = !1,
				    Z = void 0;try {
					for (var Y, X = n[Symbol.iterator](); !(D = (Y = X.next()).done); D = !0) {
						Ae(Y.value, o, String(a));
					}
				} catch (e) {
					U = !0, Z = e;
				} finally {
					try {
						!D && X.return && X.return();
					} finally {
						if (U) throw Z;
					}
				}
			} else F.push('Cannot set a property "' + o + '" to an unknown type: ' + (void 0 === a ? "undefined" : e(a))), console.warn('VelocityJS: Cannot set a property "' + o + '" to an unknown type:', a);r && (F.length ? r._rejecter(F.join(", ")) : c(n) && n.velocity.animations && n.then ? n.then(r._resolver) : r._resolver(n));
		}function wt(e, t, n) {
			et(e), void 0 !== t && t !== p(e.queue, e.options.queue, n) || (e._flags |= 8, Me(e));
		}m(["option", function (e, t, n, r) {
			var i = e[0],
			    o = r.indexOf(".") >= 0 ? r.replace(/^.*\./, "") : void 0,
			    a = "false" !== o && Q(o, !0),
			    l = void 0,
			    s = e[1];if (!i) return console.warn("VelocityJS: Cannot access a non-existant key!"), null;if (c(t) && t.velocity.animations) l = t.velocity.animations;else {
				l = [];for (var u = ke.first; u; u = u._next) {
					t.indexOf(u.element) >= 0 && p(u.queue, u.options.queue) === a && l.push(u);
				}if (t.length > 1 && l.length > 1) {
					for (var f = 1, d = l[0].options; f < l.length;) {
						if (l[f++].options !== d) {
							d = null;break;
						}
					}d && (l = [l[0]]);
				}
			}if (void 0 === s) {
				var v = [],
				    y = yt[i],
				    g = !0,
				    h = !1,
				    m = void 0;try {
					for (var w, b = l[Symbol.iterator](); !(g = (w = b.next()).done); g = !0) {
						var S = w.value;void 0 === y ? v.push(p(S[i], S.options[i])) : v.push(0 == (S._flags & y));
					}
				} catch (e) {
					h = !0, m = e;
				} finally {
					try {
						!g && b.return && b.return();
					} finally {
						if (h) throw m;
					}
				}return 1 === t.length && 1 === l.length ? v[0] : v;
			}var x = void 0;switch (i) {case "cache":
					s = F(s);break;case "begin":
					s = H(s);break;case "complete":
					s = R(s);break;case "delay":
					s = z(s);break;case "duration":
					s = W(s);break;case "fpsLimit":
					s = $(s);break;case "loop":
					s = G(s);break;case "percentComplete":
					x = !0, s = parseFloat(s);break;case "repeat":case "repeatAgain":
					s = D(s);break;default:
					if ("_" !== i[0]) {
						var k = parseFloat(s);s === String(k) && (s = k);break;
					}case "queue":case "promise":case "promiseRejectEmpty":case "easing":case "started":
					return void console.warn("VelocityJS: Trying to set a read-only key:", i);}if (void 0 === s || s != s) return console.warn("VelocityJS: Trying to set an invalid value:" + i + "=" + s + " (" + e[1] + ")"), null;var O = !0,
			    E = !1,
			    _ = void 0;try {
				for (var T, M = l[Symbol.iterator](); !(O = (T = M.next()).done); O = !0) {
					var V = T.value;x ? V.timeStart = dt - p(V.duration, V.options.duration, ve.duration) * s : V[i] = s;
				}
			} catch (e) {
				E = !0, _ = e;
			} finally {
				try {
					!O && M.return && M.return();
				} finally {
					if (E) throw _;
				}
			}n && (c(t) && t.velocity.animations && t.then ? t.then(n._resolver) : n._resolver(t));
		}], !0), m(["pause", ht], !0), m(["resume", ht], !0), m(["property", mt], !0), m(["reverse", function (e, t, n, r) {
			throw new SyntaxError("VelocityJS: The 'reverse' action is built in and private.");
		}], !0), m(["stop", function (e, t, n, r) {
			var i = Q(e[0], !0),
			    o = ve.queue,
			    a = !0 === e[void 0 === i ? 0 : 1];if (c(t) && t.velocity.animations) {
				var l = !0,
				    s = !1,
				    u = void 0;try {
					for (var f, d = t.velocity.animations[Symbol.iterator](); !(l = (f = d.next()).done); l = !0) {
						wt(f.value, i, o);
					}
				} catch (e) {
					s = !0, u = e;
				} finally {
					try {
						!l && d.return && d.return();
					} finally {
						if (s) throw u;
					}
				}
			} else {
				for (; ke.firstNew;) {
					et(ke.firstNew);
				}for (var v, p = ke.first; p && (a || p !== ke.firstNew); p = v || ke.firstNew) {
					v = p._next, t && !t.includes(p.element) || wt(p, i, o);
				}
			}n && (c(t) && t.velocity.animations && t.then ? t.then(n._resolver) : n._resolver(t));
		}], !0), m(["style", mt], !0), m(["tween", function (e, t, n, i) {
			var o = void 0;if (t) {
				if (1 !== t.length) throw new Error("VelocityJS: Cannot tween more than one element!");
			} else {
				if (!e.length) return console.info('Velocity(<element>, "tween", percentComplete, property, end | [end, <easing>, <start>], <easing>) => value\nVelocity(<element>, "tween", percentComplete, {property: end | [end, <easing>, <start>], ...}, <easing>) => {property: value, ...}'), null;t = [document.body], o = !0;
			}var a = e[0],
			    c = { elements: t, element: t[0], queue: !1, options: { duration: 1e3 }, tweens: null },
			    f = {},
			    d = e[1],
			    v = void 0,
			    y = void 0,
			    g = e[2],
			    h = 0;if (u(e[1]) ? Te && Te[e[1]] ? (y = Te[e[1]], d = {}, g = e[2]) : (v = !0, d = r({}, e[1], e[2]), g = e[3]) : Array.isArray(e[1]) && (v = !0, d = { tween: e[1] }, g = e[2]), !l(a) || a < 0 || a > 1) throw new Error("VelocityJS: Must tween a percentage from 0 to 1!");if (!s(d)) throw new Error("VelocityJS: Cannot tween an invalid property!");if (o) for (var m in d) {
				if (d.hasOwnProperty(m) && (!Array.isArray(d[m]) || d[m].length < 2)) throw new Error("VelocityJS: When not supplying an element you must force-feed values: " + m);
			}var b = B(p(g, ve.easing), w);for (var S in y ? en(c, y) : Ue(c, d), c.tweens) {
				var x = c.tweens[S],
				    O = x.sequence,
				    E = O.pattern,
				    _ = "",
				    T = 0;if (h++, E) {
					for (var M = (x.easing || b)(a, 0, 1, S), V = 0, q = 0; q < O.length - 1; q++) {
						O[q].percent < M && (V = q);
					}for (var N = O[V], A = O[V + 1] || N, L = (a - N.percent) / (A.percent - N.percent), J = A.easing || k; T < E.length; T++) {
						var I = N[T];if (null == I) _ += E[T];else {
							var j = A[T];if (I === j) _ += I;else {
								var C = J(L, I, j, S);_ += !0 === E[T] ? Math.round(C) : C;
							}
						}
					}f[S] = _;
				}
			}if (v && 1 === h) for (var P in f) {
				if (f.hasOwnProperty(P)) return f[P];
			}return f;
		}], !0);var bt = { aliceblue: 15792383, antiquewhite: 16444375, aqua: 65535, aquamarine: 8388564, azure: 15794175, beige: 16119260, bisque: 16770244, black: 0, blanchedalmond: 16772045, blue: 255, blueviolet: 9055202, brown: 10824234, burlywood: 14596231, cadetblue: 6266528, chartreuse: 8388352, chocolate: 13789470, coral: 16744272, cornflowerblue: 6591981, cornsilk: 16775388, crimson: 14423100, cyan: 65535, darkblue: 139, darkcyan: 35723, darkgoldenrod: 12092939, darkgray: 11119017, darkgrey: 11119017, darkgreen: 25600, darkkhaki: 12433259, darkmagenta: 9109643, darkolivegreen: 5597999, darkorange: 16747520, darkorchid: 10040012, darkred: 9109504, darksalmon: 15308410, darkseagreen: 9419919, darkslateblue: 4734347, darkslategray: 3100495, darkslategrey: 3100495, darkturquoise: 52945, darkviolet: 9699539, deeppink: 16716947, deepskyblue: 49151, dimgray: 6908265, dimgrey: 6908265, dodgerblue: 2003199, firebrick: 11674146, floralwhite: 16775920, forestgreen: 2263842, fuchsia: 16711935, gainsboro: 14474460, ghostwhite: 16316671, gold: 16766720, goldenrod: 14329120, gray: 8421504, grey: 8421504, green: 32768, greenyellow: 11403055, honeydew: 15794160, hotpink: 16738740, indianred: 13458524, indigo: 4915330, ivory: 16777200, khaki: 15787660, lavender: 15132410, lavenderblush: 16773365, lawngreen: 8190976, lemonchiffon: 16775885, lightblue: 11393254, lightcoral: 15761536, lightcyan: 14745599, lightgoldenrodyellow: 16448210, lightgray: 13882323, lightgrey: 13882323, lightgreen: 9498256, lightpink: 16758465, lightsalmon: 16752762, lightseagreen: 2142890, lightskyblue: 8900346, lightslategray: 7833753, lightslategrey: 7833753, lightsteelblue: 11584734, lightyellow: 16777184, lime: 65280, limegreen: 3329330, linen: 16445670, magenta: 16711935, maroon: 8388608, mediumaquamarine: 6737322, mediumblue: 205, mediumorchid: 12211667, mediumpurple: 9662683, mediumseagreen: 3978097, mediumslateblue: 8087790, mediumspringgreen: 64154, mediumturquoise: 4772300, mediumvioletred: 13047173, midnightblue: 1644912, mintcream: 16121850, mistyrose: 16770273, moccasin: 16770229, navajowhite: 16768685, navy: 128, oldlace: 16643558, olive: 8421376, olivedrab: 7048739, orange: 16753920, orangered: 16729344, orchid: 14315734, palegoldenrod: 15657130, palegreen: 10025880, paleturquoise: 11529966, palevioletred: 14381203, papayawhip: 16773077, peachpuff: 16767673, peru: 13468991, pink: 16761035, plum: 14524637, powderblue: 11591910, purple: 8388736, rebeccapurple: 6697881, red: 16711680, rosybrown: 12357519, royalblue: 4286945, saddlebrown: 9127187, salmon: 16416882, sandybrown: 16032864, seagreen: 3050327, seashell: 16774638, sienna: 10506797, silver: 12632256, skyblue: 8900331, slateblue: 6970061, slategray: 7372944, slategrey: 7372944, snow: 16775930, springgreen: 65407, steelblue: 4620980, tan: 13808780, teal: 32896, thistle: 14204888, tomato: 16737095, turquoise: 4251856, violet: 15631086, wheat: 16113331, white: 16777215, whitesmoke: 16119285, yellow: 16776960, yellowgreen: 10145074 };for (var St in bt) {
			if (bt.hasOwnProperty(St)) {
				var xt = bt[St];He[St] = Math.floor(xt / 65536) + "," + Math.floor(xt / 256 % 256) + "," + xt % 256;
			}
		}function kt(e) {
			return e < 1 / 2.75 ? 7.5625 * e * e : e < 2 / 2.75 ? 7.5625 * (e -= 1.5 / 2.75) * e + .75 : e < 2.5 / 2.75 ? 7.5625 * (e -= 2.25 / 2.75) * e + .9375 : 7.5625 * (e -= 2.625 / 2.75) * e + .984375;
		}function Ot(e) {
			return 1 - kt(1 - e);
		}!function (e, t) {
			x([e, function (e, n, r) {
				return 0 === e ? n : 1 === e ? r : Math.pow(e, 2) * ((t + 1) * e - t) * (r - n);
			}]);
		}("easeInBack", 1.7), function (e, t) {
			x([e, function (e, n, r) {
				return 0 === e ? n : 1 === e ? r : (Math.pow(--e, 2) * ((t + 1) * e + t) + 1) * (r - n);
			}]);
		}("easeOutBack", 1.7), function (e, t) {
			t *= 1.525, x([e, function (e, n, r) {
				return 0 === e ? n : 1 === e ? r : .5 * ((e *= 2) < 1 ? Math.pow(e, 2) * ((t + 1) * e - t) : Math.pow(e - 2, 2) * ((t + 1) * (e - 2) + t) + 2) * (r - n);
			}]);
		}("easeInOutBack", 1.7), x(["easeInBounce", function (e, t, n) {
			return 0 === e ? t : 1 === e ? n : Ot(e) * (n - t);
		}]), x(["easeOutBounce", function (e, t, n) {
			return 0 === e ? t : 1 === e ? n : kt(e) * (n - t);
		}]), x(["easeInOutBounce", function (e, t, n) {
			return 0 === e ? t : 1 === e ? n : (e < .5 ? .5 * Ot(2 * e) : .5 * kt(2 * e - 1) + .5) * (n - t);
		}]);var Et = 2 * Math.PI;function _t(e, t) {
			return function (n, r) {
				if (void 0 === r) return We(n, e, t) + "px";Ae(n, e, parseFloat(r) - We(n, e, t) + "px");
			};
		}!function (e, t, n) {
			x([e, function (e, r, i) {
				return 0 === e ? r : 1 === e ? i : -t * Math.pow(2, 10 * (e -= 1)) * Math.sin((e - n / Et * Math.asin(1 / t)) * Et / n) * (i - r);
			}]);
		}("easeInElastic", 1, .3), function (e, t, n) {
			x([e, function (e, r, i) {
				return 0 === e ? r : 1 === e ? i : (t * Math.pow(2, -10 * e) * Math.sin((e - n / Et * Math.asin(1 / t)) * Et / n) + 1) * (i - r);
			}]);
		}("easeOutElastic", 1, .3), function (e, t, n) {
			x([e, function (e, r, i) {
				if (0 === e) return r;if (1 === e) return i;var o = n / Et * Math.asin(1 / t);return ((e = 2 * e - 1) < 0 ? t * Math.pow(2, 10 * e) * Math.sin((e - o) * Et / n) * -.5 : t * Math.pow(2, -10 * e) * Math.sin((e - o) * Et / n) * .5 + 1) * (i - r);
			}]);
		}("easeInOutElastic", 1, .3 * 1.5), x(["at-start", function (e, t, n) {
			return 0 === e ? t : n;
		}]), x(["during", function (e, t, n) {
			return 0 === e || 1 === e ? t : n;
		}]), x(["at-end", function (e, t, n) {
			return 1 === e ? n : t;
		}]), Ve(["Element", "innerWidth", _t("width", !0)]), Ve(["Element", "innerHeight", _t("height", !0)]), Ve(["Element", "outerWidth", _t("width", !1)]), Ve(["Element", "outerHeight", _t("height", !1)]);var Tt = /^(b|big|i|small|tt|abbr|acronym|cite|code|dfn|em|kbd|strong|samp|let|a|bdo|br|img|map|object|q|script|span|sub|sup|button|input|label|select|textarea)$/i,
		    Mt = /^(li)$/i,
		    Vt = /^(tr)$/i,
		    qt = /^(table)$/i,
		    Nt = /^(tbody)$/i;function At(e, t) {
			return function (n, r) {
				if (null == r) return Ge(n, "client" + e, null, !0), Ge(n, "scroll" + e, null, !0), n["scroll" + t] + "px";var i = parseFloat(r);switch (r.replace(String(i), "")) {case "":case "px":
						n["scroll" + t] = i;break;case "%":
						var o = parseFloat(Ge(n, "client" + e)),
						    a = parseFloat(Ge(n, "scroll" + e));n["scroll" + t] = Math.max(0, a - o) * i / 100;}
			};
		}Ve(["Element", "display", function (e, t) {
			var n = e.style;if (void 0 === t) return $e(e, "display");if ("auto" === t) {
				var r = e && e.nodeName,
				    i = be(e);t = Tt.test(r) ? "inline" : Mt.test(r) ? "list-item" : Vt.test(r) ? "table-row" : qt.test(r) ? "table" : Nt.test(r) ? "table-row-group" : "block", i.cache.display = t;
			}n.display = t;
		}]), Ve(["HTMLElement", "scroll", At("Height", "Top"), !1]), Ve(["HTMLElement", "scrollTop", At("Height", "Top"), !1]), Ve(["HTMLElement", "scrollLeft", At("Width", "Left"), !1]), Ve(["HTMLElement", "scrollWidth", function (e, t) {
			if (null == t) return e.scrollWidth + "px";
		}]), Ve(["HTMLElement", "clientWidth", function (e, t) {
			if (null == t) return e.clientWidth + "px";
		}]), Ve(["HTMLElement", "scrollHeight", function (e, t) {
			if (null == t) return e.scrollHeight + "px";
		}]), Ve(["HTMLElement", "clientHeight", function (e, t) {
			if (null == t) return e.clientHeight + "px";
		}]);var Lt = /^(b(lockSize|o(rder(Bottom(LeftRadius|RightRadius|Width)|Image(Outset|Width)|LeftWidth|R(adius|ightWidth)|Spacing|Top(LeftRadius|RightRadius|Width)|Width)|ttom))|column(Gap|RuleWidth|Width)|f(lexBasis|ontSize)|grid(ColumnGap|Gap|RowGap)|height|inlineSize|le(ft|tterSpacing)|m(a(rgin(Bottom|Left|Right|Top)|x(BlockSize|Height|InlineSize|Width))|in(BlockSize|Height|InlineSize|Width))|o(bjectPosition|utline(Offset|Width))|p(adding(Bottom|Left|Right|Top)|erspective)|right|s(hapeMargin|troke(Dashoffset|Width))|t(extIndent|op|ransformOrigin)|w(idth|ordSpacing))$/;function Jt(e, t) {
			return function (n, r) {
				if (void 0 === r) return $e(n, e) || $e(n, t);n.style[e] = n.style[t] = r;
			};
		}function It(e) {
			return function (t, n) {
				if (void 0 === n) return $e(t, e);t.style[e] = n;
			};
		}var jt = /^(webkit|moz|ms|o)[A-Z]/,
		    Ct = ke.prefixElement;if (Ct) for (var Pt in Ct.style) {
			if (jt.test(Pt)) {
				var Ft = Pt.replace(/^[a-z]+([A-Z])/, function (e, t) {
					return t.toLowerCase();
				}),
				    Ht = Lt.test(Ft) ? "px" : void 0;Ve(["Element", Ft, Jt(Pt, Ft), Ht]);
			} else if (!qe(["Element", Pt])) {
				var Rt = Lt.test(Pt) ? "px" : void 0;Ve(["Element", Pt, It(Pt), Rt]);
			}
		}function zt(e) {
			return function (t, n) {
				if (void 0 === n) return t.getAttribute(e);t.setAttribute(e, n);
			};
		}var Wt = document.createElement("div"),
		    Bt = /^SVG(.*)Element$/,
		    $t = /Element$/;function Gt(e) {
			return function (t, n) {
				if (void 0 === n) try {
					return t.getBBox()[e] + "px";
				} catch (e) {
					return "0px";
				}t.setAttribute(e, n);
			};
		}Object.getOwnPropertyNames(window).forEach(function (e) {
			var t = Bt.exec(e);if (t && "SVG" !== t[1]) try {
				var n = t[1] ? document.createElementNS("http://www.w3.org/2000/svg", (t[1] || "svg").toLowerCase()) : document.createElement("svg");for (var r in n) {
					var i = n[r];!u(r) || "o" === r[0] && "n" === r[1] || r === r.toUpperCase() || $t.test(r) || r in Wt || o(i) || Ve([e, r, zt(r)]);
				}
			} catch (t) {
				console.error("VelocityJS: Error when trying to identify SVG attributes on " + e + ".", t);
			}
		}), Ve(["SVGElement", "width", Gt("width")]), Ve(["SVGElement", "height", Gt("height")]), Ve(["Element", "tween", function (e, t) {
			if (void 0 === t) return "";
		}]);var Qt,
		    Dt = on;if (function (e) {
			e.Actions = h, e.Easings = S, e.Sequences = Te, e.State = ke, e.defaults = ve, e.patch = ln, e.debug = !1, e.mock = !1, e.version = "2.0.5", e.Velocity = on;
		}(Qt || (Qt = {})), function () {
			if (document.documentMode) return document.documentMode;for (var e = 7; e > 4; e--) {
				var t = document.createElement("div");if (t.innerHTML = "\x3c!--[if IE " + e + "]><span></span><![endif]--\x3e", t.getElementsByTagName("span").length) return t = null, e;
			}
		}() <= 8) throw new Error("VelocityJS cannot run on Internet Explorer 8 or earlier");if (window) {
			var Ut = window.jQuery,
			    Zt = window.Zepto;ln(window, !0), ln(Element && Element.prototype), ln(NodeList && NodeList.prototype), ln(HTMLCollection && HTMLCollection.prototype), ln(Ut, !0), ln(Ut && Ut.fn), ln(Zt, !0), ln(Zt && Zt.fn);
		}var Yt = function Yt(t) {
			if (Qt.hasOwnProperty(t)) switch (void 0 === t ? "undefined" : e(t)) {case "number":case "boolean":
					v(Dt, t, { get: function get() {
							return Qt[t];
						}, set: function set(e) {
							Qt[t] = e;
						} }, !0);break;default:
					v(Dt, t, Qt[t], !0);}
		};for (var Xt in Qt) {
			Yt(Xt);
		}Object.freeze(Dt);var Kt = /(\d*\.\d+|\d+\.?|from|to)/g;function en(e, t) {
			var n = e.tweens = Object.create(null),
			    r = e.element;for (var i in t.tweens) {
				if (t.tweens.hasOwnProperty(i)) {
					var o = Ne(r, i);if (!o && "tween" !== i) {
						Dt.debug && console.log("Skipping [" + i + "] due to a lack of browser support.");continue;
					}n[i] = { fn: o, sequence: t.tweens[i] };
				}
			}
		}m(["registerSequence", function e(t) {
			if (s(t[0])) for (var n in t[0]) {
				t[0].hasOwnProperty(n) && e([n, t[0][n]]);
			} else if (u(t[0])) {
				var r = t[0],
				    i = t[1];if (u(r)) {
					if (s(i)) {
						Te[r] && console.warn("VelocityJS: Replacing named sequence:", r);var o = {},
						    a = new Array(100),
						    c = [],
						    f = Te[r] = {},
						    d = W(i.duration);for (var v in f.tweens = {}, l(d) && (f.duration = d), i) {
							if (i.hasOwnProperty(v)) {
								var p = String(v).match(Kt);if (p) {
									var y = !0,
									    g = !1,
									    h = void 0;try {
										for (var m, b = p[Symbol.iterator](); !(y = (m = b.next()).done); y = !0) {
											var S = m.value,
											    x = "from" === S ? 0 : "to" === S ? 100 : parseFloat(S);if (x < 0 || x > 100) console.warn("VelocityJS: Trying to use an invalid value as a percentage (0 <= n <= 100):", r, x);else if (isNaN(x)) console.warn("VelocityJS: Trying to use an invalid number as a percentage:", r, v, S);else for (var k in o[String(x)] || (o[String(x)] = []), o[String(x)].push(v), i[v]) {
												c.includes(k) || c.push(k);
											}
										}
									} catch (e) {
										g = !0, h = e;
									} finally {
										try {
											!y && b.return && b.return();
										} finally {
											if (g) throw h;
										}
									}
								}
							}
						}var O = Object.keys(o).sort(function (e, t) {
							var n = parseFloat(e),
							    r = parseFloat(t);return n > r ? 1 : n < r ? -1 : 0;
						});O.forEach(function (e) {
							a.push.apply(o[e]);
						});var E = !0,
						    _ = !1,
						    T = void 0;try {
							for (var M, V = c[Symbol.iterator](); !(E = (M = V.next()).done); E = !0) {
								var q = M.value,
								    N = [],
								    A = Je(q),
								    L = !0,
								    J = !1,
								    I = void 0;try {
									for (var j, C = O[Symbol.iterator](); !(L = (j = C.next()).done); L = !0) {
										var P = j.value,
										    F = !0,
										    H = !1,
										    R = void 0;try {
											for (var z, $ = o[P][Symbol.iterator](); !(F = (z = $.next()).done); F = !0) {
												var G = i[z.value];G[A] && N.push(u(G[A]) ? G[A] : G[A][0]);
											}
										} catch (e) {
											H = !0, R = e;
										} finally {
											try {
												!F && $.return && $.return();
											} finally {
												if (H) throw R;
											}
										}
									}
								} catch (e) {
									J = !0, I = e;
								} finally {
									try {
										!L && C.return && C.return();
									} finally {
										if (J) throw I;
									}
								}if (N.length) {
									var Q = Xe(N, A),
									    D = 0;if (Q) {
										var U = !0,
										    Z = !1,
										    Y = void 0;try {
											for (var X, K = O[Symbol.iterator](); !(U = (X = K.next()).done); U = !0) {
												var ee = X.value,
												    te = !0,
												    ne = !1,
												    re = void 0;try {
													for (var ie, oe = o[ee][Symbol.iterator](); !(te = (ie = oe.next()).done); te = !0) {
														var ae = i[ie.value][A];ae && (Array.isArray(ae) && ae.length > 1 && (u(ae[1]) || Array.isArray(ae[1])) && (Q[D].easing = B(ae[1], f.duration || w)), Q[D++].percent = parseFloat(ee) / 100);
													}
												} catch (e) {
													ne = !0, re = e;
												} finally {
													try {
														!te && oe.return && oe.return();
													} finally {
														if (ne) throw re;
													}
												}
											}
										} catch (e) {
											Z = !0, Y = e;
										} finally {
											try {
												!U && K.return && K.return();
											} finally {
												if (Z) throw Y;
											}
										}f.tweens[A] = Q;
									}
								}
							}
						} catch (e) {
							_ = !0, T = e;
						} finally {
							try {
								!E && V.return && V.return();
							} finally {
								if (_) throw T;
							}
						}
					} else console.warn("VelocityJS: Trying to set 'registerSequence' sequence to an invalid value:", r, i);
				} else console.warn("VelocityJS: Trying to set 'registerSequence' name to an invalid value:", r);
			}
		}], !0);var tn = void 0;try {
			tn = Promise;
		} catch (e) {}var nn = ", if that is deliberate then pass `promiseRejectEmpty:false` as an option";function rn(e, t) {
			v(t, "promise", e), v(t, "then", e.then.bind(e)), v(t, "catch", e.catch.bind(e)), e.finally && v(t, "finally", e.finally.bind(e));
		}function on() {
			for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) {
				t[n] = arguments[n];
			}var r = ve,
			    y = arguments,
			    g = y[0],
			    m = s(g) && (g.p || s(g.properties) && !g.properties.names || u(g.properties)),
			    w = 0,
			    b = void 0,
			    S = void 0,
			    x = void 0,
			    k = void 0,
			    O = void 0,
			    E = void 0,
			    _ = void 0;a(this) ? b = [this] : f(this) ? (b = d(this), c(this) && (k = this.velocity.animations)) : m ? (b = d(g.elements || g.e), w++) : a(g) ? (b = d([g]), w++) : f(g) && (b = d(g), w++), b && (v(b, "velocity", on.bind(b)), k && v(b.velocity, "animations", k));var T = "reverse" === (S = m ? p(g.properties, g.p) : y[w++]),
			    M = !T && u(S),
			    V = M && Te[S],
			    q = m ? p(g.options, g.o) : y[w];if (s(q) && (x = q), tn && p(x && x.promise, r.promise) && (O = new tn(function (e, t) {
				_ = t, E = function E(t) {
					c(t) && t.promise ? (delete t.then, delete t.catch, delete t.finally, e(t), rn(t.promise, t)) : e(t);
				};
			}), b && rn(O, b)), O) {
				var N = x && x.promiseRejectEmpty,
				    A = p(N, r.promiseRejectEmpty);b || M ? S || (A ? _("Velocity: No properties supplied" + (i(N) ? "" : nn) + ". Aborting.") : E()) : A ? _("Velocity: No elements supplied" + (i(N) ? "" : nn) + ". Aborting.") : E();
			}if (!b && !M || !S) return O;if (M) {
				for (var L = [], J = O && { _promise: O, _resolver: E, _rejecter: _ }; w < y.length;) {
					L.push(y[w++]);
				}var I = S.replace(/\..*$/, ""),
				    j = h[I];if (j) {
					var C = j(L, b, J, S);return void 0 !== C ? C : b || O;
				}if (!V) return void console.error("VelocityJS: First argument (" + S + ") was not a property map, a known action, or a registered redirect. Aborting.");
			}var P = void 0;if (s(S) || T || V) {
				var F = {},
				    $ = r.sync;if (O && (v(F, "_promise", O), v(F, "_rejecter", _), v(F, "_resolver", E)), v(F, "_ready", 0), v(F, "_started", 0), v(F, "_completed", 0), v(F, "_total", 0), s(x)) {
					var Y = W(x.duration);P = void 0 !== Y, F.duration = p(Y, r.duration), F.delay = p(z(x.delay), r.delay), F.easing = B(p(x.easing, r.easing), F.duration) || B(r.easing, F.duration), F.loop = p(G(x.loop), r.loop), F.repeat = F.repeatAgain = p(D(x.repeat), r.repeat), null != x.speed && (F.speed = p(U(x.speed), 1)), i(x.promise) && (F.promise = x.promise), F.queue = p(Q(x.queue), r.queue), x.mobileHA && !ke.isGingerbread && (F.mobileHA = !0), !0 === x.drag && (F.drag = !0), (l(x.stagger) || o(x.stagger)) && (F.stagger = x.stagger), T || (null != x.display && (S.display = x.display, console.error('Deprecated "options.display" used, this is now a property:', x.display)), null != x.visibility && (S.visibility = x.visibility, console.error('Deprecated "options.visibility" used, this is now a property:', x.visibility)));var X = H(x.begin),
					    K = R(x.complete),
					    ee = function (e) {
						if (o(e)) return e;null != e && console.warn("VelocityJS: Trying to set 'progress' to an invalid value:", e);
					}(x.progress),
					    te = Z(x.sync);null != X && (F.begin = X), null != K && (F.complete = K), null != ee && (F.progress = ee), null != te && ($ = te);
				} else if (!m) {
					var ne = 0;if (F.duration = W(y[w], !0), void 0 === F.duration ? F.duration = r.duration : (P = !0, ne++), !o(y[w + ne])) {
						var re = B(y[w + ne], p(F && W(F.duration), r.duration), !0);void 0 !== re && (ne++, F.easing = re);
					}var ie = R(y[w + ne], !0);void 0 !== ie && (F.complete = ie), F.delay = r.delay, F.loop = r.loop, F.repeat = F.repeatAgain = r.repeat;
				}if (T && !1 === F.queue) throw new Error("VelocityJS: Cannot reverse a queue:false animation.");!P && V && V.duration && (F.duration = V.duration);var oe = { options: F, elements: b, _prev: void 0, _next: void 0, _flags: $ ? 32 : 0, percentComplete: 0, ellapsedTime: 0, timeStart: 0 };k = [];for (var ae = 0; ae < b.length; ae++) {
					var le = b[ae],
					    se = 0;if (a(le)) {
						if (T) {
							var ue = be(le).lastAnimationList[F.queue];if (!(S = ue && ue.tweens)) {
								console.error("VelocityJS: Attempting to reverse an animation on an element with no previous animation:", le);continue;
							}se |= 64 & ~(64 & ue._flags);
						}var ce = Object.assign({}, oe, { element: le, _flags: oe._flags | se });if (F._total++, k.push(ce), F.stagger) if (o(F.stagger)) {
							var fe = an(F.stagger, le, ae, b.length, b, "stagger");l(fe) && (ce.delay = F.delay + fe);
						} else ce.delay = F.delay + F.stagger * ae;F.drag && (ce.duration = F.duration - F.duration * Math.max(1 - (ae + 1) / b.length, .75)), V ? en(ce, V) : T ? ce.tweens = S : (ce.tweens = Object.create(null), Ue(ce, S)), Ee(le, ce, F.queue);
					}
				}!1 === ke.isTicking && vt(!1), k && v(b.velocity, "animations", k);
			}return b || O;
		}function an(e, t, n, r, i, o) {
			try {
				return e.call(t, n, r, i, o);
			} catch (e) {
				console.error("VelocityJS: Exception when calling '" + o + "' callback:", e);
			}
		}function ln(e, t) {
			try {
				v(e, (t ? "V" : "v") + "elocity", on);
			} catch (e) {
				console.warn("VelocityJS: Error when trying to add prototype.", e);
			}
		}var sn,
		    un = on;if (function (e) {
			e.Actions = h, e.Easings = S, e.Sequences = Te, e.State = ke, e.defaults = ve, e.patch = ln, e.debug = !1, e.mock = !1, e.version = "2.0.5", e.Velocity = on;
		}(sn || (sn = {})), function () {
			if (document.documentMode) return document.documentMode;for (var e = 7; e > 4; e--) {
				var t = document.createElement("div");if (t.innerHTML = "\x3c!--[if IE " + e + "]><span></span><![endif]--\x3e", t.getElementsByTagName("span").length) return t = null, e;
			}
		}() <= 8) throw new Error("VelocityJS cannot run on Internet Explorer 8 or earlier");if (window) {
			var cn = window.jQuery,
			    fn = window.Zepto;ln(window, !0), ln(Element && Element.prototype), ln(NodeList && NodeList.prototype), ln(HTMLCollection && HTMLCollection.prototype), ln(cn, !0), ln(cn && cn.fn), ln(fn, !0), ln(fn && fn.fn);
		}var dn = function dn(t) {
			if (sn.hasOwnProperty(t)) switch (void 0 === t ? "undefined" : e(t)) {case "number":case "boolean":
					v(un, t, { get: function get() {
							return sn[t];
						}, set: function set(e) {
							sn[t] = e;
						} }, !0);break;default:
					v(un, t, sn[t], !0);}
		};for (var vn in sn) {
			dn(vn);
		}return Object.freeze(un), un;
	});

	/***/
}]
/******/);