import React, { Component } from 'react';
import { 
    View,
    Platform,
    StatusBar,
    KeyboardAvoidingView,
    NetInfo,
    StyleSheet
} from 'react-native';
import { SearchBar } from 'react-native-elements';
import AppStyles from '../styles/AppStyles';
import * as ExpoIcon from '@expo/vector-icons';
import DropdownAlert from 'react-native-dropdownalert';
import TouchableBounce from 'react-native/Libraries/Components/Touchable/TouchableBounce';
import { touchableButtonHandler } from '../utils/Utils';
import { responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions';
import AppConfig from '../config/App.Config';
import LottieAnimationComponent from '../components/LottieAnimationComponent';

const { primaryThemeColor, primaryBackgroundColor, lightFontStyles, calculateFontSizeByPlatform } = AppStyles;
const { lottieAnimationSources: { bookAnimation } } = AppConfig;

class SearchScreen extends Component {

    constructor(props) {

        super(props);
        this.state = {

            searchQuery: ''
        };
    };

    _handleSearch = (searchText) => this.setState({ searchQuery: searchText });

    _searchHandler = async () => {

        let { navigation } = this.props;
        let { searchQuery } = this.state;
        let { type } = await NetInfo.getConnectionInfo();
        
        if(searchQuery === '') {
            
            this.dropdown.alertWithType('info', 'Invalid', 'Cannot search for empty query');
 
            return;
        }

        const navigationParams = {

            internetConnectivity: !(type === 'none'),
            searchQuery: encodeURI(searchQuery)
        };

        navigation.navigate('ResultScreen', navigationParams);
    };

    render() {

        return (
            <View style={styles.container}>

                <StatusBar barStyle={'light-content'} animated />

                <KeyboardAvoidingView enabled behavior={'position'}>

                    {/* <View style={{ alignItems: 'center', backgroundColor: 'transparent', margin: responsiveHeight(0), height: responsiveHeight(45), width: responsiveWidth(100) }}>
                        
                            <Lottie
                                loop
                                autoPlay
                                source={bookAnimation}
                                ref={animation => { this.animation = animation; }}
                                style={{

                                    marginLeft: responsiveWidth(4),
                                    width: responsiveHeight(60),
                                    height: responsiveHeight(60),
                                    backgroundColor: primaryBackgroundColor,
                                }}
                            />

                        
                    </View> */}

                    <LottieAnimationComponent animationSource={bookAnimation} />

                    <View style={{ alignItems: 'center', justifyContent: 'space-around', backgroundColor: 'transparent', padding: 4 }}>

                        <SearchBar
                            round
                            noIcon
                            platform={'ios'}
                            value={this.state.searchQuery}
                            onChangeText={this._handleSearch}
                            cancelButtonTitle={'cancel'}
                            clearIcon={ this.state.searchQuery === '' ? null : { name: 'cancel', color: '#FFF', style: { fontSize: 24, marginTop: Platform.OS === 'ios' ? responsiveHeight(1.2) : responsiveHeight(0.8), marginRight: responsiveWidth(2) } }}
                            cancelButtonTitle={'Cancel'}
                            containerStyle={{

                                borderWidth: 0,
                                justifyContent: 'center',
                                borderTopColor: 'transparent',
                                width: responsiveWidth(95),
                                borderBottomColor: 'rgba(0, 0, 0, 0.05)',
                                backgroundColor: 'transparent',
                            }}
                            inputStyle={{

                                color: '#FFF',
                                alignItems: 'center',
                                justifyContent: 'center',
                                borderRadius: 100,
                                ...lightFontStyles,
                                padding: Platform.OS === 'ios' ? responsiveHeight(1.00) : 0,
                                paddingRight: responsiveWidth(16),
                                paddingLeft: responsiveWidth(6),
                                fontSize: calculateFontSizeByPlatform(3.60),
                                backgroundColor: '#484848',
                                height: Platform.OS === 'ios' ? responsiveHeight(8) : responsiveHeight(8)
                            }}
                            placeholder={'Search Books...'} />

                            <TouchableBounce onPress={() => touchableButtonHandler(this._searchHandler)} style={{ backgroundColor: primaryThemeColor, alignItems: 'center', justifyContent: 'center', padding: 8, borderRadius: 100, marginTop: responsiveHeight(2), height: responsiveHeight(7.5), width: responsiveWidth(40) }}>
                                <ExpoIcon.Ionicons name={'ios-search'} size={calculateFontSizeByPlatform(5.00)} color={'#FFF'} />
                            </TouchableBounce>

                        </View>
                    </KeyboardAvoidingView>

                <DropdownAlert
                    closeInterval={1000} ref={ref => this.dropdown = ref}
                    inactiveStatusBarStyle={'light-content'}
                    defaultContainer={{ padding: 8, flexDirection: 'row', marginTop: Platform.OS === 'ios' ? 0 : Constants.statusBarHeight }}
                    titleStyle={{ fontSize: 20, textAlign: 'left', color: 'white', fontFamily: 'Airbnb-Cereal', backgroundColor: 'transparent' }}
                    messageStyle={{ fontSize: 16, textAlign: 'left', color: 'white', fontFamily: 'Airbnb-Cereal', backgroundColor: 'transparent' }} />
            </View>
        );
    };
};

const styles = StyleSheet.create({

    container: {

        flex: 1,
        backgroundColor: primaryBackgroundColor,
        paddingTop: responsiveHeight(4),
        alignItems: 'center'
    }
});

export default SearchScreen;