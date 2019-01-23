import React, { Component } from 'react';
import { 
    View,
    Text,
    StyleSheet
} from 'react-native';
import  Placeholder from 'rn-placeholder';

class SearchScreen extends Component {

    state = {isReady: false};

    componentDidMount = () => {

        setTimeout(() => {

            this.setState({ isReady: true })
        }, 5000, this);
    }
    render() {

        return (
            <View style={styles.container}>
                {/* <Text>SearchScreen</Text> */}
               

               <View style={{ flex: 1, backgroundColor: '#303030', paddingTop: 80}}>

                    {/* <Placeholder.ImageContent
                            size={60}
                            animate='fade'
                            lineNumber={4}
                            lineSpacing={5}
                            lastLineWidth='30%'
                            onReady={false}
                        >
                            <Text>Placeholder has finished :D</Text>
                    </Placeholder.ImageContent> */}
                    {/* <Placeholder.Media
                        size={70}
                        color="#303030"
                        hasRadius
                        onReady={false}
                        animate={'fade'}
                    /> */}
                    <Placeholder.Box
                        height={200}
                        width='80%'
                        radius={5}
                        color='#444'
                        onReady={false}
                        animate={'fade'}
                    />
               </View>
                

                {/* <Placeholder.Line
                    color='#eee'
                    animate='fade'
                    width='77%'
                    hasRadius
                    onReady={false}
                /> */}
                {/* <Placeholder.Paragraph
                   animate={'shine'}
                    lineNumber={3}
                    textSize={16}
                    lineSpacing={5}
                    color='#eee'
                    width='90%'
                    lastLineWidth='70%'
                    firstLineWidth='50%'
                    onReady={false}
                >
                    <Text>Placeholder finished</Text>
                </Placeholder.Paragraph> */}
            </View>
        );
    };
};

const styles = StyleSheet.create({

    container: {

        flex: 1,
        // alignItems: 'center',
        // justifyContent: 'center'
    }
});

export default SearchScreen;