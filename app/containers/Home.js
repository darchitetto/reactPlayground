import React, {Component} from 'react';
import  {connect} from 'react-redux' //takes in state and actions and will wrap component
import {
    ScrollView,
    View,
    TextInput,
    Text,
    Image,
    TouchableHighlight,
    StyleSheet,
}
    from 'react-native';


class Home extends Component{
    searchPressed(){
        this.props.fetchRecipes('choolate')
    }

    render(){
        return (
        <View style={{marginTop:20}}>
            <View>
                <TouchableHighlight onPress={ () => this.searchPressed() }>
                    <Text>Fetch recipes</Text>
                </TouchableHighlight>
                <Text style={{marginTop:20}}>
                    I am app container

                    go to the server an get {this.props.recipeCount}

                </Text>
            </View>
            <ScrollView>

            </ScrollView>
        </View>)
    }

}

function mapStateToProps (state){
    return{
        searchedRecipes: state.searchedRecipes
    }
}

export default connect(mapStateToProps)(Home);