import { combineReducers } from 'redux'
import Todo from './Todos'
import VisibilityFilter from './VisibilityFilter'
import CounterReducer from './CounterReducer'
export default combineReducers({
    Todo,
    VisibilityFilter,
    CounterReducer
})