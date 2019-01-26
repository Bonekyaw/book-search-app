import React, { Component } from 'react';
import { 
    Text,
    StyleSheet
} from 'react-native';
import { Constants } from 'expo';
import AppStyles from '../styles/AppStyles';
import TouchableBounce from 'react-native/Libraries/Components/Touchable/TouchableBounce';
import { responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions';
import { fetchDataHandler } from '../utils/Utils';
import Config from '../config/App.Config';
import BookDetailComponent from '../components/BookDetailComponent';
import BookDetailPlaceHolderComponent from '../components/BookDetailPlaceHolderComponent';

const { primaryBackgroundColor, lightFontStyles, calculateFontSizeByPlatform } = AppStyles;
const { apiEndPoint } = Config;

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

    };

    _renderViewMoreLess = (onPress, viewText) => {

        return (

            <TouchableBounce onPress={() => onPress()} style={{ alignItems: 'center', width: responsiveWidth(20), borderRadius: 40, marginTop: responsiveHeight(2), marginBottom: responsiveHeight(1), marginLeft: responsiveWidth(66), paddingVertical: 4, backgroundColor: '#FFF' }}>
                <Text style={{ color: '#000', fontSize: calculateFontSizeByPlatform(2.00), ...lightFontStyles }}>{viewText}</Text>
            </TouchableBounce>
            
        );
    };

    render() {

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