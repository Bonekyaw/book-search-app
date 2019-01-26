import { Platform } from 'react-native';
import { Constants } from 'expo';
import { responsiveFontSize } from 'react-native-responsive-dimensions';

const AppStyles = {

    primaryThemeColor: 'tomato',
    primaryBackgroundColor: '#202020',
    lightFontStyles: { fontFamily: 'Airbnb-Cereal' },
    cardBackgroundColor: '#252525',
    placeholderColor: '#444444',
    statusBarHeight: 1.25 * Constants.statusBarHeight,
    calculateFontSizeByPlatform: (size) => responsiveFontSize(size - (Platform.OS === 'ios' ? 0.4 : 0.6))
};

export default AppStyles;