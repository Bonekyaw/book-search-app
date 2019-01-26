const AppConfig = {

    apiEndPoint: 'https://www.googleapis.com/books/v1/volumes',
    defaultImageUrl: 'https://i.ibb.co/YLC0nQQ/not-found.png',
    lottieAnimationSources: {

        bookAnimation: require('../../assets/animations/loading_book.json'),
        networkAnimation: require('../../assets/animations/network_error.json'),
        noResultAnimation: require('../../assets/animations/not_found.json')
    }
};

export default AppConfig;