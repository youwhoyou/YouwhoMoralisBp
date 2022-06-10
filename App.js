import 'react-native-gesture-handler';
import {LogBox} from 'react-native';
import AppWithProviders from './app/AppWithProviders';

LogBox.ignoreLogs([
  'Require cycle:',
  "[react-native-gesture-handler] Seems like you're using an old API with gesture components, check out new Gestures system!",
  'Internal React error:',
]);

export default AppWithProviders;
