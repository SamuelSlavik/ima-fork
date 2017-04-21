module.exports = (() => {

	let mainjs = ['./app/main.js'];

	let js = [
		'./app/!(assets|gulp)/**/!(*Spec).{js,jsx}'
	];

	let less = [
		'./app/assets/less/rem.less',
		'./app/assets/less/grid.less',
		'./app/assets/less/app.less',
		'./app/assets/less/reset.less',
		'./app/assets/less/setting.less',
		'./app/assets/less/base.less',
		'./app/assets/less/layout.less',
		'./app/component/**/*.less',
		'./app/page/**/*.less'
	];

	let languages = {
		en : [
			'./app/**/*EN.json'
		]
	};

	let vendors = {
		common: [
			'ima'
		],

		server: [
		],

		client: [
		],

		test:[
		]
	};

	let bundle = {
		js: [
			'./build/static/js/polyfill.js',
			'./build/static/js/shim.js',
			'./build/static/js/vendor.client.js',
			'./build/static/js/app.client.js',
			'./server/static/js/facebook.js'
		],
		css: [
			'./build/static/css/app.css'
		]
	};

	return {
		js,
		mainjs,
		vendors,
		less,
		languages,
		bundle
	};
})();
