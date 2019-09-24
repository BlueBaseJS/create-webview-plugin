import 'jest';
import 'mocha';
import { BlueBase } from '@bluebase/core';
import Plugin from '../../../index';

describe('WebView', () => {
	require('../../../components/index');
	it('Plugin should be correctly registered', async () => {
		const BB = new BlueBase();
		const Plugins = Plugin();
		await BB.Plugins.register(Plugins);
		expect(BB.Plugins.has('nativeWebView')).toBeTruthy();
	});
});