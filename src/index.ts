import { WebView } from './components/ReactNativeWebView';
import { createPlugin } from '@bluebase/core';

export default createPlugin({
	description: 'A BlueBase plugin boilerplate!',
	key: 'nativeWebView',
	name: 'nativeWebView',
	version: '1.0.0',

	components: {
		WebView: WebView,
	},
});
