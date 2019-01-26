import React, { Component } from 'react';
import {
    View,
    Text,
    ScrollView,
    ImageBackground,
    StyleSheet
} from 'react-native';
import { Constants } from 'expo';
import AppStyles from '../styles/AppStyles';
import * as Progress from 'react-native-progress';
import ProgressiveImage from 'react-native-image-progress';
import * as ExpoIcon from '@expo/vector-icons';
import ViewMoreText from 'react-native-view-more-text';
import Placeholder from 'rn-placeholder';
import TouchableBounce from 'react-native/Libraries/Components/Touchable/TouchableBounce';
import { responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions';
import { fetchDataHandler } from '../utils/Utils';
import Config from '../config/App.Config';

const { primaryThemeColor, primaryBackgroundColor, lightFontStyles, calculateFontSizeByPlatform } = AppStyles;
const { apiEndPoint, defaultImageUrl } = Config;

class BookDetailPlaceHolderComponent extends Component {

    componentDidMount = () => {

        this._fetchBookData();
    };

    _fetchBookData = async () => {

        //     let res = await fetchDataHandler(`${apiEndPoint}/yng_CwAAQBAJ`);

        //    alert(JSON.stringify(res));
    };

    _renderViewMoreLess = (onPress, viewText) => {

        return (

            <TouchableBounce onPress={() => onPress()} style={{ alignItems: 'center', width: responsiveWidth(20), borderRadius: 40, marginTop: responsiveHeight(2), marginBottom: responsiveHeight(1), marginLeft: responsiveWidth(66), paddingVertical: 4, backgroundColor: '#FFF' }}>
                <Text style={{ color: '#000', fontSize: calculateFontSizeByPlatform(2.00), ...lightFontStyles }}>{viewText}</Text>
            </TouchableBounce>

        );
    };

    render() {

        // let { bookId } = this.props.navigation.state.params;
        let { goBack } = this.props.navigation;

        return (

            // <ImageBackground blurRadius={40} source={{ uri: 'http://books.google.com/books/content?id=yng_CwAAQBAJ&printsec=frontcover&img=1&zoom=4&edge=curl&imgtk=AFLRE7111VdLaU3WMRKaP7yyA4juPZMQUC7OI1KS6-vq9Qc2L973KjgF4WQVO05d3nQ6Ra4LX-hBkLzFarDWsY3iSiupeCMFzDJpF9l-prvmZWK2-4a2H42HwPbt6_VT85f16VysYJ5v&source=gbs_api' }} style={[styles.container, { width: '100%', height: '100%' }]}>

            //     <ScrollView showsVerticalScrollIndicator={'false'} contentContainerStyle={{ borderRadius: 10, backgroundColor: 'rgba(0, 0, 0, 0.5)', padding: 4, paddingBottom: 6 }}>

            // <TouchableBounce onPress={() => goBack()} style={{ justifyContent: 'center', width: responsiveWidth(16), backgroundColor: 'transparent', marginTop: 6 }}>
            //     <ExpoIcon.AntDesign name={'left'} color={'#FFF'} size={40} />
            // </TouchableBounce>

            <View style={{ flex: 1, backgroundColor: 'transparent', padding: 4 }}>
                <View style={{
                    alignItems: 'center',
                    height: responsiveHeight(40),
                    width: '100%',
                    backgroundColor: 'transparent',
                    padding: 2, marginBottom: responsiveHeight(2)
                }}>

                    <ProgressiveImage
                        source={{ uri: 'http://books.google.com/books/content?id=yng_CwAAQBAJ&printsec=frontcover&img=1&zoom=4&edge=curl&imgtk=AFLRE7111VdLaU3WMRKaP7yyA4juPZMQUC7OI1KS6-vq9Qc2L973KjgF4WQVO05d3nQ6Ra4LX-hBkLzFarDWsY3iSiupeCMFzDJpF9l-prvmZWK2-4a2H42HwPbt6_VT85f16VysYJ5v&source=gbs_api' }}
                        style={{ borderRadius: 4, resizeMode: 'contain', backgroundColor: '#BBB', height: '100%', width: '56%' }}
                        imageStyle={{ borderRadius: 4 }}
                        indicator={Progress.Circle}
                        blurRadius={0}
                        indicatorProps={{

                            size: 40,
                            color: '#FFF'
                        }}
                    />
                </View>

                <View style={{ backgroundColor: 'transparent', padding: 1, marginVertical: 1 }}>
                    <Text numberOfLines={1} ellipsizeMode={'tail'} style={{ color: '#FFF', fontSize: calculateFontSizeByPlatform(4.20), ...lightFontStyles }}>Placeholder</Text>
                </View>

                <View style={{ backgroundColor: 'transparent', padding: 1, marginVertical: 1 }}>
                    <Text numberOfLines={1} ellipsizeMode={'tail'} style={{ color: '#FFF', fontSize: calculateFontSizeByPlatform(3.20), ...lightFontStyles }}>Mark Manson</Text>
                </View>

                <View style={{ backgroundColor: 'transparent', padding: 1, marginVertical: 1 }}>
                    <Text numberOfLines={1} ellipsizeMode={'tail'} style={{ color: '#FFF', fontSize: calculateFontSizeByPlatform(3.20), ...lightFontStyles }}>2014</Text>
                </View>

                <View style={{ backgroundColor: 'transparent', padding: 1, marginTop: responsiveHeight(2) }}>
                    <Text numberOfLines={1} ellipsizeMode={'tail'} style={{ color: '#CCC', fontSize: calculateFontSizeByPlatform(2.80), ...lightFontStyles }}>O'Reilly Media, Inc.</Text>
                </View>

                <View style={{ justifyContent: 'center', borderRadius: 10, backgroundColor: 'transparent', padding: 4, marginVertical: 2 }}>
                    <Text numberOfLines={1} ellipsizeMode={'tail'} style={{ color: '#FFF', fontSize: calculateFontSizeByPlatform(2.40), ...lightFontStyles }}>Philosophy / General</Text>
                </View>

                <View style={{ borderRadius: 10, backgroundColor: 'rgba(0, 0, 0, 0.20)', padding: 8, marginVertical: 8 }}>

                    <ViewMoreText
                        numberOfLines={6}
                        renderViewMore={(onPress) => this._renderViewMoreLess(onPress, 'View more')}
                        renderViewLess={(onPress) => this._renderViewMoreLess(onPress, 'View less')}
                        textStyle={{ textAlign: 'justify' }}>

                        <Text style={{ textAlign: 'justify', color: '#FFF', fontSize: calculateFontSizeByPlatform(2.80), ...lightFontStyles }}>
                            Most programming languages contain good and bad parts, but JavaScript has more than its share of the bad, having been developed and released in a hurry before it could be refined. This authoritative book scrapes away these bad features to reveal a subset of JavaScript that's more reliable, readable, and maintainable than the language as a whole—a subset you can use to create truly extensible and efficient code. Considered the JavaScript expert by many people in the development community, author Douglas Crockford identifies the abundance of good ideas that make JavaScript an outstanding object-oriented programming language-ideas such as functions, loose typing, dynamic objects, and an expressive object literal notation. Unfortunately, these good ideas are mixed in with bad and downright awful ideas, like a programming model based on global variables. When Java applets failed, JavaScript became the language of the Web by default, making its popularity almost completely independent of its qualities as a programming language. In JavaScript: The Good Parts, Crockford finally digs through the steaming pile of good intentions and blunders to give you a detailed look at all the genuinely elegant parts of JavaScript, including: Syntax Objects Functions Inheritance Arrays Regular expressions Methods Style Beautiful features The real beauty? As you move ahead with the subset of JavaScript that this book presents, you'll also sidestep the need to unlearn all the bad parts. Of course, if you want to find out more about the bad parts and how to use them badly, simply consult any other JavaScript book. With JavaScript: The Good Parts, you'll discover a beautiful, elegant, lightweight and highly expressive language that lets you create effective code, whether you're managing object libraries or just trying to get Ajax to run fast. If you develop sites or applications for the Web, this book is an absolute must.
                                </Text>

                    </ViewMoreText>

                </View>

                <TouchableBounce onPress={() => undefined} style={{ backgroundColor: 'rgba(0, 0, 0, 0.4)', alignItems: 'center', justifyContent: 'center', padding: 4, borderRadius: 100, marginTop: 8 }}>
                    <ExpoIcon.Ionicons name={'ios-cart'} size={calculateFontSizeByPlatform(4.00)} color={'#FFF'} />
                </TouchableBounce>

                <TouchableBounce onPress={() => undefined} style={{ backgroundColor: 'rgba(0, 0, 0, 0.4)', alignItems: 'center', justifyContent: 'center', padding: 4, borderRadius: 100, marginTop: 8 }}>
                    <ExpoIcon.Ionicons name={'ios-book'} size={calculateFontSizeByPlatform(4.00)} color={'#FFF'} />
                </TouchableBounce>

            </View>
            //     {/* </ScrollView>

            // </ImageBackground> */}
        );
    };
};

export default BookDetailPlaceHolderComponent;