import React from 'react';
import { View, Text } from 'react-native';
import AppStyles from '../styles/AppStyles';
import * as Progress from 'react-native-progress';
import ProgressiveImage from 'react-native-image-progress';
import { touchableButtonHandler } from '../utils/Utils';
import Placeholder from 'rn-placeholder';
import TouchableBounce from 'react-native/Libraries/Components/Touchable/TouchableBounce';
import { responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions';

const { primaryThemeColor,
        primaryBackgroundColor,
        lightFontStyles,
        cardBackgroundColor,
        placeholderColor,
        calculateFontSizeByPlatform } = AppStyles;

const BookCardPlaceHolderComponent = (props) => {

    return (
        <TouchableBounce style={{ flexDirection: 'row', width: responsiveWidth(95), padding: 6, marginVertical: 6, borderRadius: 4, backgroundColor: cardBackgroundColor }}>

            <View style={{
                flex: 1,
                height: responsiveHeight(16),
                width: responsiveWidth(16),
                backgroundColor: 'transparent',
                padding: 2,
            }}>

                <Placeholder.Box
                    height={'100%'}
                    width={'100%'}
                    radius={5}
                    color={placeholderColor}
                    onReady={false}
                    animate={'fade'}
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

                    <Placeholder.Box
                        height={24}
                        width={'100%'}
                        radius={5}
                        color={placeholderColor}
                        onReady={false}
                        animate={'fade'}
                    />

                </View>

                <View style={{

                    padding: 2,
                    marginTop: responsiveHeight(5),
                    marginVertical: 2,
                    backgroundColor: 'transparent'
                }}>

                    <Placeholder.Line
                        hasRadius
                        color={placeholderColor}
                        animate={'fade'}
                        width={'70%'}
                        onReady={false}
                    />

                </View>

                <View style={{

                    padding: 2,
                    marginTop: 2,
                    backgroundColor: 'transparent'
                }}>

                    <Placeholder.Line
                        hasRadius
                        color={placeholderColor}
                        animate={'fade'}
                        width={'50%'}
                        onReady={false}
                    />

                </View>

                {/* <View style={{

                    padding: 2,
                    marginTop: 2,
                    backgroundColor: 'transparent'
                }}>

                    <Placeholder.Line
                        hasRadius
                        color={placeholderColor}
                        animate={'fade'}
                        width={'80%'}
                        onReady={false}
                    />

                </View> */}

            </View>

        </TouchableBounce>
    );
};

export default BookCardPlaceHolderComponent;