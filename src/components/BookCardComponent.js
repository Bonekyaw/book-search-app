import React from 'react';
import { View, Text } from 'react-native';
import AppStyles from '../styles/AppStyles';
import * as Progress from 'react-native-progress';
import ProgressiveImage from 'react-native-image-progress';
import { touchableButtonHandler } from '../utils/Utils';
import TouchableBounce from 'react-native/Libraries/Components/Touchable/TouchableBounce';
import { responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions';

const { primaryThemeColor, primaryBackgroundColor, lightFontStyles, calculateFontSizeByPlatform } = AppStyles;

const BookCardComponent = (props) => {

    let { onPress } = props;

    return (
        <TouchableBounce onPress={() => touchableButtonHandler(onPress)} style={{ flexDirection: 'row', width: responsiveWidth(95), padding: 6, marginVertical: 6, borderRadius: 4, backgroundColor: '#333' }}>

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
    );
};

export default BookCardComponent;