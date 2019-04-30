
import React from 'react';
import storiesOf from '@bluebase/storybook-addon';
import { WebView } from 'react-native-webview';


storiesOf('BlueBase', module)
	.add('Web view', () => (
        <WebView source={{ uri: 'https://facebook.github.io/react-native/' }} />

	));