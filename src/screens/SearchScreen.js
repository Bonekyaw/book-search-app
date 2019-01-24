import React, { Component } from 'react';
import { 
    View,
    Text,
    Platform,
    StatusBar,
    KeyboardAvoidingView,
    StyleSheet
} from 'react-native';
import { DangerZone } from 'expo';
import { SearchBar } from 'react-native-elements';
import AppStyles from '../styles/AppStyles';
import * as ExpoIcon from '@expo/vector-icons';
import TouchableBounce from 'react-native/Libraries/Components/Touchable/TouchableBounce';
import { touchableButtonHandler } from '../utils/Utils';
import { responsiveFontSize, responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions';
import AppConfig from '../config/App.Config';

const { primaryBackgroundColor, lightFontStyles, calculateFontSizeByPlatform } = AppStyles;
const { lottieAnimationSources: { bookAnimation } } = AppConfig;
const { Lottie } = DangerZone;

class SearchScreen extends Component {

    constructor(props) {

        super(props);
        this.state = {

            searchQuery: 'subtle'
        };
    };

    _handleSearch = (searchText) => this.setState({ searchQuery: searchText });

    componentWillMount = () => { setTimeout(() => { this.animation.play(); }, 100, this); };

    // _playAnimation = () => {
    //     // if (!this.state.animation) {
    //     //     this._loadAnimationAsync();
    //     // } else {
    //         // this.animation.reset();
    //         setTimeout(() => { this.animation.play(); }, 100, this);
    //     // }
    // };

    // _loadAnimationAsync = async () => {
    //     let result = await fetch(
    //         'https://assets.lottiefiles.com/datafiles/kdNSsX7MXeXXT1u/data.json'
    //     )
    //         .then(data => {
    //             return data.json();
    //         })
    //         .catch(error => {
    //             console.error(error);
    //         });
    //     this.setState({ animation: result }, this._playAnimation);
    // };

    _searchHandler = () => {

        let { navigation } = this.props;
        let { searchQuery } = this.state;
        
        if(searchQuery === '') {
            
            alert('Null search Query');

            return;
        }

        const navigationParams = {

            internetConnectivity: true,
            searchQuery: encodeURI(searchQuery)
        };

        navigation.navigate('ResultScreen', navigationParams);
    };

    render() {

        return (
            <View style={styles.container}>

                <StatusBar barStyle={'light-content'} animated />

                <KeyboardAvoidingView enabled behavior={'position'}>
                    <View style={{ alignItems: 'center', backgroundColor: 'transparent', margin: responsiveHeight(0), height: responsiveHeight(45), width: responsiveWidth(100) }}>
                        
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
                        
                    </View>
                    <View style={{ alignItems: 'center', justifyContent: 'space-around', backgroundColor: 'transparent', padding: 4 }}>
                        <SearchBar
                            round
                            noIcon
                            platform={'ios'}
                            value={this.state.searchQuery}
                            onChangeText={this._handleSearch}
                            cancelButtonTitle={'cancel'}
                            clearIcon={ this.state.searchQuery === '' ? null : { name: 'cancel', color: '#FFF', style: { fontSize: 24, marginTop: Platform.OS === 'ios' ? responsiveHeight(1.2) : responsiveHeight(1.2), marginRight: responsiveWidth(2) } }}
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

                            <TouchableBounce onPress={() => touchableButtonHandler(this._searchHandler)} style={{ backgroundColor: 'tomato', alignItems: 'center', justifyContent: 'center', padding: 8, borderRadius: 100, marginTop: responsiveHeight(2), height: responsiveHeight(8), width: responsiveWidth(40) }}>
                                <ExpoIcon.Ionicons name={'ios-search'} size={calculateFontSizeByPlatform(4.40)} color={'#FFF'} />
                            </TouchableBounce>

                        </View>
                    </KeyboardAvoidingView>
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