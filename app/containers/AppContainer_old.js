import React, {Component} from 'react'
import  {connect} from 'react-redux' //takes in state and actions and will wrap component
import {bindActionCreators} from 'redux'
import {ActionCreators} from '../actions'


import {View,
        Text,
        TouchableHighlight}
from 'react-native'

class AppContainer2 extends Component {

    //No longer need this
    
    // constructor(props){
    //     super(props);
    //     //this.state = {recipeCount: 0}; because it is coming form global state now
    //
    // }

    // incrementJobCount () {
    //     this.setState({recipeCount: this.state.recipeCount + 1 })
    // }

    addRecipe(){
        this.props.addRecipe(); //this prop is available because we pull in the action creators in the mapDispatchToProps
    }
    render(){
        //go to the server an get {this.state.recipeCount} -- this goes away and replaced with props

        return (
            <View>
                <Text style={{marginTop:20}}>
                    I am app container

                    go to the server an get {this.props.recipeCount}

                </Text>
                <TouchableHighlight onPress ={() => {this.addRecipe()}}>
                    <Text>Add to Count</Text>
                </TouchableHighlight>
            </View>
        );
    }
}

//used to dispatch actions to the app
//smart components because they are connected to the actions and store of the app
function mapDispatchToProps(dispatch){
    return bindActionCreators(ActionCreators, dispatch)
}


//first arg is function to malipulate the store (empty in this case), second arg is connect to mapDispatchToProps
//give a way to centrally dispatch all actions fpr our app
//Can connect the action and state
//state is the global state of the app
export default connect((state) => {
 return{
        recipeCount: state.recipeCount
    }
}, mapDispatchToProps)(AppContainer2);


///only need to wire all this up for actions and container components