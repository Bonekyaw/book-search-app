import React, { Component } from 'react';
import {
    View,
    Text,
    ScrollView,
    ImageBackground,
    Platform,
    StyleSheet
} from 'react-native';
import { Constants, WebBrowser } from 'expo';
import AppStyles from '../styles/AppStyles';
import * as Progress from 'react-native-progress';
import ProgressiveImage from 'react-native-image-progress';
import * as ExpoIcon from '@expo/vector-icons';
import ViewMoreText from 'react-native-view-more-text';
import TouchableBounce from 'react-native/Libraries/Components/Touchable/TouchableBounce';
import { responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions';;

const { primaryBackgroundColor,
        placeholderColor, statusBarHeight,
        lightFontStyles, calculateFontSizeByPlatform } = AppStyles;

class BookDetailComponent extends Component {


    _openLinkToBook = async (linkType) => {

        let { bookData } = this.props;

        await WebBrowser.openBrowserAsync(bookData[linkType]);
    };

    _renderViewMoreLess = (onPress, viewText) => {

        return (

            <TouchableBounce onPress={() => onPress()} style={{ alignItems: 'center', width: responsiveWidth(20), borderRadius: 40, marginTop: responsiveHeight(2), marginBottom: responsiveHeight(1), marginLeft: responsiveWidth(66), paddingVertical: 4, backgroundColor: '#FFF' }}>
                <Text style={{ color: '#000', fontSize: calculateFontSizeByPlatform(2.00), ...lightFontStyles }}>{viewText}</Text>
            </TouchableBounce>

        );
    };

    render() {

        let { bookData: { thumbnail, title, authors, publishedDate, publisher, 
                          categories, description, images: { medium, large }}} = this.props;

        let { goBack } = this.props.navigation;

        return (

            <ImageBackground blurRadius={40} source={{ uri: large === null ? thumbnail : large }} style={[styles.container, { width: '100%', height: '100%' }]}>

                <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ borderRadius: 10, backgroundColor: 'rgba(0, 0, 0, 0.5)', padding: 4, paddingBottom: 6 }}>

                    <TouchableBounce onPress={() => goBack()} style={{ justifyContent: 'center', width: responsiveWidth(16), backgroundColor: 'transparent', marginTop: 6 }}>
                        <ExpoIcon.AntDesign name={'left'} color={'#FFF'} size={40} />
                    </TouchableBounce>

                    <View style={{ flex: 1, backgroundColor: 'transparent', padding: 4 }}>

                        <View style={{
                            alignItems: 'center',
                            height: responsiveHeight(40),
                            width: '100%',
                            backgroundColor: 'transparent',
                            padding: 2, marginBottom: responsiveHeight(2)
                        }}>

                            <ProgressiveImage
                                source={{ uri: medium === null ? thumbnail : medium }}
                                style={{ borderRadius: 4, resizeMode: 'contain', backgroundColor: placeholderColor, height: '100%', width: '56%' }}
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
                            <Text numberOfLines={1} ellipsizeMode={'tail'} style={{ color: '#FFF', fontSize: calculateFontSizeByPlatform(4.20), ...lightFontStyles }}>{title}</Text>
                        </View>

                        <View style={{ backgroundColor: 'transparent', padding: 1, marginVertical: 1 }}>
                            <Text numberOfLines={1} ellipsizeMode={'tail'} style={{ color: '#FFF', fontSize: calculateFontSizeByPlatform(3.20), ...lightFontStyles }}>{authors}</Text>
                        </View>

                        <View style={{ backgroundColor: 'transparent', padding: 1, marginVertical: 1 }}>
                            <Text numberOfLines={1} ellipsizeMode={'tail'} style={{ color: '#FFF', fontSize: calculateFontSizeByPlatform(3.20), ...lightFontStyles }}>{publishedDate}</Text>
                        </View>

                        <View style={{ backgroundColor: 'transparent', padding: 1, marginTop: responsiveHeight(2) }}>
                            <Text numberOfLines={1} ellipsizeMode={'tail'} style={{ color: '#CCC', fontSize: calculateFontSizeByPlatform(2.80), ...lightFontStyles }}>{publisher}</Text>
                        </View>

                        <View style={{ justifyContent: 'center', borderRadius: 10, backgroundColor: 'transparent', padding: 1, marginVertical: 2 }}>
                            <Text numberOfLines={1} ellipsizeMode={'tail'} style={{ color: '#FFF', fontSize: calculateFontSizeByPlatform(2.40), ...lightFontStyles }}>{categories}</Text>
                        </View>

                        <View style={{ borderRadius: 10, backgroundColor: 'rgba(0, 0, 0, 0.20)', padding: 8, marginVertical: 8 }}>

                            <ViewMoreText
                                numberOfLines={6}
                                renderViewMore={(onPress) => this._renderViewMoreLess(onPress, 'View more')}
                                renderViewLess={(onPress) => this._renderViewMoreLess(onPress, 'View less')}
                                textStyle={{ textAlign: 'justify' }}>

                                <Text style={{ textAlign: 'justify', color: '#FFF', fontSize: calculateFontSizeByPlatform(2.80), ...lightFontStyles }}>
                                    {description}
                                </Text>

                            </ViewMoreText>

                        </View>

                        <TouchableBounce onPress={() => this._openLinkToBook('webReaderLink')} style={{ backgroundColor: 'rgba(0, 0, 0, 0.4)', alignItems: 'center', justifyContent: 'center', padding: 4, borderRadius: 100, marginTop: 8 }}>
                            <ExpoIcon.Ionicons name={'ios-book'} size={calculateFontSizeByPlatform(4.00)} color={'#FFF'} />
                        </TouchableBounce>

                        <TouchableBounce onPress={() => this._openLinkToBook('infoLink')} style={{ backgroundColor: 'rgba(0, 0, 0, 0.4)', alignItems: 'center', justifyContent: 'center', padding: 4, borderRadius: 100, marginTop: 8 }}>
                            <ExpoIcon.Ionicons name={'ios-cart'} size={calculateFontSizeByPlatform(4.00)} color={'#FFF'} />
                        </TouchableBounce>
                        
                    </View>

                  </ScrollView>

             </ImageBackground> 
        );
    };
};

const styles = StyleSheet.create({

    container: {

        flex: 1,
        paddingHorizontal: 8,
        paddingTop: statusBarHeight,
        backgroundColor: primaryBackgroundColor
    }
});

export default BookDetailComponent;