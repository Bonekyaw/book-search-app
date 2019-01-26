import React, { Component } from 'react';
import { 
    View,
    Platform,
    RefreshControl,
    StyleSheet
} from 'react-native';
import { Constants } from 'expo';
import AppStyles from '../styles/AppStyles';
import { SearchBar } from 'react-native-elements';
import Collapsible from 'react-native-collapsible-header';
import { responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions';
import BookCardComponent from '../components/BookCardComponent';
import BookCardPlaceHolderComponent from '../components/BookCardPlaceHolderComponent';
import { fetchDataHandler, getUniqueArray } from '../utils/Utils';
import Config from '../config/App.Config';

const { primaryThemeColor, primaryBackgroundColor, lightFontStyles, calculateFontSizeByPlatform } = AppStyles;
const { apiEndPoint, defaultImageUrl } = Config;

class ResultScreen extends Component {

    constructor(props) {

        super(props);

        this.state = {

            isDataFetched: false,
            isListRefreshing: false,
            listData: [...new Array(10)],
            filterSearch: ''
        };
    };

    componentDidMount = async () => this._fetchListData();

    _fetchListData = async () => {

        let { searchQuery } = this.props.navigation.state.params;

        let { items: BookData } = await fetchDataHandler(`${apiEndPoint}?maxResults=40&q=${searchQuery}`);

        let listData = getUniqueArray(BookData.map(book => {

            let { volumeInfo: { title, authors, publisher, publishedDate, description, imageLinks }, id: bookId } = book;

            return {

                bookId,
                thumbnail: imageLinks ? imageLinks.thumbnail : defaultImageUrl,
                title,
                authors: authors ? authors.toString().replace(/,/g, ', ') : '-',
                publisher: publisher ? publisher.toString().replace(/"/g, '') : '-',
                publishedDate: publishedDate ? publishedDate.substring(0, 4) : '-',
                description: description ? description : 'No Description'
            };

        }), 'title');

        setTimeout(() => { this.setState({ isDataFetched: true, isListRefreshing: false, listData }); }, 2000, this);
    };

    _onListRefresh = () => {

        this.setState({ isDataFetched: false, isListRefreshing: true, listData: [...new Array(10)] });
        this._fetchListData();
    };

    _handleSearch = (filterText) => this.setState({ filterSearch: filterText });

    _navigateToBook = (bookDetails) => {

        let { navigation } = this.props;

        const navigationParams = { bookDetails };

        navigation.navigate('BookDetailScreen', navigationParams);
    };

    render() {

        let { isDataFetched, isListRefreshing, listData } = this.state;

        return (
            <View style={styles.container}>
                <Collapsible
                    backgroundColor={primaryBackgroundColor}
                    min={Constants.statusBarHeight}
                    max={Platform.OS === 'ios' ? responsiveHeight(10) : responsiveHeight(12)}
                    refreshControl={
                        <RefreshControl
                            tintColor={'#FFF'}
                            refreshing={isListRefreshing}
                            onRefresh={this._onListRefresh}
                        />
                    }
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

                        <View style={{ backgroundColor: primaryBackgroundColor, paddingVertical: 3, alignItems: 'center' }}>
                            {
                                isDataFetched ? (

                                    <React.Fragment>

                                        {
                                            listData.map(bookDetails => {

                                              let { thumbnail, title, authors, publisher, bookId } = bookDetails;

                                              return <BookCardComponent 
                                                        key={bookId}
                                                        title={title}
                                                        authors={authors}
                                                        publisher={publisher}
                                                        thumbnail={thumbnail}
                                                        onPress={() => this._navigateToBook(bookDetails)}
                                                     />;
                                            })
                                        }

                                    </React.Fragment>
                                ) : (
                                    <React.Fragment>
                                        {
                                            listData.map((_, index) => {

                                                return <BookCardPlaceHolderComponent key={index} />;
                                            })
                                        }
                                    </React.Fragment>
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
        backgroundColor: primaryBackgroundColor
    }
});

export default ResultScreen;