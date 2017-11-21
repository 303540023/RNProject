import Home from './tab_screen/Home';
import Mine from './tab_screen/Mine';
import Shop from './tab_screen/Shop';

import {
  TabNavigator,
} from 'react-navigation';

const MyApp = TabNavigator({
  Home: {
    screen: Home,
    navigationOptions: {
        tabBarLabel: '首页',
        tabBarIcon: ({ tintColor, focused }) => (
          <Icon
            name='whatshot'
            size={30}
            type="MaterialIcons"
            color={tintColor}
          />
        ),
      }
  },
  Shop: {
    screen: Shop,
    navigationOptions: {
        tabBarLabel: '商城',
        headerTitle : 'Shop',
        headerTintColor: 'black',
        tabBarIcon: ({ tintColor, focused }) => (
          <Icon
            name='whatshot'
            size={30}
            type="MaterialIcons"
            color={tintColor}
          />
        ),
      }
  },
  Mine: {
    screen: Mine,
    navigationOptions: {
        tabBarLabel: '我的',
        tabBarIcon: ({ tintColor, focused }) => (
          <Icon
            name='whatshot'
            size={30}
            type="MaterialIcons"
            color={tintColor}
          />
        ),
      }
  },
}, {
  tabBarPosition: 'bottom',
  animationEnabled: true,
  showIcon: true,
  tabBarOptions: {
    activeTintColor: '#e91e63',
  },
});

export default MyApp;