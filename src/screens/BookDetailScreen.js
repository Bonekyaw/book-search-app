import React, { Component } from 'react';
import { 
    View,
    Text,
    StyleSheet
} from 'react-native';
import AppStyles from '../styles/AppStyles';
import TouchableBounce from 'react-native/Libraries/Components/Touchable/TouchableBounce';
import { responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions';
import { fetchDataHandler } from '../utils/Utils';
import Config from '../config/App.Config';

const { primaryThemeColor, primaryBackgroundColor, lightFontStyles, calculateFontSizeByPlatform } = AppStyles;
const { apiEndPoint, defaultImageUrl } = Config;

class BookDetailScreen extends Component {

    componentDidMount = () => {

        this._fetchBookData();
    };

    _fetchBookData = async () => {

    //     let res = await fetchDataHandler(`${apiEndPoint}/yng_CwAAQBAJ`);

    //    alert(JSON.stringify(res));
    };

    render() {

        // let { bookId } = this.props.navigation.state.params;

        return (
            <View style={styles.container}>
                <Text>xyz</Text>
            </View>
        );
    };
};

const styles = StyleSheet.create({

    container: {

        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});

export default BookDetailScreen;