let nextId = 0;
const raj = {
    test:[]
}
const todos =(state=raj.test,action)=>{
    switch(action.type){
        case 'ADD_TODO':
            console.log(state)
            return[
                ...state, {
                    id: nextId++,
                    text: action.text,
                    completed: false
                }
            
            ]
        case 'TOGGLE_TODO':
            return state.map(todo=>
                (todo.id === action.id )
                ? { ...todo, completed: !todo.completed }: todo)
        default:
            return state
    }
}

export default todos;