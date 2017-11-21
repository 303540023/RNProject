import {
  StackNavigator,
} from 'react-navigation';

import ShopScreen from './view_stack/ShopScreen';

const Shop = StackNavigator({
  Shop: {
    screen: ShopScreen,
    navigationOptions: {
      title: 'ShopScreen',
    }
  }
});


export default Shop;
