import { WebView } from './components/ReactNativeWebView';
import { createPlugin } from '@bluebase/core';

export default () => {
	return createPlugin({
		components: {
			WebView: WebView,
		},
		description: 'A BlueBase plugin boilerplate!',
		key: 'nativeWebView',
		name: 'nativeWebView',
		version: '1.0.0',
	});
};
