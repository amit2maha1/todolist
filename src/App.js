import React, { Component } from 'react';
import {BrowserRouter as Router,Route} from 'react-router-dom';
import Todos from './components/Todos.js'
import './App.css';
import AddTodo from './components/AddTodo.js'
import Header from './components/Layout/Header';
import uuid from 'uuid';
import About from './components/pages/About.js'; 
import Login from './components/pages/Login.js';
import { Link } from 'react-router-dom';
import { EditorFormatListBulleted } from 'material-ui/svg-icons';



class App extends Component {
  

  state ={

    todos:[
        {
            id:uuid.v4(),
            title: 'wake up',
            completed: false,

        },
        
    ],

    delTodos:[ ],

    flag: true,
    test: false



}

  






//toggle complete
markComplete = (id) =>{

  this.setState(
        {todos: this.state.todos.map(todo =>{
            if(todo.id === id){
              todo.completed = !todo.completed;
            }

            return todo;
        }) });

        

      
}

delTodo = (id) =>{

    this.setState({todos:[...this.state.todos.filter(todo => todo.id !== id)] });
    var newArray = this.state.delTodos;    
    newArray.push(...this.state.todos.filter(todo => todo.id === id).map(todo =>{
      if(todo.id === id){
        todo.completed = !todo.completed;
      }
      return todo;
    }));   
    this.setState({delTodos:newArray})

   
    console.log(this.state.todos);
  
}

addTodo = (title) =>{


  const newTodo={

    id: uuid.v4(),
    title,
    completed: false
  }
  if(title.length>0){
    this.setState({todos: [...this.state.todos, newTodo]})
  }
  
}

changeHeader = (flag) =>{
  this.setState({flag:flag});
    console.log(flag, 'app');
  if(flag === false){
    this.setState({test:true})
  }

}


  render() { 

   
   
    return (
      
      <Router>
        <div className="App">
          <div className='container'>
          
            <Header flag={this.state.flag} />
            <Route exact path='/' render={props => (
              <React.Fragment>
                <AddTodo addTodo={this.addTodo} />
                
                <Todos
                  todo={this.state.todos}
                  markComplete={this.markComplete}
                  delTodo={this.delTodo}
                />

              </React.Fragment>
            )} />


            <Route path='/header' component={Header}/>
            <Route path='/about' component={About}/>
            <Route path='/login' render={(props) => (<Login  changeHeader={this.changeHeader} test={this.state.test} /> )}/>
  
          



          </div>

        </div>
      </Router>
    );
  }
}


export default App;
