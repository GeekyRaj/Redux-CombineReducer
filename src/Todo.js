import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet,
    TextInput,
    TouchableOpacity,
    SafeAreaView
} from "react-native";
import { Ionicons } from '@expo/vector-icons'
import { connect } from 'react-redux'
import VisibleTodo from './Containers/VisibleTodo'
import TodoList from './Components/TodoList'
class AddTodo extends Component {

    state= {
        text : ' '
    }

    AddToDo=(text)=>{
        this.props.dispatch({type: 'ADD_TODO',text})
        this.setState({text: ' '});
        console.log(text)
    }


    render() {
        return (
            <SafeAreaView>
            <View style={{ flexDirection: 'row', marginHorizontal: 20 }}>
                <TextInput
                    onChangeText ={(text)=>this.setState({text})}
                    value={this.state.text}
                    placeholder="Eg. Create New Video"
                    style={{ borderWidth: 1, borderColor: '#f2f2e1', backgroundColor: '#eaeaea', height: 50, flex: 1, padding: 5 }}
                />
                <TouchableOpacity onPress={() => this.AddToDo(this.state.text)}>
                    <View style={{ height: 50, backgroundColor: '#eaeaea', alignItems: 'center', justifyContent: 'center' }}>
                        <Ionicons name="md-add" size={30} style={{ color: '#de9595', padding: 10 }} />
                    </View>
                </TouchableOpacity>
                <View>
                    {/* <VisibleTodo/> */}
                    <TodoList/>
                </View>
            </View>
            </SafeAreaView>
        );
    }
}

export default connect()(AddTodo);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});