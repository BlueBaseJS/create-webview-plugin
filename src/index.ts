import { createPlugin } from '@bluebase/core';
import WebViewComp from './components/ReactNativeWebView';

export default () => {
	return createPlugin({
		description: 'A BlueBase plugin boilerplate!',
		key: 'nativeWebView',
		name: 'nativeWebView',
		version: '1.0.0',

		components: {
			WebView: WebViewComp,
		},
	});
}