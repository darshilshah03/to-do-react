import React from 'react';
import TodoItem from  './TodoItem';

class Todo extends React.Component{
    render() {
        return(
            this.props.todos.map((todo) => (
                <TodoItem key={todo.id} todo = {todo} deleteTodo = {this.props.deleteTodo} update = {this.props.update} />
            ))   
        )
    }
}

export default Todo;