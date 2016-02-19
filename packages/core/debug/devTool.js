import ns from 'ima/namespace';

ns.namespace('Ima.Debug');

/**
 * DevTool
 *
 * @class DevTool
 * @namespace Ima.Debug
 * @module Ima
 * @submodule Ima.Debug
 */
export default class DevTool {

	/**
	 * @method constructor
	 * @constructor
	 * @param {Ima.Interface.PageManager} pageManager
	 * @param {Ima.Interface.PageStateManager} stateManager
	 * @param {Ima.Interface.Window} window
	 * @param {Ima.Interface.Dispatcher} dispatcher
	 * @param {Ima.Interface.EventBus} eventBus
	 */
	constructor(pageManager, stateManager, window, dispatcher, eventBus) {

		/**
		 * App page manager.
		 *
		 * @private
		 * @property _pageManager
		 * @type {Ima.Interface.PageManager}
		 */
		this._pageManager = pageManager;

		/**
		 * App state manager.
		 *
		 * @private
		 * @property _stateManager
		 * @type {Ima.Interface.PageStateManager}
		 */
		this._stateManager = stateManager;

		/**
		 * $IMA wrapper for window.
		 *
		 * @private
		 * @property _window
		 * @type {Ima.Interface.Window}
		 */
		this._window = window;

		/**
		 * $IMA dispatcher.
		 *
		 * @private
		 * @property _dispatcher
		 * @type {Ima.Interface.Dispatcher}
		 */
		this._dispatcher = dispatcher;

		/**
		 * $IMA eventBus
		 *
		 * @property _eventBus
		 * @type {Ima.Interface.EventBus}
		 */
		this._eventBus = eventBus;
	}

	/**
	 * Initialization Dev tool
	 *
	 * @method init
	 *
	 */
	init() {
		if ($Debug) {
			if (this._window.isClient()) {
				this._window.getWindow().$IMA.$DevTool = this;
			}

			let window = this._window.getWindow();
			this._window.bindEventListener(window, 'keydown', (e) => {
				if (e.altKey && e.keyCode === 83) { // Alt + S
					console.log(this._stateManager.getState());
				}
			});
		}
	}

	/**
	 * Set state to state manager.
	 *
	 * @method setState
	 * @param {Object<string, *>} statePatch
	 */
	setState(statePatch) {
		this._stateManager.setState(statePatch);
	}

	/**
	 * Returns current state of page.
	 *
	 * @method getState
	 * @return {Object<string, *>}
	 */
	getState() {
		return this._stateManager.getState();
	}

	/**
	 * Clear app source from page.
	 *
	 * @method clearAppSource
	 */
	clearAppSource() {
		this._pageManager.destroy();

		this._dispatcher.clear();
	}
}

ns.Ima.Debug.DevTool = DevTool;
