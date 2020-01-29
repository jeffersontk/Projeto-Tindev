import React from 'react';
import { YellowBox } from 'react-native'

YellowBox.ignoreWarnings([
  'unrecognized webSocket'
])

import Routes from './src/routes'

export default function App() {
  return (
    <Routes />
  );
}