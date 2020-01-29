import React from 'react'

import './todo.css';

import Input from '../componentes/input/index';
import Button from '../componentes/button';
import List from '../componentes/list/list';


export default class ToDo extends React.Component 
{
  
  state={
    todos:[],    
    value : ""
  }

  onChangeInput = (event)=>
  {
    this.setState({ value: event.target.value });
  }

  onClick = ()=>
  {
    let todos = this.state.todos;
    todos.push(this.state.value);
    this.setState({todos: todos, value:""});
  }

  render()
  {
    let todos = this.state.todos;
    let value = this.state.value;

    return (
      <div>
        <div className="top">
          <Input
            placeholder="todo"
            getValue={this.onChangeInput}
            value=""
          />
          <Button 
            text="add todo"
            onClick={this.onClick}
          />        
        </div>
        <div className="todo_container">
          <List array={todos}/>
        </div>
      </div>
    )
  }
}
