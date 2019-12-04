const { defineInlineTest } = require('jscodeshift/src/testUtils');
const { getOptions } = require('../transformUtils/testUtils');
const transform = require('../import-v17');

describe('ima.core.utils.transform.import-v17', () => {
  defineInlineTest(
    transform,
    getOptions(),
    `
import Foo from 'bar';

export default class MyComponent extends AbstractComponent {
	render() {}
}
`,
    `
import Foo from 'bar';

export default class MyComponent extends AbstractComponent {
	render() {}
}
`,
    "Should not touch the code if it doesn't import ima."
  );

  defineInlineTest(
    transform,
    getOptions(),
    `
import Foo from 'bar';
import IMAComponent from 'ima/page/AbstractComponent';
import { defaultCssClasses } from 'ima/page/componentHelpers';
import * as ima from 'ima';

export default class MyComponent extends AbstractComponent {
	render() {}
}
`,
    `
import { AbstractComponent, defaultCssClasses } from '@ima/core';
import Foo from 'bar';
import * as ima from '@ima/core';

export default class MyComponent extends AbstractComponent {
	render() {}
}
`,
    'Should rename all ima imports to new namespaced version.'
  );
});
