import React from 'react';
import {
    AppRegistry,
    Text,
    View,
    Button,
Modal
} from 'react-native';
import { StackNavigator } from 'react-navigation';
import Settings from './settings'
import ChatScreen from './chat'




class HomeScreen extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            modalVisible: false,
        }

    }

    static navigationOptions = {
        title: 'Welcome',
    };
    
    setModalVisible = (visible) => {
        this.setState({modalVisible: visible});
    }

    render() {
        const { navigate } = this.props.navigation;
        return (
            <View>
                <Text>Hello, Chat App!</Text>
                <Modal
                    animationType={"fade"}
                    transparent={false}
                    visible={this.state.modalVisible}
                    onRequestClose={() => {alert("Modal has been closed.")}}>
                    <View>
                        <View>
                            <Settings {...this.props} setModalVisible={this.setModalVisible}/>
                            <Button title='Close'  onPress={() => {this.setModalVisible(false)}}/>
                        </View>
                    </View>
                </Modal>
                <Button title='open'  onPress={() => {this.setModalVisible(true)}} />

            </View>
        );
    }
}


const SimpleApp = StackNavigator({
    Home: { screen: HomeScreen },
    Chat: { screen: ChatScreen },
});

AppRegistry.registerComponent('testApp', () => SimpleApp);