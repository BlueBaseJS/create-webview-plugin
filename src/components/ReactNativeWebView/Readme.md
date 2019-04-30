# React Native WebView - a Modern, Cross-Platform WebView for React Native

[![star this repo](http://githubbadges.com/star.svg?user=react-native-community&repo=react-native-webview&style=flat)](https://github.com/react-native-community/react-native-webview) [![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square)](http://makeapullrequest.com) [![Known Vulnerabilities](https://snyk.io/test/github/react-native-community/react-native-webview/badge.svg?style=flat-square)](https://snyk.io/test/github/react-native-community/react-native-webview)![version](https://img.shields.io/npm/v/react-native-webview.svg)

**React Native WebView** is a modern, well-supported, and cross-platform WebView for React Native. It is intended to be a replacement for the built-in WebView


# React Native WebView Getting Started Guide

Here's how to get started quickly with the React Native WebView.

#### 1. Add react-native-webview to your dependencies

```
$ yarn add react-native-webview
```

#### 2. Link native dependencies

React Native modules that include native Objective-C, Swift, Java, or Kotlin code have to be "linked" so that the compiler knows to include them in the app.

This module does not require any extra step after running the link command 🎉
```
$ react-native link react-native-webview
```
For Android manual installation, please refer to [this article](https://engineering.brigad.co/demystifying-react-native-modules-linking-964399ec731b) where you can find detailed step on how to link any react-native project.

For iOS, while you can manually link the old way using [react-native own tutorial](https://facebook.github.io/react-native/docs/linking-libraries-ios), we find it easier to use cocoapods.
If you wish to use cocoapods and haven't set it up yet, please instead refer to [that article](https://engineering.brigad.co/demystifying-react-native-modules-linking-ae6c017a6b4a).

_NOTE: If you ever need to uninstall React Native WebView, run `react-native unlink react-native-webview` to unlink it._

#### 3. Import the webview into your component

```js
import React, { Component } from 'react';
import { WebView } from 'react-native-webview';

class MyWeb extends Component {
  render() {
    return (
      <WebView
        source={{uri: 'https://infinite.red'}}
        style={{marginTop: 20}}
      />
    );
  }
}
```

Minimal example with inline HTML:

```js
import React, { Component } from 'react';
import { WebView } from 'react-native-webview';

class MyInlineWeb extends Component {
  render() {
    return (
      <WebView
        originWhitelist={['*']}
        source={{ html: '<h1>Hello world</h1>' }}
      />
    );
  }
}
```

Next, check out the [API Reference](Reference.md) or [In-Depth Guide](Guide.md).
