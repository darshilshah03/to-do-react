import React from 'react';
import './App.css';
import Todo from './components/Todo'
import AddTodo from './components/AddTodo';
import ReactLoading from 'react-loading';

class App extends React.Component {

  state  = {
    todos : [],
    loading : true
  }

  componentDidMount() {

    fetch('https://jsonplaceholder.typicode.com/todos')
    .then(res => res.json())
    .then(data => {
      this.setState({todos : [...data],loading:false})
    });
  }

  deleteTodo = (id) => {
      const newTodo = this.state.todos.filter((todo) => todo.id!==id);
      
      this.setState({
        todos : [...newTodo]
      })
  }

  update = (id) => {
    const newTodo = this.state.todos.filter((todo) => {
      if(todo.id===id)
      {
        todo.completed = !todo.completed;
      }
      return todo;
    });
    this.setState({
      todos : newTodo
    })
  }

  addTodo = (title) =>  {
    console.log("giii0");
    this.setState({
      loading : true
    })
    fetch('https://jsonplaceholder.typicode.com/todos',{
      method : "POST",
      body : JSON.stringify(
        {
          title:title,
          completed : false
        }
      ),
      headers :  {
        "Content-type" : "application/json"
      }
    }).then(res => res.json())
    .then(data => {
      console.log(data);
      this.setState({
      
        todos :[...this.state.todos,data],
        loading : false
      });
    } );
    
  }

  render() {
    return(
      <div className="App">
        {this.state.loading ?  
       (<div> <ReactLoading style={{justifyContent:'center',textAlign : 'center',}} type={"bars"} color={"grey"} /> </div>):
       (
         <div> 
       <AddTodo addTodo = {this.addTodo}/>
        <Todo todos = {this.state.todos} deleteTodo = {this.deleteTodo} update={this.update} /> 
        </div>)
        }
      </div>
    )
  }
}

export default App;
