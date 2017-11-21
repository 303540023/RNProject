import {
  StackNavigator,
} from 'react-navigation';

import ProfileScreen from './view_stack/ProfileScreen';
import MainScreen from './view_stack/MainScreen';

const App = StackNavigator({
  Main: {
  	screen: MainScreen,
  	navigationOptions: {
    	title: 'Welcome',
    }
  },
  Profile: {
  	screen: ProfileScreen,
	navigationOptions: {
    	title: 'Profile',
    }
  },
});


export default App;
