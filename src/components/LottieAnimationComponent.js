import React, { Component } from 'react';
import { 
    View
} from 'react-native';
import { DangerZone } from 'expo';
import AppStyles from '../styles/AppStyles';
import { responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions';

const { Lottie } = DangerZone;
const { primaryBackgroundColor } = AppStyles;

class LottieAnimationComponent extends Component {

    componentWillMount = () => { setTimeout(() => { this.animation.play(); }, 100, this); };

    render() {

        let { animationSource, style } = this.props;

        return (
            <View style={{ alignItems: 'center', backgroundColor: 'transparent', margin: responsiveHeight(0), height: responsiveHeight(45), width: responsiveWidth(100) }}>

                <Lottie
                    loop
                    autoPlay
                    source={animationSource}
                    ref={animation => { this.animation = animation; }}
                    style={{

                        marginLeft: responsiveWidth(4),
                        width: responsiveHeight(60),
                        height: responsiveHeight(60), ...style,
                        backgroundColor: primaryBackgroundColor,
                    }}
                />

            </View>
        );
    };
};

export default LottieAnimationComponent;