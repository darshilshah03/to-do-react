import React from 'react';

class TodoItem extends React.Component{

    

    render() {
        return(
            <div >
                
                <h4 style={style(this.props.todo.completed)}>
                    <input onChange = {this.props.update.bind(this,this.props.todo.id)} style={checkStyle}type="checkbox"></input>            
                    {this.props.todo.title} <button style={btnStyle} onClick = {this.props.deleteTodo.bind(this,this.props.todo.id)}>X</button>
                </h4>
                
                
            </div>
        )
    }
}

const style = (check) =>  {
    return (
        {
            fontSize : '20',
            textDecoration : check ? 'line-through' : 'none'
        }
    );
}

const btnStyle = {
    color : 'red',
    backgroundColor : 'black',
    float : 'right'
}

const checkStyle = {
    marginRight : '20px'
}

export default TodoItem;