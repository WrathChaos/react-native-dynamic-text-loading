<img alt="React Native Dynamic Text Loading" src="https://github.com/WrathChaos/react-native-dynamic-text-loading/blob/master/assets/logo.png" width="1050"/>

Dynamically changes the text while loading screen for React Native. This is the loading like Heartstone and Discord's dynamically changes loading texts :)

[![npm version](https://img.shields.io/npm/v/react-native-dynamic-text-loading.svg)](https://www.npmjs.com/package/react-native-dynamic-text-loading)
[![npm](https://img.shields.io/npm/dt/react-native-dynamic-text-loading.svg)](https://www.npmjs.com/package/react-native-dynamic-text-loading)
![Platform - Android and iOS](https://img.shields.io/badge/platform-Android%20%7C%20iOS-blue.svg)
[![License: MIT](https://img.shields.io/badge/License-MIT-green.svg)](https://opensource.org/licenses/MIT)
[![styled with prettier](https://img.shields.io/badge/styled_with-prettier-ff69b4.svg)](https://github.com/prettier/prettier)

<p align="center">
<img alt="React Native Dynamic Text Loading" src="https://github.com/WrathChaos/react-native-dynamic-text-loading/blob/master/assets/Screenshots/React-Native-Dynamic-Text-Loading.gif" width="49.7%" />
</p>


## Installation

Add the dependency:

### React Native:

```ruby
npm i react-native-dynamic-text-loading
```

## Peer Dependencies

###### IMPORTANT! You need install them.

```
"react": ">= 16.x.x",
"react-native": ">= 0.55.x",
"react-native-spinkit": ">= 1.3.0"
```

## Basic Usage

```js
import Loading from "react-native-dynamic-text-loading";

<Loading list={[
    "Assets are loading...",
    "Data is fetching...",
    "Running an algorithm..."]
}/>
```

## Configuration - Props
 
| Property         |  Type   |       Default        | Description                                                                                |
| ---------------- | :-----: | :------------------: | ------------------------------------------------------------------------------------------ |
| backgroundColor  |  color  | "rgba(0, 0, 0, 0.5)" | change the backdrop's color                                                                |
| type             | string  |  "FadingCircleAlt"   | change the type of spinner's icon                                                          |
| size             | number  |          50          | change the spinner's size                                                                  |
| color            |  color  |        white         | change the spinner's color                                                                 |
| spinnerStyle     |  style  |       default        | set your own style for spinner                                                             |
| spinnerIsVisible | boolean |         true         | change the visibility of spinner                                                           |
| textColor        |  color  |        white         | change the dynamic text's color                                                            |
| textStyle        |  style  |       default        | set your own style for text                                                                |
| numberOfLines    | number  |          2           | RECOMMENDED! Do NOT change the number of lines, users cannot read long texts below 1.5 sec |


## Author

FreakyCoder, kurayogun@gmail.com

## License

React Native Dynamic Text Loading Library is available under the MIT license. See the LICENSE file for more info.
