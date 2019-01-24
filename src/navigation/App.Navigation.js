import { createAppContainer, createStackNavigator } from 'react-navigation';
import SearchScreen from '../screens/SearchScreen';
import ResultScreen from '../screens/ResultScreen';
import BookDetailScreen from '../screens/BookDetailScreen';

const AppStackNavigator = createStackNavigator({

    // SearchScreen: { screen: SearchScreen },
    ResultScreen: { screen: ResultScreen },
    BookDetailScreen: { screen: BookDetailScreen }
}, { headerMode: 'none' });

const AppContainer = createAppContainer(AppStackNavigator);

export default AppContainer;