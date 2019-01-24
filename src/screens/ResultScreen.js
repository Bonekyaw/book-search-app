import React, { Component } from 'react';
import { 
    View,
    Text,
    Platform,
    StyleSheet
} from 'react-native';
import { Constants } from 'expo';
import AppStyles from '../styles/AppStyles';
import { SearchBar } from 'react-native-elements';
import * as Progress from 'react-native-progress';
import Collapsible from 'react-native-collapsible-header';
import ProgressiveImage from 'react-native-image-progress';
import TouchableBounce from 'react-native/Libraries/Components/Touchable/TouchableBounce';
import { responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions';
import BookCardComponent from '../components/BookCardComponent';

const { primaryThemeColor, primaryBackgroundColor, lightFontStyles, calculateFontSizeByPlatform } = AppStyles;

class ResultScreen extends Component {

    constructor(props) {

        super(props);

        this.state = {

            isDataFetched: false,
            filterSearch: ''
        };
    };

    _handleSearch = (filterText) => this.setState({ filterSearch: filterText });

    render() {

        // let { searchQuery } = this.props.navigation.state.params;
        let { isDataFetched } = this.state;
        return (
            <View style={styles.container}>
                <Collapsible
                    backgroundColor={primaryBackgroundColor}
                    min={Constants.statusBarHeight}
                    max={Platform.OS === 'ios' ? responsiveHeight(10) : responsiveHeight(12)}
                    renderHeader={

                        <View style={{ flex: 1, backgroundColor: primaryBackgroundColor, flexDirection: 'row' }}>

                            <SearchBar
                                noIcon
                                lightTheme
                                platform={'ios'}
                                value={this.state.searchQuery}
                                onChangeText={this._handleSearch}
                                cancelButtonTitle={'cancel'}
                                clearIcon={{ name: 'cancel', color: '#FFF', style: { fontSize: 24, marginTop: Platform.OS === 'ios' ? responsiveHeight(0.80) : responsiveHeight(1.2) } }}
                                cancelButtonTitle={'Cancel'}
                                containerStyle={{

                                    borderWidth: 0,
                                    justifyContent: 'center',
                                    borderTopColor: 'transparent',
                                    width: responsiveWidth(100),
                                    borderBottomColor: 'rgba(0, 0, 0, 0.05)',
                                    backgroundColor: 'transparent',
                                }}
                                inputStyle={{

                                    color: '#FFF',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    fontFamily: 'Airbnb-Cereal',
                                    padding: Platform.OS === 'ios' ? responsiveHeight(0.80) : 0,
                                    fontSize: calculateFontSizeByPlatform(4.00),
                                    backgroundColor: '#333',
                                    height: Platform.OS === 'ios' ? responsiveHeight(8) : responsiveHeight(8)
                                }}
                                placeholder={'Search...'} />
                        </View>
                    }

                    renderContent={

                        <View style={{ backgroundColor: 'plum', paddingVertical: 3, alignItems: 'center' }}>
                            {
                                isDataFetched ? (

                                    <React.Fragment>
                                        <BookCardComponent onPress={() => alert('hello')} />
                                        <BookCardComponent onPress={() => alert('hello')} />
                                        <BookCardComponent onPress={() => alert('hello')} />
                                        <BookCardComponent onPress={() => alert('hello')} />
                                    </React.Fragment>
                                ) : (

                                        <TouchableBounce style={{ flexDirection: 'row', width: responsiveWidth(95), padding: 6, marginVertical: 6, borderRadius: 4, backgroundColor: '#333' }}>

                                            <View style={{
                                                flex: 1,
                                                height: responsiveHeight(16),
                                                width: responsiveWidth(16),
                                                backgroundColor: 'transparent',
                                                padding: 2,
                                            }}>

                                                <ProgressiveImage
                                                    source={{ uri: 'https://picsum.photos/200/300/?random' }}
                                                    style={{ borderRadius: 4, resizeMode: 'contain', backgroundColor: '#444', height: '100%', width: '100%' }}
                                                    imageStyle={{ borderRadius: 4 }}
                                                    indicator={Progress.Circle}
                                                    blurRadius={0}
                                                    indicatorProps={{

                                                        size: 28,
                                                        color: '#FFF'
                                                    }}
                                                />

                                            </View>

                                            <View style={{

                                                flex: 3,
                                                padding: 4,
                                                backgroundColor: 'transparent'
                                            }}>
                                                <View style={{

                                                    padding: 2,
                                                    marginBottom: 2,
                                                    backgroundColor: 'transparent'
                                                }}>

                                                    <Text numberOfLines={1} ellipsizeMode={'tail'} style={{ color: '#FFF', fontSize: calculateFontSizeByPlatform(3.00), ...lightFontStyles }}>JavaScript: The Good Parts JavaScript: The Good Parts</Text>

                                                </View>

                                                <View style={{

                                                    padding: 2,
                                                    marginTop: 12,
                                                    marginVertical: 2,
                                                    backgroundColor: 'transparent'
                                                }}>

                                                    <Text numberOfLines={1} ellipsizeMode={'tail'} style={{ color: '#FFF', fontSize: calculateFontSizeByPlatform(2.60), ...lightFontStyles }}>Douglas Crockford</Text>

                                                </View>

                                                <View style={{

                                                    padding: 2,
                                                    marginTop: 2,
                                                    backgroundColor: 'transparent'
                                                }}>

                                                    <Text numberOfLines={1} ellipsizeMode={'tail'} style={{ color: '#FFF', fontSize: calculateFontSizeByPlatform(2.60), ...lightFontStyles }}>O'Reilly Media, Inc.</Text>

                                                </View>

                                            </View>

                                        </TouchableBounce>
                                )
                            }
                            

                        </View>

                    } />
            </View>
        );
    };
};

const styles = StyleSheet.create({

    container: {

        flex: 1,
        backgroundColor: primaryBackgroundColor,
        // alignItems: 'center',
        // justifyContent: 'center'
    }
});

export default ResultScreen;