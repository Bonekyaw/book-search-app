import React, { Component } from 'react';
import { 
    View,
    Text,
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
import AppConfig from '../config/App.Config';
import LottieAnimationComponent from '../components/LottieAnimationComponent';

const { primaryBackgroundColor, lightFontStyles, calculateFontSizeByPlatform } = AppStyles;
const { apiEndPoint, defaultImageUrl, 
        lottieAnimationSources: { networkAnimation, noResultAnimation }} = AppConfig;

class ResultScreen extends Component {

    constructor(props) {

        super(props);

        this.state = {

            isDataFetched: false,
            isListRefreshing: false,
            listData: [...new Array(10)],
            noResult: false,
            filterSearch: ''
        };
    };

    componentDidMount = async () => this._fetchListData();

    _fetchListData = async () => {

        let { searchQuery, internetConnectivity } = this.props.navigation.state.params;

        if(!internetConnectivity) return;

        let { items: BookData, totalItems } = await fetchDataHandler(`${apiEndPoint}?maxResults=40&q=${searchQuery}`);
        
        if(!totalItems) {
            
            this.setState({ noResult: true });

            return;
        }

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

        let { isDataFetched, isListRefreshing, listData, filterSearch, noResult } = this.state;
        let { internetConnectivity } = this.props.navigation.state.params;

        let filteredListData = isDataFetched ? [...listData].filter(book => {

            let { title } = book;

            if (filterSearch === '') return book;
            else if (title.toLowerCase().includes(filterSearch.toLowerCase())) return book;

        }) : listData;

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
                                value={filterSearch}
                                onChangeText={this._handleSearch}
                                cancelButtonTitle={'cancel'}
                                clearIcon={{ name: 'cancel', color: '#FFF', style: { fontSize: 20, marginTop: Platform.OS === 'ios' ? responsiveHeight(0.95) : responsiveHeight(1.30) } }}
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
                                    height: Platform.OS === 'ios' ? responsiveHeight(6.5) : responsiveHeight(6.5)
                                }}
                                placeholder={'Search...'} />
                        </View>
                    }

                    renderContent={

                        <View style={{ backgroundColor: primaryBackgroundColor, paddingVertical: 3, alignItems: 'center' }}>


                            
                            {
                                noResult ? (

                                    <React.Fragment>

                                        <LottieAnimationComponent 
                                                style={{ height: responsiveHeight(50), width: responsiveHeight(50), marginRight: responsiveWidth(10) }} 
                                                animationSource={noResultAnimation}
                                        />

                                        <View style={{ alignItems: 'center', justifyContent: 'center', padding: 8, marginTop: responsiveHeight(2), width: '100%', backgroundColor: 'transparent' }}>

                                            <Text style={{ color: '#FFF', fontSize: calculateFontSizeByPlatform(5.60), ...lightFontStyles }}>No Results Found</Text>

                                        </View>

                                    </React.Fragment>
                                ) : (
                                    <React.Fragment>


                                            {
                                                internetConnectivity ? (

                                                    <React.Fragment>

                                                        {
                                                            isDataFetched ? (

                                                                <React.Fragment>

                                                                    {

                                                                        filteredListData.length === 0 ? (

                                                                            <View style={{ alignItems: 'center', justifyContent: 'center', padding: 8, width: '100%', backgroundColor: 'transparent' }}>

                                                                                <Text style={{ color: '#FFF', fontSize: calculateFontSizeByPlatform(4.00), ...lightFontStyles }}>No Books Found</Text>

                                                                            </View>

                                                                        ) : (

                                                                            <React.Fragment>
                                                                                {

                                                                                    filteredListData.map(bookDetails => {

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

                                                                        )
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

                                                    </React.Fragment>

                                                ) : (

                                                    <React.Fragment>

                                                        <LottieAnimationComponent animationSource={networkAnimation} />

                                                        <View style={{ alignItems: 'center', justifyContent: 'center', padding: 8, marginTop: responsiveHeight(4), width: '100%', backgroundColor: 'transparent' }}>

                                                            <Text style={{ color: '#FFF', fontSize: calculateFontSizeByPlatform(5.60), ...lightFontStyles }}>No Internet</Text>

                                                        </View>

                                                    </React.Fragment>
                                                )
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