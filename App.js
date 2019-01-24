import React from 'react';
import { View } from 'react-native';
import { Font } from 'expo';
import AppStyles from './src/styles/AppStyles';
import AppContainer from './src/navigation/App.Navigation';

const { primaryBackgroundColor } = AppStyles;
export default class App extends React.Component {

  constructor(props) {

    super(props);
    
    this.state = {

      isFontLoaded: false
    };
  };

  componentDidMount = async () => {

    await Font.loadAsync({

      'Airbnb-Cereal': require('./assets/fonts/AirbnbCereal-Light.ttf')
    });

    this.setState({ ...this.state, isFontLoaded: true });

  };
  render() {

    return (
      <React.Fragment>
        {
          this.state.isFontLoaded ? (
            <AppContainer />
          ) :
            <View style={{ flex: 1, backgroundColor: primaryBackgroundColor }}></View>
        }
      </React.Fragment>
    );
  };
};
