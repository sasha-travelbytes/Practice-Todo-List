import React, { PropTypes } from 'react';
import Radium from 'radium';

import FilterList from './FilterList';

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
      this.props.dispatch({
         type: 'TOGGLE_TODO',
         id
      });
   },
   
   todoTest(todo) {
      switch(this.props.visibilityFilter) {
      case 'SHOW_ACTIVE':
         return !todo.completed;
      case 'SHOW_COMPLETED':
         return todo.completed;
      default:
         return true;
      }
   },
   
   updateFilter(filter) {
      this.props.dispatch({
         type: 'SET_VISIBILITY_FILTER',
         filter
      });
   },

   render() {
      const filters = [
         { name: 'SHOW_ALL',       text: 'All' },
         { name: 'SHOW_ACTIVE',    text: 'Not Completed' },
         { name: 'SHOW_COMPLETED', text: 'Completed' },
      ];

      return (
         <div>
            <input ref="todoText" />
            <button onClick={this.addTodo}>Add Todo</button>
            <FilterList
               filters={filters}
               currentFilter={this.props.visibilityFilter}
               filterTest={this.todoTest}
               onFilterClick={this.updateFilter}
               items={this.props.todos}
               onItemClick={this.toggleTodo} />
         </div>
      );
   }
});

const Layout = Radium(LayoutRaw);
export default Layout;
