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
import { responsiveFontSize, responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions';
const { primaryThemeColor, primaryBackgroundColor, lightFontStyles, calculateFontSizeByPlatform } = AppStyles;

class SearchScreen extends Component {

    constructor(props) {

        super(props);
        this.state = {

            searchQuery: ''
        };
    };

    render() {

        return (
            <View style={styles.container}>
                <StatusBar barStyle={'light-content'} animated />
                <View style={{ alignItems: 'center', justifyContent: 'space-around', backgroundColor: 'transparent', padding: 4, flexDirection: 'row' }}>
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
                        width: responsiveWidth(75),
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

                    <TouchableBounce style={{ backgroundColor: 'red', alignItems: 'center', justifyContent: 'center', padding: 8, borderRadius: 100, height: responsiveHeight(8), width: responsiveWidth(20) }} onPress={() => alert('Hello')}>
                        <ExpoIcon.Ionicons name={'ios-search'} size={32} color={'#FFF'} />
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
        // alignItems: 'center',
        justifyContent: 'center'
    }
});

export default SearchScreen;