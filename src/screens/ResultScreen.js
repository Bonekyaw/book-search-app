import React, { Component } from 'react';
import { 
    View,
    Text,
    StyleSheet
} from 'react-native';

class ResultScreen extends Component {

    render() {
        
        let { searchQuery } = this.props.navigation.state.params;

        return (
            <View style={styles.container}>
                <Text>ResultScreen {searchQuery}</Text>
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

export default ResultScreen;