var versionCoef = 1000 * 30;
var version = Math.round(new Date().getTime() / versionCoef) * versionCoef;
var versionStamp = `?version=${version}`;

export var init = (ns, oc, config) => {
	return {
		prod: {
			$Http: {
				baseUrl: config.$Protocol + '//www.example.com/api',
				timeout: 7000,
				repeatRequest: 1,
				ttl: 0,
				accept: 'application/json',
				cachePrefix: 'http.',
				cachePrefixPromise: 'http.promise.',
				language: config.$Language
			},
			$Cache: {
				enabled: true,
				ttl: 60000
			},
			$Page:{
				$Render: {
					scripts: [
						'/static/js/locale/' + config.$Language + '.js' + versionStamp,
						'/static/js/app.min.js' + versionStamp
					],
					documentView: 'App.Component.Document.View',
					masterElementId: 'page',
					version: version
				}
			}
		},

		test: {
			$Http: {
				baseUrl: config.$Protocol + '//example.test/api',
					timeout: 5000
			}
		},

		dev: {
			$Http: {
				baseUrl: config.$Protocol + '//localhost:3001/api',
				timeout: 2000
			},
			$Page:{
				$Render: {
					scripts: [
						'/static/js/polyfill.js' + versionStamp,
						'/static/js/shim.js' + versionStamp,
						'/static/js/vendor.client.js' + versionStamp,
						'/static/js/locale/' + config.$Language + '.js' + versionStamp,
						'/static/js/app.client.js' + versionStamp
					]
				}
			}
		}
	};
};
