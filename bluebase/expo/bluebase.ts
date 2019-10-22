import { BootOptions, getComponent } from '@bluebase/core';

import WebViewPlugin from '../../src';
import commonBootOptions from '../common/bluebase';
import deepmerge from 'deepmerge';

// import { MyWebView } from '../../src/components/ReactNativeWebView'
// const assetsPath = `../../assets/expo`;

/**
 * Add your platform specific configs here.
 * We keep all the universal (cross platform) configs in
 * the common folder, and extend them here.
 */

// const data = WebViewPlugin({
// 	componentName: 'customWebView', webViewProps:
// 		{ source: { uri: 'https://facebook.com' } }
// });
// const webView = getComponent('customWebView');
const bootOptions: Partial<BootOptions> = {
	// plugins: [data],

	// components: {
	// 	HomeScreen: webView
	// },
};

export default deepmerge(commonBootOptions, bootOptions);