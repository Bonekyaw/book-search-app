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
import TouchableBounce from 'react-native/Libraries/Components/Touchable/TouchableBounce';
import { responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions';
import { fetchDataHandler } from '../utils/Utils';
import Config from '../config/App.Config';
import BookDetailComponent from '../components/BookDetailComponent';
import BookDetailPlaceHolderComponent from '../components/BookDetailPlaceHolderComponent';

const { primaryThemeColor, primaryBackgroundColor, lightFontStyles, calculateFontSizeByPlatform } = AppStyles;
const { apiEndPoint, defaultImageUrl } = Config;

class BookDetailScreen extends Component {

    constructor(props) {

        super(props);
        this.state = {

            isDataFetched: false,
            bookData: {}
        };
    };

    componentDidMount = () => {

        this._fetchBookData();
    };

    _fetchBookData = async () => {

        
        let { bookDetails } = this.props.navigation.state.params;

        let { volumeInfo: { imageLinks: { medium, large }, infoLink },
              accessInfo: { webReaderLink } } = await fetchDataHandler(`${apiEndPoint}/${bookDetails.bookId}`);

        let bookData = {

            ...bookDetails,
            images: { medium: medium ? medium : null, large: large ? large : null },
            infoLink,
            webReaderLink
        };

        setTimeout(() => { this.setState({ isDataFetched: true, bookData }); }, 1000, this);
        // alert(JSON.stringify(bookData));
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
        let { isDataFetched, bookData } = this.state;
        let { goBack } = this.props.navigation;

        return (



                    <React.Fragment>
                        {
                            isDataFetched ? (
                                
                                <BookDetailComponent bookData={bookData} {...this.props} />
                                
                                ) : (
                                
                                <BookDetailPlaceHolderComponent {...this.props} />
                            )
                        }
                    </React.Fragment>

        );
    };
};

const styles = StyleSheet.create({

    container: {

        flex: 1,
        paddingHorizontal: 8,
        paddingTop: Constants.statusBarHeight,
        backgroundColor: primaryBackgroundColor
    }
});

export default BookDetailScreen;