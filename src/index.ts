import { createPlugin } from '@bluebase/core';
import {WebView} from './components/ReactNativeWebView'

export default createPlugin({

	key: 'native-web-view',
	name: 'nativeWebView',

	components: {
		WebView:WebView,
	},

	
});