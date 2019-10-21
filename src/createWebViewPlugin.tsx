import { Plugin, PluginInput, createPlugin } from '@bluebase/core';
import { WebView, WebViewProps } from 'react-native-webview';

export interface WebViewPluginInput extends Partial<Plugin> {
	/** Name of the Custom WebView component to be registered */
	componentName: string;

	/** WebView props */
	webViewProps: WebViewProps;
}

export const createWebViewPlugin = ({
	componentName,
	webViewProps,
	...plugin
}: WebViewPluginInput): PluginInput =>
	createPlugin({
		...plugin,
		components: {
			[componentName]: (props: WebViewProps) => <WebView {...webViewProps} {...props} />,
			...plugin.components,
		},
	});
