import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import Maps165758Navigator from '../features/Maps165758/navigator';
import Add-Item165757Navigator from '../features/Add-Item165757/navigator';
import Maps165753Navigator from '../features/Maps165753/navigator';
import UserProfile165749Navigator from '../features/UserProfile165749/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
Maps165758: { screen: Maps165758Navigator },
Add-Item165757: { screen: Add-Item165757Navigator },
Maps165753: { screen: Maps165753Navigator },
UserProfile165749: { screen: UserProfile165749Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
