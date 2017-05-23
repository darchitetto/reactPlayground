import React, {Component} from 'react'
import  {connect} from 'react-redux' //takes in state and actions and will wrap component
import {bindActionCreators} from 'redux'
import {ActionCreators} from '../actions'
import Home from './Home'



//have all actions available, but container to decribe what portions of state we care about and want to listen for
class AppContainer extends Component {
    //go to the server an get {this.state.recipeCount} -- this goes away and replaced with props
    //any props from app container get passed into home container ***
    render(){
        return <Home {...this.props} />
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
}, mapDispatchToProps)(AppContainer);


///only need to wire all this up for actions and container components