const AppConfig = {

    apiEndPoint: 'https://www.googleapis.com/books/v1/volumes',
    defaultImageUrl: 'https://user-images.githubusercontent.com/24848110/33519396-7e56363c-d79d-11e7-969b-09782f5ccbab.png',
    lottieAnimationSources: {

        bookAnimation: require('../../assets/animations/loading_book.json'),
        networkAnimation: require('../../assets/animations/network_error.json'),
        noResultAnimation: require('../../assets/animations/not_found.json')
    }
};

export default AppConfig;