import React, { PropTypes } from 'react';
import Radium from 'radium';

const LayoutRaw = React.createClass({
   propTypes: {
      todos: PropTypes.array.isRequired,
      dispatch: PropTypes.func.isRequired
   },

   getInitialState() {
      return {
         nextTodoId: 0
      };
   },
   
   addTodo() {
      this.props.dispatch({
         type: 'ADD_TODO',
         id: this.state.nextTodoId,
         text: this.refs.todoText.value
      });
      this.setState({ nextTodoId: this.state.nextTodoId + 1 });
   },
   
   toggleTodo(id) {
      return () =>
         this.props.dispatch({
            type: 'TOGGLE_TODO',
            id
         });
   },
                                 
   render() {
      const todoList = this.props.todos.map(
         todo => (
            <li key={todo.id}
                style={styles[todo.completed && 'completed']}
                onClick={this.toggleTodo(todo.id)}>
               {todo.text}
            </li>
         )
      );
      return (
         <div>
            <input ref="todoText" />
            <button onClick={this.addTodo}>Add Todo</button>
            <ul>
               {todoList}
            </ul>
         </div>
      );
   }
});

const styles = {
   completed: {
      textDecoration: 'line-through'
   }
};

const Layout = Radium(LayoutRaw);
export default Layout;
