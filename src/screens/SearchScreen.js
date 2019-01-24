import React, { Component } from 'react';
import { 
    View,
    Text,
    Platform,
    StatusBar,
    StyleSheet
} from 'react-native';
import { SearchBar } from 'react-native-elements';
import AppStyles from '../styles/AppStyles';
import * as ExpoIcon from '@expo/vector-icons';
import TouchableBounce from 'react-native/Libraries/Components/Touchable/TouchableBounce';
import { DangerZone } from 'expo';
import { responsiveFontSize, responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions';
const { primaryBackgroundColor, lightFontStyles, calculateFontSizeByPlatform } = AppStyles;
const { Lottie } = DangerZone;
class SearchScreen extends Component {

    constructor(props) {

        super(props);
        this.state = {

            searchQuery: '', 
            animation: null
        };
    };


    componentWillMount() {
        this._playAnimation();
    }

    _playAnimation = () => {
        if (!this.state.animation) {
            this._loadAnimationAsync();
        } else {
            this.animation.reset();
            this.animation.play();
        }
    };

    _loadAnimationAsync = async () => {
        let result = await fetch(
            'https://assets.lottiefiles.com/datafiles/kdNSsX7MXeXXT1u/data.json'
        )
            .then(data => {
                return data.json();
            })
            .catch(error => {
                console.error(error);
            });
        this.setState({ animation: result }, this._playAnimation);
    };


    render() {

        return (
            <View style={styles.container}>
                <StatusBar barStyle={'light-content'} animated />

                <View style={{ backgroundColor: 'transparent', margin: responsiveHeight(0), height: responsiveHeight(45), width: responsiveWidth(100) }}>
                    {
                        this.state.animation &&
                        <Lottie
                            ref={animation => {
                                this.animation = animation;
                            }}
                            style={{
                                width: responsiveHeight(60),
                                height: responsiveHeight(60),
                                backgroundColor: primaryBackgroundColor,
                            }}
                            source={this.state.animation}
                        />
                    }
                </View>
                <View style={{ alignItems: 'center', justifyContent: 'space-around', backgroundColor: 'transparent', padding: 4 }}>
                    <SearchBar
                        round
                        noIcon
                        platform={'ios'}
                        value={this.state.searchQuery}
                        onChangeText={(searchQuery) => this.setState({ searchQuery })}
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

                        <TouchableBounce style={{ backgroundColor: 'tomato', alignItems: 'center', justifyContent: 'center', padding: 8, borderRadius: 100, marginTop: responsiveHeight(2), height: responsiveHeight(8), width: responsiveWidth(40) }} onPress={() => alert('Hello')}>
                            <ExpoIcon.Ionicons name={'ios-search'} size={calculateFontSizeByPlatform(4.40)} color={'#FFF'} />
                        </TouchableBounce>

                        </View> 
                </View>
        );
    };
};

const styles = StyleSheet.create({

    container: {

        flex: 1,
        backgroundColor: primaryBackgroundColor,
        paddingTop: responsiveHeight(8),
        alignItems: 'center'
    }
});

export default SearchScreen;