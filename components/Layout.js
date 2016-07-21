import React, { PropTypes } from 'react';
import Radium from 'radium';

import FilterLink from './FilterLink';

const LayoutRaw = React.createClass({
   propTypes: {
      todos: PropTypes.array.isRequired,
      dispatch: PropTypes.func.isRequired,
      visibilityFilter: PropTypes.string.isRequired
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
   
   renderTodo(todo) {
      if (this.props.visibilityFilter === 'SHOW_ACTIVE') {
         if (todo.completed) {
            return '';
         }
      } else if (this.props.visibilityFilter === 'SHOW_COMPLETED') {
         if (!todo.completed) {
            return '';
         }
      }

      return (
         <li key={todo.id}
             style={styles[todo.completed && 'completed']}
             onClick={this.toggleTodo(todo.id)}>
            {todo.text}
         </li>
      );
   },
   
   render() {
      const todoList = this.props.todos.map(this.renderTodo);
      const currentFilter = this.props.visibilityFilter;

      return (
         <div>
            <input ref="todoText" />
            <button onClick={this.addTodo}>Add Todo</button>
            <ul>
               {todoList}
            </ul>
            <p>
               Show: {' '}
               <FilterLink filter="SHOW_ALL" onClick={this.changeVisibilityFilter} currentFilter={currentFilter}>
                  All
               </FilterLink> | {' '}

               <FilterLink filter="SHOW_ACTIVE" onClick={this.changeVisibilityFilter} currentFilter={currentFilter}>
                  Not completed
               </FilterLink> | {' '}

               <FilterLink filter="SHOW_COMPLETED" onClick={this.changeVisibilityFilter} currentFilter={currentFilter}>
                  Completed
               </FilterLink>
            </p>
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
