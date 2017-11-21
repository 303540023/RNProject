import {
  StackNavigator,
} from 'react-navigation';

import MineScreen from './view_stack/MineScreen';

const Mine = StackNavigator({
  Mine: {
    screen: MineScreen,
    navigationOptions: {
      title: 'MineScreen',
    }
  }
});


export default Mine;
