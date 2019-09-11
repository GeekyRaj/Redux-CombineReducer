import React, { Component } from 'react';
import {
    Text,
    StyleSheet,
    View,
    TouchableOpacity
} from 'react-native';
import { connect } from 'react-redux';

const TodoList= ({todos, toggleTodo})=>{
    console.log(this.props)
return(<Text>asd</Text>);
}

const mapStateToProps= state =>({
    todos: state.todo
})

const mapDispatchToProps= dispatch=>({
    toggleTodo : id => dispatch({ type:'TOGGLE_TODO',id})
})

export default connect(mapStateToProps, mapDispatchToProps)(TodoList)

//export default TodoList;

const style= StyleSheet.create({
    container : {
        flex:1,
        alignItems:'center',
        justifyContent: 'center',
    }
})
