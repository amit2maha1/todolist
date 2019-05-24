import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Compo.css'



export class TodoItem extends Component {

  getStyle = () => {

    return{
      background : '#f4f4f4',
      padding : '10px',
      borderBottom:  '1px #ccc dotted',
      textDecoration : this.props.todoPassedToTodoItem.completed ? 'line-through' : 'none'
    }

  }



  render() {

    const{ id,title } = this.props.todoPassedToTodoItem;
    return (
      <div style={this.getStyle()}>
        <p>
           <input type="checkbox" onChange={this.props.markComplete.bind(this, id)} />{' '}
           {title} 

            <button className = 'Pulsein' onClick={this.props.delTodo.bind(this,id)}
            style={btnStyle}>X</button>
        </p>
      </div>
    )
  }  
}

TodoItem.propTypes = {

  todoPassedToTodoItem: PropTypes.object.isRequired
}

const btnStyle = {
  background: '#ff0000',
  color: '#fff',
  border: 'none',
  padding: '5px 9px',
  borderRadius: '19%',
  cursor: 'pointer',
  float: 'right'
}
export default TodoItem
