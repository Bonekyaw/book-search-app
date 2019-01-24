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
import { responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions';

const { primaryThemeColor, primaryBackgroundColor, calculateFontSizeByPlatform } = AppStyles;

class ResultScreen extends Component {

    constructor(props) {

        super(props);

        this.state = {

            filterSearch: ''
        };
    };

    _handleSearch = (filterText) => this.setState({ filterSearch: filterText });

    render() {

        // let { searchQuery } = this.props.navigation.state.params;

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
                                    backgroundColor: primaryThemeColor,
                                    height: Platform.OS === 'ios' ? responsiveHeight(8) : responsiveHeight(8)
                                }}
                                placeholder={'Search...'} />
                        </View>
                    }

                    renderContent={

                        <View style={{ flex: 1, backgroundColor: '#FAFAFA', alignItems: 'center' }}>

                          <View style={{ width: responsiveWidth(95), padding: 4, backgroundColor: 'plum'  }}>
                          
                                <View style={{
                                    flex: 1,
                                    flexDirection: 'row',
                                    backgroundColor: 'blue',
                                    padding: 4
                                }}>
                                    <View style={{
                                        flex: 1,
                                        height: responsiveHeight(16),
                                        width: responsiveWidth(16),
                                        backgroundColor: 'red',
                                        padding: 4,
                                    }}>

                                        <ProgressiveImage
                                            source={{ uri: 'https://picsum.photos/200/300/?random' }}
                                            style={{ borderRadius: 8, resizeMode: 'contain', backgroundColor: 'tomato', height: '100%', width: '100%' }}
                                            imageStyle={{ borderRadius: 8 }}
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
                                        backgroundColor: 'green'
                                    }}>
                                        <View style={{
                                            // flex: 1,
                                            padding: 8,
                                            backgroundColor: 'yellow'}} />
                                       
                                    </View>
                                </View>
                          </View>
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